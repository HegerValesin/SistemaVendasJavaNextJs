'use client'
import { Button } from "Components/common/button/Button"
import CardPage from "Components/common/cardPage/CardPage"
import {TextInput } from "Components/common/input/TextInput"
import { Alert } from "Components/message/Alerts"
import { Produto } from "app/api/Models/Produtos/Produtos"
import { useProdutoService } from "app/api/Services/Produtos.services"
import { converterEmBigDecimal, formatReal } from "app/api/util/money"
import { useEffect, useState } from "react"
import * as yup from 'yup'

const msgCampoObrigatorio = "Campo Obrigatório"
const validationSchema = yup.object().shape({
    sku: yup.string().trim().required(msgCampoObrigatorio).min(3, "Deve possuir pelo menos 3 caracteres"),
    preco: yup.number().required(msgCampoObrigatorio).moreThan(0, "Valor deve ser maior que 0,00 (Zero)"),
    nome: yup.string().trim().required(msgCampoObrigatorio).min(10, "Deve possuir pelo menos 10 caracteres"),
    descricao: yup.string().trim().required(msgCampoObrigatorio).min(10, "Deve possuir pelo menos 10 caracteres"),
})

interface FormErrors {
    sku?: string;
    nome?: string;
    preco?: string;
    descricao?: string;
}

interface ModalProdutoProps {
    isOpen: boolean;
    onClose: () => void;
    produto: Produto | null;
    isAddingProduct: boolean;
  }

export default function ModalProdutos({ isOpen, onClose, produto, isAddingProduct }: ModalProdutoProps) {

    const service = useProdutoService()
    const [ sku, setSku ] = useState<string>()
    const [ nome, setNome ] = useState<string>()
    const [ preco, setPreco ] = useState('')
    const [ id, setId ]= useState<number>()
    const [ cadastro, setCadastro ]= useState<string | undefined>('')
    const [ descricao, setDescricao ]= useState<string>()
    const [ mensagens, setMensages ] = useState<Array<Alert>>([])
    const [ errors, setErrors ] = useState<FormErrors>({})

    const submit = () => {
       
        const produtos: Produto = {
            id,
            sku,
            preco: converterEmBigDecimal(preco),
            nome,
            descricao
        }

        validationSchema.validate(produtos).then( obj => {
            setErrors({})
            if(!produtos.id){
                service.salvar(produtos)
                .then(produtoResposta => {
                 setId(produtoResposta.id)
                 setCadastro(produtoResposta.cadastro)
                 setMensages([{type: "success", texto: "Produtos salvo com sucesso!"}])
                })
                isAddingProduct = false
            }else {
                service
                .atualizar(produtos)
                .then(response => setMensages([{type: "success", texto: "Produtos atualizado com Sucesso!"}]) )
            }}).catch(err => {
                    const field = err.path
                    const texto = err.message
                    setErrors({
                        [field]: texto
                    })
                })
    }

    useEffect(() => {
        if (produto){
        service.carregarProduto(produto?.id).then(produtoEncontrado => {
            setId(produtoEncontrado.id)
            setCadastro(produtoEncontrado.cadastro || "")
            setSku(produtoEncontrado.sku)
            setPreco(formatReal(`${produtoEncontrado.preco}`))
            setNome(produtoEncontrado.nome)
            setDescricao(produtoEncontrado.descricao)
        })
    }
    },[produto])

    const modalStyles: any = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        display: isOpen ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000, 
      };
   
    return(
        <div style={modalStyles} >
            <div className="modals w-3/4 p-10 relative z-10">
                <CardPage titulo="Cadstro de Produtos" mensagens={mensagens}>
                    {id && 
                        <div className="relative w-full grid grid-cols-2 gap-4 items-stretch mb-3">
                            <TextInput.Root columnClasses="w=1/2">
                                <TextInput.Label idFor="inputcodigo">Código: *</TextInput.Label>
                                <TextInput.Input type="text" id="inputcodigo" value={id} disabled/>
                            </TextInput.Root>
                            <TextInput.Root columnClasses="w=1/2">
                                <TextInput.Label idFor="inputpcadasro">Data Cadastro:</TextInput.Label>
                                <TextInput.Input type="text" id="inputpcadasro" value={cadastro} onChange={setCadastro} disabled/>
                            </TextInput.Root>
                        </div>
                    }
                    <div className="relative  w-full grid grid-cols-2 gap-4 items-stretch mb-3">
                        <TextInput.Root columnClasses="w=1/2">
                            <TextInput.Label idFor="inputsku">SKU: *</TextInput.Label>
                            <TextInput.Input type="text" id="inputsku" onChange={setSku} value={sku} placeholder="Digite o SKU do produto"
                            error={errors.sku}
                            />
                        </TextInput.Root>
                        <TextInput.Root columnClasses="w=1/2">
                            <TextInput.Label idFor="inputpreco">Preço: *</TextInput.Label>
                            <TextInput.Input type="text" id="inputpreco" onChange={setPreco} currency maxLength={16} value={preco} placeholder="Digite o preço do produto" error={errors.preco}/>
                        </TextInput.Root>
                    </div>
                    <TextInput.Root columnClasses="relative flex-wrap items-stretch mb-3">
                        <TextInput.Label idFor="inputNome">Nome: *</TextInput.Label>
                        <TextInput.Input type="text" id="inputNome" onChange={setNome} value={nome} placeholder="Digite o nome do produto" error={errors.nome}/>
                    </TextInput.Root>
                    <TextInput.Root>
                        <TextInput.Label idFor="descricao">Descrição: *</TextInput.Label>    
                        <TextInput.Area  id="descricao" onChange={event => setDescricao(event.target.value)} value={descricao} placeholder="Digite a descrição detalhada do produto" columnClasses="w-full" />
                        {errors.descricao && <p className="text-red-500 font-bold">{errors.descricao}</p>}
                    </TextInput.Root>
                    <div className="flex justify-end mb-2">
                        <Button.Salvar onClick={submit}>
                            {id ? "Atualizar" : "Salvar"}
                        </Button.Salvar>
                        <Button.Cancelar onClick={e => onClose()}>
                        {id ? "Voltar" : "Cancelar"}
                        </Button.Cancelar> 
                    </div>
                </CardPage>
            </div>
        </div>
    )
}
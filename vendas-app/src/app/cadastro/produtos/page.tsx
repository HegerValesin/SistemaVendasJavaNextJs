'use client'
import CardPage from "Components/common/cardPage/CardPage";
import { Produto } from "app/api/Models/Produtos/Produtos";
import { httpCliente } from "app/api/http/api";
import { useEffect, useState } from "react";
import  useSWR  from 'swr'
import TabelaProdutos from "./ListaProdutos";
import ModalProdutos from "./novo/ModalProdutos";
import { useProdutoService } from "app/api/Services/Produtos.services";
import { Alert } from "Components/message/Alerts";
import { AxiosResponse } from "axios";

export default function Produtos() {

    const service = useProdutoService();
    const { data: result, error } = useSWR<AxiosResponse<Produto[]>>
                                    ('/api/produtos', (url: string) => httpCliente.get(url));
    const [ list, setList] = useState<Produto[]>([])
    const [mensages, setMensages] = useState<Array<Alert>>([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [isAddingProduct, setIsAddingProduct] = useState(false);


    useEffect(() => {
       setList(result?.data || [])
    }, [result])

    const atualizar = () => {
        httpCliente.get('/api/produtos').then(response => {
            setList(response.data)
        })
    }

    const handleEditClick = (produto: any) => {
        setEditingProduct(produto);
        setIsModalOpen(true);
      };
    
      const handleAddClick = () => {
        setEditingProduct(null);
        setIsModalOpen(true);
        setIsAddingProduct(true);
      };
    
      const handleModalClose = () => {
        setEditingProduct(null);
        setIsModalOpen(false);
        setIsAddingProduct(false);
        atualizar()
      };
      

    const deletar = (produto: Produto) => {
        service.deletar(produto.id).then(response =>{
            setMensages([
                {type: "success", texto: "Produtos deletado com Sucesso!"}
            ])
            const listAtualizada: Produto[] = list.filter(p => p.id != produto.id)
            setList(listAtualizada)
        })
    }

    return (
    <div>
        <CardPage titulo="Produtos" mensagens={mensages}>
            <TabelaProdutos onDelete={deletar} onEdit={handleEditClick} onAdd={handleAddClick} produtos={list} />
        </CardPage>
        {isModalOpen && (
            <ModalProdutos
            isOpen={isModalOpen}
            onClose={handleModalClose}
            produto={editingProduct}
            isAddingProduct={isAddingProduct}
            />
        )}
    </div>
    )
}
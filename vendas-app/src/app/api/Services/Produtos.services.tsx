import { httpCliente } from "../http/api";
import { Produto } from "../Models/Produtos/Produtos";
import { AxiosResponse } from "axios";

const responseURL = '/api/produtos'

export const useProdutoService = () => {

    const salvar =async (produto: Produto) : Promise<Produto> => {
        const response: AxiosResponse<Produto> = await httpCliente.post<Produto>(responseURL, produto)
        return response.data
    }

    const atualizar = async (produto: Produto) : Promise<void> => {
        const url: string = `${responseURL}/${produto.id}`
        await httpCliente.put<Produto>(url, produto);
    }

    const carregarProduto = async (id: any) : Promise<Produto> =>{
        const url: string = `${responseURL}/${id}`
        const response: AxiosResponse<Produto> = await httpCliente.get(url);
        return response.data
    } 

    const deletar = async (id: any) : Promise<void> => {
        const url: string = `${responseURL}/${id}`
        await httpCliente.delete(url);
    }

    return { 
        salvar,
        atualizar,
        carregarProduto,
        deletar
     }
}
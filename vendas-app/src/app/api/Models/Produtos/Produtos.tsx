export interface Produto {
    id?: number;
    nome?: string
    descricao?: string
    preco?: number
    sku?: string
    cadastro?: string
}

export interface SessionDate {
    use: { [key: string]: any },
    roles: { [key: string]: any }
}
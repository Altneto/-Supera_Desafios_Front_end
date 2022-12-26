export type Transferencia = {
    id: number
    dataTransferencia: string
    valor: number
    tipo: string
    nomeOperadorTransacao: string
}

export type Content = {
    content: Transferencia[]
    empty: boolean
    first: boolean
    last: boolean
    number: number
    numberOfElements: number
    size: number
    totalElements: number
    totalPages: number
}

export type Transferencias = {
    transferencias: Content
    saldoTotal: number
    saldoPeriodo: number
}

export type Filter = {
    dataInicial: string,
    dataFinal: string,
    nomeOperador: string
}
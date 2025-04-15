import { ref } from 'vue'

export interface Livro {
    titulo: string
    sinopse: string
    preco: number
    autor: string
    imagem: string
}

export const carrinho = ref<Livro[]>([])
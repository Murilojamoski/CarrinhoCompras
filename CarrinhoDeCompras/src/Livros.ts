import{ref} from "vue"

export interface Livro {
    titulo: string
    sinopse: string
    preco: number
    autor: string
    imagem: string
}

export const Livros = ref<Livro[]>([
    {
      titulo: "Dom Casmurro",
      sinopse: "Um dos romances mais famosos de Machado de Assis, narrado por Bentinho, que relata sua vida e sua desconfiança da traição de Capitu.",
      preco: 39.90,
      autor: "Machado de Assis",
      imagem: "https://images.tcdn.com.br/img/img_prod/1271663/dom_casmurro_edicao_de_luxo_almofadada_89_1_038fb70c564eb50f71ea49f6027e827a.jpg"
    },
    {
      titulo: "A Hora da Estrela",
      sinopse: "A história da nordestina Macabéa, contada por um narrador que também é personagem, refletindo sobre identidade e existência.",
      preco: 29.90,
      autor: "Clarice Lispector",
      imagem: "https://m.media-amazon.com/images/I/81gTwYAhU7L._SY425_.jpg"
    },
    {
      titulo: "O Pequeno Príncipe",
      sinopse: "Um clássico da literatura mundial que mistura fantasia e filosofia, acompanhando um menino vindo de outro planeta.",
      preco: 24.90,
      autor: "Antoine de Saint-Exupéry",
      imagem: "https://m.media-amazon.com/images/I/81SVIwe5L9L._UF894,1000_QL80_.jpg"
    },
    {
      titulo: "1984",
      sinopse: "Romance distópico que critica regimes totalitários, narrando a vida de Winston Smith sob a vigilância do Grande Irmão.",
      preco: 44.90,
      autor: "George Orwell",
      imagem: "https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788535914849/1984.jpg"
    },
    {
      titulo: "Memórias Póstumas de Brás Cubas",
      sinopse: "Narrado por um defunto, Brás Cubas reflete sobre sua vida e a sociedade brasileira do século XIX com ironia e crítica social.",
      preco: 22.50,
      autor: "Machado de Assis",
      imagem: "https://m.media-amazon.com/images/I/81dQwQlmAXL.jpg"
    },
    {
      titulo: "O Cortiço",
      sinopse: "Uma análise naturalista da vida em um cortiço no Rio de Janeiro, explorando as relações humanas e as influências do ambiente.",
      preco: 18.90,
      autor: "Aluísio Azevedo",
      imagem: "https://cdn.kobo.com/book-images/841c0a68-000b-4f9e-85d4-860c4eab03af/1200/1200/False/o-cortico-33.jpg"
    },
    {
      titulo: "Grande Sertão: Veredas",
      sinopse: "Riobaldo narra suas aventuras pelo sertão mineiro, explorando temas como amor, guerra e o pacto com o diabo.",
      preco: 46.90,
      autor: "João Guimarães Rosa",
      imagem: "https://m.media-amazon.com/images/I/81NtboFZziL.jpg"
    },
    {
      titulo: "Vidas Secas",
      sinopse: "A trajetória de uma família de retirantes em busca de sobrevivência no sertão nordestino, marcada pela seca e pela miséria.",
      preco: 27.50,
      autor: "Graciliano Ramos",
      imagem: "https://m.media-amazon.com/images/I/71NYL2AbBIL._AC_UF1000,1000_QL80_.jpg"
    }

  ])
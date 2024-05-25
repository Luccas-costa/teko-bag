export const Cartbags = [
  {
    id: 1,
    produto: "bag verde",
    descricao: "teste teste",
    preco: "89,99",
    image: "/skeleton.png",
    quantidade: 1,
  },
  {
    id: 2,
    produto: "bag Rosa Choque",
    descricao: "gasda teste",
    preco: "43,99",
    image: "/skeleton.png",
    quantidade: 1,
  },
  {
    id: 3,
    produto: "bag  preta",
    descricao: "teste teste",
    preco: "89,99",
    image: "/skeleton.png",
    quantidade: 1,
  },
  {
    id: 4,
    produto: "bag Rosa Choque2",
    descricao: "gasda teste",
    preco: "43,99",
    image: "/skeleton.png",
    quantidade: 1,
  },
  {
    id: 5,
    produto: "bag  roxo",
    descricao: "teste teste",
    preco: "89,99",
    image: "/skeleton.png",
    quantidade: 1,
  },
  {
    id: 6,
    produto: "bag Rosa Choque3",
    descricao: "gasda teste",
    preco: "43,99",
    image: "/skeleton.png",
    quantidade: 1,
  },
  {
    id: 7,
    produto: "bag  lilas",
    descricao: "teste teste",
    preco: "89,99",
    image: "/skeleton.png",
    quantidade: 1,
  },
  {
    id: 8,
    produto: "bag Rosa Choque4",
    descricao: "gasda teste",
    preco: "43,99",
    image: "/skeleton.png",
    quantidade: 1,
  },
  {
    id: 9,
    produto: "bag Rosa green3",
    descricao: "gasda teste",
    preco: "65,99",
    image: "/skeleton.png",
    quantidade: 1,
  },
];

// allcart bags em cima

export const newCartbags: Bag[] = []; // armazenar os itens aqui

type Bag = {
  id: number;
  produto: string;
  descricao: string;
  preco: string;
  image: string;
  quantidade: number;
};

// Função para adicionar um item ao newCartbags
export const addToNewCartbags = (bag: Omit<Bag, "quantidade">) => {
  newCartbags.push({ ...bag, quantidade: 1 });
};

// Função para remover um item de newCartbags
export const removeFromNewCartbags = (id: number) => {
  const index = newCartbags.findIndex((bag) => bag.id === id);
  if (index !== -1) {
    newCartbags.splice(index, 1);
  }
};

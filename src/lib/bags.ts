export const Cartbags = [
  {
    id: 1,
    produto: "Bag turma do Mickey",
    descricao:
      "Estampa com o rosto dos quatro integrantes da turma do Mickey: Donald, Minnie, Mickey e Pateta",
    preco: "45,00",
    image: [
      "/bags/bag-mikey-3.jpg",
      "/bags/bag-mikey-2.jpg",
      "/bags/bag-mikey-1.jpg",
    ],
    quantidade: 1,
  },
  {
    id: 2,
    produto: "Bag do Sol com frase",
    descricao: "Estampa de sol com frase motivacional",
    preco: "45,00",
    image: ["/bags/bag-sol-1.jpg", "/bags/bag-sol-2.jpg"],
    quantidade: 1,
  },
  {
    id: 3,
    produto: "Bag do artista Jâo",
    descricao: "Estampa com coisas que refere-se ao artista Jão",
    preco: "45,00",
    image: ["/bags/bag-jao-1.jpg", "/bags/bag-jao-2.jpg"],
    quantidade: 1,
  },
  {
    id: 13,
    produto: "Bag de borboleta",
    descricao: "Estampa de borboleta metade flores",
    preco: "45,00",
    image: "/bags/bag-borboleta.jpg",
    quantidade: 1,
  },
  {
    id: 14,
    produto: "Bag dos Beatles",
    descricao: "Estampa dos Beatles",
    preco: "45,00",
    image: "/bags/bag-beatles.jpg",
    quantidade: 1,
  },
  {
    id: 15,
    produto: "Bag Borboleta Dualidade",
    descricao: "Estampa da Borboleta Dualidade",
    preco: "45,00",
    image: "/bags/bag-borboleta-pisicodelica.jpg",
    quantidade: 1,
  },
  {
    id: 16,
    produto: "Bag a Foto 'Medina'",
    descricao: "Estampa da Foto 'Medina'",
    preco: "45,00",
    image: "/bags/bag-medina.jpg",
    quantidade: 1,
  },
  {
    id: 17,
    produto: "Bag libras pelo mundo'",
    descricao: "Estampa da libras pelo mundo'",
    preco: "45,00",
    image: "/bags/bag-libras-mundo.jpg",
    quantidade: 1,
  },
];
export const CartbagsEstampas = [
  {
    id: 4,
    produto: "Estampa floral estilo 1",
    descricao: "Floral de rosas",
    preco: "45,00",
    image: "/bags/bag-estampa-flor-1.png",
    quantidade: 1,
  },
  {
    id: 5,
    produto: "Estampa floral estilo 2",
    descricao: "Mix floral",
    preco: "45,00",
    image: "/bags/bag-estampa-flor-2.jpg",
    quantidade: 1,
  },
  {
    id: 6,
    produto: "Estampa floral estilo 3",
    descricao: "Floral de tulipas vermelhas",
    preco: "45,00",
    image: "/bags/bag-estampa-flor-3.jpg",
    quantidade: 1,
  },
  {
    id: 7,
    produto: "Estampa floral estilo 4",
    descricao: "Floral de tulipas azuis",
    preco: "45,00",
    image: "/bags/bag-estampa-flor-4.jpg",
    quantidade: 1,
  },
  {
    id: 8,
    produto: "Estampa floral estilo 5",
    descricao: "Xadrez de flor",
    preco: "45,00",
    image: "/bags/bag-estampa-flor-5.jpg",
    quantidade: 1,
  },
  {
    id: 9,
    produto: "Hakuna Matata",
    descricao: "Personagens da Hakuna Matata",
    preco: "45,00",
    image: "/bags/bag-estampa-reileao.jpg",
    quantidade: 1,
  },
  {
    id: 10,
    produto: "Simpsons",
    descricao: "Personagens da Simpson em forma de flores",
    preco: "45,00",
    image: "/bags/bag-estampa-simpsons.jpg",
    quantidade: 1,
  },
  {
    id: 11,
    produto: "Ondas",
    descricao: "Ilustração de ondas com frase motivacional",
    preco: "45,00",
    image: "/bags/bag-estampa-onda.jpg",
    quantidade: 1,
  },
];
export const CartbagsPersonalize = [
  {
    id: 12,
    produto: "Personalize sua bag",
    descricao:
      "Personalize sua bag para o sua estampa favorita, ao escolher esta opção em ate 2 dias nossa equipe entrara em contato sobre a sua bag",
    preco: "45,00",
    image: "/bags/bag-personalize.jpg",
    quantidade: 1,
  },
];

export const newCartbags: Bag[] = [];

let setNotificationCart: (value: number) => void;

export const setNotificationCartHandler = (setter: (value: number) => void) => {
  setNotificationCart = setter;
};

export type Bag = {
  id: number;
  produto: string;
  descricao: string;
  preco: string;
  image: string | string[];
  quantidade: number;
};

const cartBagsProxy = new Proxy(newCartbags, {
  set: function (target, property, value) {
    const result = Reflect.set(target, property, value);
    if (setNotificationCart) {
      setNotificationCart(target.length);
    }
    return result;
  },
});

export const addToNewCartbags = (bag: Omit<Bag, "quantidade">) => {
  const existingBagIndex = newCartbags.findIndex((item) => item.id === bag.id);

  if (existingBagIndex !== -1) {
    newCartbags[existingBagIndex].quantidade += 1;
  } else {
    cartBagsProxy.push({ ...bag, quantidade: 1 });
  }

  if (setNotificationCart) {
    setNotificationCart(newCartbags.length);
  }
};

export const removeFromNewCartbags = (id: number) => {
  const index = cartBagsProxy.findIndex((bag) => bag.id === id);
  if (index !== -1) {
    cartBagsProxy.splice(index, 1);
    if (setNotificationCart) {
      setNotificationCart(newCartbags.length);
    }
  }
};

export const updateQuantityInCart = (id: number, newQuantity: number) => {
  const index = cartBagsProxy.findIndex((bag) => bag.id === id);
  if (index !== -1) {
    cartBagsProxy[index].quantidade = newQuantity;
  }
};

export const getNewCartbagsLength = () => newCartbags.length;

export const clearCart = () => {
  newCartbags.length = 0; // Limpa todos os itens do carrinho
  if (setNotificationCart) {
    setNotificationCart(newCartbags.length); // Atualiza o número de itens no carrinho
  }
};

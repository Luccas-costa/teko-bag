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

export const newCartbags: Bag[] = [];

let newCartbagsLength = newCartbags.length;
let setNotificationCart: (value: number) => void;

export const setNotificationCartHandler = (setter: (value: number) => void) => {
  setNotificationCart = setter;
};

type Bag = {
  id: number;
  produto: string;
  descricao: string;
  preco: string;
  image: string;
  quantidade: number;
};

const cartBagsProxy = new Proxy(newCartbags, {
  set: function (target, property, value) {
    console.log("newCartbags foi modificado:", target);
    newCartbagsLength = target.length;
    if (setNotificationCart) {
      setNotificationCart(newCartbagsLength);
    }
    return Reflect.set(target, property, value);
  },
});

export const addToNewCartbags = (bag: Omit<Bag, "quantidade">) => {
  const existingBagIndex = newCartbags.findIndex((item) => item.id === bag.id);

  if (existingBagIndex !== -1) {
    newCartbags[existingBagIndex].quantidade += 1;
  } else {
    cartBagsProxy.push({ ...bag, quantidade: 1 });
  }

  newCartbagsLength = newCartbags.length;
  if (setNotificationCart) {
    setNotificationCart(newCartbagsLength);
  }
};

export const removeFromNewCartbags = (id: number) => {
  const index = cartBagsProxy.findIndex((bag) => bag.id === id);
  if (index !== -1) {
    cartBagsProxy.splice(index, 1);
    if (setNotificationCart) {
      setNotificationCart(newCartbagsLength - 1);
    }
  }
};

export const updateQuantityInCart = (id: number, newQuantity: number) => {
  const index = cartBagsProxy.findIndex((bag) => bag.id === id);
  if (index !== -1) {
    cartBagsProxy[index].quantidade = newQuantity;
  }
};

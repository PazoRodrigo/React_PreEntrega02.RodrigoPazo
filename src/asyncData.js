const products = [
  {
    id: 1,
    rubro: "Celulares",
    nombre: "Iphone 11",
    valor: 900000,
    stock: 500,
    imagen:
      "https://www.blogdelfotografo.com/wp-content/uploads/2020/01/Captura-de-pantalla-2020-01-20-a-las-14.46.32.webp",
  },
  {
    id: 2,
    rubro: "Fitness",
    nombre: "Mancuerna 5 kg Negro",
    valor: 150000,
    stock: 4,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_828480-MLA52623148107_112022-O.webp",
  },
  {
    id: 3,
    rubro: "Fitness",
    nombre: "Mancuerna 10 kg Transparente",
    valor: 180000,
    stock: 12,
    imagen:
      "https://acdn.mitiendanube.com/stores/919/712/products/par-de-mancuernas-hexagonales-odea-10-kg-11-c22d28ccac5948688216244935681303-640-0.png",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  console.log(productId);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

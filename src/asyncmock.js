const item = [
  {
    id: 1,
    title: 'Grind® True Wireless Earbuds',
    price: 199.00,
    pictureUrl: "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/313/11373/0a3738e4c0de2ec1c1723fa2eb1a12952e880103e26a495f44042a84d23e78d7__42589.1648967478.png?c=2"
  }
]
export const getItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(item)
    }, 2000)
  })
}
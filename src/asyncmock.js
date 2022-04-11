const items = [
  {
    id: 1,
    title: 'Grind® True Wireless Earbuds',
    price: 199.00,
    pictureUrl: "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/313/11373/0a3738e4c0de2ec1c1723fa2eb1a12952e880103e26a495f44042a84d23e78d7__42589.1648967478.png?c=2",
    description: "Introducing Grind with Skull-iQ Smart Feature Technology. Hands-free Voice Control gives you absolute authority over your audio using only your voice — and that's just the beginning."
  },
  {
    id: 2,
    title: 'Pit Viper Push™ Active True Wireless Earbuds',
    price: 89.99,
    pictureUrl: "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/319/11583/cdebd7cff861d3c28b234926424746aa75715370b8515fa3d7a208508c5103fa__55404.1649436398.png?c=2",
    description: "Whether you're getting inverted on your 'blades or sending it bungee-style, you need buds that can keep up. Nothing delivers at the edge of insanity like Push Active. See those pink highlights? That means this limited-edition Pit Viper Push Active is 1000% XTREME-certified."
  },
  {
    id: 3,
    title: 'Pit Viper Grind® True Wireless Earbuds',
    price: 94.99,
    pictureUrl: "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/321/11655/6ffe14cce9b12e161b2692a602300a0a38b2794a036eb953361ac4e1129305c6__56724.1649436577.png?c=2",
    description: "Grind delivers a whopping 40 hours of listening time between the charging case and buds. Plus, your earbuds tell you how much battery is left every time you remove them from the case."
  },
]
export const getItemsById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items.find(item => item.id === id))
    }, 2000)
  })
}

export const getItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items)
    }, 2000)
  })
}

const items = [
  {
    id: 1,
    stock: 80,
    title: 'Grind® True Wireless Earbuds',
    price: 199.00,
    pictureUrl: "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/313/11373/0a3738e4c0de2ec1c1723fa2eb1a12952e880103e26a495f44042a84d23e78d7__42589.1648967478.png?c=2",
    description: "Introducing Grind with Skull-iQ Smart Feature Technology. Hands-free Voice Control gives you absolute authority over your audio using only your voice — and that's just the beginning.",
    category: "truewireless"
  },
  {
    id: 2,
    stock: 50,
    title: 'Pit Viper Push™ Active True Wireless Earbuds',
    price: 89.99,
    pictureUrl: "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/319/11583/cdebd7cff861d3c28b234926424746aa75715370b8515fa3d7a208508c5103fa__55404.1649436398.png?c=2",
    description: "Whether you're getting inverted on your 'blades or sending it bungee-style, you need buds that can keep up. Nothing delivers at the edge of insanity like Push Active. See those pink highlights? That means this limited-edition Pit Viper Push Active is 1000% XTREME-certified.",
    category: "earbuds"
  },
  {
    id: 3,
    stock: 75,
    title: 'Pit Viper Grind® True Wireless Earbuds',
    price: 94.99,
    pictureUrl: "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/321/11655/6ffe14cce9b12e161b2692a602300a0a38b2794a036eb953361ac4e1129305c6__56724.1649436577.png?c=2",
    description: "Grind delivers a whopping 40 hours of listening time between the charging case and buds. Plus, your earbuds tell you how much battery is left every time you remove them from the case.",
    category: "earbuds"
  },
  {
    id: 4,
    stock: 100,
    title: 'Hesh® Evo Wireless Headphones',
    price: 104.99,
    pictureUrl: "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/252/8356/621a3757c15f664620469e0472d9c43a9fa8b5522f2be778e5de7f3deb3b180f__92346.1648966891.jpg?c=2",
    description: "With powerful 40mm drivers and exceptional acoustics, Hesh Evo features audio quality that has been refined over four generations of constant improvement. The clear, rich sound rivals the most expensive headphones out there — at a price that's surprisingly affordable.",
    category: "headphones"
  }
]
export const getItemsById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items.find(item => item.id === parseInt(id)));
    }, 2000)
  })
}

export const getItems = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(id ? items.filter(item => item.category === id) : items);
    }, 2000)
  })
}

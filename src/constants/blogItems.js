const items = [
  {
    id: 1,
    text: 'Test1',
    image: {
      src: "http://static.jsbin.com/images/dave.min.svg",
      alt: 'Test1'
    },
    meta: {
      createdAt: new Date(2017, 1, 1),
      updatedAt: new Date(2017, 1, 2)
    }
  },
  {
    id: 2,
    text: 'Test2',
    image: {
      src: "http://static.jsbin.com/images/dave.min.svg",
      alt: 'Test2'
    },
    meta: {
      likes: 2,
      author: 'Vanya',
      createdAt: new Date(2017, 1, 11),
      updatedAt: new Date(2017, 1, 12)
    }
  }
]

export {items}
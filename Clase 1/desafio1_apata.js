  class ProductManager {
    constructor() {
      this.products = []
    }

    #id = 0

    validationProduct(product) {
      const {title, description, price, thumbnail, code, stock } = product
      if (!title || !description || !price || !thumbnail || !code || !stock){
        throw new Error('Todos los campos deben estar completos');
      } else {
        const existe = this.products.some(prod => prod.code === product.code)
        if (existe) {
          throw new Error(`Ya existe un producto con el código "${product.code}"`);
        }
      }
    }
    validationProductId(productId){
      const newArray = this.products.filter(product => productId === product.id);
      if (newArray.length === 0) {
        throw new Error(`Id nro ${productId}: Not Found`);
      } 
      return newArray[0]
    }

    addProduct = (product) => {
    try {
      let producto = this.validationProduct(product)
      product.id = this.#id
      this.products.push({...product})
      this.#id = this.#id + 1
      console.log(`Se agregó el producto "${product.title}" a la colección`);
    } catch (error) {
      console.log(error.message);
    }}

    getProducts = () =>  this.products

    getProductById = (productId) =>  {
      try {
        let product = this.validationProductId(productId)
          console.log(`Producto encontrado con id ${productId}`);
          return product
      } catch (error){
        console.log(error.message);
      }
    }
  }


/* Testing:

const instancia = new ProductManager();

instancia.addProduct({
  title: 'producto prueba',
  description:'Este es un producto prueba',
  price:200,
  thumbnail:'Sin imagen',
  code:'abc123',
  stock:25
});

instancia.addProduct({
  title: 'producto prueba',
  description:'Este es un producto prueba',
  price:200,
  thumbnail:'Sin imagen',
  code:'abc123',
  stock:25
});

instancia.addProduct({
  title: 'producto 2',
  description:'Segundo producto de prueba',
  price:100,
  thumbnail:'Sin imagen',
  code:'def456',
  stock:20
});


instancia.addProduct({
  description:'Segundo producto de prueba',
  price:100,
  thumbnail:'Sin imagen',
  code:'def456',
  stock:20
});

console.log(instancia.getProducts());

console.log(instancia.getProductById(0));
console.log(instancia.getProductById(2));
*/

const fs = require('fs');

class ProductManager {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async addProduct(product) {
    try {
      const products = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
      product.id = products.length + 1;
      products.push(product);
      fs.writeFileSync(this.filePath, JSON.stringify(products, null, 2));
    } catch (error) {
      console.error('Error al agregar el producto:', error);
    }
  }

  async getProducts() {
    try {
      const products = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
      return products;
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      return [];
    }
  }

  async getProductsById(id) {
    try {
      const products = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
      return products.find((product) => product.id === id);
    } catch (error) {
      console.error('Error al obtener el producto por ID:', error);
      return null;
    }
  }

  async updateProducts(updatedProduct) {
    try {
      const products = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
      const index = products.findIndex((product) => product.id === updatedProduct.id);
      if (index !== -1) {
        products[index] = { ...products[index], ...updatedProduct };
        fs.writeFileSync(this.filePath, JSON.stringify(products, null, 2));
        return 'Producto actualizado exitosamente.';
      } else {
        throw new Error('Producto no encontrado.');
      }
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
      return 'Error al actualizar el producto.';
    }
  }

  async deleteProduct(id) {
    try {
      const products = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
      const index = products.findIndex((product) => product.id === id);
      if (index !== -1) {
        products.splice(index, 1);
        fs.writeFileSync(this.filePath, JSON.stringify(products, null, 2));
        return 'Producto eliminado exitosamente.';
      } else {
        throw new Error('Producto no encontrado.');
      }
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      return 'Error al eliminar el producto.';
    }
  }
}

module.exports = ProductManager;
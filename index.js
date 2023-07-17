const ProductManager = require('./manager/ProductManager');

const manager = new ProductManager('./files/products.json');

const producto1 = {
    title: 'RedBull',
    description: 'Bebida energizante con variados sabores de frutas',
    price: 6800,
    thumbnail: '',
    code: '001',
    stock: 21
}

const producto2 = {
    title: 'Redbull Red',
    description: 'Es una bebida energizante distribuida por productos Postobon',
    price: 6800,
    thumbnail: '',
    code: '002',
    stock: 7
}

const producto3 = {
    title: 'Redbull white',
    description: 'Es una de las bebidas mas vendidas actualmente en Colombia',
    price: 1849,
    thumbnail: '',
    code: '003',
    stock: 5
}

const producto4 = {
    title: 'Redbull orange',
    description: 'Bebida catalogada por ser un producto apto para deportistas',
    price: 4415,
    thumbnail: '',
    code: '004',
    stock: 33
}

const nuevosProductos = async() => {

    await manager.addProduct(producto1);
    await manager.addProduct(producto2);
    await manager.addProduct(producto3);
    await manager.addProduct(producto4);

    console.log(await manager.getProducts());
    console.log(await manager.getProductsById(1));
    console.log(await manager.updateProducts({id: 1, stock: 200}));
    console.log(await manager.deleteProduct(1));

    await manager.addProduct(producto1);
}

nuevosProductos();

const { resourceLimits } = require('worker_threads')
const Manager = require ('./manager.js')
const manager = new Manager()

let product = {
    title: 'Correa',
    price: '252',
    url: ''
}

// manager.createProduct(product).then(result => console.log(result));
manager.viewProducts().then(result => console.log(result));
const express = require('express')
const Manager = require('./manager')
const productFile = require ('./productFile.json')


const app = express()
const manager = new Manager (productFile.json)

const server = app.listen(8080, () => console.log('Server Up'))

app.get('/productos', async (request, response) => {
    const allProducts = await manager.viewProducts(); 
        response.send(allProducts)
})

app.get('/productoRandom', async (request,response) => {
    const allProducts = await manager.viewProducts();
    const productoRandom = allProducts.products[Math.floor(Math.random()*allProducts.products.length)];
    response.send(productoRandom)
    })
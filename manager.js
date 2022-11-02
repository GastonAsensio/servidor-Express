const fs = require ('fs')
const productFile = './productFile.json'

class Manager {
    createProduct = async (product) => {
        try{
            if(fs.existsSync(productFile)){
                let data = await fs.promises.readFile(productFile, 'utf-8')
                let products = JSON.parse(data)
                let id = products[products.length-1].id+1
                product.id= id
                products.push(product)
                await fs.promises.writeFile(productFile, JSON.stringify(products, null, 2 ))
                return {status: 'Perfecto', message: 'Producto creado'}
            } else {
                product.id= 1
                await fs.promises.writeFile (productFile, JSON.stringify([product], null, 2 ))
                return {status: 'Perfecto', message: 'Producto creado'}
            }
        } catch (err) {
            return {status: 'Error', message: err.message}
        }
    }

    viewProducts = async () => {
        if (fs.existsSync(productFile)){
            let data = await fs.promises.readFile(productFile, 'utf-8') 
            let products = JSON.parse(data)
            return {products} 
        } else {
            return {status: 'error',} 
        }
    }

    getById = async(id) => {
        if (!id) return {status: 'error', message:'se requiere ID'}
        if (fs.existsSync(productFile)){
            let data = await fs.promises.readFile(productFile, 'utf-8')
            let products = JSON.parse(data)
            let product = product.find(product => product.id === id)
            if (product) return {status: 'Perfecto', message: product}
            return {status:'error', message: 'No se reconoce el ID'} 
        } else {
            return {status: 'error', message: err.message}
        }
    }
   
    getAll = async () => {
        if (fs.existsSync(productFile)){
            let data = await fs.promises.readFile(productFile, 'utf-8')
            let products = JSON.parse(data)
            return {status: 'Perfecto', message: 'Base de datos eliminada'}
    } else {
        return {status: 'error', message: err.message}
    }
}

    deleteAll = async (product) => {
        if (fs.existsSync(productFile)){
            let data = await fs.promises.readFile(productFile, 'utf-8')
            let products = JSON.parse(data)
            await fs.promises.unlink(productFile, JSON.stringify())
            return {status: 'Perfecto', message: 'base de datos eliminada'}

}

    deleteById = async (id) => {
        if (!id) return {status: 'error', message: 'Necesita un ID'}
        if (fs.existsSync(productFile)){
            let data = await fs.promises.readFile(productFile, 'utf-8')
            let products = JSON.parse(data)
            let newProduct = products.filter(product => product.id !== id)
            await fs.promises.writeFile(productFile, JSON.stringify(newProduct, null, 2 ))
            return {status: 'Perfecto', message: 'ID BORRADA'}
        }else {
            return {status: 'error', message: err.message}
        }
    }

}
}

module.exports = Manager

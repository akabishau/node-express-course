const getAllProductsStatic = async (req, res) => {
    // just throw an error, no need to use try-catch
    throw new Error('testing async erros for static products') 
    res.status(200).json({ msg: 'products testing route'})
}


const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: 'products routes'})
}


module.exports = { getAllProducts, getAllProductsStatic }
const getAllProductsStatic = async (req, res) => {
    throw new Error('testing async erros') // just throw an error, no need to use try-catch
    res.status(200).json({ msg: 'products testing route'})
}


const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: 'products routes'})
}


module.exports = { getAllProducts, getAllProductsStatic }
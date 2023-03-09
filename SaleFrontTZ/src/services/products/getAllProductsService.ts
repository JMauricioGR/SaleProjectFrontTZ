const getAllProductsService = async () => {
    let response = await fetch("http://localhost:8080/v1/api/products/all")

    return response.json()
}

export default getAllProductsService
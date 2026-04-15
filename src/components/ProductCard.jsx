const ProductCard = ({ product }) => {

    const handleAddToCart = () => {
        // Logic to add product to cart
        console.log(`Added ${product.name} to cart!`);
    }

    return (
        <div className="border border-gray-300 rounded p-4">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm my-2">
                <span className="bg-sky-200 text-sky-900 rounded-2xl px-3 py-1">{product.category}</span>
            </p>
            <p className="text-xl font-bold">₹{product.price}</p>
            <p className="text-sm text-amber-600 mb-2">&#9733; {product.rating}</p>

            <button className="bg-sky-800 text-white px-3 py-1 rounded"
                onClick={handleAddToCart}>Add to Cart</button>
        </div>
    )
}

export default ProductCard
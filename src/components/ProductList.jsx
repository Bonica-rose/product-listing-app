import ProductCard from './ProductCard'

const ProductList = ({ products }) => {
    if (products.length === 0) {
        return <p className='text-gray-500'>No products found</p>;
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((p) => (
            <ProductCard key={p.id} product={p} />
        ))}
        </div>
    )
}

export default ProductList
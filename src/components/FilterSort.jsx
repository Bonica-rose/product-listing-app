const FilterSort = ({ setCategory, setSort }) => {
    return (
        <div className="flex justify-start gap-3 mb-4">
            <select className="border border-gray-300 rounded p-2 w-50"
                onChange={(e) => setCategory(e.target.value)}>
                <option value="all">All Categories</option>
                <option value="Accessories">Accessories</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
            </select>
            <select className="border border-gray-300 rounded p-2 w-50"
                onChange={(e) => setSort(e.target.value)}>
                <option value="">Sort By</option>
                <option value="low">Price: Low → High</option>
                <option value="high">Price: High → Low</option>
                <option value="rating">Top Rated</option>
            </select>
        </div>
    )
}

export default FilterSort
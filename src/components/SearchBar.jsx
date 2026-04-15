const SearchBar = ({ setSearch }) => {
    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Search products..."
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
            />
        </div>
    )
}

export default SearchBar
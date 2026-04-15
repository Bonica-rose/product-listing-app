import { useState } from "react"
import Header from './components/Header'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import FilterSort from "./components/FilterSort"
import ProductList from "./components/ProductList"
import './App.css'

function App() {

  const products = [
    {
      id: 102, name: "Minimalist White Sneakers", category: "Fashion", price: 120,
      rating: 4.9, image: `/images/102.jpeg`
    },
    {
      id: 204, name: "Stainless Steel Bracelet", category: "Accessories", price: 55,
      rating: 4.6, image: `/images/204.jpg`
    },
    {
      id: 202, name: "Aviator Sunglasses", category: "Accessories", price: 45,
      rating: 4.3, image: `/images/202.jpeg`
    },
    {
      id: 206, name: "Wide Brim Fedora", category: "Accessories", price: 60,
      rating: 4.1, image: `/images/206.jpeg`
    },
    {
      id: 105, name: "Cotton Crewneck Tee", category: "Fashion", price: 25,
      rating: 4.2, image: `/images/105.jpeg`
    },
    {
      id: 1, name: "Noise Cancelling Headphones", category: "Electronics", price: 299,
      rating: 4.8, image: `/images/1.jpeg`
    },
    {
      id: 5, name: "4K Webcam", category: "Electronics", price: 89,
      rating: 4.3, image: `/images/5.jpeg`
    },
    {
      id: 104, name: "Wool Blend Overcoat", category: "Fashion", price: 199,
      rating: 4.8, image: `/images/104.jpeg`
    },
    {
      id: 3, name: "Gaming Mouse", category: "Electronics", price: 65,
      rating: 4.5, image: `/images/3.jpeg`
    },
    {
      id: 103, name: "Polarized Sunglasses", category: "Fashion", price: 55,
      rating: 4.4, image: `/images/103.jpeg`
    },
    {
      id: 101, name: "Classic Denim Jacket", category: "Fashion", price: 85,
      rating: 4.7, image: `/images/101.jpeg`
    },
    {
      id: 4, name: "Mechanical Keyboard", category: "Electronics", price: 110,
      rating: 4.6, image: `/images/4.jpeg`
    },
    {
      id: 201, name: "Minimalist Gold Watch", category: "Accessories", price: 180,
      rating: 4.9, image: `/images/201.jpeg`
    },
    {
      id: 205, name: "Leather Trifold Wallet", category: "Accessories", price: 70,
      rating: 4.7, image: `/images/205.jpeg`
    },
    {
      id: 6, name: "Bluetooth Soundbar", category: "Electronics", price: 150,
      rating: 4.4, image: `/images/6.jpeg`
    },
    {
      id: 203, name: "Silk Floral Scarf", category: "Accessories", price: 35,
      rating: 4.5, image: `/images/203.jpeg`
    },
    {
      id: 2, name: "Smart OLED TV", category: "Electronics", price: 1200,
      rating: 4.7, image: `/images/2.png`
    },
    {
      id: 106, name: "Leather Crossbody Bag", category: "Fashion", price: 145,
      rating: 4.6, image: `/images/106.jpeg`
    }
  ];

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState("");

  // search & category filtering
  let filtered = products.filter((product) => {
    return (category === 'all' || product.category === category) && product.name.toLowerCase().includes(search.toLowerCase());
  });

  // Sorting
  if (sort === "low") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  }  

  return (
    <>
      <Navbar />
      <Header />
      <div className='container mx-auto p-4'>
        <SearchBar setSearch={setSearch} />
        <FilterSort setCategory={setCategory} setSort={setSort} />
        <ProductList products={filtered}  />
      </div>
    </>
  )
}

export default App

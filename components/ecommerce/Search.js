import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import products from "../../public/static/product.json";
import searchItemsByText from "../../util/searchItemsByText";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const router = useRouter();

    const handleSearch = () => {
        router.push({
            pathname: "/products",
            query: {
                search: searchTerm,
            },
        });
        setSearchTerm("");
        setDropdownOpen(false);
    };

    const handleInput = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
        }
    };

    const handleResultClick = () => {
        setSearchTerm("");
        setDropdownOpen(false);
    };

    useEffect(() => {
        if (searchTerm.length > 0) {
            const filteredProducts = searchItemsByText(searchTerm, products);
            setSearchResults(filteredProducts);
            setDropdownOpen(true);
        } else {
            setSearchResults([]);
            setDropdownOpen(false);
        }
    }, [searchTerm]);

    return (
        <div style={{ position: "relative" }}>
            <form>
                <select className="select-active">
                    <option>All Categories</option>
                    <option>Women's</option>
                    <option>Men's</option>
                    <option>Cellphones</option>
                    <option>Computer</option>
                    <option>Electronics</option>
                    <option> Accessories</option>
                    <option>Home & Garden</option>
                    <option>Luggage</option>
                    <option>Shoes</option>
                    <option>Mother & Kids</option>
                </select>
                <input
                    value={searchTerm}
                    onKeyDown={handleInput}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => searchTerm.length > 0 && setDropdownOpen(true)}
                    onBlur={() => setTimeout(() => setDropdownOpen(false), 200)} // Delay to allow click on results
                    type="text"
                    placeholder="Search"
                />
            </form>
            {dropdownOpen && searchResults.length > 0 && (
                <div className="search-results-dropdown">
                    {searchResults.map((product) => (
                        <Link
                            href={`/products/${product.slug}`}
                            key={product.id}
                            className="search-result-item"
                            onClick={handleResultClick}
                        >
                            <img
                                src={product.images[0].img}
                                alt={product.title}
                            />
                            <span>{product.title}</span>
                        </Link>
                    ))}
                </div>
            )}
            <style jsx>{`
                .search-results-dropdown {
                    position: absolute;
                    background-color: white;
                    border: 1px solid #ccc;
                    width: 100%;
                    z-index: 1000;
                    max-height: 400px;
                    overflow-y: auto;
                }
                .search-result-item {
                    display: flex;
                    align-items: center;
                    padding: 10px;
                    border-bottom: 1px solid #eee;
                    cursor: pointer;
                }
                .search-result-item:hover {
                    background-color: #f5f5f5;
                }
                .search-result-item img {
                    width: 50px;
                    height: 50px;
                    margin-right: 10px;
                }
            `}</style>
        </div>
    );
};

export default Search;

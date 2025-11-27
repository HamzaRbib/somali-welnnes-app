import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { updateProductFilters } from "../../../redux/action/productFiltersAction";

const AdditionalFilters = ({ updateProductFilters }) => {
    const router = useRouter();
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedAvailability, setSelectedAvailability] = useState([]);

    const brands = [
        "CeraVe",
        "The Ordinary",
        "NOW Foods",
        "Nature’s Bounty",
        "Mustela",
        "Earth Mama",
    ];

    const productTypes = [
        "Moisturizing Cream",
        "Facial Cleanser",
        "Vitamin C Serum",
        "Multivitamins",
        "Omega-3 Fish Oil",
        "Probiotics",
    ];

    const availability = ["In Stock", "Out of Stock"];

    useEffect(() => {
        // Initialize from URL query
        if (router.query.brand) {
            setSelectedBrands(router.query.brand.split(","));
        }
        if (router.query.productType) {
            setSelectedTypes(router.query.productType.split(","));
        }
        if (router.query.availability) {
            setSelectedAvailability(router.query.availability.split(","));
        }
    }, [router.query]);

    const updateFilters = (newBrands, newTypes, newAvailability) => {
        updateProductFilters({
            brand: newBrands,
            productType: newTypes,
            availability: newAvailability,
        });

        const query = { ...router.query };

        if (newBrands.length > 0) {
            query.brand = newBrands.join(",");
        } else {
            delete query.brand;
        }

        if (newTypes.length > 0) {
            query.productType = newTypes.join(",");
        } else {
            delete query.productType;
        }

        if (newAvailability.length > 0) {
            query.availability = newAvailability.join(",");
        } else {
            delete query.availability;
        }

        router.push({
            pathname: "/products",
            query: query,
        });
    };

    const handleBrandChange = (brand) => {
        let newBrands;
        if (selectedBrands.includes(brand)) {
            newBrands = selectedBrands.filter((b) => b !== brand);
        } else {
            newBrands = [...selectedBrands, brand];
        }
        setSelectedBrands(newBrands);
        updateFilters(newBrands, selectedTypes, selectedAvailability);
    };

    const handleTypeChange = (type) => {
        let newTypes;
        if (selectedTypes.includes(type)) {
            newTypes = selectedTypes.filter((t) => t !== type);
        } else {
            newTypes = [...selectedTypes, type];
        }
        setSelectedTypes(newTypes);
        updateFilters(selectedBrands, newTypes, selectedAvailability);
    };

    const handleAvailabilityChange = (status) => {
        let newAvailability;
        if (selectedAvailability.includes(status)) {
            newAvailability = selectedAvailability.filter((s) => s !== status);
        } else {
            newAvailability = [...selectedAvailability, status];
        }
        setSelectedAvailability(newAvailability);
        updateFilters(selectedBrands, selectedTypes, newAvailability);
    };

    const sectionStyle = {
        borderTop: "1px solid #e0e0e0",
        paddingTop: "20px",
        marginTop: "20px",
    };

    const titleStyle = {
        marginBottom: "20px",
        fontWeight: "800",
        fontSize: "26px",
        color: "#253D4E",
    };

    const listStyle = {
        margin: 0,
        padding: 0,
        listStyle: "none",
    };

    const itemStyle = {
        marginBottom: "12px",
        display: "flex",
        alignItems: "center",
    };

    const labelStyle = {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        margin: 0,
        width: "100%",
    };

    const checkboxStyle = (checked) => ({
        marginRight: "12px",
        cursor: "pointer",
        width: "16px",
        height: "16px",
        accentColor: checked ? "#82c91e" : "#ccc",
        border: "1px solid #ccc",
        borderRadius: "4px",
    });

    const textStyle = {
        fontSize: "14px",
        color: "#333",
        marginLeft: "8px",
    };

    return (
        <>
            {/* Brand Filter */}
            <div style={sectionStyle}>
                <h5 style={titleStyle}>Brand</h5>
                <ul style={listStyle}>
                    {brands.map((brand, index) => (
                        <li key={index} style={itemStyle}>
                            <label style={labelStyle}>
                                <input
                                    type="checkbox"
                                    checked={selectedBrands.includes(brand)}
                                    onChange={() => handleBrandChange(brand)}
                                    style={checkboxStyle(selectedBrands.includes(brand))}
                                />
                                <span style={textStyle}>{brand}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Product Type Filter */}
            <div style={sectionStyle}>
                <h5 style={titleStyle}>Product Type</h5>
                <ul style={listStyle}>
                    {productTypes.map((type, index) => (
                        <li key={index} style={itemStyle}>
                            <label style={labelStyle}>
                                <input
                                    type="checkbox"
                                    checked={selectedTypes.includes(type)}
                                    onChange={() => handleTypeChange(type)}
                                    style={checkboxStyle(selectedTypes.includes(type))}
                                />
                                <span style={textStyle}>{type}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Availability Filter */}
            <div style={sectionStyle}>
                <h5 style={titleStyle}>Availability</h5>
                <ul style={listStyle}>
                    {availability.map((status, index) => (
                        <li key={index} style={itemStyle}>
                            <label style={labelStyle}>
                                <input
                                    type="checkbox"
                                    checked={selectedAvailability.includes(status)}
                                    onChange={() => handleAvailabilityChange(status)}
                                    style={checkboxStyle(selectedAvailability.includes(status))}
                                />
                                <span style={textStyle}>{status}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default connect(null, { updateProductFilters })(AdditionalFilters);

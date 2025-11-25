// import { useRouter } from "next/router";
// import { connect } from "react-redux";
// import { updateProductCategory } from "../../../redux/action/productFiltersAction";

// const CategoryProduct = ({ updateProductCategory }) => {
//     const router = useRouter();

//     const selectCategory = (e, category) => {
//         e.preventDefault();
//         // removeSearchTerm();
//         updateProductCategory(category);
//         router.push({
//             pathname: "/products",
//             query: {
//                 cat: category, //
//             },
//         });
//     };
//     return (
//         <>
//             <ul>
//                 <li onClick={(e) => selectCategory(e, "")}>
//                     <a>All</a>
//                 </li>
//                 <li onClick={(e) => selectCategory(e, "jeans")}>
//                     <a>
//                         <img
//                             src="/assets/imgs/theme/icons/category-1.svg"
//                             alt="nest"
//                         />
//                         Milks & Dairies
//                     </a>
//                     <span className="count">30</span>
//                 </li>
//                 <li onClick={(e) => selectCategory(e, "shoe")}>
//                     <a>
//                         <img
//                             src="/assets/imgs/theme/icons/category-2.svg"
//                             alt="nest"
//                         />
//                         Clothing
//                     </a>
//                     <span className="count">35</span>
//                 </li>
//                 <li onClick={(e) => selectCategory(e, "jacket")}>
//                     <a>
//                         <img
//                             src="/assets/imgs/theme/icons/category-3.svg"
//                             alt="nest"
//                         />
//                         Pet Foods{" "}
//                     </a>
//                     <span className="count">42</span>
//                 </li>
//             </ul>
//         </>
//     );
// };

// export default connect(null, { updateProductCategory })(CategoryProduct);

// import { useState } from "react";
// import { useRouter } from "next/router";
// import { connect } from "react-redux";
// import { updateProductCategory } from "../../../redux/action/productFiltersAction";

// const CategoryProduct = ({ updateProductCategory }) => {
//   const router = useRouter();
//   const [selectedCategories, setSelectedCategories] = useState([]);

//   const categories = [
//     "SALIID",
//     "CREAM",
//     "SOAP",
//     "MALAB",
//     "FACE WASH",
//     "SUPPLEMENT",
//     "POWDER",
//     "OIL",
//     "NUTS",
//     "TABLETS",
//   ];

//   const handleCategoryChange = (category) => {
//     const updatedCategories = selectedCategories.includes(category)
//       ? selectedCategories.filter((cat) => cat !== category)
//       : [...selectedCategories, category];

//     setSelectedCategories(updatedCategories);
//     updateProductCategory(updatedCategories);

//     router.push({
//       pathname: "/products",
//       query: {
//         cat: updatedCategories.join(","),
//       },
//     });
//   };

//   return (
//     <div className="category-filter">
//       <h5 className="mb-3">Categories</h5>
//       <ul className="list-unstyled">
//         {categories.map((category, index) => (
//           <li key={index} className="mb-2">
//             <label
//               className="d-flex align-items-center"
//               style={{ cursor: "pointer" }}
//             >
//               <input
//                 type="checkbox"
//                 checked={selectedCategories.includes(category)}
//                 onChange={() => handleCategoryChange(category)}
//                 style={{ marginRight: "10px", cursor: "pointer" }}
//               />
//               <span>{category}</span>
//             </label>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default connect(null, { updateProductCategory })(CategoryProduct);

import { useState } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { updateProductCategory } from "../../../redux/action/productFiltersAction";

const CategoryProduct = ({ updateProductCategory }) => {
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [
    "SALIID",
    "CREAM",
    "SOAP",
    "MALAB",
    "FACE WASH",
    "SUPPLEMENT",
    "POWDER",
    "OIL",
    "NUTS",
    "TABLETS",
  ];

  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
    updateProductCategory(updatedCategories);

    router.push({
      pathname: "/products",
      query: {
        cat: updatedCategories.join(","),
      },
    });
  };

  return (
    <div className="category-filter">
      <h2 style={{ marginBottom: "20px", fontWeight: "900", fontSize: "26px" }}>
        Categories
      </h2>
      <ul className="list-unstyled" style={{ margin: 0, padding: 0 }}>
        {categories.map((category, index) => (
          <li
            key={index}
            style={{
              marginBottom: "12px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <label
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                margin: 0,
              }}
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                style={{
                  marginRight: "12px",
                  cursor: "pointer",
                  width: "16px",
                  height: "16px",
                }}
              />
              <span style={{ fontSize: "14px", color: "#333" }}>
                {category}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect(null, { updateProductCategory })(CategoryProduct);

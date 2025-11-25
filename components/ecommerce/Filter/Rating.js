// import { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import { updateProductRating } from "../../../redux/action/productFiltersAction";

// const Rating = ({ updateProductRating }) => {
//   const ratings = [
//     { value: "" },
//     { value: "5" },
//     { value: "4" },
//     { value: "3" },
//     { value: "2 " },
//     { value: "1" },
//   ];

//   const [productRating, setProductRating] = useState("");
//   const [active, setActive] = useState(0);
//   useEffect(() => {
//     const filters = {
//       rating: productRating,
//     };
//     updateProductRating(filters);
//   }, [productRating]);

//   const handleClick = (i, target) => {
//     setProductRating(target);
//     setActive(active == i ? 0 : i);
//   };

//   return (
//     <>
//       {ratings.map((rate, i) => (
//         <>
//           <div
//             className={active == i && "active"}
//             onClick={() => handleClick(i, rate.value)}
//           >
//             <a>
//               {i == 0 ? (
//                 "All"
//               ) : (
//                 <>
//                   <div className="product-rate-cover">
//                     <div className="product-rate d-inline-block">
//                       {rate.value == 1 && (
//                         <div
//                           className="product-rating"
//                           style={{ width: "20%" }}
//                         ></div>
//                       )}
//                       {rate.value == 2 && (
//                         <div
//                           className="product-rating"
//                           style={{ width: "40%" }}
//                         ></div>
//                       )}
//                       {rate.value == 3 && (
//                         <div
//                           className="product-rating"
//                           style={{ width: "60%" }}
//                         ></div>
//                       )}
//                       {rate.value == 4 && (
//                         <div
//                           className="product-rating"
//                           style={{ width: "80%" }}
//                         ></div>
//                       )}
//                       {rate.value == 5 && (
//                         <div
//                           className="product-rating"
//                           style={{ width: "100%" }}
//                         ></div>
//                       )}
//                     </div>
//                   </div>
//                 </>
//               )}
//             </a>
//           </div>
//         </>
//       ))}
//     </>
//   );
// };

// const mapDidpatchToProps = {
//   updateProductRating,
// };

// export default connect(null, mapDidpatchToProps)(Rating);

import { useState } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { updateProductRating } from "../../../redux/action/productFiltersAction";

const RatingFilter = ({ updateProductRating }) => {
  const router = useRouter();
  const [selectedRating, setSelectedRating] = useState("4.9");

  const ratings = [
    { value: "4.9", label: "4.9 and above" },
    { value: "4.0", label: "4.0 _ 4.8" },
    { value: "3.0", label: "3.0 _ 3.9" },
    { value: "2.0", label: "2.0 _ 2.9" },
    { value: "1.0", label: "1.0 _ 1.9" },
  ];

  const handleRatingChange = (ratingValue) => {
    setSelectedRating(ratingValue);
    updateProductRating(ratingValue);

    router.push({
      pathname: "/products",
      query: {
        rating: ratingValue,
      },
    });
  };

  const StarIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#FFC107"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  );

  return (
    <div
      className="rating-filter"
      style={{ borderTop: "1px solid #e0e0e0", paddingTop: "20px" }}
    >
      <h5 style={{ marginBottom: "20px", fontWeight: "800", fontSize: "26px" }}>
        Reviews
      </h5>
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {ratings.map((rating, index) => (
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
                checked={selectedRating === rating.value}
                onChange={() => handleRatingChange(rating.value)}
                style={{
                  marginRight: "12px",
                  cursor: "pointer",
                  width: "16px",
                  height: "16px",
                  accentColor:
                    selectedRating === rating.value ? "#82c91e" : "#ccc",
                }}
              />
              <StarIcon />
              <span
                style={{ fontSize: "14px", color: "#333", marginLeft: "8px" }}
              >
                {rating.label}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect(null, { updateProductRating })(RatingFilter);

import { useRouter } from "next/router";
import { connect } from "react-redux";
import { updateProductCategory } from "../../../redux/action/productFiltersAction";

const CategoryProduct3 = ({ updateProductCategory }) => {




    const router = useRouter();

    // const removeSearchTerm = () => {
    //     router.push({
    //         pathname: "/products",
    //     });
    // };

    const selectCategory = (e, category) => {
        e.preventDefault();
        // removeSearchTerm();
        updateProductCategory(category);
        router.push({
            pathname: "/products",
            query: {
                cat: category, //
            },
        });
    };
    return (
        <>
            <ul  className="end">
                <li onClick={(e) => selectCategory(e, "jeans")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-6.png"
                            alt="nest"
                        />
                        CREAM
                    </a>

                </li>
                <li onClick={(e) => selectCategory(e, "shoe")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-7.png"
                            alt="nest"
                        />
                        MALAB
                    </a>

                </li>
                <li onClick={(e) => selectCategory(e, "jacket")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-8.png"
                            alt="nest"
                        />
                        SUPPLEMENT
                    </a>

                </li>
                <li onClick={(e) => selectCategory(e, "trousers")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-9.png"
                            alt="nest"
                        />
                        OIL
                    </a>

                </li>
                <li onClick={(e) => selectCategory(e, "accessories")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-10.png"
                            alt="nest"
                        />
                        TABLETS
                    </a>
                </li>
            </ul>
        </>
    );
};

export default connect(null, { updateProductCategory })(CategoryProduct3);

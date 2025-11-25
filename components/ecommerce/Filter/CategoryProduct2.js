import { useRouter } from "next/router";
import { connect } from "react-redux";
import { updateProductCategory } from "../../../redux/action/productFiltersAction";

const CategoryProduct2 = ({ updateProductCategory }) => {




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
            <ul>
                <li onClick={(e) => selectCategory(e, "jeans")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-1.png"
                            alt="nest"
                        />
                        SALIID
                    </a>

                </li>
                <li onClick={(e) => selectCategory(e, "shoe")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-2.png"
                            alt="nest"
                        />
                        SOAP
                    </a>

                </li>
                <li onClick={(e) => selectCategory(e, "jacket")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-3.png"
                            alt="nest"
                        />
                        FACE WACH
                    </a>

                </li>
                <li onClick={(e) => selectCategory(e, "trousers")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-4.png"
                            alt="nest"
                        />
                        POWDER
                    </a>

                </li>
                <li onClick={(e) => selectCategory(e, "accessories")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-5.png"
                            alt="nest"
                        />
                        NUTS
                    </a>
                </li>
            </ul>
        </>
    );
};

export default connect(null, { updateProductCategory })(CategoryProduct2);

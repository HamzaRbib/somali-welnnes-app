import { useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import {
    addToCart,
    decreaseQuantity,
    increaseQuantity
} from "../../redux/action/cart";
import { addToCompare } from "../../redux/action/compareAction";
import { addToWishlist } from "../../redux/action/wishlistAction";
import ProductTab from "../elements/ProductTab";
import RelatedSlider from "../sliders/Related";
import ThumbSlider from "../sliders/Thumb";

const ProductDetails = ({
    product,
    cartItems,
    addToCompare,
    addToCart,
    addToWishlist,
    increaseQuantity,
    decreaseQuantity,
    quickView,
}) => {
    const [quantity, setQuantity] = useState(1);


    const handleCart = (product) => {
        addToCart(product);
        toast("Product added to Cart !");
    };

    const handleCompare = (product) => {
        addToCompare(product);
        toast("Added to Compare list !");
    };

    const handleWishlist = (product) => {
        addToWishlist(product);
        toast("Added to Wishlist !");
    };

    const inCart = cartItems.find((cartItem) => cartItem.id === product.id);

    console.log(inCart);

    return (
        <>
            <section className="mt-50 mb-50">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-xl-10 col-lg-12 m-auto">
                            <div className="product-detail accordion-detail">
                                <div className="row mb-50 mt-30">
                                    <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                                        <div className="detail-gallery">
                                            <div className="product-image-slider">
                                                <ThumbSlider product={product} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <div className="detail-info pr-30 pl-30">
                                            {/* Stock Status Badge */}
                                            <div className="mb-20">
                                                <span className="stock-status in-stock text-success bg-success-light" style={{ padding: '5px 10px', borderRadius: '5px', fontSize: '14px', fontWeight: 'bold', backgroundColor: '#def9ec', color: '#3bb77e' }}>
                                                    In Stock
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h2 className="title-detail mb-15" style={{ fontSize: '32px', fontWeight: 'bold', color: '#253D4E' }}>{product.title}</h2>

                                            {/* Description */}
                                            <div className="short-desc mb-30">
                                                <p className="font-lg" style={{ color: '#7E7E7E', fontSize: '16px', lineHeight: '24px' }}>
                                                    {product.desc}
                                                </p>
                                            </div>

                                            {/* Price */}
                                            <div className="clearfix product-price-cover mb-30">
                                                <div className="product-price primary-color float-left">
                                                    <span className="current-price text-brand" style={{ fontSize: '58px', fontWeight: 'bold', color: '#3bb77e', lineHeight: '1' }}>
                                                        ${product.price}
                                                    </span>
                                                    {product.oldPrice && (
                                                        <span className="old-price font-md ml-15" style={{ fontSize: '24px', color: '#B6B6B6', textDecoration: 'line-through', fontWeight: 'bold' }}>
                                                            ${product.oldPrice}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Quantity and Add to Cart */}
                                            <div className="detail-extralink mb-50" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                                <div className="detail-qty border radius" style={{ maxWidth: '80px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0', margin: '0' }}>
                                                    <a onClick={(e) => (!inCart ? setQuantity(quantity > 1 ? quantity - 1 : 1) : decreaseQuantity(product?.id))} className="qty-down" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50%', width: '25%', paddingBottom: "10px" }}>
                                                        <i className="fi-rs-angle-small-down"></i>
                                                    </a>
                                                    <span className="qty-val" style={{ fontSize: '18px', fontWeight: 'bold' }}>{inCart?.quantity || quantity}</span>
                                                    <a onClick={(e) => (!inCart ? setQuantity(quantity + 1) : increaseQuantity(product.id))} className="qty-up" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50%', width: '25%', paddingTop: "5px" }}>
                                                        <i className="fi-rs-angle-small-up"></i>
                                                    </a>
                                                </div>

                                                <div className="product-extra-link2" style={{ display: 'flex', alignItems: 'center', margin: '0' }}>
                                                    <button
                                                        onClick={(e) =>
                                                            handleCart({
                                                                ...product,
                                                                quantity: quantity || 1
                                                            })
                                                        }
                                                        className="button button-add-to-cart"
                                                        style={{
                                                            height: '50px',
                                                            padding: '0 40px',
                                                            fontSize: '16px',
                                                            fontWeight: 'bold',
                                                            backgroundColor: '#77b700',
                                                            border: 'none',
                                                            borderRadius: '5px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            gap: '10px',
                                                            margin: '0'
                                                        }}
                                                    >
                                                        <i className="fi-rs-shopping-cart" style={{ marginRight: '5px' }}></i>
                                                        Add To Cart
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Meta Info */}
                                            <div className="font-xs">
                                                <ul className="mr-50 float-start">
                                                    <li className="mb-5" style={{ fontSize: '16px', color: '#7E7E7E' }}>
                                                        <span className="text-brand" style={{ color: '#253D4E', fontWeight: 'bold', marginRight: '5px' }}>Vendor:</span>
                                                        <span style={{ color: '#B6B6B6' }}>NestMart</span>
                                                    </li>
                                                    <li className="mb-5" style={{ fontSize: '16px', color: '#7E7E7E' }}>
                                                        <span className="text-brand" style={{ color: '#253D4E', fontWeight: 'bold', marginRight: '5px' }}>SKU:</span>
                                                        <span style={{ color: '#B6B6B6' }}>FWM15VKT</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div style={{ clear: 'both', paddingTop: '20px' }}>
                                                <a href="#" style={{ color: '#77b700', fontSize: '16px', fontWeight: '600' }}>View Full Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {quickView ? null : (
                                    <>
                                        <ProductTab />
                                        <div className="row mt-60">
                                            <div className="col-12">
                                                <h3 className="section-title style-1 mb-30">Related products</h3>
                                            </div>
                                            <div className="col-12">
                                                <div className="row related-products position-relative">
                                                    <RelatedSlider />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const mapStateToProps = (state) => ({
    cartItems: state.cart,
});

const mapDispatchToProps = {
    addToCompare,
    addToWishlist,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

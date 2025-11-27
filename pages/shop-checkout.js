import { connect } from "react-redux";
import Layout from "../components/layout/Layout";
import {
    clearCart,
    closeCart,
    decreaseQuantity,
    deleteFromCart,
    increaseQuantity,
    openCart,
} from "../redux/action/cart";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Checkout = ({
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    deleteFromCart,
    clearCart,
}) => {
    const [paymentMethod, setPaymentMethod] = useState("edahab");
    const [branch, setBranch] = useState("downtown");
    const router = useRouter();

    const price = () => {
        let price = 0;
        cartItems.forEach((item) => (price += item.price * item.quantity));
        return price;
    };

    const calculateCartTotals = () => {
        let grossTotal = 0;
        let discountAmount = 0;

        cartItems.forEach((item) => {
            const itemPrice = parseFloat(item.price);
            const itemOldPrice = item.oldPrice ? parseFloat(item.oldPrice) : itemPrice;
            const quantity = item.quantity;

            grossTotal += itemOldPrice * quantity;
            discountAmount += (itemOldPrice - itemPrice) * quantity;
        });

        return { grossTotal, discountAmount };
    };

    const { grossTotal, discountAmount } = calculateCartTotals();
    const subtotal = price();
    const shipping = 5.0; // Fixed shipping as per image example (approx)
    const total = subtotal + shipping;

    return (
        <Layout parent="Home" sub="Shop" subChild="Checkout">
            <section className="mt-50 mb-50">
                <div className="container">
                    <div className="row">
                        {/* Left Column */}
                        <div className="col-lg-8">

                            {/* Delivery Address Section */}
                            <div className="mb-4">
                                <h4 className="mb-3">Delivery Address *</h4>
                                <div
                                    className="p-3 d-flex justify-content-between align-items-center"
                                    style={{
                                        backgroundColor: "#f7f8f9",
                                        borderRadius: "10px",
                                        border: "1px solid #ececec",
                                    }}
                                >
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="mr-3">
                                            <img src="assets/imgs/theme/icons/location-user.svg" />
                                        </div>
                                        <div>
                                            <span className="d-block text-muted font-xs">Company</span>
                                            <span className="fw-bold text-heading">Mogadishu, Somalia Street</span>
                                        </div>
                                    </div>
                                    <button
                                        className="btn btn-sm btn-outline"
                                        style={{
                                            borderColor: "#ececec",
                                            color: "#84a606",
                                            backgroundColor: "white",
                                            borderRadius: "5px",
                                            padding: "5px 15px",
                                        }}
                                    >
                                        Change
                                    </button>
                                </div>
                            </div>

                            {/* Grocery Branches Section */}
                            <div className="mb-4">
                                <h6 className="mb-2">Grocery Branches *</h6>
                                <select
                                    className="form-select"
                                    value={branch}
                                    onChange={(e) => setBranch(e.target.value)}
                                    style={{
                                        height: "50px",
                                        backgroundColor: "#fff",
                                        borderRadius: "10px",
                                        border: "1px solid #ececec",
                                    }}
                                >
                                    <option value="downtown">SOMALI WELLNESS - Downtown Branch</option>
                                    <option value="uptown">SOMALI WELLNESS - Uptown Branch</option>
                                </select>
                            </div>

                            {/* Order List Section */}
                            <div className="mb-4">
                                <h4 className="mb-3">Order List</h4>

                                {/* Header */}
                                <div
                                    className="row align-items-center p-4 mb-2 d-none d-md-flex"
                                    style={{
                                        backgroundColor: "#84a606",
                                        color: "white",
                                        borderRadius: "15px",
                                    }}
                                >
                                    <div className="col-md-5 pl-30">Product</div>
                                    <div className="col-md-2 text-center">Price</div>
                                    <div className="col-md-3 text-center">Quantity</div>
                                    <div className="col-md-2 text-center">Subtotal</div>
                                </div>

                                {/* Items */}
                                <div className="cart-items p-3" style={{ borderRadius: "15px", borderTop: "none" }}>
                                    {cartItems.length <= 0 && (
                                        <div className="text-center p-5">No Products in Cart</div>
                                    )}
                                    {cartItems.map((item, i) => (
                                        <div
                                            key={i}
                                            className="row align-items-center py-3 border-bottom"
                                        >
                                            {/* Product */}
                                            <div className="col-12 col-md-5 d-flex align-items-center mb-3 mb-md-0">
                                                <div
                                                    className="remove-icon px-2 mr-2"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => deleteFromCart(item.id)}
                                                >
                                                    <i className="fi-rs-cross" style={{ fontSize: "14px" }}></i>
                                                </div>
                                                <div
                                                    className="image-container mr-15"
                                                    style={{ width: "60px", height: "60px", flexShrink: 0 }}
                                                >
                                                    <img
                                                        src={item.images[0].img}
                                                        alt={item.title}
                                                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                                                    />
                                                </div>
                                                <h6 className="mb-0">
                                                    <Link href="/products">{item.title}</Link>
                                                </h6>
                                            </div>

                                            {/* Price */}
                                            <div className="col-4 col-md-2 text-center">
                                                <div className="d-md-none text-muted font-small mb-1">Price</div>
                                                <h5 className="text-body">${item.price}</h5>
                                            </div>

                                            {/* Quantity */}
                                            <div className="col-4 col-md-3 text-center">
                                                <div className="d-md-none text-muted font-small mb-1">Qty</div>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <button
                                                        onClick={() => decreaseQuantity(item.id)}
                                                        style={{
                                                            backgroundColor: "#f1f1f1",
                                                            border: "none",
                                                            width: "25px",
                                                            height: "25px",
                                                            borderRadius: "4px",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        <i className="fi-rs-minus-small"></i>
                                                    </button>
                                                    <span className="mx-2 fw-bold">{item.quantity}</span>
                                                    <button
                                                        onClick={() => increaseQuantity(item.id)}
                                                        style={{
                                                            backgroundColor: "#84a606",
                                                            color: "white",
                                                            border: "none",
                                                            width: "25px",
                                                            height: "25px",
                                                            borderRadius: "4px",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        <i className="fi-rs-plus-small"></i>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Subtotal */}
                                            <div className="col-4 col-md-2 text-center">
                                                <div className="d-md-none text-muted font-small mb-1">Total</div>
                                                <h5 className="text-brand">
                                                    ${(item.quantity * item.price).toFixed(2)}
                                                </h5>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-lg-4">

                            {/* Order Summary */}
                            <div
                                className="border p-md-4 p-30 border-radius cart-totals mb-30"
                                style={{ boxShadow: "0 0 10px rgba(0,0,0,0.05)", borderRadius: "15px" }}
                            >
                                <div className="heading_s1 mb-3">
                                    <h4>Order Summary</h4>
                                </div>
                                <div className="p-2">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="text-muted">Items</span>
                                        <span className="fw-bold">{cartItems.length}</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="text-muted">Sub-Total</span>
                                        <span className="font-lg fw-900 text-brand">${grossTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="text-muted">Delivery Fee</span>
                                        <span className="font-lg fw-900 text-brand">${shipping.toFixed(2)}</span>
                                    </div>
                                    {discountAmount > 0 && (
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <span className="text-muted">Discount</span>
                                            <span className="font-lg fw-900 text-brand">-${discountAmount.toFixed(2)}</span>
                                        </div>
                                    )}
                                    <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                                        <span className="text-muted">Total</span>
                                        <span className="font-xl fw-900 text-brand">${total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Section */}
                            <div className="mb-30">
                                <h4 className="mb-3">Payment</h4>
                                <p className="text-muted mb-3 font-sm">Please enter your mobile number to complete the payment process.</p>

                                {/* Edahab */}
                                <div className="payment-option mb-3">
                                    <div className="form-check d-flex align-items-center gap-2">

                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="paymentMethod"
                                            id="edahab"
                                            checked={paymentMethod === "edahab"}
                                            onChange={() => setPaymentMethod("edahab")}
                                            style={{ accentColor: "#84a606", width: "20px", height: "20px" }}
                                        />
                                        <img src="assets/imgs/theme/edahab.png" />
                                        <label className="form-check-label fw-bold" htmlFor="edahab">
                                            Edahab Marchent
                                        </label>
                                    </div>
                                    {paymentMethod === "edahab" && (
                                        <div className="mt-2 ml-20">
                                            <p className="font-xs text-muted mb-2">Please complete your payment through Merchant No: <p style={{ fontWeight: "bold", display: "inline" }} >*113*083326*590# </p> and kindly confirm once done.</p>
                                            <div className="qr-code mb-2">
                                                {/* Placeholder for QR Code - using a generic icon if no QR code available, or just a box */}
                                                <div style={{ width: "100px", height: "100px", background: "#f1f1f1", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                    <i className="fi-rs-apps" style={{ fontSize: "40px", color: "#ccc" }}></i>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* WaafiPay */}
                                <div className="payment-option mb-3">
                                    <div className="form-check d-flex align-items-center gap-2">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="paymentMethod"
                                            id="waafipay"
                                            checked={paymentMethod === "waafipay"}
                                            onChange={() => setPaymentMethod("waafipay")}
                                            style={{ accentColor: "#84a606", width: "20px", height: "20px" }}
                                        />
                                        <img src="assets/imgs/theme/wafi.png" />
                                        <label className="form-check-label fw-bold" htmlFor="waafipay">
                                            WaafiPay
                                        </label>
                                    </div>
                                </div>

                                {/* Premier Wallet */}
                                <div className="payment-option mb-4">
                                    <div className="form-check d-flex align-items-center gap-2">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="paymentMethod"
                                            id="premier"
                                            checked={paymentMethod === "premier"}
                                            onChange={() => setPaymentMethod("premier")}
                                            style={{ accentColor: "#84a606", width: "20px", height: "20px" }}
                                        />
                                        <img src="assets/imgs/theme/wallet.png" />
                                    </div>
                                </div>

                                {/* Phone Number */}
                                <div className="form-group mb-4">
                                    <label className="fw-bold mb-2">Phone Number *</label>
                                    <div className="input-group">
                                        <span className="input-group-text" style={{ backgroundColor: "#e9ecef", border: "1px solid #ececec" }}>
                                            <i className="fi-rs-smartphone" style={{ marginRight: "5px" }}></i> +252
                                        </span>
                                        <input type="text" className="form-control" placeholder="Enter your Phone Number" style={{ borderLeft: "none" }} />
                                    </div>
                                </div>

                                {/* Proceed Button */}
                                <button
                                    className="btn w-100 p-3"
                                    style={{ backgroundColor: "#84a606", color: "white", borderRadius: "5px" }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        router.push("/shop-order-track");
                                    }}
                                >
                                    Proceed to Payment
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

const mapStateToProps = (state) => ({
    cartItems: state.cart,
});

const mapDispatchToProps = {
    closeCart,
    increaseQuantity,
    decreaseQuantity,
    deleteFromCart,
    openCart,
    clearCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

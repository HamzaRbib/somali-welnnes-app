import { connect } from "react-redux";
import Layout from "../components/layout/Layout";
import { useRouter } from "next/router";

import Link from "next/link";
import {
  clearCart,
  closeCart,
  decreaseQuantity,
  deleteFromCart,
  increaseQuantity,
  openCart,
} from "../redux/action/cart";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import AuthModal from "../components/ecommerce/AuthModal";


const Cart = ({
  openCart,
  cartItems,
  activeCart,
  closeCart,
  increaseQuantity,
  decreaseQuantity,
  deleteFromCart,
  clearCart,
  isAuthenticated,
}) => {
  const router = useRouter();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleCloseLoginModal = () => setShowLoginModal(false);
  const handleShowLoginModal = () => setShowLoginModal(true);

  const handleCloseAuthModal = () => setShowAuthModal(false);
  const handleShowAuthModal = () => {
    setShowLoginModal(false);
    setShowAuthModal(true);
  };

  const handleProceedToCheckout = (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      router.push("/shop-checkout");
    } else {
      handleShowLoginModal();
    }
  };

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
  const subtotal = price(); // This is the actual payable amount for items (Net Total)
  const shipping = subtotal * 0.05;
  const total = subtotal + shipping;

  return (
    <>
      <Layout parent="Home" sub="Shop" subChild="Cart">
        <section className="mt-50 mb-50">
          <div className="container">
            <div className="row">
              {/* Left Column: Cart Items */}
              <div className="col-lg-8">
                {/* Custom Table Header */}
                <div
                  className="cart-header row align-items-center p-4 mb-20 d-none d-md-flex"
                  style={{
                    backgroundColor: "#84a606",
                    color: "white",
                    borderRadius: "15px",
                  }}
                >
                  <div className="col-md-6 pl-30">
                    Product
                  </div>
                  <div className="col-md-2 text-center">Price</div>
                  <div className="col-md-2 text-center">
                    Quantity
                  </div>
                  <div className="col-md-2 text-center">
                    Subtotal
                  </div>
                </div>

                {/* Cart Items List */}
                <div className="cart-items">
                  {cartItems.length <= 0 && (
                    <div className="text-center p-5">No Products in Cart</div>
                  )}
                  {cartItems.map((item, i) => (
                    <div
                      key={i}
                      className="cart-item-row row align-items-center py-3 border-bottom"
                    >
                      {/* Product Column (Remove + Image + Name) */}
                      <div
                        className="col-12 col-md-6 d-flex align-items-center mb-3 mb-md-0"
                      >
                        <div
                          className="remove-icon px-3"
                          style={{ cursor: "pointer" }}
                          onClick={() => deleteFromCart(item.id)}
                        >
                          <i
                            className="fi-rs-cross"
                            style={{ fontSize: "18px" }}
                          ></i>
                        </div>

                        <div
                          className="image-container mr-15"
                          style={{
                            width: "80px",
                            height: "80px",
                            flexShrink: 0,
                          }}
                        >
                          <img
                            src={item.images[0].img}
                            alt={item.title}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                        <h6 className="mb-0">
                          <Link href="/products">{item.title}</Link>
                        </h6>
                      </div>

                      {/* Price */}
                      <div className="col-4 col-md-2 text-center">
                        <div className="d-md-none text-muted font-small mb-1">Price</div>
                        <h4 className="text-body">
                          ${item.price}
                          {item.oldPrice && (
                            <span className="text-muted font-small ml-5 text-decoration-line-through">
                              ${item.oldPrice}
                            </span>
                          )}
                        </h4>
                      </div>

                      {/* Quantity */}
                      <div className="col-4 col-md-2 text-center">
                        <div className="d-md-none text-muted font-small mb-1">Qty</div>
                        <div className="d-flex align-items-center justify-content-center">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            style={{
                              backgroundColor: "#f1f1f1",
                              border: "none",
                              width: "30px",
                              height: "30px",
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
                              width: "30px",
                              height: "30px",
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
                        <h4 className="text-brand">
                          ${(item.quantity * item.price).toFixed(2)}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Clear Cart Link */}
                {cartItems.length > 0 && (
                  <div className="text-end mt-4">
                    <a
                      onClick={clearCart}
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#84a606 !important",
                      }}
                    >
                      Clear Shopping Cart
                    </a>
                  </div>
                )}
              </div>

              {/* Right Column: Summary */}
              <div className="col-lg-4">
                <div
                  className="border p-md-4 p-30 border-radius cart-totals mb-30"
                  style={{ boxShadow: "0 0 10px rgba(0,0,0,0.05)" }}
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
                      <span className="font-xl fw-bold text-dark">Total</span>
                      <span className="font-xl fw-900 text-brand">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Coupon */}
                <div className="mb-30">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="d-flex justify-content-between">
                      <input
                        className="form-control mr-10"
                        placeholder="Coupon Code"
                        style={{
                          backgroundColor: "#fff",
                          border: "1px solid #ececec",
                        }}
                      />
                      <button
                        className="btn btn-sm"
                        style={{
                          backgroundColor: "#84a606",
                          color: "white",
                          whiteSpace: "nowrap",
                          borderRadius: "12px",
                        }}
                      >
                        Apply Coupon
                      </button>
                    </div>
                  </form>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleProceedToCheckout}
                  className="btn w-100 p-3"
                  style={{ backgroundColor: "#84a606", color: "white", borderRadius: "12px" }}
                >
                  <span className="d-flex align-items-center justify-content-center">
                    <span className="mr-10">Proceed to Checkout</span> <img src="/assets/imgs/theme/icons/checkout.svg" alt="" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
      <LoginModal
        show={showLoginModal}
        handleClose={handleCloseLoginModal}
        handleRegister={handleShowAuthModal}
      />
      <AuthModal show={showAuthModal} handleClose={handleCloseAuthModal} />
    </>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart,
  activeCart: state.counter,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  closeCart,
  increaseQuantity,
  decreaseQuantity,
  deleteFromCart,
  openCart,
  clearCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const LoginModal = ({ show, handleClose, handleRegister }) => {
  return (
    <Modal show={show} onHide={handleClose} centered size="md">
      <Modal.Header closeButton className="border-0 pb-0">
        <Modal.Title style={{ fontSize: "1.1rem" }}>Please Log In</Modal.Title>
      </Modal.Header>

      <Modal.Body className="text-center pt-0 pb-5 px-5">
        <div className="mb-4">
          <img
            src="/assets/imgs/theme/login.png"
            alt="Login Illustration"
            style={{ width: "200px", height: "auto" }}
          />
        </div>
        <h4 className="mb-3 fw-bold">Please Log In to Continue</h4>
        <p className="text-muted mb-4 px-3" style={{ fontSize: "0.95rem" }}>
          To place your order and access all features, please complete your login
          first. Logging in helps us serve you better!
        </p>
        <div className="d-flex gap-3 justify-content-center mb-15">
          <Button
            onClick={handleRegister}
            style={{
              backgroundColor: "#84a606",
              borderColor: "#84a606",
              padding: "10px 30px",
              fontWeight: "500",
            }}
          >
            Yes , Register Now
          </Button>
          <Button
            variant="light"
            onClick={handleClose}
            style={{
              backgroundColor: "#fff",
              color: "black",
              border: "1px solid #000",
              padding: "10px 50px",
              fontWeight: "500",
            }}
          >
            Cancel
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};



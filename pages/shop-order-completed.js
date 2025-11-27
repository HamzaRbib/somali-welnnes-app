import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";

const OrderCompleted = () => {
    return (
        <Layout parent="Home" sub="Shop" subChild="Order Track">
            <section className="mt-50 mb-50">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            {/* Success Message */}
                            <div className="text-center mb-50">
                                <div className="d-inline-block mb-3">
                                    <img src="/assets/imgs/theme/check.svg" alt="Check" style={{ width: "100px", height: "100px" }} />
                                </div>
                                <h2 className="mb-2">Your order is completed !</h2>
                                <p className="text-muted">Thank you , Your Order has been received.</p>
                            </div>

                            {/* Order Info Bar */}
                            <div className="row mb-4 mx-0" style={{
                                backgroundColor: "#84a606",
                                borderRadius: "15px",
                                padding: "20px",
                                color: "white"
                            }}>
                                <div className="col-md-3 mb-3 mb-md-0 border-end border-light border-opacity-25">
                                    <div className="font-xs text-white-50 mb-1">Order ID</div>
                                    <div className="fw-bold">#Fa2025ZXA</div>
                                </div>
                                <div className="col-md-2 mb-3 mb-md-0 border-end border-light border-opacity-25">
                                    <div className="font-xs text-white-50 mb-1">Payment Method</div>
                                    <div className="fw-bold">Edahab</div>
                                </div>
                                <div className="col-md-2 mb-3 mb-md-0 border-end border-light border-opacity-25">
                                    <div className="font-xs text-white-50 mb-1">Transaction ID</div>
                                    <div className="fw-bold">AQsal120cc</div>
                                </div>
                                <div className="col-md-3 mb-3 mb-md-0">
                                    <div className="font-xs text-white-50 mb-1">Estimated Delivery Date</div>
                                    <div className="fw-bold">29 July 2025</div>
                                </div>
                                <div className="col-md-2 d-flex align-items-center justify-content-md-end">
                                    <button className="btn bg-white text-brand fw-bold" style={{ borderRadius: "20px", padding: "10px 22px" }}>
                                        Download Invoice
                                    </button>
                                </div>
                            </div>

                            {/* Order Details Card */}
                            <div className="card mb-50" style={{ borderRadius: "15px", border: "1px solid #ececec", boxShadow: "0 5px 15px rgba(0,0,0,0.05)" }}>
                                <div className="card-header bg-white border-bottom p-4" style={{ borderRadius: "15px 15px 0 0" }}>
                                    <h5 className="mb-0">Order Details</h5>
                                </div>
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table mb-0">
                                            <thead>
                                                <tr style={{ backgroundColor: "#f7f8f9" }}>
                                                    <th className="p-4 border-bottom-0 fw-bold">Products</th>
                                                    <th className="p-4 border-bottom-0 fw-bold text-end">Sub Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* Product 1 */}
                                                <tr>
                                                    <td className="p-4 border-bottom">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-3" style={{ width: "60px", height: "60px", border: "1px solid #ececec", borderRadius: "10px", padding: "5px" }}>
                                                                <img src="assets/imgs/shop/product-1-1.jpg" alt="CAYENNE" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                                            </div>
                                                            <h6 className="mb-0">CAYENNE</h6>
                                                        </div>
                                                    </td>
                                                    <td className="p-4 border-bottom text-end fw-bold">$7.98</td>
                                                </tr>
                                                {/* Product 2 */}
                                                <tr>
                                                    <td className="p-4 border-bottom">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-3" style={{ width: "60px", height: "60px", border: "1px solid #ececec", borderRadius: "10px", padding: "5px" }}>
                                                                <img src="assets/imgs/shop/product-2-1.jpg" alt="3 in 1 rosemary oil" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                                            </div>
                                                            <h6 className="mb-0">3 in 1 rosemary oil</h6>
                                                        </div>
                                                    </td>
                                                    <td className="p-4 border-bottom text-end fw-bold">$4.99</td>
                                                </tr>
                                                {/* Product 3 */}
                                                <tr>
                                                    <td className="p-4 border-bottom">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-3" style={{ width: "60px", height: "60px", border: "1px solid #ececec", borderRadius: "10px", padding: "5px" }}>
                                                                <img src="assets/imgs/shop/product-3-1.jpg" alt="anti hair loss hijab shampoo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                                            </div>
                                                            <h6 className="mb-0">anti hair loss hijab shampoo</h6>
                                                        </div>
                                                    </td>
                                                    <td className="p-4 border-bottom text-end fw-bold">$2.00</td>
                                                </tr>
                                                {/* Product 4 */}
                                                <tr>
                                                    <td className="p-4 border-bottom">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-3" style={{ width: "60px", height: "60px", border: "1px solid #ececec", borderRadius: "10px", padding: "5px" }}>
                                                                <img src="assets/imgs/shop/product-4-1.jpg" alt="inositol" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                                            </div>
                                                            <h6 className="mb-0">inositol</h6>
                                                        </div>
                                                    </td>
                                                    <td className="p-4 border-bottom text-end fw-bold">$1.20</td>
                                                </tr>
                                                {/* Product 5 */}
                                                <tr>
                                                    <td className="p-4 border-bottom">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-3" style={{ width: "60px", height: "60px", border: "1px solid #ececec", borderRadius: "10px", padding: "5px" }}>
                                                                <img src="assets/imgs/shop/product-5-1.jpg" alt="leanax" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                                            </div>
                                                            <h6 className="mb-0">leanax</h6>
                                                        </div>
                                                    </td>
                                                    <td className="p-4 border-bottom text-end fw-bold">$2.99</td>
                                                </tr>

                                                {/* Summary Rows */}
                                                <tr>
                                                    <div>

                                                        <td className="p-4 pb-2 text-end border-0">Sub-Total</td>
                                                    </div>
                                                    <td className="p-4 pb-2 text-end border-0 fw-bold">$120.00</td>
                                                </tr>
                                                <tr>
                                                    <div>
                                                        <td className="px-4 py-2 text-end border-0">Delivery Fee</td>
                                                    </div>
                                                    <td className="px-4 py-2 text-end border-0 fw-bold">$05.00</td>
                                                </tr>
                                                <tr>
                                                    <div>
                                                        <td className="px-4 py-2 text-end border-0">Discount</td>
                                                    </div>
                                                    <td className="px-4 py-2 text-end border-0 fw-bold">-$35.00</td>
                                                </tr>
                                                <tr>
                                                    <div>
                                                        <td className="p-4 pt-2 text-end border-0">Total</td>
                                                    </div>
                                                    <td className="p-4 pt-2 text-end border-0 fw-bold font-lg text-brand">$90.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="d-flex gap-3 mb-50">
                                <Link href="/shop-track-order" className="btn btn-fill-out hover-up" style={{ borderRadius: "5px", padding: "10px 30px" }}>Track Your Order</Link>
                                <Link href="/shop-grid-right" className="btn btn-outline hover-up" style={{ borderRadius: "5px", padding: "10px 30px", backgroundColor: "white", color: "black", border: "1px solid #000" }}>
                                    Shop
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default OrderCompleted;

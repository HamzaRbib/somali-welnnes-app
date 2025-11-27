import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import dynamic from "next/dynamic";

const Gmap = dynamic(() => import("../components/elements/Gmap"), {
    ssr: false,
});
const OrderTrack = () => {
    return (
        <Layout parent="Home" sub="My Orders" subChild="Track Your Order">
            <section className="mt-50 mb-50">
                <div className="container">
                    <div className="mb-40">
                        <h3>Order Status</h3>
                        <p className="text-muted">Order ID : #Food255AZ</p>
                    </div>
                    {/* Stepper */}
                    <div className="card mb-40">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="steps-container">
                                        <div className="step completed">
                                            <div className="step-icon">
                                                <img src="/assets/imgs/theme/icons/icon-clock.svg" alt="Confirmed" />
                                            </div>
                                            <div className="step-content">
                                                <h5 className="step-title">Confirmed</h5>
                                                <small className="text-muted">30 July 2025<br />10:20 Am</small>
                                            </div>
                                        </div>
                                        <div className="step completed">
                                            <div className="step-icon">
                                                <img src="/assets/imgs/theme/icons/icon-cart.svg" alt="Picking Items" />
                                            </div>
                                            <div className="step-content">
                                                <h5 className="step-title">Picking Items</h5>
                                                <small className="text-muted">30 July 2025<br />10:30 Am</small>
                                            </div>
                                        </div>
                                        <div className="step active">
                                            <div className="step-icon">
                                                <img src="/assets/imgs/theme/icons/icon-plane.png" alt="Out for delivery" style={{ opacity: 0.6 }} />
                                            </div>
                                            <div className="step-content">
                                                <h5 className="step-title">Out for delivery</h5>
                                                <small className="text-muted">Expected<br />30 July 2025</small>
                                            </div>
                                        </div>
                                        <div className="step">
                                            <div className="step-icon">
                                                <img src="/assets/imgs/theme/icons/icon-box.svg" alt="Delivered" onError={(e) => e.target.src = '/assets/imgs/theme/icons/icon-cart.svg'} />
                                            </div>
                                            <div className="step-content">
                                                <h5 className="step-title">Delivered</h5>
                                                <small className="text-muted">Expected<br />30 July 2025</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Delivery Details - Map */}
                    <div className="row mb-50">
                        <div className="col-12">
                            <h4 className="mb-20">Delivery details</h4>
                            <div className="card overflow-hidden" style={{ height: "350px", borderRadius: "15px" }}>
                                <Gmap />
                            </div>
                        </div>
                    </div>
                    {/* Courier */}
                    <div className="row mb-50">
                        <div className="col-12">
                            <h4 className="mb-20">Delivery details</h4>
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <div className="me-3">
                                                <img src="assets/imgs/theme/user.png" alt="Courier" style={{ width: "70px", height: "60px", objectFit: "cover", borderRadius: "5px" }} />
                                            </div>
                                            <div>
                                                <h5 className="mb-1">Fred Strosin</h5>
                                                <div className="">
                                                    <span className="me-2" >Reviews Order</span>
                                                    <i className="text-warning font-xs fi-rs-star"></i> <span className="text-warning font-xs">4.8</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex gap-3">
                                            <a href="#" className="rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>
                                                <img src="assets/imgs/theme/icons/whatsapp.svg" alt="whatsapp" style={{ width: "20px" }} />
                                            </a>
                                            <a href="#" className="rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>
                                                <img src="assets/imgs/theme/icons/phone.svg" alt="call" style={{ width: "20px" }} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Products */}
                    <div className="row mb-50">
                        <div className="col-12">
                            <h4 className="mb-20">Products</h4>
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="table-responsive">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td className="p-4 border-bottom">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-3" style={{ width: "60px", height: "60px", border: "1px solid #ececec", borderRadius: "10px", padding: "5px" }}>
                                                            <img src="assets/imgs/shop/product-1-1.jpg" alt="CAYENNE" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                                        </div>
                                                        <h6 className="mb-0">CAYENNE</h6>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border-bottom">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-3" style={{ width: "60px", height: "60px", border: "1px solid #ececec", borderRadius: "10px", padding: "5px" }}>
                                                            <img src="assets/imgs/shop/product-2-1.jpg" alt="3 in 1 rosemary oil" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                                        </div>

                                                        <h6 className="mb-0">3 in 1 rosemary oil</h6>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border-bottom">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-3" style={{ width: "60px", height: "60px", border: "1px solid #ececec", borderRadius: "10px", padding: "5px" }}>
                                                            <img src="assets/imgs/shop/product-3-1.jpg" alt="anti hair loss hijab shampoo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                                        </div>

                                                        <h6 className="mb-0">anti hair loss hijab shampoo</h6>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border-bottom">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-3" style={{ width: "60px", height: "60px", border: "1px solid #ececec", borderRadius: "10px", padding: "5px" }}>
                                                            <img src="assets/imgs/shop/product-4-1.jpg" alt="inositol" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                                        </div>

                                                        <h6 className="mb-0">inositol</h6>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border-bottom">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-3" style={{ width: "60px", height: "60px", border: "1px solid #ececec", borderRadius: "10px", padding: "5px" }}>
                                                            <img src="assets/imgs/shop/product-5-1.jpg" alt="leanax" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                                        </div>

                                                        <h6 className="mb-0">leanax</h6>
                                                    </div>

                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                .steps-container {
                    display: flex;
                    justify-content: space-between;
                    position: relative;
                    padding: 20px 0;
                }
                .steps-container::before {
                    content: '';
                    position: absolute;
                    top: 45px;
                    left: 50px;
                    right: 50px;
                    height: 2px;
                    background: #e2e2e2;
                    z-index: 1;
                }
                .step {
                    text-align: center;
                    position: relative;
                    z-index: 2;
                    width: 25%;
                }
                .step-icon {
                    width: 50px;
                    height: 50px;
                    margin: 0 auto 15px;
                    background: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                }
                .step-icon img {
                    width: 30px;
                    height: 30px;
                    object-fit: contain;
                }
                .step.completed .step-icon img, .step.active .step-icon img {
                    filter: invert(56%) sepia(68%) saturate(464%) hue-rotate(66deg) brightness(92%) contrast(89%); /* Approximate green filter */
                }
                .step-title {
                    font-size: 16px;
                    font-weight: 700;
                    margin-bottom: 5px;
                    color: #3BB77E;
                }
                .step:not(.completed):not(.active) .step-title {
                    color: #7E7E7E;
                }
                /* Custom line segments */
                .step::after {
                    content: '';
                    position: absolute;
                    top: 25px;
                    left: 50%;
                    width: 100%;
                    height: 2px;
                    background: #e2e2e2;
                    z-index: -1;
                }
                .step:last-child::after {
                    display: none;
                }
                .step.completed::after {
                    background: #3BB77E;
                }
                
                /* Hide the main line if we use per-step lines */
                .steps-container::before {
                    display: none;
                }
            `}</style>
        </Layout>
    );
};
export default OrderTrack;
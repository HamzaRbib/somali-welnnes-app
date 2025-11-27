import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

const AuthModal = ({ show, handleClose }) => {
    const [step, setStep] = useState("login");

    // Reset to login step when modal is closed
    useEffect(() => {
        if (!show) {
            setTimeout(() => setStep("login"), 200);
        }
    }, [show]);

    return (
        <Modal
            show={show}
            onHide={handleClose}
            centered
            size="xl"
            contentClassName="border-0 custom-modal-rounded overflow-hidden"
            style={{ zIndex: 1050 }}
        >
            <Modal.Body className="p-0">
                <style>{`
                    .custom-radio-green:checked {
                        background-color: #84a606 !important;
                        border-color: #84a606 !important;
                    }
                    .custom-modal-rounded {
                        border-radius: 40px !important;
                    }
                `}</style>
                <div className="row g-0">
                    {step === "login" ? (
                        <>
                            <div className="col-lg-6 p-4 p-md-5 d-flex flex-column justify-content-center">
                                <h3 className="mb-2 fw-bold text-dark">Sign In</h3>
                                <p className="text-muted mb-4 small">
                                    Welcome back! We're happy to see you again
                                </p>

                                {/* Login/Register Toggle */}
                                <div className="text-center mb-3 position-relative">
                                    <hr className="m-0" style={{ color: "#eee" }} />
                                    <span className="position-absolute top-50 start-50 translate-middle bg-white px-2 text-muted small">
                                        Register via
                                    </span>
                                </div>
                                <div className="d-flex mb-3 align-items-center">
                                    <div className="form-check me-3">
                                        <input
                                            className="form-check-input rounded-circle custom-radio-green"
                                            type="radio"
                                            name="authType"
                                            id="loginRadio"
                                            style={{ borderRadius: "50%", width: "20px", height: "20px" }}
                                        />
                                        <label className="form-check-label" htmlFor="loginRadio">
                                            Login
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input rounded-circle custom-radio-green"
                                            type="radio"
                                            name="authType"
                                            id="registerRadio"
                                            defaultChecked
                                            style={{ borderRadius: "50%", width: "20px", height: "20px" }}
                                        />
                                        <label className="form-check-label" htmlFor="registerRadio">
                                            Register now
                                        </label>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label small fw-bold">Full Name *</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your Full name"
                                        style={{
                                            borderRadius: "8px",
                                            padding: "10px 15px",
                                            border: "1px solid #eee",
                                            backgroundColor: "#fff",
                                        }}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label small fw-bold">
                                        Phone Number *
                                    </label>
                                    <div className="input-group">
                                        <button
                                            className="btn btn-outline-secondary"
                                            type="button"
                                            style={{
                                                border: "1px solid #eee",
                                                borderRight: "none",
                                                backgroundColor: "#f9f9f9",
                                                color: "#333",
                                            }}
                                        >
                                            <div className="d-flex align-items-center">
                                                <img src="\assets\imgs\theme\flag.png" className="mr-5" />
                                                <span>+252</span>
                                            </div>
                                        </button>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter your Phone Number"
                                            style={{
                                                borderRadius: "0 8px 8px 0",
                                                padding: "10px 15px",
                                                border: "1px solid #eee",
                                                borderLeft: "none",
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="mb-4 form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="termsCheck"
                                    />
                                    <label
                                        className="form-check-label small text-muted"
                                        htmlFor="termsCheck"
                                    >
                                        Agree with{" "}
                                        <span style={{ color: "#84a606" }}>Terms & Condition</span>
                                    </label>
                                </div>

                                <button
                                    className="btn w-100 mb-3"
                                    onClick={() => setStep("otp")}
                                    style={{
                                        backgroundColor: "#84a606",
                                        color: "white",
                                        padding: "18px",
                                        borderRadius: "8px",
                                        fontWeight: "600",
                                        border: "none",
                                    }}
                                >
                                    Sign In
                                </button>

                                <div className="text-center mb-3 position-relative">
                                    <hr className="m-0" style={{ color: "#eee" }} />
                                    <span className="position-absolute top-50 start-50 translate-middle bg-white px-2 text-muted small">
                                        Or Sign up with
                                    </span>
                                </div>

                                <button
                                    className="btn w-100 mb-2 mt-5 d-flex align-items-center justify-content-center"
                                    style={{
                                        backgroundColor: "#1877F2",
                                        color: "white",
                                        borderRadius: "8px",
                                        padding: "18px",
                                        border: "none",
                                    }}
                                >
                                    <img
                                        src="/assets/imgs/theme/icons/logo-facebook.svg"
                                        alt=""
                                        style={{ width: "18px" }}
                                        className="me-2"
                                    />{" "}
                                    Sign In with Facebook
                                </button>
                                <button
                                    className="btn w-100 mb-2 d-flex align-items-center justify-content-center"
                                    style={{
                                        backgroundColor: "#fff",
                                        color: "#555",
                                        borderRadius: "8px",
                                        padding: "18px",
                                        border: "1px solid #eee",
                                    }}
                                >
                                    <img
                                        src="/assets/imgs/theme/icons/logo-google.svg"
                                        alt=""
                                        style={{ width: "18px" }}
                                        className="me-2"
                                    />{" "}
                                    Sign In with Google
                                </button>
                                <button
                                    className="btn w-100 d-flex align-items-center justify-content-center"
                                    style={{
                                        backgroundColor: "#000",
                                        color: "white",
                                        borderRadius: "8px",
                                        padding: "18px",
                                        border: "none",
                                    }}
                                >
                                    <img
                                        src="/assets/imgs/theme/icons/logo-apple.svg"
                                        alt=""
                                        style={{ width: "18px" }}
                                        className="me-2"
                                    />{" "}
                                    Sign In with Apple
                                </button>
                            </div>
                            <div className="col-lg-6 d-none d-lg-block p-2">
                                <img
                                    src="/assets/imgs/page/login-img.png"
                                    alt="Login"
                                    className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="col-lg-6 p-4 p-md-5 d-flex flex-column justify-content-center">
                                <h3 className="mb-2 fw-bold text-dark">Verify Code</h3>
                                <p className="text-muted mb-4 small">
                                    Please enter the code we just sent to phone number <br />
                                    <span style={{ color: "#84a606" }}>+972567408830</span>
                                </p>

                                <div className="d-flex justify-content-center mb-4 gap-4">
                                    {[1, 2, 3, 4].map((_, idx) => (
                                        <input
                                            key={idx}
                                            type="text"
                                            maxLength="1"
                                            className="form-control text-center fs-4 fw-bold"
                                            style={{
                                                width: "60px",
                                                height: "60px",
                                                borderRadius: "10px",
                                                border: "1px solid #DEDEDE",
                                            }}
                                        />
                                    ))}
                                </div>

                                <div className="text-center mb-4">
                                    <p className="text-muted small mb-1">Don't receive OTP ?</p>
                                    <a
                                        className="p-0 fw-bold"
                                        style={{ color: "#333", textDecoration: "underline" }}
                                    >
                                        Resend Code
                                    </a>
                                </div>

                                <button
                                    className="btn w-100"
                                    onClick={handleClose}
                                    style={{
                                        backgroundColor: "#84a606",
                                        color: "white",
                                        padding: "18px",
                                        borderRadius: "8px",
                                        fontWeight: "600",
                                        border: "none",
                                    }}
                                >
                                    Verify
                                </button>
                            </div>
                            <div className="col-lg-6 d-none d-lg-block p-2">
                                <img
                                    src="/assets/imgs/page/otp-img.png"
                                    alt="OTP"
                                    className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </>
                    )}
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default AuthModal;

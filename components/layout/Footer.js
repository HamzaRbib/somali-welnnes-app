import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="main">
        <section className="newsletter mb-15  wow animate__animated animate__fadeIn">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="position-relative newsletter-inner">
                  <div className="newsletter-content">
                    <h2 className="mb-20">
                      Nourish Your Skin Daily with Our Natural Care
                      Essentials
                    </h2>
                    <p className="mb-45 fw-bolder" style={{maxWidth: "50%"}}>
                      Discover creams, shampoos, and wellness products made to pamper your body.
                    </p>
                  </div>
                  <img
                    src="/assets/imgs/banner/banner-9.png"
                    alt="newsletter"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-padding footer-mid">
          <div className="container pt-15 pb-20">
            <div className="row">
              <div className="col">
                <div
                  className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0  wow animate__animated animate__fadeInUp"
                  data-wow-delay="0"
                >
                  <div className="logo  mb-30">
                    <Link href="/" className="mb-15">
                      <img src="/assets/imgs/theme/logo.svg" alt="logo" />
                    </Link>
                    <p className="font-lg text-heading">
                      High-Quality Products
                    </p>
                  </div>
                  <ul className="contact-infor">
                    <li>
                      <img
                        src="/assets/imgs/theme/icons/icon-location.svg"
                        alt="nest"
                      />
                      <strong>Address: </strong>{" "}
                      <span>Taleeh, Mogadishu - Somalia</span>
                    </li>
                    <li>
                      <img
                        src="/assets/imgs/theme/icons/icon-contact.svg"
                        alt="nest"
                      />
                      <strong>Call Us:</strong>
                      <span> (+252) - 610391010</span>
                    </li>
                    <li>
                      <img
                        src="/assets/imgs/theme/icons/icon-email-2.svg"
                        alt="nest"
                      />
                      <strong>Email:</strong>
                      <span>info@somaliwellness.com</span>
                    </li>
                  </ul>
                  <p className="mt-10">Follow us on social media platforms</p>
                  <div>
                    <img src="/assets/imgs/theme/instagram.svg" />
                    <img src="/assets/imgs/theme/facebook.svg" />
                    <img src="/assets/imgs/theme/x.svg" />
                    <img src="/assets/imgs/theme/whatsapp.svg" />
                  </div>
                </div>
              </div>
              <div className="footer-link-widget col  wow animate__animated animate__fadeInUp"></div>
              <div
                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                data-wow-delay=".1s"
              >
                <h4 className="widget-title">Company</h4>
                <ul className="footer-list  mb-sm-5 mb-md-0">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Help &amp; FAQ's</a>
                  </li>
                </ul>
              </div>
              <div
                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                data-wow-delay=".2s"
              >
                <h4 className="widget-title ">Account</h4>
                <ul className="footer-list  mb-sm-5 mb-md-0">
                  <li>
                    <a href="#">My account</a>
                  </li>
                  <li>
                    <a href="#">My Orders</a>
                  </li>
                  <li>
                    <a href="#">Manage Address</a>
                  </li>
                  <li>
                    <a href="#">My Coupons</a>
                  </li>
                </ul>
              </div>
              <div
                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                data-wow-delay=".3s"
              >
                <h4 className="widget-title ">Site map</h4>
                <ul className="footer-list  mb-sm-5 mb-md-0">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Supplements</a>
                  </li>
                  <li>
                    <a href="#">Personal Care</a>
                  </li>
                  <li>
                    <a href="#">Healthy Foods</a>
                  </li>
                  <li>
                    <a href="#">Special Offers</a>
                  </li>
                </ul>
              </div>
              <div
                className="footer-link-widget widget-install-app col  wow animate__animated animate__fadeInUp"
                data-wow-delay=".5s"
              >
                <h4 className="widget-title ">App & Payment</h4>
                <p className="">
                  Install SOMALI WELLNESS App from App Store or Google Play
                </p>
                <div className="download-app ">
                  <a href="#" className="hover-up mb-sm-2 mb-lg-0">
                    <img
                      className="active"
                      src="/assets/imgs/theme/app-store.jpg"
                      alt="nest"
                    />
                  </a>
                  <a href="#" className="hover-up mb-sm-2">
                    <img src="/assets/imgs/theme/google-play.jpg" alt="nest" />
                  </a>
                </div>
                <p className="mb-20 ">Secured Payment Gateways</p>
                <img
                  className=""
                  src="/assets/imgs/theme/payment-method.png"
                  alt="nest"
                />
              </div>
            </div>
          </div>
        </section>
        <div
          className="container pb-30  wow animate__animated animate__fadeInUp"
          data-wow-delay="0"
        >
          <div className="row align-items-center">
            <div className="col-12 mb-30">
              <div className="footer-bottom"></div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <p className="font-sm mb-0">
                Copyright © 2025 SOMALI WELLNESS System – Developed by Techzone.
                All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import React, { useState } from "react";
import SingleProduct from "../components/ecommerce/SingleProduct";
import Breadcrumb2 from "../components/layout/Breadcrumb2";
import Layout from "./../components/layout/Layout";
import Deals1 from "../components/elements/Deals1";
import CategoryProduct from "./../components/ecommerce/Filter/CategoryProduct";
import PriceRangeSlider from "./../components/ecommerce/Filter/PriceRangeSlider";
import SizeFilter from "./../components/ecommerce/Filter/SizeFilter";

const DealsPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Product 1",
      price: 100,
      oldPrice: 120,
      slug: "product-1",
      discount: {
        banner: "/assets/imgs/shop/product-1-1.jpg",
      },
    },
    {
      id: 2,
      title: "Product 2",
      price: 80,
      oldPrice: 90,
      slug: "product-2",
      discount: {
        banner: "/assets/imgs/shop/product-2-1.jpg",
      },
    },
    {
      id: 3,
      title: "Product 3",
      price: 150,
      oldPrice: 200,
      slug: "product-3",
      discount: {
        banner: "/assets/imgs/shop/product-3-1.jpg",
      },
    },
    {
      id: 4,
      title: "Product 4",
      price: 70,
      oldPrice: 80,
      slug: "product-4",
      discount: {
        banner: "/assets/imgs/shop/product-4-1.jpg",
      },
    },
    {
      id: 5,
      title: "Product 5",
      price: 90,
      oldPrice: 100,
      slug: "product-5",
      discount: {
        banner: "/assets/imgs/shop/product-5-1.jpg",
      },
    },
    {
      id: 6,
      title: "Product 6",
      price: 120,
      oldPrice: 150,
      slug: "product-6",
      discount: {
        banner: "/assets/imgs/shop/product-6-1.jpg",
      },
    },
    {
      id: 7,
      title: "Product 7",
      price: 130,
      oldPrice: 160,
      slug: "product-7",
      discount: {
        banner: "/assets/imgs/shop/product-7-1.jpg",
      },
    },
    {
      id: 8,
      title: "Product 8",
      price: 60,
      oldPrice: 70,
      slug: "product-8",
      discount: {
        banner: "/assets/imgs/shop/product-8-1.jpg",
      },
    },
  ]);

  return (
    <>
      <Layout noBreadcrumb="d-none">
        <Breadcrumb2 parent={"Hot Deals"} />
        <section className="mt-50 mb-50">
          <div className="container mb-30">
            <div className="row flex-row-reverse">
              <div className="col-lg-4-5">
                <div className="shop-product-fillter">
                  <div className="totall-product">
                    <p>
                      We found
                      <strong className="text-brand">{products.length}</strong>
                      items for you!
                    </p>
                  </div>
                </div>
                <div className="row">
                  {products.length === 0 && <h3>No Products Found </h3>}

                  {products.map((item) => (
                    <div
                      className="col-xl-4 col-lg-3 col-md-6"
                      key={item.id}
                    >
                      <Deals1 product={item} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-1-5 primary-sidebar sticky-sidebar">
                <div className="sidebar-widget widget-category-2 mb-30">
                  <h5 className="section-title style-1 mb-30">Category</h5>
                  <CategoryProduct />
                </div>

                <div className="sidebar-widget price_range range mb-30">
                  <h5 className="section-title style-1 mb-30">Fill by price</h5>

                  <div className="price-filter">
                    <div className="price-filter-inner">
                      <br />
                      <PriceRangeSlider />

                      <br />
                    </div>
                  </div>

                  <div className="list-group">
                    <div className="list-group-item mb-10 mt-10">
                      <label className="fw-900">Color</label>
                      <label className="fw-900 mt-15">Item Condition</label>
                      <SizeFilter />
                    </div>
                  </div>
                  <br />
                </div>

                <div className="sidebar-widget product-sidebar  mb-30 p-30 bg-grey border-radius-10">
                  <h5 className="section-title style-1 mb-30">New products</h5>
                  <div className="single-post clearfix">
                    <div className="image">
                      <img src="/assets/imgs/shop/thumbnail-3.jpg" alt="#" />
                    </div>
                    <div className="content pt-10">
                      <h5>
                        <a>Chen Cardigan</a>
                      </h5>
                      <p className="price mb-0 mt-5">$99.50</p>
                      <div className="product-rate">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="single-post clearfix">
                    <div className="image">
                      <img src="/assets/imgs/shop/thumbnail-4.jpg" alt="#" />
                    </div>
                    <div className="content pt-10">
                      <h6>
                        <a>Chen Sweater</a>
                      </h6>
                      <p className="price mb-0 mt-5">$89.50</p>
                      <div className="product-rate">
                        <div
                          className="product-rating"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="single-post clearfix">
                    <div className="image">
                      <img src="/assets/imgs/shop/thumbnail-5.jpg" alt="#" />
                    </div>
                    <div className="content pt-10">
                      <h6>
                        <a>Colorful Jacket</a>
                      </h6>
                      <p className="price mb-0 mt-5">$25</p>
                      <div className="product-rate">
                        <div
                          className="product-rating"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="banner-img wow fadeIn mb-lg-0 animated d-lg-block d-none">
                  <img src="/assets/imgs/banner/banner-11.png" alt="nest" />
                  <div className="banner-text">
                    <span>Oganic</span>
                    <h4>
                      Save 17% <br />
                      on <span className="text-brand">Oganic</span>
                      <br />
                      Juice
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default DealsPage;

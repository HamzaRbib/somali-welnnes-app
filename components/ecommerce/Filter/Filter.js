import CategoryProduct from './CategoryProduct';
import ColorFilter from './ColorFilter';
import PriceRange from './PriceRange';
import Rating from './Rating';
import SizeFilter from './SizeFilter';
import Tags from './Tags';

const ShopFilter = () => {
    return (
        <>
            <div className="shop-product-fillter-header">
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 mb-lg-0 mb-md-2 mb-sm-2">
                        <div className="card">
                            <h5 className="mb-30">By Categories</h5>
                            <div className="categories-dropdown-wrap font-heading">
                                <CategoryProduct />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 mb-lg-0 mb-md-2 mb-sm-2">
                        <div className="card">
                            <h5 className="mb-30">By Tags</h5>
                            <div className="sidebar-widget widget-tags">
                                <Tags />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 mb-lg-0 mb-md-2 mb-sm-2">
                        <div className="card">
                            <h5 className="mb-30">Price range</h5>
                            <PriceRange />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopFilter;

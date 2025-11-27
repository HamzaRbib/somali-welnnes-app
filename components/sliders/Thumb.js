import { useState } from "react";
import SwiperCore, { Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Thumbs]);

const ThumbSlider = ({ product }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                    marginBottom: '10px'
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Navigation, Thumbs]}
                className="mySwiper2"
            >
                {product.gallery.map((item) => (
                    <SwiperSlide key={item.thumb} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={item.thumb} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                watchSlidesProgress={true}
                modules={[Navigation, Thumbs]}
                className="mySwiper"
                centerInsufficientSlides={true}
                centeredSlides={true}
                centeredSlidesBounds={true}
                style={{ marginTop: '20px' }}
            >
                {product.gallery.map((item) => (
                    <SwiperSlide key={item.thumb} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={item.thumb} style={{ borderRadius: '10px', cursor: 'pointer', border: '1px solid #ececec', width: '100%', height: 'auto', objectFit: 'cover' }} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ThumbSlider;

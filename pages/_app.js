import { useEffect, useState } from "react";
// import "react-input-range/lib/css/index.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
import "react-responsive-modal/styles.css";
// import WOW from 'wowjs';
// Swiper Slider
import "swiper/css";
import "swiper/css/navigation";
import StorageWrapper from "../components/ecommerce/storage-wrapper";
import "../public/assets/css/main.css";
import store from "../redux/store";
import Preloader from "./../components/elements/Preloader";
import { listenToAuthChanges } from "../redux/action/auth";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);

        // new WOW.WOW({
        //     live: false
        //   }).init()
    }, []);

    return (
        <>
            {!loading ? (
                <Provider store={store}>
                    <AuthWrapper>
                        <StorageWrapper>
                                <Component {...pageProps} />
                                <ToastContainer />
                        </StorageWrapper>
                    </AuthWrapper>
                </Provider>
            ) : (
                <Preloader />
            )}
        </>
    );
}

const AuthWrapper = ({ children }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { isAuthenticated } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(listenToAuthChanges());
    }, [dispatch]);

    useEffect(() => {
        if (!isAuthenticated && router.pathname === "/page-account") {
            router.push("/page-login");
        }
    }, [isAuthenticated, router]);

    return children;
}

export default MyApp;

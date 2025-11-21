import Link from "next/link";
import Layout from "../components/layout/Layout";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerWithEmail } from "../redux/action/auth";
import { useRouter } from "next/router";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useDispatch();
    const router = useRouter();
    const { isAuthenticated, error } = useSelector(state => state.auth);

    if(isAuthenticated) {
        router.push("/");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            dispatch(registerWithEmail(email, password));
        } else {
            alert("Passwords do not match");
        }
    };

    return (
        <>
            <Layout parent="Home" sub="Pages" subChild="Register">
            <div className="page-content pt-150 pb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                            <div className="row">
                                <div className="col-lg-6 col-md-8">
                                    <div className="login_wrap widget-taber-content background-white">
                                        <div className="padding_eight_all bg-white">
                                            <div className="heading_s1 mb-50">
                                                <h1 className="mb-5">Create an Account</h1>
                                                <p>Already have an account? <Link href="/page-login">Log in instead!</Link></p>
                                            </div>
                                            {error && <div className="alert alert-danger">{error}</div>}
                                            <form method="post" onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email" />
                                                </div>
                                                <div className="form-group">
                                                    <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Password" />
                                                </div>
                                                <div className="form-group">
                                                    <input required type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} name="password" placeholder="Confirm password" />
                                                </div>
                                                
                                                <div className="form-group mb-30">
                                                    <button type="submit" className="btn btn-fill-out btn-block hover-up font-weight-bold" name="login">Submit &amp; Register</button>
                                                </div>
                                                <p className="font-xs text-muted"><strong>Note:</strong>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy</p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 pr-30 d-none d-lg-block">
                                    <div className="card-login mt-115">
                                        <a href="#" className="social-login facebook-login">
                                            <img src="/assets/imgs/theme/icons/logo-facebook.svg" alt="nest" />
                                            <span>Continue with Facebook</span>
                                        </a>
                                        <a href="#" className="social-login google-login">
                                            <img src="/assets/imgs/theme/icons/logo-google.svg" alt="nest" />
                                            <span>Continue with Google</span>
                                        </a>
                                        <a href="#" className="social-login apple-login">
                                            <img src="/assets/imgs/theme/icons/logo-apple.svg" alt="nest" />
                                            <span>Continue with Apple</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Layout>
        </>
    );
}

export default Register;

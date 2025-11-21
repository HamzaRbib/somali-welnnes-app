import Link from "next/link";
import Layout from "../components/layout/Layout";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginWithEmail,
  setUpRecaptcha,
  loginWithPhone,
  loginFailure,
} from "../redux/action/auth";
import { useRouter } from "next/router";
import { RecaptchaVerifier } from "firebase/auth";
import { auth } from "../config/firebase";

function Login() {
  const [loginMethod, setLoginMethod] = useState("email"); // email or phone
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (loginMethod === "phone" && !recaptchaVerifier) {
      try {
        const verifier = new RecaptchaVerifier(auth, "recaptcha-container", {
          size: "normal",
          callback: (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
          },
        });
        setRecaptchaVerifier(verifier);
        verifier.render();
      } catch (error) {
        dispatch(
          loginFailure("Failed to initialize reCAPTCHA. Please try again.")
        );
      }
    }
  }, [loginMethod, recaptchaVerifier, dispatch]);

  if (isAuthenticated) {
    router.push("/");
  }

  const handleEmailLogin = (e) => {
    e.preventDefault();
    dispatch(loginWithEmail(email, password));
  };

  const handlePhoneLogin = (e) => {
    e.preventDefault();
    if (!phoneNumber.startsWith("+")) {
      dispatch(
        loginFailure(
          "Invalid phone number format. Please use E.164 format (e.g., +12223334444)."
        )
      );
      return;
    }
    dispatch(setUpRecaptcha(phoneNumber, recaptchaVerifier));
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    dispatch(loginWithPhone(verificationCode));
  };

  return (
    <>
      <Layout parent="Home" sub="Pages" subChild="Login & Register">
        <div className="page-content pt-150 pb-150">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                <div className="row">
                  <div className="col-lg-6 pr-30 d-none d-lg-block">
                    <img
                      className="border-radius-15"
                      src="/assets/imgs/page/login-1.png"
                      alt="nest"
                    />
                  </div>
                  <div className="col-lg-6 col-md-8">
                    <div className="login_wrap widget-taber-content background-white">
                      <div className="padding_eight_all bg-white">
                        <div
                          id="recaptcha-container-dummy"
                          style={{ display: "none" }}
                        ></div>
                        <div className="heading_s1">
                          <h1 className="mb-5">Login</h1>
                          <p className="mb-30">
                            Don't have an account?{" "}
                            <Link href="/page-register">Create here</Link>
                          </p>
                        </div>
                        {error && (
                          <div className="alert alert-danger">{error}</div>
                        )}
                        <div className="form-group">
                          <button
                            className="btn btn-sm mr-10"
                            onClick={() => setLoginMethod("email")}
                          >
                            With Email
                          </button>
                          <button
                            className="btn btn-sm"
                            onClick={() => setLoginMethod("phone")}
                          >
                            With Phone
                          </button>
                        </div>

                        {loginMethod === "email" && (
                          <form method="post" onSubmit={handleEmailLogin}>
                            <div className="form-group">
                              <input
                                type="text"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                placeholder="Username or Email *"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                required
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                name="password"
                                placeholder="Your password *"
                              />
                            </div>
                            <div className="form-group">
                              <button
                                type="submit"
                                className="btn btn-heading btn-block hover-up"
                                name="login"
                              >
                                Log in
                              </button>
                            </div>
                          </form>
                        )}

                        {loginMethod === "phone" && (
                          <form method="post">
                            <div className="form-group">
                              <input
                                type="text"
                                required
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                name="phone"
                                placeholder="Phone Number (e.g., +12223334444) *"
                              />
                            </div>
                            <div
                              id="recaptcha-container"
                              style={{ marginBottom: "10px" }}
                            ></div>
                            <div className="form-group">
                              <button
                                type="button"
                                onClick={handlePhoneLogin}
                                className="btn btn-heading btn-block hover-up"
                              >
                                Send Code
                              </button>
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                required
                                value={verificationCode}
                                onChange={(e) =>
                                  setVerificationCode(e.target.value)
                                }
                                name="code"
                                placeholder="Verification Code *"
                              />
                            </div>
                            <div className="form-group">
                              <button
                                type="button"
                                onClick={handleVerifyCode}
                                className="btn btn-heading btn-block hover-up"
                              >
                                Verify
                              </button>
                            </div>
                          </form>
                        )}
                      </div>
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

export default Login;

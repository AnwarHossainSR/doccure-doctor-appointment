import assets from "../../../assets";
const Login = () => {
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="account-content">
            <div className="login-left">
              <img
                src={assets.images.LoginBanner}
                className="img-fluid"
                alt="Doccure Login"
              />
            </div>
            <div className="login-right">
              <div className="login-header">
                <h3>
                  Login <span>Doccure</span>
                </h3>
              </div>
              <form>
                <div className="form-group form-focus">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="email"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group form-focus">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    autoComplete="off"
                  />
                </div>
                <div className="text-right">
                  <a className="forgot-link" href="forgot-password.html">
                    Forgot Password ?
                  </a>
                </div>
                <button
                  className="btn btn-primary btn-block btn-lg login-btn"
                  type="submit"
                >
                  Login
                </button>
                <div className="login-or">
                  <span className="or-line" />
                  <span className="span-or">or</span>
                </div>
                <div className="social-login">
                  <div className="col-6">
                    <a href="#" className="btn-facebook">
                      <i className="fab fa-facebook-f mr-1" /> Login
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="#" className="btn-google">
                      <i className="fab fa-google mr-1" /> Login
                    </a>
                  </div>
                </div>
                <div className="dont-have">
                  Don’t have an account? <a href="register.html">Register</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

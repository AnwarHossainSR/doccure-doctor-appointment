import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import assets from '../../../assets';
const Registration = () => {
  return (
    <div className='content'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='account-content'>
            <div className='login-left'>
              <img
                src={assets.images.LoginBanner}
                className='img-fluid'
                alt='Doccure Login'
              />
            </div>
            <div className='login-right'>
              <div className='login-header'>
                <h3>
                  Registration <span>Doccure</span>
                </h3>
              </div>
              <form>
                <div className='form-group form-focus'>
                  <input
                    name='name'
                    type='text'
                    className='form-control'
                    placeholder='name'
                    autoComplete='off'
                  />
                </div>
                <div className='form-group form-focus'>
                  <input
                    name='email'
                    type='email'
                    className='form-control'
                    placeholder='email'
                    autoComplete='off'
                  />
                </div>
                <div className='form-group form-focus'>
                  <input
                    name='password'
                    type='password'
                    className='form-control'
                    placeholder='password'
                    autoComplete='off'
                  />
                </div>
                <div className='text-right'>
                  <Link to='/login' className='forgot-link'>
                    Already have an account?
                  </Link>
                </div>
                <button
                  className='btn btn-primary btn-block btn-lg login-btn'
                  type='submit'
                >
                  Login
                </button>
                <div className='login-or'>
                  <span className='or-line' />
                  <span className='span-or'>or</span>
                </div>
                <div className='social-login'>
                  <div className='col-6'>
                    <Link to='#' className='btn-facebook'>
                      <FaFacebookF /> Login
                    </Link>
                  </div>
                  <div className='col-6'>
                    <Link to='#' className='btn-google'>
                      <FaGoogle /> Login
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

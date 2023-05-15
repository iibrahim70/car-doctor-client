import React, { useContext, useState } from 'react';
import img from '../../assets/images/login/login.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../shared/SocialLogin';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const location = useLocation(); 
  const navigate = useNavigate(); 

  const from = location.state?.from?.pathname || '/'; 

  const handleLogin = e => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(res => {
        const user = res.user;
        console.log(user);
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <div className="hero min-h-screen w-[90%] mx-auto my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                {loading ? <progress className="progress w-56"></progress> : 
                  <input className='btn btn-primary' type="submit" value="Login" />
                }
              </div>
            </form>
            <p className='my-5 text-center'>New to Car Doctors? <Link className='font-bold text-[#FF3811]' to={'/signup'}>Signup</Link></p>
            <SocialLogin/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

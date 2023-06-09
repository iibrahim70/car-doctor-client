import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../shared/SocialLogin';

const Signup = () => {
  const { createUser } = useContext(AuthContext); 

  const handleSignup = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value; 
    const password = form.password.value;

    createUser(email, password)
      .then(res => {
        const user = res.user; 
        console.log(user);
      })
      .catch(err => console.log(err)); 
  }

  return (
    <div className="hero min-h-screen w-[90%] mx-auto my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center">Signup</h1>
            <form onSubmit={handleSignup}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <input className='btn btn-primary' type="submit" value="Signup" />
              </div>
            </form>
            <p className='my-5 text-center'>Already Have Account? <Link className='font-bold text-[#FF3811]' to={'/login'}>Login</Link></p>
            <SocialLogin/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
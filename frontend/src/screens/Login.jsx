import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { setUserLoginDetails } from '../features/user/userSlice';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  let navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/login/login", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email:email, password: password })

    });
    const json = await response.json()
    console.log(json);

    if (json.success) {
      // alert("Succesfull");
      if(email==="admin@gmail.com")
      {
          localStorage.setItem('admin',"true");
      }
      //save the auth toke to local storage and redirect
      localStorage.setItem('userEmail', email)
      localStorage.setItem('token', json.authToken)
      localStorage.setItem('name', json.name)
      if(json.userRole=='Student')
      {
          navigate("/student/mycourses")
      }
      else{
        navigate('/volunteer/home')
      }
    }
    else {
      alert("Enter Valid Credentials")
    }
  };

  return (
    <div className="flex gap-10 justify-center items-center h-screen bg-gradient-to-br from-teal-400 to-purple-500">
    <div className="text-400" style={{ color: "rgba(0, 0, 0, 0.7)" }}>
  Lamp Education and charitable trust is a non-profit organization started in 2010 by Jaganathan Rajagopal in Bangalore. The organization helps educate dropped out students to complete their education by providing them with coaching and tuitions through the help of volunteers who are willing to participate in teaching. It has helped more than 200 students in completing their studies till graduation. It has conducted more than 40 volunteering events so far.

  Lamp also provides training and opportunities to underprivileged women to help them find employment and set up their home business.
</div>


      <div className="w-3/4 md:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold mb-6 text-center text-teal-800">Welcome back!</h2>
        <form>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleLogin}
            >
              Sign In
            </button>
            <Link
              to="/register"
              className="inline-block align-baseline font-bold text-sm text-purple-600 hover:text-purple-700"
            >
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

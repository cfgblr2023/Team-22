import React, { useState } from 'react';
import {useNavigate, Link } from 'react-router-dom';
import './Register.css'




const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  let navigate = useNavigate()


  const handleRegister = async(e) => {
    e.preventDefault();
   
    if(email.trim().length==0 || password.trim().length==0 || address.trim().length==0 || name.trim().length==0 || age.trim().length==0)
    {
        alert('Please fill all the fields');
    }

    const response = await  fetch("http://localhost:5000/api/register/register", 
    {
    // credentials: 'include',
    // Origin:"http://localhost:3000/login",
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email, password: confirmPassword, name: name, age:age,role:address })
  });

  const json = await response.json()
  if (json.success) {
    navigate("/");
  }
  else {
    alert("Enter Valid Credentials")
  }

    // Registration logic likh do idhar
    // once registration successfull write the redux part here.
   };

  return (
    <div className="flex gap-10 justify-center items-center h-screen bg-gradient-to-br from-teal-400 to-purple-500">
    <div className='text-400' >Lamp Education and charitable trust is a non-profit organization started in 2010 by Jaganathan Rajagopal in Bangalore.
The organization helps educate dropped out students to complete their education by a them with their studies
through coaching and tuitions with the help of volunteers who are willing to participate in teaching. It has helped more
than 200 students in completing their studies tll graduation. It has conducted more than 40 volunteering events so far.

Lamp also provides trainings and opportunities to underprivileged women to help them find employment and set up
their home business.

</div>
      <div className="w-3/4 md:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold mb-6 text-center text-purple-800">Create an Account</h2>
        <form >
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
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Volunteer / Student
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="Role"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
              Age
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="age"
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleRegister}
            >
              Register
            </button>
            <Link
              to="/"
              className="inline-block align-baseline font-bold text-sm text-teal-600 hover:text-teal-700"
            >
              Already have an account? Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

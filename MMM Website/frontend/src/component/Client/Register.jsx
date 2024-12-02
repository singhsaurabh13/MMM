import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa'; // Import eye and social media icons from react-icons
import { Link } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // State to show/hide password
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form Data:', formData);
      // Reset form
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className='flex items-center justify-center h-screen bg'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Register</h2>
        <p className='text-red-600 text-center'><i>Register now and get 99 TRX bonus as a gift!</i></p>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
            <div>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
              />
              {errors.name && <p className='text-red-500 text-xs italic'>{errors.name}</p>}
            </div>

            <div>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && <p className='text-red-500 text-xs italic'>{errors.email}</p>}
            </div>

            <div>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                Password
              </label>
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute inset-y-0 right-0 pr-3 flex items-center'
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && <p className='text-red-500 text-xs italic'>{errors.password}</p>}
            </div>

            <div>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='confirmPassword'>
                Confirm Password
              </label>
              <div className='relative'>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id='confirmPassword'
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.confirmPassword ? 'border-red-500' : ''}`}
                />
                <button
                  type='button'
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className='absolute inset-y-0 right-0 pr-3 flex items-center'
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.confirmPassword && <p className='text-red-500 text-xs italic'>{errors.confirmPassword}</p>}
            </div>
          </div>
          <div className='flex justify-between mb-4'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Register
            </button>
            <Link to='/login'
              className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Login
            </Link>
            <button
              type='button'
              onClick={() => setFormData({ name: '', email: '', password: '', confirmPassword: '' })}
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Reset
            </button>
          </div>
        </form>
        
        {/* Social Login Section */}
        <div className='flex flex-col items-center mt-4'>
          <p className='text-gray-700 mb-2'>Or register with:</p>
          <div className='flex space-x-4'>
            <button className='bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center'>
              <FaFacebook className='mr-2' />
              Facebook
            </button>
            <button className='bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center'>
              <FaGoogle className='mr-2' />
              Google
            </button>
            <button className='bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center'>
              <FaTwitter className='mr-2' />
              Twitter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

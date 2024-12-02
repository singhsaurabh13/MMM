import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaFacebookF, FaGoogle, FaInstagram, FaTelegramPlane } from 'react-icons/fa';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    captcha: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [generatedCaptcha, setGeneratedCaptcha] = useState(generateCaptcha());
  const [errors, setErrors] = useState({});

  function generateCaptcha() {
    return Math.floor(100000 + Math.random() * 9000).toString(); // Generates a random 4-digit number
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.captcha !== generatedCaptcha) newErrors.captcha = 'CAPTCHA is incorrect';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form Data:', formData);
      // Reset form
      setFormData({ email: '', password: '', captcha: '' });
      setGeneratedCaptcha(generateCaptcha()); // Generate a new CAPTCHA
      setErrors({}); // Clear errors after successful submission
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className='flex items-center justify-center h-screen bg'>
      <div className='bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-lg'>
        <h2 className='text-2xl font-bold mb-6 text-center text-black'>Login</h2>
        <p className='text-red-600 text-center'><i>Register now and get 99 TRX bonus as a gift!</i></p>
        <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-semibold mb-2' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className={`shadow-md appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out ${
                errors.email ? 'border-red-500' : ''
              }`}
              placeholder='Enter your email'
            />
            {errors.email && <p className='text-red-500 text-xs italic'>{errors.email}</p>}
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-semibold mb-2' htmlFor='password'>
              Password
            </label>
            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                className={`shadow-md appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out ${
                  errors.password ? 'border-red-500' : ''
                }`}
                placeholder='Enter your password'
              />
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-3 top-3 text-gray-500 hover:text-blue-600'
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && <p className='text-red-500 text-xs italic'>{errors.password}</p>}
          </div>

          {/* CAPTCHA Section */}
          <div className='mb-4 col-span-1'>
            <label className='block text-gray-700 text-sm font-semibold mb-2' htmlFor='captcha'>
              Enter CAPTCHA
            </label>
            <input
              type='text'
              id='captcha'
              name='captcha'
              value={formData.captcha}
              onChange={handleChange}
              className={`shadow-md appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out ${
                errors.captcha ? 'border-red-500' : ''
              }`}
              placeholder='Enter the CAPTCHA'
            />
            {errors.captcha && <p className='text-red-500 text-xs italic'>{errors.captcha}</p>}
          </div>

          <div className='mb-4 col-span-1'>
            <label className='block text-gray-700 text-sm font-semibold mb-2'>
              CAPTCHA:
            </label>
            <input
              type="text"
              value={generatedCaptcha}
              disabled
              className={`shadow-md appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 font-bold transition duration-150 ease-in-out ${
                errors.password ? 'border-red-500' : ''
              }`}
            />
          </div>

          <div className='flex justify-center md:col-span-2'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out'
            >
              Submit
            </button>
          </div>
        </form>

        {/* Paragraph for users without an account */}
        <p className='mt-4 text-center text-gray-600'>
          Don't have an account? <a href="/register" className='text-blue-600 font-semibold'>Sign Up</a>
        </p>

        {/* Social Media Icons Section */}
        <div className='flex justify-center mt-6 space-x-4'>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='text-gray-700 hover:text-blue-600'>
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className='text-gray-700 hover:text-red-600'>
            <FaGoogle size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='text-gray-700 hover:text-pink-600'>
            <FaInstagram size={24} />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className='text-gray-700 hover:text-blue-500'>
            <FaTelegramPlane size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

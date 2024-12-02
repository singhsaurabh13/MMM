import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const Hero = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // Array of image URLs
  const images = [
    'https://cdn.pixabay.com/photo/2019/12/01/05/02/keyboard-4664732_1280.jpg',
    'https://cdn.pixabay.com/photo/2024/03/12/20/32/bitcoin-8629503_960_720.jpg',
    'https://cdn.pixabay.com/photo/2019/07/19/12/25/hands-4348717_1280.jpg',
  ];

  return (
    <>
      <div className="slider-container h-screen overflow-hidden">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="w-full h-screen object-cover" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="p-8 sm:p-16">
        <h1 className="text-2xl sm:text-3xl text-center pb-5 font-bold">
          ---- Welcome to the <span className="text-red-600">[Company Name]</span> System ----
        </h1>

        <div className="space-y-4 text-justify sm:text-left">
          <p>
            I am sure you are on the right track if you are reading this page. [Company Name] is a project that will make your life better and give you financial freedom for you and your family! MMMGI is a new financial social platform where everyone helps each other with money. This is a platform where you, very soon, will begin to receive financial assistance from ordinary participants like you, dear investor! By joining the project, you will change the world for the better, you will help people, and they will help you double/triple.
          </p>
          <p>
            The MMMGI project is a cycle of goodness, valuable ideas, initiatives, and a constant exchange of help, but the most important thing is that you will constantly receive money! Many people come to this system for the sake of money, but then remain in our MMM Global Infinity community for ideological purposes. Our ideology is changing the world for the better, fighting poverty, and social inequality.
          </p>
          <p>
            Our goal is to unite all countries into one big and united family, where everyone will help each other. The union is our main goal! Together, we can create a community for a better and happy life! Our main mission is to unite all countries under one name, MMM Global. The biggest strength lies in people coming together.
          </p>
          <p>
            Through the system MMM Global Infinity, everyone has the opportunity to achieve financial freedom and prosperity. Based on the requests from leaders all over the world from countries like China, Taiwan, South Africa, India, Indonesia, Nigeria, and others, we continue the legacy of Sergey Mavrodi.
          </p>
        </div>

        <div className="mt-8">
          <h1 className="text-xl font-semibold">
            To learn more about MMMGI,
          </h1>
          <div className="flex flex-wrap gap-4 mt-4">
            <Link to='/contactus' className="bg-green-600 text-white py-2 px-6 rounded-md cursor-pointer">
              Contact Us
            </Link>
            <div className="bg-blue-500 text-white py-2 px-6 rounded-md cursor-pointer">
              Join Now
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

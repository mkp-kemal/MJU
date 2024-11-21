// src/components/Dashboard.tsx

import React from 'react';
import img_1 from '../assets/1.jpg';
import img_2 from '../assets/2.jpg';
import img_3 from '../assets/3.jpg';
import img_4 from '../assets/4.jpg';
import img_5 from '../assets/5.jpg';
import food_grade from '../assets/food_grade.png';
import halal from '../assets/halal.png';


const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-2 sm:p-4 md:p-16 min-h-screen bg-gray-100">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 w-full">
          <div className="flex flex-col md:flex-row md:space-x-4 justify-center mt-2 w-full">
            <div className="w-full md:w-1/2 p-1 sm:p-2">
              <img
                src={img_4}
                alt="Buffet setup"
                className="w-full h-40 sm:h-48 md:h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-1 sm:p-2">
              <img
                src={img_3}
                alt="Boxed meals preparation"
                className="w-full h-40 sm:h-48 md:h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Slogan Section */}
      <div className="w-full bg-gradient-to-r from-purple-900 to-blue-900 mt-4 p-2 sm:p-4 md:p-6 text-center rounded-lg shadow-lg">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white italic">Makanan sehat untuk anda</h1>
      </div>

      {/* Featured Menu Section */}
      <div className="w-full mt-6 sm:mt-8 overflow-x-auto">
        <div className="flex space-x-2 sm:space-x-4">
          <div className="min-w-[200px] sm:min-w-[250px] p-2 sm:p-4 bg-white rounded-lg shadow-md">
            <img
              src={img_5}
              alt="Dish 1"
              className="w-full h-28 sm:h-32 md:h-40 object-cover rounded-lg mb-2 sm:mb-4"
            />
            <h3 className="text-sm sm:text-base md:text-xl font-bold text-blue-800">Liwet</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 sm:mt-2">Makanan khas Sunda yang terbuat dari beras, santan, dan berbagai bumbu.</p>
          </div>
          <div className="min-w-[200px] sm:min-w-[250px] p-2 sm:p-4 bg-white rounded-lg shadow-md">
            <img
              src={img_1}
              alt="Dish 2"
              className="w-full h-28 sm:h-32 md:h-40 object-cover rounded-lg mb-2 sm:mb-4"
            />
            <h3 className="text-sm sm:text-base md:text-xl font-bold text-blue-800">Salad</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 sm:mt-2">Salad segar dengan sayuran, buah, dan berbagai bumbu.</p>
          </div>
          <div className="min-w-[200px] sm:min-w-[250px] p-2 sm:p-4 bg-white rounded-lg shadow-md">
            <img
              src={img_2}
              alt="Dish 3"
              className="w-full h-28 sm:h-32 md:h-40 object-cover rounded-lg mb-2 sm:mb-4"
            />
            <h3 className="text-sm sm:text-base md:text-xl font-bold text-blue-800">Catering</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 sm:mt-2">Layanan katering yang menyediakan berbagai macam hidangan.</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-start w-full bg-purple-50 rounded-lg shadow-lg p-6 md:p-8 mt-10">
        {/* Left Column - Text Content */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-10">
          <h2 className="text-base sm:text-lg md:text-2xl font-semibold text-blue-700 mb-2">
            {/* Profil <span className="italic">PT. Mulia Jaya Umat</span> */}
            Profile
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-2 sm:mb-4 text-justify">
            {/* Dapur Sehat <br /> */}
            PT. Mulia Jaya Umat
          </p>
          <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-2 sm:mb-4 text-justify">
            <b>Direktur:</b> Rosita, SP <br />
            <b>Komisaris:</b> Sugandi Miharja
          </p>
          <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-2 sm:mb-4 text-justify">
            <b>Alamat:</b> Jln. Darmita Atmadja, No. 25, Ganjar Sabar, Kec Nagreg, Kab. Bandung
          </p>
        </div>

        {/* Right Column - Profile and Certifications */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start bg-white rounded-lg p-2 sm:p-4 shadow-md">
          <div className="flex justify-center w-full">
            <img
              src={food_grade}
              alt="Food Grade Certification"
              className="w-16 h-12 sm:w-20 sm:h-14 md:w-28 md:h-28 rounded-md mx-1 sm:mx-2 mb-2 sm:mb-4"
            />
            <img
              src={halal}
              alt="Halal Certification"
              className="w-16 h-12 sm:w-20 sm:h-14 md:w-28 md:h-28 rounded-md mx-1 sm:mx-2 mb-2 sm:mb-4"
            />
          </div>
          <div className="bg-purple-100 mt-3 sm:mt-5 rounded-lg p-3 sm:p-4 w-full text-center text-blue-700">
            <p className="text-xs sm:text-sm font-semibold">Halal & Food Grade:</p>
            <p className="text-xs sm:text-sm md:text-base">Makanan kami dijamin halal dan berkualitas food grade</p>
            <p className="text-xs sm:text-sm md:text-base">Proses produksi higienis dan bahan terjamin</p>
          </div>
        </div>
      </div>

      {/* Maps Section */}
      <div className="w-full mt-10">
        <h2 className="text-base sm:text-lg md:text-2xl font-semibold text-blue-700 mb-4">Lokasi PT. Mulia Jaya Umat<p className='italic text-sm'>Jln. Darmita Atmadja, No. 25, Ganjar Sabar, Kec Nagreg, Kab. Bandung</p></h2>
        <div className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3959.895547299765!2d107.88093136335948!3d-7.021562883216017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDEnMTcuNCJTIDEwN8KwNTMnMDAuMiJF!5e0!3m2!1sen!2sid!4v1731298467118!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Lokasi Dapur Sehat"
          ></iframe>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;

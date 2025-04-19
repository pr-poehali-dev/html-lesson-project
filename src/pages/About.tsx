import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded p-6">
        <h1 className="text-2xl font-bold mb-4">Обо мне</h1>
        
        <div className="space-y-4">
          <p>Это страница с информацией обо мне.</p>
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo 
            nec mauris fringilla faucibus. Morbi ac mi vitae sem finibus tempor.
          </p>
          
          <div className="mt-4">
            <Link 
              to="/" 
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Вернуться на главную
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

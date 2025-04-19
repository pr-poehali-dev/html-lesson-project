import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded p-6">
        <h1 className="text-2xl font-bold mb-4">Первая страница Иванова Ивана</h1>
        
        <div className="space-y-4">
          <p>Привет!</p>
          
          <p className="text-center">Текст выровненный по центру</p>
          <p className="text-left">Текст выровненный по левой границе</p>
          <p className="text-right">Текст выровненный по правой границе</p>
          
          <p className="text-red-500 text-3xl">Как дела?</p>
          <p className="text-green-500 text-2xl">Как дела?</p>
          <p className="text-blue-500 text-4xl">Как дела?</p>
          <p className="text-purple-500 text-5xl">Как дела?</p>
          <p className="text-black text-xl">Как дела?</p>
          
          <div className="space-y-2 mt-6">
            <p><i>Это курсивный текст</i></p>
            <p><b>Это жирный текст</b></p>
            <p><u>Это подчеркнутый текст</u></p>
            <p><s>Это зачеркнутый текст</s></p>
            <p>X<sup>2</sup> - верхний индекс</p>
            <p>H<sub>2</sub>O - нижний индекс</p>
            <p className="text-blue-500"><b><i>Это жирный курсивный текст синего цвета</i></b></p>
          </div>
          
          <div className="mt-4 space-y-2">
            <div>
              <Link 
                to="/about" 
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Перейти на страницу обо мне
              </Link>
            </div>
            
            <div>
              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Открыть Google в новой вкладке
              </a>
            </div>
            
            <div>
              <a 
                href="https://yandex.ru" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Открыть Яндекс в новой вкладке
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-sm text-gray-500">
          <p>Пример HTML страницы</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
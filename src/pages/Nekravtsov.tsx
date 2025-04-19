import React from "react";

const Nekravtsov = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded p-6">
        <h1 className="text-2xl font-bold mb-4">Первая страница Некравцова Тимофея</h1>
        
        <div className="space-y-4">
          <p>Привет!</p>
          
          <p className="text-center">
            Текст выровненный по центру
          </p>
          <p className="text-left">
            Текст выровненный по левой границе
          </p>
          <p className="text-right">
            Текст выровненный по правой границе
          </p>
          
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
        </div>
      </div>
    </div>
  );
};

export default Nekravtsov;
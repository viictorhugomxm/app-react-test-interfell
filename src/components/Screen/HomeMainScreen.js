import React from 'react';
import { Header } from '../ui/Header';
import { HomeMainDescription } from '../ui/HomeMainDescription';
import backgroundHome from "../../assets/bg-home1.png";
import CarCollage from "../../assets/CarCollage.png";

export const HomeMainScreen = () => {

  return (
    <div className="h-screen bg-transparent" >
      <Header/>
      <div className="flex flex-col md:items-center h-full justify-between md:flex-row">
        <HomeMainDescription />
        <div className="bg-cover  w-1/6 imagen-bg-home">
          <img src={backgroundHome} alt="Fondo" />
          <img src={CarCollage} className="imagen-carcollage-home" alt="Fondo" />
        </div>
      </div>

    </div>
  );
};

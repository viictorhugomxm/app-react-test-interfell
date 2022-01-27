import React from 'react';
import { ServicesCard } from '../ui/ServicesCard';
import Carrito from '../../assets/carrito.png';
import Casita from '../../assets/casita1.png';
import Negocio from '../../assets/negocio1.png';
import Placa from '../../assets/placa2.png'

export const ServiceScreen = () => {
  return (
    <div className=" h-screen flex flex-col">

      <div className="text-center">
        <p className="fuente-secundaria">Servicios</p>
        <h2 className="fuente-principal text-3xl fuente-gruesa">Tu agente cercano: en Hammer Insurance nadie se queda atrás</h2>
        <h3 className="fuente-principal">En Hammer Insurance siempre hablamos tu idioma, conocemos tu comunidad, somos vecinos.</h3>
      </div>

      <div className="flex md:h-3/4 md:flex-row items-center h-auto flex-col text-center">
        <ServicesCard 
          title="Auto"
          description="Múltiples opciones y descuentos, SR-22. Te ofrecemos la cobertura perfecta. ¡siempre a tu lado cuando nos necesites!"
          image={Carrito}
        />

        <ServicesCard 
          title="Hogar"
          description="Protege tu casa, propiedad en alquiler, casa móvil o seguro de inquilino. Elige entre múltiples opciones."
          image={Casita}
        />

        <ServicesCard 
          title="Negocio"
          description="Asegura tu negocio, tus trabajadores, y cualquier vehículoculo commercial. General Liability, Workers Comp, Bonds etc."
          image={Negocio}
        />

        <ServicesCard 
          title="Placas"
          description="Hammer renueva las placas y calcomanías de su auto, además de gestionar el cambio de propietario y demás tramitaciones."
          image={Placa}
        />
      </div>


      <a href="#" className="borde-boton fuente-principal fuente-gruesa ml-3 px-10 py-3 rounded md:w-1/4 w-auto text-center centrar">Ver todos los servicios</a>

    </div>
  );
};

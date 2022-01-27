import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex w-full items-center p-3 flex-col  md:flex-row justify-between">
      <div className="md:w-1/5 flex justify-start flex-col text-center w-full md:text-left ml-4">
        <p className="fuente-principal fuente-gruesa uppercase text-2xl md:w-1/2 w-full fuente-grande">Hammer</p>
        <p className="fuente-principal fuente-gruesa ">Insurance</p>
      </div>
      <nav className="w-4/5 items-center justify-center flex">
        <ul className="flex items-center w-48 fuente-gruesa flex-col md:w-full md:justify-around md:flex-row">
          <li><a href="#" className="fuente-principal borde-nav-1">Servicios</a></li>
          <li><a href="#" className="fuente-principal borde-nav-1">Pagos</a></li>
          <li><a href="#" className="fuente-principal borde-nav-1">Oficinas</a></li>
          <li><a href="#" className="fuente-principal borde-nav-1">Blog</a></li>
          <li><a href="#" className="md:text-white fuente-principal borde-nav-2">Nosotros</a></li>
          <li><a href="#" className="md:text-white fuente-principal borde-nav-2">Contacto</a></li>
          <li><a href="#" className="md:text-white fuente-principal borde-nav-2">Pedir Presupuesto</a></li>
          <li><a href="#" className="md:text-white fuente-principal borde-nav-2">SPA</a></li>
        </ul>
      </nav>
    </header>
  );
};

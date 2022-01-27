export const HomeMainDescription = () => {
  return (
    <div className="w-auto md:w-1/2 text-center md:text-left m-8">
      <p className="fuente-secundaria">Seguro integral en el que puedes confiar</p>
      <h1 className="fuente-principal fuente-gruesa text-4xl md:pt-2">Confía en Hammer <br/> Insurance ¡somos vecinos!</h1>
      <p className="fuente-principal md:pt-2">Calidad en el trato al cliente y los mejores precios del mercado, amplias coberturas y facilidad en los pagos.</p>
      <div className="md:pt-8 flex items-center flex-col md:flex-row">
        <a href="#" className="fondo-secundario fuente-gruesa text-white px-10 py-3 rounded">Servicios</a>
        <a href="#" className="borde-boton fuente-principal fuente-gruesa ml-3 px-10 py-3 rounded">Solicitar Presupuesto</a>
      </div>
    </div>
  );
};

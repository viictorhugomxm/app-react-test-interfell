export const ServicesCard = ({title, description,image}) => {
  return (
    <div className="h-1/2">
      <div>
        <h3 className="fuente-principal text-2xl fuente-gruesa">{title}</h3>
        <p>{description}</p>
        <div className="flex md:flex-row flex-col-reverse items-center justify-center">
          <a href="#" className="borde-boton rounded px-3 py-1 fuente-principal">Ver más</a>
          <img src={image} alt="Imagen" />
        </div>
      </div>
    </div>
  )
};

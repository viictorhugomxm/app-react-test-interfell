import { HomeMainScreen } from './components/Screen/HomeMainScreen';
import { ServiceScreen } from './components/Screen/ServiceScreen';
import Estrellas from './assets/estrellas.png';
import GoogleLogo from './assets/google.png';
import LogoFlama from './assets/logoflama.png';
import YelpLogo from './assets/yelp.png'
import ChatLogo from './assets/chat.png'

export const HammerApp = () => {
  return (
    <>
      <HomeMainScreen />
      <div className="flex md:flex-row flex-col justify-evenly md:mb-20 mb-0 mt-2 items-center">
          <img src={Estrellas} alt="Estrellas" />
          <p className="fuente-principal">(525 Reviews de Clientes)</p>
          <img src={GoogleLogo} alt="Google" />
          <img src={LogoFlama} alt="Logo" />
          <img src={YelpLogo} alt="Yelp" />
          <img src={ChatLogo} alt="Chat" />
      </div>
      <ServiceScreen />
    </>
  );
};

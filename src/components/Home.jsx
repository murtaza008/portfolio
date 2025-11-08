import { useFadeIn } from '../hooks/useFadeIn';
import { BACKGROUND_IMAGE_URL } from '../constants/home';
import HeroContent from './home/HeroContent';
import Avatar from './home/Avatar';

const Home = () => {
  const leftIn = useFadeIn(0);
  const rightIn = useFadeIn(220);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative z-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url("${BACKGROUND_IMAGE_URL}")`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center lg:items-start">
        <HeroContent isVisible={leftIn} />
        <Avatar isVisible={rightIn} />
      </div>
    </section>
  );
};

export default Home;


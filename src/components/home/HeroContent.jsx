import { PERSONAL_INFO } from '../../constants/home';
import TypingText from './TypingText';
import Button from '../common/Button';
import SocialLinks from '../common/SocialLinks';

const HeroContent = ({ isVisible }) => {
    const handleDownloadCV = () => {
        const fileName = 'Murtaza Mazhar.pdf';
        const baseUrl = import.meta.env.BASE_URL || '/';
        const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
        const cvUrl = `${normalizedBaseUrl}${encodeURIComponent(fileName)}`;

        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        link.remove();
    };

    return (
        <>
            {/* Text Content */}
            <div
                className={`text-center lg:text-left transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    } order-1 lg:order-1`}
            >
                <div className="mb-6">
                    <span className="text-blue-600 font-semibold text-lg flex items-center justify-center lg:justify-start">
                        {PERSONAL_INFO.greeting}
                    </span>
                    <h1 className="text-6xl lg:text-7xl font-extrabold text-gray-800 mt-2 mb-4 transform hover:scale-105 transition-transform duration-500 flex items-center justify-center lg:justify-start">
                        {PERSONAL_INFO.name}
                    </h1>
                    <TypingText />
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-left">
                    {PERSONAL_INFO.description}
                </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start order-3 lg:order-1 lg:col-start-1 -mt-8 lg:-mt-24">
                <Button href="#projects" variant="primary">
                    View My Work
                </Button>
                <Button onClick={handleDownloadCV} variant="secondary" icon="fas fa-download">
                    Download CV
                </Button>
                <Button href="#contact" variant="outline" className="text-white bg-yellow-500 hover:bg-yellow-600 border-yellow-500">
                    Get In Touch
                </Button>
            </div>

            {/* Social Links */}
            <div className="order-4 lg:order-1 lg:col-start-1 -mt-2 lg:-mt-16 lg:ml-3">
                <SocialLinks />
            </div>
        </>
    );
};

export default HeroContent;


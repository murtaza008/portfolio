import { TECH_ICONS, AVATAR_IMAGE_URL } from '../../constants/home';

const Avatar = ({ isVisible }) => {
    const mobileIconsTop = TECH_ICONS.slice(0, 3);
    const mobileIconsBottom = TECH_ICONS.slice(3);

    return (
        <div
            className={`relative transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                } order-2 lg:order-2`}
        >
            <div className="relative lg:ml-8 lg:mt-16">
                {/* Icons Above Avatar - Mobile Only */}
                <div className="flex justify-center items-center gap-3 mb-4 lg:hidden">
                    {mobileIconsTop.map((icon) => (
                        <div
                            key={icon.id}
                            className={`w-12 h-12 ${icon.color} rounded-full flex items-center justify-center ${icon.animation} hover:animate-spin`}
                        >
                            <i className={`${icon.icon} text-lg text-white`}></i>
                        </div>
                    ))}
                </div>

                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all duration-500">
                    <img
                        alt="Murtaza Mazhar - MERN Stack Developer"
                        className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-lg hover:border-blue-300 transition-all duration-300"
                        src={AVATAR_IMAGE_URL}
                    />
                </div>

                {/* Icons Below Avatar - Mobile Only */}
                <div className="flex justify-center items-center gap-3 mt-4 lg:hidden">
                    {mobileIconsBottom.map((icon) => (
                        <div
                            key={icon.id}
                            className={`w-12 h-12 ${icon.color} rounded-full flex items-center justify-center ${icon.animation} hover:animate-spin`}
                        >
                            <i className={`${icon.icon} text-lg text-white`}></i>
                        </div>
                    ))}
                </div>

                {/* Desktop Icons - Absolute Positioned Around Avatar */}
                <div className="hidden lg:block">
                    {TECH_ICONS.map((icon) => (
                        <div
                            key={icon.id}
                            className={`absolute ${icon.position} w-16 h-16 ${icon.color} rounded-full flex items-center justify-center ${icon.animation} hover:animate-spin`}
                        >
                            <i className={`${icon.icon} text-xl text-white`}></i>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Avatar;


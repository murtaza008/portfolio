const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-bounce hover:animate-pulse transition-all duration-300" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/10 rounded-lg rotate-45 animate-pulse hover:animate-bounce transition-all duration-300" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-green-500/10 rounded-full animate-bounce hover:animate-spin transition-all duration-300" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
      <div className="absolute bottom-20 right-40 w-24 h-24 bg-yellow-500/10 rounded-lg rotate-12 animate-pulse hover:rotate-45 transition-all duration-300" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
      <div className="absolute top-60 left-1/2 w-14 h-14 bg-red-500/10 rounded-full animate-bounce hover:animate-ping transition-all duration-300" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}></div>
      <div className="absolute top-32 right-1/4 text-3xl text-blue-500/20 animate-pulse font-mono hover:text-blue-500/40 transition-all duration-300" style={{ animationDelay: '2.5s', animationDuration: '6s' }}>React</div>
      <div className="absolute bottom-60 left-1/3 text-3xl text-green-500/20 animate-bounce font-mono hover:text-green-500/40 transition-all duration-300" style={{ animationDelay: '1s', animationDuration: '4s' }}>Node</div>
      <div className="absolute top-80 right-10 text-3xl text-orange-500/20 animate-pulse font-mono hover:text-orange-500/40 transition-all duration-300" style={{ animationDelay: '3s', animationDuration: '5s' }}>Data</div>
      <div className="absolute top-1/2 left-10 text-3xl text-purple-500/20 animate-bounce font-mono hover:text-purple-500/40 transition-all duration-300" style={{ animationDelay: '4s', animationDuration: '3s' }}>DB</div>
      <div className="absolute bottom-1/4 right-1/4 text-3xl text-red-500/20 animate-pulse font-mono hover:text-red-500/40 transition-all duration-300" style={{ animationDelay: '1.5s', animationDuration: '5s' }}>AI</div>
      <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0s', animationDuration: '8s' }}></div>
      <div className="absolute bottom-1/2 right-1/3 w-24 h-24 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
      <div className="absolute top-1/5 right-1/5 w-20 h-20 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s', animationDuration: '7s' }}></div>
    </div>
  );
};

export default BackgroundAnimation;


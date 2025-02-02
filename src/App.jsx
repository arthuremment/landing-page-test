import React from "react";
import { ArrowRight } from "lucide-react";
import video from "./assets/bg_video.mp4";
import logo from "./assets/logo.png"

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed w-full pl-0 pr-6 py-4 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">
              <img src={logo} alt="logo" width={120} height={120} />
            </div>
            <div className="sm:flex md:space-x-12 space-x-6 hidden">
              <a href="#" className="text-lg text-gray-300 transition-colors hover:text-white">
                Home
              </a>
              <a href="#" className="text-lg text-gray-300 transition-colors hover:text-white">
                About
              </a>
              <a href="#" className="text-lg text-gray-300 transition-colors hover:text-white">
                Unsere Leistungen
              </a>
              <a href="#" className="text-lg text-gray-300 transition-colors hover:text-white">
                Blog
              </a>
              <a href="#" className="text-lg text-gray-300 transition-colors hover:text-white">
                Pages
              </a>
            </div>
            <div></div> 
          </div>
        </nav>

        {/* Hero Section */}
        <main className="min-h-screen flex md:flex-row md:pt-0 flex-col justify-around pt-[20%] items-center md:justify-around px-10 text-center">
          <div className="md:w-[50%]">
            <h1 className="text-5xl md:leading-23 md:text-7xl font-bold text-center">
              Infinite Vision Exceptional Webdesign
            </h1>
          </div>

          <div className="flex flex-col items-center w-[50%]">
            <p className="text-l md:text-l text-white mb-12 w-[400px] font-medium text-center">
              Wir sind auf maßgeschneiderte Webdesigns Spezialisiert und
              erstellen beeindruckende, benutzerfreundliche Websites, die
              Traffic anziehen und Conversions steigern. Lassen Sie uns Ihr
              Business mit einer Website unterstützen, die für Sie arbeitet
            </p>
            <button className="flex flex-row items-center justify-center gap-1 w-fit bg-white text-black pl-6 pr-3 py-1 rounded-full font-medium hover:bg-gray-200 transition-colors cursor-pointer">
              <p className="text-[14px]">
                Kontaktieren <br />
                Sie Uns
              </p>
              <ArrowRight size={32}  />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

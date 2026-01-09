import { useState } from "react";

export default function Donations() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-green-600 text-white p-4 rounded-full shadow-2xl 
                   hover:bg-green-500 transition-all duration-200 
                   active:scale-90" 
      >
        <span className="text-xl">Apoyar proyecto ☕</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          {/* Contenedor del Modal */}
          <div className="bg-white border border-green-200 p-8 rounded-2xl shadow-2xl flex flex-col items-center gap-6 w-full max-w-sm relative">
            
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            <div className="text-center">
            <p className="text-sm text-gray-500 mt-1">Tu apoyo mantiene esta herramienta gratuita</p>

              <h2 className="text-2xl font-bold text-green-700">
                Si te es útil puedes...
              </h2>
            </div>

            <div className="flex flex-col items-center gap-4 w-full">
              {/* Ko-fi */}
              <a
                href="https://ko-fi.com/X8X81CMDC3"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-105 active:scale-95"
              >
                <img
                  src="https://storage.ko-fi.com/cdn/kofi6.png?v=6"
                  alt="Donar en Ko-fi"
                  className="h-10"
                />
              </a>

              <a
                href="https://patreon.com/OpenForge_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-6 py-3 bg-green-600 text-white text-sm font-semibold rounded-lg shadow hover:bg-green-500 transition active:scale-95"
              >
                Apóyame en Patreon
              </a>
            </div>
          </div>
          
          <div 
            className="absolute inset-0 -z-10" 
            onClick={() => setIsOpen(false)} 
          />
        </div>
      )}
    </>
  );
}
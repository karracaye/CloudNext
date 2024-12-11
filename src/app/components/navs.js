import { useState } from "react";
import Image from "next/image";

const Navs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div style={styles.navContainer} className="fixed w-screen z-50 px-5 lg:px-0">
      {/* Desktop Navigation */}
      <div
        style={styles.navContent}
        className="p-5 mt-10 space-x-4 rounded-full px-10 shadow-lg flex items-center justify-between w-full md:w-auto"
      >
        <a>
           <a href="#home">
           <Image
            src="/assets/images/cnlogo.png" // Path relative to the public folder
            alt="Example"
            width={100}
            height={100}
          />
           </a>
        </a>
        <div className="hidden md:flex space-x-8">
          <a href="#service" className="text-gray-700 hover:text-blue-600 transition-colors">
            SERVICE
          </a>
          <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">
            PORTFOLIO
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
            CONTACT
          </a>
        </div>
        <button
          onClick={toggleMenu}
          className="block md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Fullscreen Modal for mobile view */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 md:hidden">
          <div
            className="bg-white w-full h-full p-6 flex flex-col justify-start items-center relative border-b border-gray-300 transition-transform transform"
            style={{
              transform: isMenuOpen ? "translateY(0)" : "translateY(-100%)",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {/* Logo */}
            <div className="mb-6">
              <Image
                src="/assets/images/cnlogo.png" // Path relative to the public folder
                alt="Logo"
                width={100}
                height={100}
              />
            </div>

            {/* Close Icon */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="flex flex-col items-center space-y-4 mt-10">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                SERVICE
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                PORTFOLIO
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                CONTACT
              </a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  navContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navContent: {
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
  },
};

export default Navs;

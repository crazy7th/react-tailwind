import '../styles/Home.css';
import { HeroImage, Portofolio } from '../components/home';
import { FloatingMenu, HeaderNav } from '../components/common';
import { useEffect, useState } from 'react';

function Home() {
  const [isShow, setIsShow] = useState(false);
  const toggleMenu = (isShow) => {
    setIsShow(!isShow);
  };

  return (
    <div className="App">
      <header className="fixed left-0 right-0 shadow w-full z-30 bg-white">
        <div className="container mx-auto px-4 py-3 flex justify-end">
          <div className="flex-1 md:flex items-center">
            <div className="mr-16">
              <a href="/" className="flex items-center">
                <img src="/img/catering.svg" alt="logo ketring" className="h-8" />
                <p className="font-medium">ke<span className="text-[#FF4328]">tring</span></p>
              </a>
            </div>
            <HeaderNav showMenu={isShow} hideMenu={toggleMenu} />
          </div>
          <div className="flex-row-reverse md:flex-row flex items-center space-x-reverse space-x-4 md:space-x-6">
            <div className="md:hidden flex items-center">
              <button
                onClick={(event) => {
                  event.preventDefault();
                  toggleMenu(isShow);
                }}
              >
                <img src="./img/ic_burger.svg" className="w-5" alt="check menu" />
              </button>
            </div>
            <div className="flex items-center">
              <button>
                <img src="./img/ic_cart.svg" className="w-5" alt="go to cart" />
              </button>
            </div>
            <div className="flex items-center">
              <button className="md:hidden">
                <img src="./img/ic_search.svg" className="w-5" alt="search your needs" />
              </button>
              <div className="hidden md:flex relative border border-black rounded-lg">
                <input type="text" placeholder="search your need" className="rounded-lg px-5 py-1" />
                <img src="./img/ic_search.svg" className="w-4 absolute top-0 bottom-0 right-0 my-auto mr-2" alt="icon search" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <FloatingMenu showMenu={isShow ? '1' : '0'} hideMenu={toggleMenu} />

      <HeroImage />
      <Portofolio />
    </div>
  );
}

export default Home;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from './Nav'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
     <header className='py-8 xl:py-12 text-white xl:mb-5'>
        <div className="container mx-auto flex justify-between item-center">

            {/* logo */}
            <Link href="/">
            <h1 className='text-4xl font-semibold hover:text-emerald-400 font-mono'>Nidinbose <span className='text-emerald-400'>.</span></h1>
            </Link>
             {/* desktopnav */}
             <div className="hidden xl:flex items-center gap-8">

             <NavigationBar/>
             <Link href="/contact">
             <button>Hire me</button>
             </Link>
            
             </div>

             {/* mobilenav */}
             <div className="xl:hidden">mobilenav</div>
            
        </div>
     </header>
  );
};

export default Header;
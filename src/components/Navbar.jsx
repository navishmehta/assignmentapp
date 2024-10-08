import React from 'react'
import { useLocation, Link, matchPath } from 'react-router-dom'
import { navbarlinks } from '../data/navbarlinks';

const Navbar = () => {
    const location = useLocation();    
  return (
    <div>
        <nav>
            <ul className='flex gap-x-4 bg-transparent text-white font-bold border-[1px] px-6 py-2 rounded-full mt-4'>
                {
                    navbarlinks.map((element,index) => (
                        <li key={index}>
                            <Link to={element.path} className={matchPath(element.path, location.pathname) ? "active bg-gray-300 text-blue-500 rounded-full px-3 py-1" : ""}>
                                {element.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    </div>
  )
}

export default Navbar

// import { Link } from 'react-router-dom';
// import Navbar from '../Navbar';

// export default function Nav() {
//     return (  
   
//   );
// }

import './nav.css'

  export default function Nav({currentPage, handlePageChange}){
    return (
      <nav className="header">
      <ul>
        
      <li>
        <a href="/"
        onClick={() => handlePageChange('card')}
        className={currentPage === 'card' ? 'nav-link active' : 'nav-link'}
        >Home
          </a>
            </li>

      <li>
        <a href="/portfolio"
        onClick={() => handlePageChange('portfolio')}
        className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'}
       >Portfolio</a>
       </li>

      <li>
        <a href="/contact">Contact</a>
        </li>
      
      </ul>
      </nav>


    )
  }

 
import { Link } from 'react-router-dom';
//import Navbar from '../Navbar';

// export default function Nav() {
//     return (  
   
//   );
// }

import './nav.css'

 export default function Nav({currentPage}){
  const pages = ['portfolio', '/'];
  
  return (
    <nav >
      <ul className="header">
        
       <li
          className={`mx-5 ${currentPage === '/' && 'navActive'}`}
          key="/"
       >
       
         <Link to="/"> Home </Link>
       </li>

        {pages.map({pages} => (

           <li
           className={`mx-5 ${currentPage === `/` && 'navActive'}`}
            key={pages}
           >
        
            Portfolio
          
            <Link to={`/${pages}`}>{capitalizeFirstLetter(Page)}</Link>
           </li>  


        ))}
      
        <li>
         <a href="/contact">Contact</a>
           </li>
      
      </ul>
      </nav>


    )
  }

 
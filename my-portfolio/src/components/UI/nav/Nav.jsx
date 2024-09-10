// import { Link } from 'react-router-dom';
// import Navbar from '../Navbar';

// export default function Nav() {
//     return (  
   
//   );
// }

import './nav.css'

  export default function Nav(){
    return (
      <nav className="header">
      <ul>
        
      <li><a href="/">Home</a></li>
      <li><a href="/portfolio">Portfolio</a></li>
      <li><a href="/contact">Contact</a></li>
      
      </ul>
      </nav>


    )
  }

  
  
import './nav.css'

// export default function Nav({currentPage}){
//  const pages = ['portfolio', '/'];
 
//  return (
//    <nav >
//      <ul className="header">
       
//       <li
//          className={`mx-5 ${currentPage === '/' && 'navActive'}`}
//          key="/"
//       >
      
//         <Link to="/"> Home </Link>
//       </li>

//        {pages.map(page => (

//           <li
//           className={`mx-5 ${currentPage === `/` && 'navActive'}`}
//            key={page}
//           >
       
//            Portfolio
         
//            <Link to={`/${page}`}></Link>
//           </li>  


//        ))}
     
//        <li>
//         <a href="/contact">Contact</a>
//           </li>
     
//      </ul>
//      </nav>


//    )
//  }


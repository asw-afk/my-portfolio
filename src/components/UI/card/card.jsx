//import{ useState } from 'react';
import templatePhoto from '../../../assets/templatePhoto.jpg';
import './card.css';
import Tags from './tags';

function Card() {
  return (
    <div className="card">
     
         
      <div>
        <img src={templatePhoto} />
      </div>

      <div className="text-container">
        <h2>Anna Silver-Wolff</h2>

        <p>ggfdljs sodghfglk; hfdjghp;kldfhg;kldafgh a;klghdrf;gkl df</p>
      </div>

      <div id="icons">
        <Tags />
      </div>

      
      </div>
   
  );
}

export default Card;

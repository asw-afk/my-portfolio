import { useState } from 'react';
import javascript from '../../../assets/javascript.png';
import reactIcon from '../../../assets/reactIcon.png';

let images = [javascript, reactIcon];

function Tags() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? 'Back' : 'Preferred Technologies'}
      </button>

      {show && (
        <div>
          {images.map((imgSrc, index) => (
            <img key={index} 
                src={imgSrc} 
                alt={`tag-${index}`} 
                width={50} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Tags;

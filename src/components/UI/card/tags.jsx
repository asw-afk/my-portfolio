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
        <div style={{ marginTop: '12px', display: 'flex', gap: '10px' }}>
          {images.map((imgSrc, index) => (
            <img key={index} src={imgSrc} style={{ width: '40px' }} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Tags;

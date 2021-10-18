import { useState } from 'react';
import './Circle.css';

const Circle = () => {
  const [circle, setCircle] = useState(false); 
  
  return (
    <div className={circle ? "circle" : "alternativeColor"} 
          onClick={ () => setCircle(true) } >  
    </div>
  )

} 

export default Circle;
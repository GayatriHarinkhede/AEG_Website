import React from 'react'
import './Notice.css';
import {Link} from 'react-router-dom';

const Notice = () => {
  return (
<div class="scrolling-Notice-Container">
    <div class="scrolling-notice">
    <div> | Upcoming Events | </div>
    
   <Link to="/register"> <a href="">Annual International Conference
On
Recent Advances in Engineering Technology, Healthcare & Management (AIC- RAETHM 2025)

10th & 11th Jan. 2025 </a></Link>

    </div>
    <div>

    </div>
  </div>
  )
}

export default Notice

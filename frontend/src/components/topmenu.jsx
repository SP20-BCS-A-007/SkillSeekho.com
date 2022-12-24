import React from 'react';
import {Link} from 'react-router-dom';
const TopMenu = () => {
    return ( 
        <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact-us">Contact Us</Link>
      </li>
      <li>
        <Link to="/courses">Courses</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
    </ul>
</div>
     );
}
 
export default TopMenu;


import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';

import React from 'react'


const Homepage = () => {
  return (
    <div>
    <Navbar/>
    <div class="container-fluid" id="main">
     <div class="row row-offcanvas row-offcanvas-left">
       <Sidebar/>
      <Dashboard/>
    
 </div>
</div>  
</div>  
  )
}

export default Homepage

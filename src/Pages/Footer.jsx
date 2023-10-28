import React from 'react';

const Footer = () => {
  return (
   <>
    <footer>
        <div className="mainfooter">
            <div className="firstfoter">
                <p className='footerbold'>Snapgrid</p>
                <p>SnapGrid serves as a multifaceted online tool that streamlines the process of finding and obtaining images.</p>

            </div>

            <div className="secondfooter">
            <p className='footerbold'> Documentation</p>
                <p>Contributing Guide Add projects via GitHub Run the project locally</p>
            </div>
            <div className="third">
            <p className='footerbold'>License</p>
                <p>MIT License</p>
                <p>Code of Conduct</p>
            </div>
            <div className="forth">

            <div className="footerbtn">
           <a href="https://github.com/Vijaykv5/SnapGrid"><button><i class="fa fa-github"></i> Star us 🌟</button></a>
            </div>
 
            </div>
        </div>

        <div className="secmain">
          <p> @ ProjectsHut 2023 All rights reserved </p> 
        </div>
    </footer>
   </>
  )
}

export default Footer;
import React from 'react';

const Footer = () => {
  return (
   <>
    <footer>
        <div className="mainfooter">
            <div className="firstfoter">
                <p className='footerbold'>ph.</p>
                <p>Projectshut is an open source web app that enables users to freely 
                publish their projects and create user profiles within the platform. </p>

                <div className="logofooter">
                <i class="fa fa-twitter"></i>
                    <i class="fa fa-github"></i>
                    <i class="fa fa-linkedin"></i>
                </div>
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
            <i class="fa fa-github"></i>  <button>Star us 🌟</button>
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
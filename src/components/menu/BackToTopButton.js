import React from 'react';
import { useEffect, useState } from 'react';
function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setBackToTopButton(true)
            } else{
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            {backToTopButton && (
                <button onClick={scrollUp} className ="fixed bottom-12 right-12 w-12 h-12 text-5xl text-white bg-violet-500 rounded-xl outline-dotted" >^</button>
            )}
            

        </div>
    )
}

export default BackToTopButton;
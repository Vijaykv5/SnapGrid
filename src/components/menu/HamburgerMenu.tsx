import React from "react"

interface Props{
    onClick:()=>void,
    visibility:Boolean
}

const HamburgerMenu : React.FC<Props> =({onClick,visibility})=>{
    console.log(visibility)
    return(
        <div className='flex w-10 h-10 flex-col items-center justify-evenly sm:visible xs:visible text-white hamburger' onClick={onClick} >
        
            <div className={`w-10 h-1 bg-white ${visibility?"hamburger__1":"hamburger_1"} `}  ></div>
            <div className={`w-10 h-1 bg-white ${visibility? "hamburger__2":"hamburger_1"} `} ></div>
            <div className={`w-10 h-1 bg-white ${visibility?"hamburger__3":"hamburger_1"}`}></div>

        </div>
    )
}
export default HamburgerMenu
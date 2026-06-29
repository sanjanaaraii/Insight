import React from "react";
import { useState } from "react";
function Navbar(){
    const [open, setOpen]=useState(false);

    function handleClick(){
        setOpen(!open);
    }

    return(
        <div className="fixed top-0 left-0 w-full bg-[#EEEAE3] z-50">
            <div className="flex justify-between pr-[68px] ">
                <div className="flex items-center gap-4 pl-10 pt-4">
                    {/* <div className=' h-4 w-4.5 bg-black border-2 border-solid border-white rounded-full'></div> */}
                    <p className="text-2xl font-semibold " style={{ fontFamily: "JetBrains Mono" }}>INSIGHT.</p>
                </div>
                <div className="HAMBURGER-ICON space-y-2 pt-8 " onClick={handleClick}>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

            </div>
            {!open && (
                <div className=" border-t border-gray-400"></div> 
            )}

            {open && (
                <div className="text-[19px] font-medium" style={{ fontFamily: "JetBrains Mono" }}>
                    <p className="mt-2 pl-19" >How it works</p>
                    <div className="mt-3 border-t border-gray-400"></div>
                    <p className="pl-19 mt-3">Try it out</p> 
                    <div className="mt-3 bg-black h-13 flex items-center justify-center">
                        <p className="pl-19 text-white">Contact us</p>
                    </div>

                </div>
            )}
        </div>
    );
}
export default Navbar;

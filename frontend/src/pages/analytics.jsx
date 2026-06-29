import React from "react";
import Navbar from "../components/navbar";
import useFetchData from "../utilities/data/fetchdata";
function Analysis(){
    const data= useFetchData("https://mocki.io/v1/3b349e49-899c-4f09-af46-6331d22cf66e");
    return(
        <div className="pt-16">
            <Navbar/>
            <div className="analysis">
                <p className="pt-10 font-semibold text-4xl max-w-[1100px]  mx-auto" style={{ fontFamily: "JetBrains Mono" }}>Results For {data?.businessName}</p>
                <div className="border border-black max-w-[1100px]  mx-auto">
                    <p>yo</p>
                </div>
            </div>
        </div>
    )
}

export default Analysis;

//https://mocki.io/v1/3b349e49-899c-4f09-af46-6331d22cf66e
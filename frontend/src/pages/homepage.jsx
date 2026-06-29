import React from "react";
import Navbar from "../components/navbar";
import Form from "../components/form";
import Footer from "../components/footer";

function Homepage(){
    return(
        <div className="pt-16">
            <Navbar />
            <div className="max-w-[1100px] mx-auto px-10">
                <p className="pt-10 font-semibold text-5xl" style={{ fontFamily: "JetBrains Mono" }}>SITE INSIGHTS</p>
                <p className="text-xl" style={{ fontFamily: "JetBrains Mono" }}>With the right tool, any page can be diagnosed.</p>
                <div className="ml-1 mr-10 mt-4 border-t border-gray-400"></div>
            </div>

            <div className="flex justify-center p-10">
                <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start max-w-[1100px] w-full">

                    {/* Steps */}
                    <div className="flex flex-col gap-2 flex-shrink-0" style={{ fontFamily: "JetBrains Mono" }}>

                        
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="h-6 w-6 rounded-full bg-black"></div>
                                <div className="w-[2px] flex-1 bg-black"></div>
                            </div>
                            <div className="pb-9">
                                <p className="text-[20px] font-bold">Step 1</p>
                                <p className="text-[18px]">Uncover what's slowing the page down.</p>
                                <button className="mt-2 w-[280px] max-w-[340px] py-3 px-4 bg-[#76726A] text-white border-[1.5px] border-ink text-[18px] font-bold hover:bg-greydark hover:-translate-y-px transition-all">
                                    Enter your URL
                                </button>
                            </div>
                        </div>

                        
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="h-6 w-6 rounded-full bg-black"></div>
                                <div className="w-[2px] flex-1 bg-black"></div>
                            </div>
                            <div className="pb-9">
                                <p className="text-[20px] font-bold">Step 2</p>
                                <p className="text-[18px]">Analyze, profile, and identify issues.</p>
                                <button className="mt-2 w-[280px] max-w-[340px] py-3 px-4 bg-[#76726A] text-white border-[1.5px] border-ink text-[18px] font-bold hover:bg-greydark hover:-translate-y-px transition-all">
                                    Run Analysis
                                </button>
                            </div>
                        </div>

                        
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="h-6 w-6 rounded-full bg-black"></div>
                                <div className="w-[2px] flex-1 bg-black"></div>
                            </div>
                            <div>
                                <p className="text-[20px] font-bold">Step 3</p>
                                <p className="text-[18px]">Export the report.</p>
                                <button className="mt-2 w-[280px] max-w-[340px] py-3 px-4 bg-[#76726A] text-white border-[1.5px] border-ink text-[18px] font-bold hover:bg-greydark hover:-translate-y-px transition-all">
                                    Export your report
                                </button>
                            </div>
                        </div>
                    </div>

                  {/* form */}
                    <div className="flex justify-center w-full md:w-auto">
                        <Form />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Homepage;
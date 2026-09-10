import React from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import OverallScoreRing from "../utilities/svg/overallCircle";

import { useLocation, useNavigate } from "react-router-dom";


function Analysis() {

    const location = useLocation();
    const navigate = useNavigate();

    // Data returned by our POST /api/analytics request
    const data = location.state;

    console.log("ANALYTICS DATA:", data);


    // If someone opens /analytics directly without running an analysis
    if (!data) {
        return (
            <div className="pt-16">

                <Navbar />

                <div className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4">

                    <p
                        className="text-2xl font-bold"
                        style={{ fontFamily: "JetBrains Mono" }}
                    >
                        No analysis found
                    </p>

                    <p className="text-gray-500 mt-2">
                        Please go back and analyze a website first.
                    </p>

                    <button
                        onClick={() => navigate("/")}
                        className="mt-5 bg-black text-white px-6 py-3"
                    >
                        Go Back
                    </button>

                </div>

                <Footer />

            </div>
        );
    }


    return (

        <div className="pt-16">

            <Navbar />


            <div className="pb-10 px-4">

                {/* PAGE TITLE */}

                <p className="pt-10 font-medium text-2xl md:text-4xl max-w-[1100px] mx-auto">

                    Results For {data?.businessName || "Business"}

                </p>


                {/* OVERALL SCORE CARD */}

                <div className="border-2 border-[#d8cfbf] max-w-[1000px] mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-6 p-6 mt-6">

                    <div>

                        <OverallScoreRing
                            score={data?.scores?.overall || 0}
                        />

                    </div>


                    <div className="flex-1 md:ml-10 md:text-left">

                        <section className="overall-card">

                            <div className="font-bold text-xl md:text-2xl">

                                Overall Digital Presence Score

                            </div>


                            <p className="text-[#837a6c]">

                                Combined score across available metrics

                            </p>


                            <div className="text-[#9b7618] border-1 p-1 w-fit md:mx-0">

                                Analysis Complete

                            </div>


                            <p className="max-w-lg md:mx-0 mt-2">

                                This score is based on the website's SEO,
                                technical configuration, social media presence,
                                and other available analysis signals.

                            </p>

                        </section>

                    </div>


                    <div className="flex flex-col md:flex-col gap-2 w-full md:w-auto">

                        <button
                            className="text-white bg-black h-12 flex-1 md:flex-none md:w-48"
                        >
                            Download Report
                        </button>


                        <button
                            onClick={() => navigate("/")}
                            className="h-12 border-2 flex-1 md:flex-none md:w-48"
                        >
                            Analyze Another Business
                        </button>

                    </div>

                </div>



                {/* ANALYSIS CARDS */}

                <div className="max-w-[1000px] mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">


                    {/* 01 - WEBSITE PERFORMANCE */}

                    <div className="border border-[#d8cfbf] p-4 bg-[#faf7f0]">

                        <p className="text-xs text-[#837a6c] uppercase tracking-widest mb-1">
                            01
                        </p>


                        <div className="flex justify-between items-start">

                            <div>

                                <p className="font-semibold text-lg">
                                    Website Performance
                                </p>

                                <p className="text-sm text-[#837a6c]">
                                    Speed & Mobile Optimization
                                </p>

                            </div>


                            <span className="font-bold text-2xl text-[#3f6b4f]">

                                {data?.pageSpeed?.available
                                    ? data?.pageSpeed?.performance
                                    : "N/A"}

                            </span>

                        </div>


                        <div className="mt-4 space-y-2 text-sm">


                            <div className="flex justify-between border-t border-[#e5ddd0] pt-2">

                                <span className="text-[#837a6c]">
                                    Performance
                                </span>

                                <span className="font-semibold">

                                    {data?.pageSpeed?.available
                                        ? data?.pageSpeed?.performance
                                        : "Unavailable"}

                                </span>

                            </div>


                            <div className="flex justify-between border-t border-[#e5ddd0] pt-2">

                                <span className="text-[#837a6c]">
                                    Page Speed
                                </span>

                                <span className="font-semibold">

                                    {data?.pageSpeed?.available
                                        ? `${data?.pageSpeed?.performance}/100`
                                        : "Unavailable"}

                                </span>

                            </div>


                            <div className="flex justify-between border-t border-[#e5ddd0] pt-2">

                                <span className="text-[#837a6c]">
                                    Mobile Optimized
                                </span>

                                <span className="font-semibold">
                                    N/A
                                </span>

                            </div>


                            <div className="flex justify-between border-t border-[#e5ddd0] pt-2">

                                <span className="text-[#837a6c]">
                                    HTTPS
                                </span>

                                <span className="font-semibold text-[#3f6b4f]">

                                    {data?.website?.httpsEnabled
                                        ? "✓ Enabled"
                                        : "✕ No"}

                                </span>

                            </div>


                        </div>

                    </div>



                    {/* 02 - SEO & CONTENT */}

                    <div className="border border-[#d8cfbf] p-4 bg-[#faf7f0]">

                        <p className="text-xs text-[#837a6c] uppercase tracking-widest mb-1">
                            02
                        </p>


                        <div className="flex justify-between items-start">

                            <div>

                                <p className="font-semibold text-lg">
                                    SEO & Content
                                </p>

                                <p className="text-sm text-[#837a6c]">
                                    Search Optimization
                                </p>

                            </div>


                            <span className="font-bold text-2xl text-[#3f6b4f]">

                                {data?.scores?.seo ?? "N/A"}

                            </span>

                        </div>


                        <div className="mt-4 space-y-2 text-sm">


                            {[
                                [
                                    "Page Title",
                                    data?.seo?.pageTitle
                                ],

                                [
                                    "Meta Description",
                                    data?.seo?.metaDescription
                                ],

                                [
                                    "Canonical Tag",
                                    data?.seo?.canonicalTag
                                ],

                                [
                                    "XML Sitemap",
                                    data?.technical?.sitemap
                                ],

                                [
                                    "Structured Data",
                                    data?.seo?.structuredData
                                ],

                                [
                                    "H1 Heading",
                                    data?.seo?.h1Heading
                                ]

                            ].map(([label, val]) => (

                                <div
                                    key={label}
                                    className="flex justify-between border-t border-[#e5ddd0] pt-2"
                                >

                                    <span className="text-[#837a6c]">
                                        {label}
                                    </span>


                                    <span
                                        className={
                                            val
                                                ? "text-[#3f6b4f] font-bold"
                                                : "text-[#b5402c] font-bold"
                                        }
                                    >

                                        {val ? "✓" : "✕"}

                                    </span>

                                </div>

                            ))}


                            <div className="flex justify-between border-t border-[#e5ddd0] pt-2">

                                <span className="text-[#837a6c]">
                                    Alt Text Coverage
                                </span>

                                <span className="font-semibold">

                                    {data?.seo?.altTextCoverage ?? "N/A"}%

                                </span>

                            </div>


                        </div>

                    </div>



                    {/* 03 - SOCIAL MEDIA */}

                    <div className="border border-[#d8cfbf] p-4 bg-[#faf7f0]">

                        <p className="text-xs text-[#837a6c] uppercase tracking-widest mb-1">
                            03
                        </p>


                        <div className="flex justify-between items-start">

                            <div>

                                <p className="font-semibold text-lg">
                                    Social Media Presence
                                </p>

                                <p className="text-sm text-[#837a6c]">
                                    Social Profile Coverage
                                </p>

                            </div>


                            <span className="font-bold text-2xl text-[#b8842c]">

                                {data?.scores?.social ?? "N/A"}

                            </span>

                        </div>


                        <div className="mt-4 space-y-2 text-sm">


                            <div className="flex justify-between border-t border-[#e5ddd0] pt-2">

                                <span className="text-[#837a6c]">
                                    Active Platforms
                                </span>

                                <span className="font-semibold">

                                    {data?.social?.activePlatforms ?? 0}/4

                                </span>

                            </div>


                            <div className="flex justify-between border-t border-[#e5ddd0] pt-2">

                                <span className="text-[#837a6c]">
                                    Facebook
                                </span>

                                <span className="font-semibold">

                                    {data?.social?.facebook
                                        ? "✓ Provided"
                                        : "✕ Not provided"}

                                </span>

                            </div>


                            <div className="flex justify-between border-t border-[#e5ddd0] pt-2">

                                <span className="text-[#837a6c]">
                                    Instagram
                                </span>

                                <span className="font-semibold">

                                    {data?.social?.instagram
                                        ? "✓ Provided"
                                        : "✕ Not provided"}

                                </span>

                            </div>


                            <div className="flex justify-between border-t border-[#e5ddd0] pt-2">

                                <span className="text-[#837a6c]">
                                    LinkedIn
                                </span>

                                <span className="font-semibold">

                                    {data?.social?.linkedin
                                        ? "✓ Provided"
                                        : "✕ Not provided"}

                                </span>

                            </div>


                            <div className="flex justify-between border-t border-[#e5ddd0] pt-2">

                                <span className="text-[#837a6c]">
                                    YouTube
                                </span>

                                <span className="font-semibold">

                                    {data?.social?.youtube
                                        ? "✓ Provided"
                                        : "✕ Not provided"}

                                </span>

                            </div>


                        </div>

                    </div>



                    {/* 04 - GOOGLE BUSINESS */}

                    <div className="border border-[#d8cfbf] p-4 bg-[#faf7f0]">

                        <p className="text-xs text-[#837a6c] uppercase tracking-widest mb-1">
                            04
                        </p>


                        <div className="flex justify-between items-start">

                            <div>

                                <p className="font-semibold text-lg">
                                    Google Business Profile
                                </p>

                                <p className="text-sm text-[#837a6c]">
                                    Local Visibility
                                </p>

                            </div>


                            <span className="font-bold text-2xl text-[#3f6b4f]">

                                N/A

                            </span>

                        </div>


                        <div className="mt-4 space-y-2 text-sm">


                            <div className="flex justify-between border-t border-[#e5ddd0] pt-2">

                                <span className="text-[#837a6c]">
                                    Status
                                </span>

                                <span className="font-semibold">

                                    {data?.googleBusiness?.available
                                        ? "Available"
                                        : "Unavailable"}

                                </span>

                            </div>


                            <div className="flex justify-between border-t border-[#e5ddd0] pt-2">

                                <span className="text-[#837a6c]">
                                    Rating
                                </span>

                                <span className="font-semibold">

                                    {data?.googleBusiness?.rating ?? "N/A"}

                                </span>

                            </div>


                            <div className="flex justify-between border-t border-[#e5ddd0] pt-2">

                                <span className="text-[#837a6c]">
                                    Reviews
                                </span>

                                <span className="font-semibold">

                                    {data?.googleBusiness?.reviews ?? "N/A"}

                                </span>

                            </div>


                        </div>

                    </div>


                </div>



                {/* 05 - RECOMMENDATIONS */}

                <div className="max-w-[1000px] mx-auto mt-6 border border-[#d8cfbf] p-5 bg-[#faf7f0]">

                    <p className="text-xs text-[#837a6c] uppercase tracking-widest mb-1">
                        05
                    </p>


                    <p className="font-semibold text-lg">
                        Recommendations
                    </p>


                    <p className="text-sm text-[#837a6c] mb-4">
                        Actions that can improve your digital presence
                    </p>


                    <div className="space-y-3">

                        {data?.recommendations?.length > 0 ? (

                            data.recommendations.map(
                                (recommendation, index) => (

                                    <div
                                        key={index}
                                        className="border-t border-[#e5ddd0] pt-3"
                                    >

                                        <div className="flex justify-between gap-4">

                                            <span className="font-semibold">

                                                {recommendation.message}

                                            </span>


                                            <span className="text-sm whitespace-nowrap">

                                                {recommendation.priority}

                                            </span>

                                        </div>


                                        <p className="text-xs text-[#837a6c]">

                                            {recommendation.category}

                                        </p>

                                    </div>

                                )
                            )

                        ) : (

                            <p>
                                No recommendations available.
                            </p>

                        )}

                    </div>

                </div>


            </div>


            <Footer />

        </div>
    );
}


export default Analysis;
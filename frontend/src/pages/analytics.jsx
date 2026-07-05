import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import OverallScoreRing from "../utilities/svg/overallCircle";
import useFetchData from "../utilities/data/fetchdata";

function Analysis(){
    const data= useFetchData("https://mocki.io/v1/3b349e49-899c-4f09-af46-6331d22cf66e");
    return(
        <div className="pt-16 ">
            <Navbar/>
            <div className="pb-10">
                <p className="pt-10 font-medium text-4xl max-w-[1100px]  mx-auto">Results For {data?.businessName}</p>

                <div className="border-2 border-[#d8cfbf] max-w-[1000px] mx-auto flex items-center justify-between p-6">
                    <div>
                        <OverallScoreRing score={data?.overallScore || 0} />
                    </div>
                      <div className="flex-1 ml-10">
                        <section className="overall-card">
                            <div className="font-bold text-2xl ">Overall Digital Presence Score</div>
                            <p className="text-[#837a6c]" >Combined score across all metrics</p>
                            <div className="text-[#9b7618] border-1 p-1 w-20">{data?.status}</div>
                            <p className="max-w-lg">{data?.summary}</p>
                        </section>
                    </div>
                    <div className="flex flex-col gap-2">
                        <button className="text-white bg-black h-12">Download Report</button>
                        <button className="h-12 border-2">Analyze Another Business</button>
                    </div>
                </div>

            <div className="max-w-[1000px] mx-auto mt-6 grid grid-cols-2 gap-4">

            {/* 01 - Website Performance */}
            <div className="border border-[#d8cfbf] p-4 bg-[#faf7f0]">
                <p className="text-xs text-[#837a6c] uppercase tracking-widest mb-1">01</p>
                <div className="flex justify-between items-start">
                    <div>
                        <p className="font-semibold text-lg">Website Performance</p>
                        <p className="text-sm text-[#837a6c]">Speed & Mobile Optimization</p>
                    </div>
                    <span className="font-bold text-2xl text-[#3f6b4f]">{data?.websitePerformance?.score}</span>
                </div>
                <div className="mt-4 space-y-2 text-sm">
                    <div className="flex justify-between border-t border-[#e5ddd0] pt-2"><span className="text-[#837a6c]">Performance</span><span className="font-semibold">{data?.websitePerformance?.performance}</span></div>
                    <div className="flex justify-between border-t border-[#e5ddd0] pt-2"><span className="text-[#837a6c]">Page Speed</span><span className="font-semibold">{data?.websitePerformance?.pageSpeed}</span></div>
                    <div className="flex justify-between border-t border-[#e5ddd0] pt-2"><span className="text-[#837a6c]">Mobile Optimized</span><span className="font-semibold text-[#3f6b4f]">{data?.websitePerformance?.mobileOptimized ? "✓ Yes" : "✕ No"}</span></div>
                    <div className="flex justify-between border-t border-[#e5ddd0] pt-2"><span className="text-[#837a6c]">HTTPS</span><span className="font-semibold text-[#3f6b4f]">{data?.websitePerformance?.httpsEnabled ? "✓ Enabled" : "✕ No"}</span></div>
                </div>
            </div>

            {/* 02 - SEO & Content */}
            <div className="border border-[#d8cfbf] p-4 bg-[#faf7f0]">
                <p className="text-xs text-[#837a6c] uppercase tracking-widest mb-1">02</p>
                <div className="flex justify-between items-start">
                    <div>
                        <p className="font-semibold text-lg">SEO & Content</p>
                        <p className="text-sm text-[#837a6c]">Search Optimization</p>
                    </div>
                    <span className="font-bold text-2xl text-[#3f6b4f]">{data?.seo?.score}</span>
                </div>
                <div className="mt-4 space-y-2 text-sm">
                    {[["Page Title", data?.seo?.pageTitle], ["Meta Description", data?.seo?.metaDescription],
                    ["Canonical Tag", data?.seo?.canonicalTag], ["XML Sitemap", data?.seo?.xmlSitemap],
                    ["Structured Data", data?.seo?.structuredData], ["H1 Heading", data?.seo?.h1Heading]
                    ].map(([label, val]) => (
                        <div key={label} className="flex justify-between border-t border-[#e5ddd0] pt-2">
                            <span className="text-[#837a6c]">{label}</span>
                            <span className={val ? "text-[#3f6b4f] font-bold" : "text-[#b5402c] font-bold"}>{val ? "✓" : "✕"}</span>
                        </div>
                    ))}
                    <div className="flex justify-between border-t border-[#e5ddd0] pt-2"><span className="text-[#837a6c]">Alt Text Coverage</span><span className="font-semibold">{data?.seo?.altTextCoverage}%</span></div>
                </div>
            </div>

            {/* 03 - Social Media */}
            <div className="border border-[#d8cfbf] p-4 bg-[#faf7f0]">
                <p className="text-xs text-[#837a6c] uppercase tracking-widest mb-1">03</p>
                <div className="flex justify-between items-start">
                    <div>
                        <p className="font-semibold text-lg">Social Media Presence</p>
                        <p className="text-sm text-[#837a6c]">Engagement & Reach</p>
                    </div>
                    <span className="font-bold text-2xl text-[#b8842c]">{data?.socialMedia?.score}</span>
                </div>
                <div className="mt-4 space-y-2 text-sm">
                    <div className="flex justify-between border-t border-[#e5ddd0] pt-2"><span className="text-[#837a6c]">Active Platforms</span><span className="font-semibold">{data?.socialMedia?.activePlatforms}/6</span></div>
                    <div className="flex justify-between border-t border-[#e5ddd0] pt-2"><span className="text-[#837a6c]">Engagement Rate</span><span className="font-semibold">{data?.socialMedia?.engagementRate}</span></div>
                    <div className="flex justify-between border-t border-[#e5ddd0] pt-2"><span className="text-[#837a6c]">Instagram</span><span className="font-semibold">{(data?.socialMedia?.followers?.instagram / 1_000_000).toFixed(0)}M</span></div>
                    <div className="flex justify-between border-t border-[#e5ddd0] pt-2"><span className="text-[#837a6c]">Facebook</span><span className="font-semibold">{(data?.socialMedia?.followers?.facebook / 1_000_000).toFixed(0)}M</span></div>
                    <div className="flex justify-between border-t border-[#e5ddd0] pt-2"><span className="text-[#837a6c]">YouTube</span><span className="font-semibold">{(data?.socialMedia?.followers?.youtube / 1_000_000).toFixed(1)}M</span></div>
                </div>
            </div>

            {/* 04 - Google Business */}
            <div className="border border-[#d8cfbf] p-4 bg-[#faf7f0]">
                <p className="text-xs text-[#837a6c] uppercase tracking-widest mb-1">04</p>
                <div className="flex justify-between items-start">
                    <div>
                        <p className="font-semibold text-lg">Google Business Profile</p>
                        <p className="text-sm text-[#837a6c]">Local Visibility</p>
                    </div>
                    <span className="font-bold text-2xl text-[#3f6b4f]">{data?.googleBusinessProfile?.score}</span>
                </div>
                <div className="mt-4 space-y-2 text-sm">
                    <div className="flex justify-between border-t border-[#e5ddd0] pt-2"><span className="text-[#837a6c]">Rating</span><span className="font-semibold">★ {data?.googleBusinessProfile?.rating?.toFixed(1)}/5.0</span></div>
                    <div className="flex justify-between border-t border-[#e5ddd0] pt-2"><span className="text-[#837a6c]">Reviews</span><span className="font-semibold">{data?.googleBusinessProfile?.reviews}</span></div>
                    <div className="flex justify-between border-t border-[#e5ddd0] pt-2"><span className="text-[#837a6c]">Photos</span><span className="font-semibold">{data?.googleBusinessProfile?.photos}</span></div>
                    <div className="flex justify-between border-t border-[#e5ddd0] pt-2"><span className="text-[#837a6c]">Completeness</span><span className="font-semibold text-[#3f6b4f]">{data?.googleBusinessProfile?.completeness}%</span></div>
                    <div className="flex justify-between border-t border-[#e5ddd0] pt-2"><span className="text-[#837a6c]">Verified</span><span className="font-semibold text-[#3f6b4f]">{data?.googleBusinessProfile?.verified ? "✓ Yes" : "✕ No"}</span></div>
                </div>
            </div>

        </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Analysis;

//https://mocki.io/v1/3b349e49-899c-4f09-af46-6331d22cf66e
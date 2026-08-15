import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Form() {

  const [name, setName]=useState("");
  const [url, setUrl]=useState("");
  const [fburl, setFburl]=useState("");
  const [instaurl, setInstaurl]=useState("");

  const navigate=useNavigate();

  const handlesubmit= async (e)=>{
    e.preventDefault();
    
    const response= await fetch("http://localhost:3000/api/analytics",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        url: url,
        fburl: fburl,
        instaurl: instaurl
      })
    });

    const data = await response.json();
    console.log(data);
    console.log("Form submitted");
    navigate("/analytics",
      {state:data}
    );
  };
  return (
    <div className="mt-1 w-full md:w-[600px]" style={{ fontFamily: "JetBrains Mono" }}>
      <div className="card shadow-sm p-3 " style={{ backgroundColor: "#F5F2EC" }}>
        <h2 className="text-center fw-bold">
          Start Your Free Analysis
        </h2>

        <p className="text-center text-muted mb-2">
          No sign-up required. Get instant insights about your digital presence.
        </p>

        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label className="form-label">
              Business Name 
            </label>
            <input
              value={name}
              type="text"
              className="form-control "
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g: Joe's Coffee Shop"
              
            />
          </div>

          <div className="mb-4">
            <label className="form-label">
              Website URL 
            </label>
            <input
              value={url}
              type="url"
              
              onChange={(e) => setUrl(e.target.value)}
              className="form-control "
              placeholder="e.g: https://example.com"
            />
          </div>

          <hr className="my-2" />

          <h6 className="mb-3">
            Social Media Links (Optional)
          </h6>

          <div className="mb-3">
            <label className="form-label">
              Facebook URL
            </label>
            <input
              value={fburl}
              type="url"
              className="form-control"
              onChange={(e) => setFburl(e.target.value)}
              placeholder="e.g: https://facebook.com/yourpage"
             
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Instagram URL
            </label>
            <input
              value={instaurl}
              type="url"
              className="form-control "
              onChange={(e) => setInstaurl(e.target.value)}
              placeholder="e.g: https://instagram.com/yourpage"
             
            />
          </div>

          <button
            type="submit"
            className="btn bg-black text-white w-100 py-2"
          >
            Analyze Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
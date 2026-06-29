import { useNavigate } from "react-router-dom";
function Form() {
  const navigate=useNavigate();
  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log("Form submitted");
    navigate("/analytics");
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
              type="text"
              className="form-control "
              placeholder="e.g: Joe's Coffee Shop"
            />
          </div>

          <div className="mb-4">
            <label className="form-label">
              Website URL 
            </label>
            <input
              type="url"
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
              type="url"
              className="form-control"
              placeholder="e.g: https://facebook.com/yourpage"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Instagram URL
            </label>
            <input
              type="url"
              className="form-control "
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
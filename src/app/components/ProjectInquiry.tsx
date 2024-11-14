export default function ProjectInquiry() {
  return (
    <div className="relative flex flex-col  w-1/2 h-full items-center justify-center text-center font-serif">
      <div className="h-5/6 w-2/3 bg-white">
        <span className=" text-4xl">PROJECT INQUIRY</span>
        <div className="flex flex-row">
          <label className="form-control w-2/5 mx-auto">
            <div className="label">
              <span className=" label-text">First Name</span>
              <span className=" label-text-alt">Required</span>
            </div>
            <input
              type="text"
              placeholder="Type Here"
              className="input input-bordered bg-slate-100 rounded-none"
            />
          </label>
          <label className="form-control w-2/5  mx-auto">
            <div className="label">
              <span className=" label-text">Last Name</span>
              <span className=" label-text-alt">Required</span>
            </div>
            <input
              type="text"
              placeholder="Type Here"
              className="input input-bordered bg-slate-100 rounded-none"
            />
          </label>
        </div>
        <label className="form-control w-11/12  mx-auto">
          <div className="label">
            <span className=" label-text">Email</span>
            <span className=" label-text-alt">Required</span>
          </div>
          <input
            type="text"
            placeholder="Type Here"
            className="input input-bordered bg-slate-100 rounded-none"
          />
        </label>
        <label className="form-control w-11/12  mx-auto">
          <div className="label">
            <span className=" label-text">Subject</span>
            <span className=" label-text-alt">Required</span>
          </div>
          <input
            type="text"
            placeholder="Type Here"
            className="input input-bordered bg-slate-100 rounded-none"
          />
        </label>
        <label className="form-control w-11/12  mx-auto">
          <div className="label">
            <span className=" label-text">Message</span>
            <span className=" label-text-alt">Required</span>
          </div>
          <textarea className="textarea textarea-bordered h-20 bg-slate-100"></textarea>
        </label>
        <button className=" h-6 w-2/6 bg-black text-white btn-sweep border-zinc-950 border-2 rounded-full mt-3">
          Submit.
        </button>
      </div>
    </div>
  );
}

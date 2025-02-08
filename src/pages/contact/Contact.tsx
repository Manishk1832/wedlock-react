

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-10 px-6 py-10 pt-10 md:px-10 lg:flex-row lg:gap-20 lg:px-20">
        <div className="w-full lg:w-[50%]">
          <div className="mx-auto max-w-md">
            <h2 className="mb-4 text-3xl font-semibold text-[#101828]">
            We’re Here to Help
            </h2>
            <p className="mb-6 text-[#475467]">
            Whether you have questions about our platform or need assistance, contact our dedicated customer support team.
            </p>
            <form>
              <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-gray-700">First name</label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="mt-1 w-full rounded-[0.5rem] border border-gray-300 p-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Last name</label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="mt-1 w-full rounded-[0.5rem] border border-gray-300 p-2"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="mt-1 w-full rounded-[0.5rem] border border-gray-300 p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone number</label>
                <div className="flex">
                  <select className="rounded-l border border-gray-300 p-2">
                    <option value="AU">AU</option>
                    <option value="US">US</option>
                    <option value="UK">UK</option>
                    {/* Add other country codes as needed */}
                  </select>
                  <input
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-r border border-gray-300 p-2"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  placeholder="Message"
                  className="mt-1 w-full resize-none rounded-[0.5rem] border border-gray-300 p-2"
                  rows={6}
                ></textarea>
              </div>
              <div className="mb-4 flex items-center">
                <input type="checkbox" id="privacy" className="mr-2" />
                <label htmlFor="privacy" className="text-gray-700">
                  You agree to our friendly{" "}
                  <a href="#" className="text-blue-500 underline">
                    privacy policy
                  </a>
                  .
                </label>
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded bg-[#007EAF] p-2 text-white hover:bg-blue-700"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
        <div className="w-full lg:w-[50%]">
          <img
            src="/contact.png"
            alt=""
            className="mx-auto"
          />
        </div>
        
      </div>
      <div className="px-6 py-10 md:px-10 lg:px-20 text-left bg-[#e4e8ea7d]">
        <h3 className="text-md font-bold text-[#101828]">Contact Us</h3>
        <p className="mb-2 text-[#475467]">
          Got something you want to talk about? Contact us or email us and we promise to get back to you as soon as we can.
        </p>
        <h3 className="mt-6 text-md font-bold text-[#101828]">Help / Support</h3>
        <p className="text-[#475467] pb-4">For all things technical, App and website related.</p>
        <h3 className=" text-md font-bold">
          Contact Us or reach us by:
        </h3>
        <p className=" text-black pb-4">
           <span className="font-medium">Phone: </span>1300 WEDLOCK (1300 9335625)
        </p>
        <p className=" text-black pb-4">
          <span className="font-medium">Email:</span>  <a href="mailto:info@wedlock.au" className=" underline">info@wedlock.au</a>
        </p>
        <p className=" text-black ">
          <span className="font-medium">Address:</span>  38 Carlton Street, McKinnon VIC 3204, Australia
        </p>
      </div>
      <div className="flex flex-col items-center justify-between bg-[#F9FAFB] px-6 py-10 md:px-10 lg:flex-row lg:px-20">
        <div className="mb-4 space-y-4 text-center lg:mb-0 lg:text-left">
          <h1 className="text-xl font-semibold">Join our newsletter</h1>
          <p className="text-[#475467]">
            We’ll send you a nice letter once per week. No spam.
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 sm:flex-row">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full rounded border border-gray-300 p-2 sm:w-auto"
          />
          <button
            type="submit"
            className="w-full rounded bg-[#007EAF] p-2 text-white sm:w-auto"
          >
            Subscribe
          </button>
        </div>
       
      </div>
      
    </div>
  );
};

export default Contact;

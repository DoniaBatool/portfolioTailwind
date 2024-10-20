import React from "react";

const Contact = () => {
  return (
    <div id="Contact">
      <section className="text-gray-600 body-font relative bg-cover bg-fixed bg-center custom-image">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap gap-6">

          {/* Form box */}
          <div
            className="lg:w-1/2 md:w-full w-full bg-fixed bg-center bg-cover custom-image flex flex-col 
            h-[560px] md:h-[560px] lg:h-[560px] w-full md:w-full lg:w-[50%] 
            md:py-8 mt-8 md:mt-0 px-4 border-4 border-yellow-300 rounded-lg"
          >
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-300">
              Contact
            </h2>
            <p className="leading-relaxed mb-5 text-white">Feel Free to Contact</p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              className="text-black bg-yellow-300 border-0 py-2 px-6 focus:outline-none 
              hover:shadow-2xl hover:shadow-white hover:text-xl rounded text-lg mb-4"
            >
              Send Message
            </button>
          </div>

          {/* Map box */}
          <div
            className="lg:w-1/2 md:w-full w-full bg-gray-200 rounded-lg overflow-hidden 
            flex items-end justify-start relative border-4 border-yellow-300 
            h-[560px] md:h-[560px] lg:h-[560px] w-full md:w-full lg:w-[50%]"
          >
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.6601071439195!2d67.0330513744302!3d24.875455744659195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e5d2407bf3f%3A0x869d5ecf2b45f202!2sMuhammad%20Ali%20Habib%20Rd%2C%20Catholic%20Colony%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1724351317505!5m2!1sen!2s"
              style={{ filter: "contrast(1.2) opacity(0.4)" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

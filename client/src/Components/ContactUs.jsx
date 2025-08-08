import React from "react";
import { notifySuccess, notifyError } from '../components/Toast'; // Adjust path if needed

const accessKey = import.meta.env.VITE_WEBFORM_ACCESS_KEY;


export default function ContactUs() {
  const onSubmit = async (event) => {
    event.preventDefault();

    console.log("Access Key:", accessKey); // Debug: remove in production

    if (!accessKey) {
      notifyError("Access key is missing. Please check your environment setup.");
      return;
    }

    const formData = new FormData(event.target);
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        notifySuccess("Form submitted successfully!");
        event.target.reset();
      } else {
        console.error("Form submission error:", data);
        notifyError("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      notifyError("Network error. Please try again.");
    }
  };

  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-white">
      <div className="text-center mb-10">
        <p className="text-blue-600 font-medium text-sm mb-2">Contact Us</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-700">
          Get in touch with us
        </h2>
        <p className="text-gray-500 text-sm mt-4 max-w-xl mx-auto">
          We’d love to hear from you. Whether you have a question about features, pricing, or anything else, our team is ready to help.
        </p>
      </div>

      <form className="flex flex-col items-center" onSubmit={onSubmit}>
        <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-4xl">
          <div className="w-full">
            <label className="text-black/70 block mb-1" htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="John Doe"
              className="h-12 p-3 w-full border border-gray-300 rounded outline-none focus:border-indigo-400"
            />
          </div>

          <div className="w-full">
            <label className="text-black/70 block mb-1" htmlFor="phone">Mobile No.</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="9876543210"
              className="h-12 p-3 w-full border border-gray-300 rounded outline-none focus:border-indigo-400"
            />
          </div>

          <div className="w-full">
            <label className="text-black/70 block mb-1" htmlFor="email">Your Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="example@email.com"
              className="h-12 p-3 w-full border border-gray-300 rounded outline-none focus:border-indigo-400"
            />
          </div>
        </div>

        <div className="mt-6 w-full max-w-4xl">
          <label className="text-black/70 block mb-1" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            placeholder="Write your message here..."
            className="w-full p-3 border border-gray-300 rounded resize-none outline-none focus:border-indigo-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-6 bg-indigo-600 text-white h-12 w-56 rounded shadow hover:bg-indigo-700 transition active:scale-95"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

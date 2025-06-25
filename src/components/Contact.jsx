import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        "service_pxwcs67",
        "template_vnfiie4",
        form.current,
        "tsRdPoW4FQvnXqUDS"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          form.current.reset();
  
          // Automatically hide success message after 4 seconds
          setTimeout(() => setSuccess(false), 4000);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };  

  return (
    <section
      id="contact"
      className="bg-[#1E1E1E] text-white py-20 px-6 md:px-20"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#FF6B00]">Contact Me</h2>
          <p className="text-gray-400 mt-2">
            Feel free to reach out for any collaboration, project discussion, or query.
          </p>
        </div>

        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            className="bg-[#2A2A2A] text-gray-300 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-[#FF6B00]"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="bg-[#2A2A2A] text-gray-300 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-[#FF6B00]"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="bg-[#2A2A2A] text-gray-300 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-[#FF6B00]"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={4}
            className="bg-[#2A2A2A] text-gray-300 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-[#FF6B00] resize-none md:col-span-2"
          ></textarea>

          {/* Button */}
          <div className="text-right md:col-span-2">
            <button
              type="submit"
              className="bg-[#FF6B00] hover:bg-orange-600 px-8 py-3 rounded-md text-white font-medium transition"
            >
              Send Message
            </button>
          </div>
        </form>

        {success && (
          <p className="text-green-400 text-center mt-4">
            Your message has been sent successfully!
          </p>
        )}
      </div>
    </section>
  );
}

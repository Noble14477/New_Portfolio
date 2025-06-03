import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Parallax } from "react-scroll-parallax";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div className="w-full overflow-hidden text-black py-20 px-4 md:px-20 mt-10" id="contact">
      <div className="mx-auto max-w-7xl">
        <Parallax speed={10} className="w-full">
          <div className="flex flex-col justify-center items-center">
            <div className="relative flex justify-center items-center flex-col mb-4">
              <h2 className="text-4xl capitalize font-bold font-serif py-6">CONTACT.</h2>
              <div className="bg-tertiary w-[40px] h-2 rounded-full" />
            </div>
            <p className="text-[17px] max-w-3xl leading-[30px] mt-4 text-center">
              Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
            </p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="mt-20 bg-white rounded-lg p-6 md:p-10 max-w-3xl mx-auto">
            <div className="grid gap-8">
              <label htmlFor="name" className="grid gap-4">Name:
                <input id="name" type="text" name="user_name" required placeholder="Enter your name..." className="bg-gray-100 md:p-6 p-4 text-[14px] rounded-md" />
              </label>
              <label htmlFor="email" className="grid gap-4">Email:
                <input id="email" type="email" name="user_email" required placeholder="Enter your email..." className="bg-gray-100 md:p-6 p-4 text-[14px] rounded-md" />
              </label>
              <label htmlFor="message" className="grid gap-4">Message:
                <textarea id="message" name="message" required placeholder="Enter your message..." className="bg-gray-100 md:p-6 p-4 h-[250px] text-[14px] rounded-md resize-none"></textarea>
              </label>

              {sent && <p className="text-green-600 text-center">Message sent successfully!</p>}
              <div className="mt-4 flex justify-end">
                <button type="submit" className="bg-tertiary py-4 uppercase text-white px-16 rounded-md hover:-translate-y-2 duration-300 shadow-xl">
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </Parallax>
      </div>
    </div>
  );
};

export default Contact;

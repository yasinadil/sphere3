import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import Split from "../Split";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

const ContactWithMap = ({ theme = "dark" }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          form.current.from_name.value = "";
          form.current.from_email.value = "";
          form.current.message.value = "";
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          form.current.from_name.value = "";
          form.current.from_email.value = "";
          form.current.message.value = "";
        }
      );
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form md-mb50">
                <h4 className="extra-title mb-50">Get In Touch.</h4>

                <form
                  ref={form}
                  id="contact-form"
                  onSubmit={(event) => sendEmail(event)}
                >
                  <div className="controls">
                    <div className="form-group">
                      <input
                        id="form_name"
                        type="text"
                        name="from_name"
                        placeholder="Name"
                        required="required"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        id="form_email"
                        type="email"
                        name="from_email"
                        placeholder="Email"
                        required="required"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        as="textarea"
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required="required"
                      />
                    </div>

                    <button
                      type="submit"
                      className={`btn-curve ${
                        theme === "dark" ? "btn-lit" : "btn-color"
                      } disabled`}
                    >
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="cont-info">
                <h4 className="extra-title mb-50">Contact Info.</h4>
                <Split>
                  <h3 className="custom-font wow" data-splitting>
                    Let&apos;s Talk.
                  </h3>
                </Split>
                <div className="item mb-40">
                  <h5>
                    <a href="mailto:contact@sphere3labs.com">
                      contact@sphere3labs.com
                    </a>
                  </h5>

                  <h5>(+92) 313 796 4784</h5>
                </div>
                <Split>
                  <h3 className="custom-font wow" data-splitting>
                    Visit Us.
                  </h3>
                </Split>
                <div className="item">
                  <h6>
                    Expo Road, Johar Town
                    <br />
                    Lahore, Pakistan
                  </h6>
                </div>
                <div className="social mt-50">
                  <a
                    href="https://www.linkedin.com/company/sphere3-labs"
                    rel="noreferrer"
                    target="_blank"
                    className="icon"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="https://twitter.com/sphere3labs"
                    rel="noreferrer"
                    target="_blank"
                    className="icon"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="map" id="ieatmaps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.940419471167!2d74.25942189999999!3d31.4708251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919022c22999a57%3A0xe8430dd89d356411!2sExpo%20Center%20Rd%2C%20Phase%202%20Johar%20Town%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1690646136581!5m2!1sen!2s"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <footer className="footer-half sub-bg">
        <div className="container">
          <div className="copyrights text-center mt-0">
            <p>© 2023, Sphere3 Labs - Your Business Partner</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactWithMap;

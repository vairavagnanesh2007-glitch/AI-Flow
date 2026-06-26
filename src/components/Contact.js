import { useState } from "react";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (

            formData.name === "" ||

            formData.email === "" ||

            formData.message === ""

        ) {

            alert("Please fill all fields.");

            return;

        }

        setSuccess(true);

        setFormData({

            name: "",

            email: "",

            message: ""

        });

        setTimeout(() => {

            setSuccess(false);

        },3000);

    };

    return(

        <section className="contact" id="contact">

            <div className="section-title">

                <span className="sub-title">

                    CONTACT

                </span>

                <h2>

                    Let's Build Something Amazing

                </h2>

                <p>

                    We'd love to hear from you.

                </p>

            </div>

            <div className="contact-container">

                <div className="contact-info">

                    <h3>

                        Get In Touch

                    </h3>

                    <p>

                        Have questions or need a custom AI solution?

                        Contact our team today.

                    </p>

                    <div className="contact-item">

                        📧 support@aiplatform.com

                    </div>

                    <div className="contact-item">

                        📞 +91 98765 43210

                    </div>

                    <div className="contact-item">

                        📍 Chennai, India

                    </div>

                </div>

                <form

                    className="contact-form"

                    onSubmit={handleSubmit}

                >

                    <input

                        type="text"

                        placeholder="Your Name"

                        name="name"

                        value={formData.name}

                        onChange={handleChange}

                    />

                    <input

                        type="email"

                        placeholder="Your Email"

                        name="email"

                        value={formData.email}

                        onChange={handleChange}

                    />

                    <textarea

                        rows="6"

                        placeholder="Your Message"

                        name="message"

                        value={formData.message}

                        onChange={handleChange}

                    ></textarea>

                    <button>

                        Send Message

                    </button>

                    {

                        success &&

                        <p className="success-message">

                            ✅ Message Sent Successfully!

                        </p>

                    }

                </form>

            </div>

        </section>

    );

}

export default Contact;
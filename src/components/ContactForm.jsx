
import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("Sending...");
        setTimeout(() => {
            setStatus("Message sent successfully ");
            setFormData({ name: "", email: "", message: "" });
        }, 1000);
    };

    return (
        <>
            <section className="flex items-center justify-center  bg-gradient-to-tr bg-black px-4 py-10">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg space-y-6"
                >
                    <h2 className="text-3xl font-bold text-center text-gray-800">Contact Us 💬</h2>

                    <div>
                        <label className="block mb-1 text-gray-600">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Your Name"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-gray-600">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-gray-600">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Type your message..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                    >
                        Send Message
                    </button>

                    {status && <p className="text-center text-green-600 mt-4">{status}</p>}
                </form>
            </section>
        </>
    );
};

export default ContactForm;

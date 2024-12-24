import React, { useState } from 'react';
import { RiMailLine } from '@remixicon/react';

const ContactForm = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form);

        try {
            const response = await fetch('./src/assets/php/form-process.php', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                form.reset(); // Clear the form
            } else {
                setStatus('Failed to send the message. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            setStatus('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="col-lg-8">
            <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
                <form id="contactForm" className="contactForm" name="contactForm" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    placeholder="Steve Milner"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="hello@websitename.com"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    className="form-control"
                                    rows="4"
                                    placeholder="Write Your message"
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group mb-0">
                                <button type="submit" className="theme-btn">
                                    Send Me Message <i><RiMailLine size={16} /></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                {status && <p className="form-status">{status}</p>}
            </div>
        </div>
    );
};

export default ContactForm;

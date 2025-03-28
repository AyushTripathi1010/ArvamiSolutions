import { useState, useEffect } from 'react';
import Modal from './Modal';

const GoogleFormAstrology = ({ isOpen, onClose }) => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    // Listen for form submission message from the iframe
    useEffect(() => {
        const handleMessage = (event) => {
            // Check if the message is from Google Forms
            if (event.data === 'formSubmitted') {
                setFormSubmitted(true);

                // Close the modal after showing success message
                setTimeout(() => {
                    onClose();
                    // Reset form submitted state after modal is closed
                    setTimeout(() => {
                        setFormSubmitted(false);
                    }, 300);
                }, 3000);
            }
        };

        window.addEventListener('message', handleMessage);
        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, [onClose]);

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Contact Form"
        >
            {formSubmitted ? (
                <div className="flex flex-col items-center justify-center p-10 text-center">
                    <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Form Submitted Successfully!</h3>
                    <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
            ) : (
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfHgQ31cbV3BQjxeSkiPi7OGAso2wkX8yIuX3FyOQ6uiG0aDg/viewform?embedded=true"
                    width="80%"
                    height="85vh"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    className="block w-full h-[100vh]"
                    onLoad={(e) => {
                        // Add event listener to detect form submission
                        const iframe = e.target;
                        try {
                            // This might not work due to same-origin policy
                            iframe.contentWindow.addEventListener('submit', () => {
                                setFormSubmitted(true);
                            });
                        } catch (error) {
                            console.log('Cannot access iframe content due to same-origin policy');
                        }
                    }}
                >
                    Loading…
                </iframe>
            )}
        </Modal>
    );
};

export default GoogleFormAstrology;
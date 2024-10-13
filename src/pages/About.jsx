import React from 'react';
import '../components/css/about.css'
import { useNavigate } from 'react-router-dom';

const About = () => {

    const navigate = useNavigate()

    return (
        <div className="about-container">
            <h1>About Our QR Reader & Generator</h1>
            <p>
                Welcome to the ultimate destination for all your QR code needs! Whether you're looking to decode a QR
                code or generate your own, our platform offers a seamless and intuitive experience that caters to individuals,
                businesses, and developers alike.
            </p>

            <h2>Who We Are</h2>
            <p>
                We are a team of tech enthusiasts and digital innovators dedicated to making the world of QR codes accessible
                and user-friendly for everyone. Understanding the importance of QR codes in today's digital landscape, we've
                created a powerful yet easy-to-use tool that simplifies the process of reading and generating QR codes.
                Our mission is to empower users with the tools they need to connect, share, and access information effortlessly.
            </p>

            <h2>What We Offer</h2>
            <h3>Instant QR Code Reading</h3>
            <p>
                Our QR Reader is fast, accurate, and compatible with all types of QR codes. Whether it's a URL, text,
                contact information, or a Wi-Fi password, our reader will decode it in seconds. Simply upload an image or
                scan a code directly with your device's camera, and get instant access to the content hidden within.
            </p>

            <h3>Custom QR Code Generation</h3>
            <p>
                Need to create your own QR code? Our QR Generator offers a variety of customization options to suit your specific
                needs. Whether you're a business looking to create branded QR codes, or an individual wanting to share personal
                links, our tool allows you to generate high-quality QR codes that are both functional and visually appealing.
            </p>

            <h3>Versatile Applications</h3>
            <p>
                QR codes are more than just a trend—they're a versatile tool for communication and interaction in the digital world.
                From marketing campaigns and product labeling to event management and personal sharing, our platform supports all
                your QR code use cases. Explore the endless possibilities of how QR codes can enhance your digital presence.
            </p>

            <h3>User-Friendly Interface</h3>
            <p>
                We believe in simplicity and efficiency. Our web platform is designed to be user-friendly,
                with a clean interface that makes QR code reading and generating a breeze. Whether you're tech-savvy or a beginner,
                you'll find our tools intuitive and easy to use.
            </p>

            <h3>Privacy and Security</h3>
            <p>
                Your data privacy is our top priority. We ensure that your QR codes are generated and read with the utmost security.
                We don't store any personal information unless you explicitly choose to, giving you full control over your data.
            </p>

            <h2>Why Choose Us?</h2>
            <ul>
                <li><strong>Fast and Reliable:</strong> Our platform is optimized for speed and accuracy, ensuring that you can read and generate QR codes in a matter of seconds.</li>
                <li><strong>Customizable Options:</strong> Tailor your QR codes to your specific needs with a range of customization features.</li>
                <li><strong>Cross-Platform Compatibility:</strong> Our tools work seamlessly across all devices and operating systems.</li>
                <li><strong>No Software Required:</strong> Everything is web-based, so you can access our tools anytime, anywhere, without the need for downloads or installations.</li>
                <li><strong>Comprehensive Support:</strong> We're here to help! Our support team is available to assist with any questions or issues you might encounter.</li>
            </ul>

            <h2>Join the QR Revolution</h2>
            <p>
                Whether you're looking to simplify your life with QR codes, enhance your business operations,
                or just explore the potential of this powerful tool, our platform is your go-to resource.
                Join the thousands of users who trust us for their QR code needs, and take your digital interactions to the
                next level.
            </p>

            <p>
                Explore our QR Reader and Generator today and unlock the full potential of QR technology!
            </p>

            <button type="button" className="btn btn-primary mt-3" onClick={() => {navigate("/")}}>Go back</button>
            
        </div>
    );
}

export default About;

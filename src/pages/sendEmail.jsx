import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import { db } from '../FireBase';
import { collection, addDoc } from 'firebase/firestore';

const Login = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [generatedOtp, setGeneratedOtp] = useState('');
    const navigate = useNavigate();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const sendOtp = () => {
        const serviceID = 'service_soyjgm7';
        const templateID = 'template_do2cxqh';
        const publicKey = 'rvQSeFoPCXhJKZb84';
        const otpCode = Math.floor(10000 + Math.random() * 90000).toString();

        const emailTemplate = {
            from_name: 'Link to QR',
            to_email: email,
            message: otpCode
        };

        if (emailPattern.test(email)) {
            emailjs.send(serviceID, templateID, emailTemplate, publicKey)
                .then(() => {
                    setGeneratedOtp(otpCode);
                    swal("OTP Sent", "Check your email for OTP", "success", { buttons: "Done", timer: 7000 });
                })
                .catch((error) => {
                    swal("Oops", "Failed to send OTP. Please try again", "error", { buttons: "Close", timer: 7000 });
                    console.error(error);
                });
        } else {
            swal("Oops", "Please enter a valid email", "warning", { buttons: "Close", timer: 7000 });
        }
    };

    const verifyOtp = async () => {
        if (!email || !otp) {
            swal("Oops", "Email or OTP is empty", "warning", { buttons: "Close", timer: 7000 });
        } else if (otp === generatedOtp) {
            try {
                await addDoc(collection(db, 'users'), { email });
                swal("Login successful", "Login to the web page is successful", "success", { buttons: "Done", timer: 7000 });
                navigate('/header');
            } 
            catch (error) {
                swal("Oops", "Server connection error", "error", { buttons: "Close", timer: 7000 });
                console.error(error);
            }
        } else {
            swal("Oops", "Invalid OTP. Please try again", "warning", { buttons: "Close", timer: 7000 });
        }
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center">Welcome to the QR to Link</h1>
                        <form>
                            <div className="form-group">
                                <label>Email</label> <br />
                                <input type="email" className="form-control" placeholder="Enter your email here" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <button type="button" className="btn btn-primary mt-3" onClick={sendOtp}> Send OTP </button>

                            <div className="form-group mt-3">
                                <label>OTP Code</label> <br />
                                <input type="text" className="form-control" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
                            </div>

                            <button type="button" className="btn btn-primary mt-3" onClick={verifyOtp}> Log In </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;

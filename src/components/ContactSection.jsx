import React, { useState, useRef } from 'react'
const ContactSection = () => {
    const [message, setMessage] = useState('');
    const [error, setError] = useState();
    const emailRef = useRef();

    const emailValidation = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const formHandler = async (e) => {
        e.preventDefault();

        setMessage('');

        const mail = emailRef.current.value;

        if (!mail) {
            setMessage('Email is required');
            setError(1);
            emailRef.current.value = '';
            return;
        }

        if (!emailValidation(mail)) {
            setMessage('Email is invalid');
            setError(1);
            emailRef.current.value = '';
            return;
        }

        const formData = {
            email: mail
        };

        console.log(formData);
        console.log(JSON.stringify(formData));

        try {
            const response = await fetch('http://34.225.132.160:8002/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.status === 200) {
                const data = await response.json();
                setError(0);
                setMessage(data.message);
            }
            else if (response.status === 422) {
                const data = await response.json();
                setMessage(data.detail);
                setError(2);
            }
            else {
                setMessage('Something went wrong');
                setError(2);
            }

            emailRef.current.value = '';
        } catch (error) {
            console.log(error);
        }

    };
    return (
        <>
            <div>
                {(message && <p className={(error === 0) ? 'text-lime-600' : (error === 1) ? 'text-yellow-500' : ' text-red-600'} style={{ fontSize: "1.5rem" }}>{message}</p>)}
                <div className='flex xl:flex-row flex-col align-middle gap-5'>
                    <div className='flex-grow'>
                        <input type="text" placeholder="Email Address" className="border-gray-400 text-2xl xl:text-3xl rounded-lg p-4 w-full border pr-28" ref={emailRef} />
                    </div>
                    <div className='flex-grow'>
                        <input type="submit" value="Contact Me" className="text-white border-submit-btn text-2xl xl:text-3xl bg-submit-btn rounded-lg p-4 border" onClick={formHandler} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactSection
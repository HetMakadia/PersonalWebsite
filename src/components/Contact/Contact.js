import { collection, doc, setDoc, getDocs, addDoc } from "firebase/firestore";
import {db} from "../../firebase-config"
import { Textarea } from "@material-tailwind/react";
import React, {useEffect, useState} from "react";


function Contact() {
    const dbRef = collection(db, "Notifications")
    const [isDisabled, setIsDisabled] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState();

    const data = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        addDoc(dbRef, data)
            .then(docRef => {
                setIsDisabled(!isDisabled)
                console.log("Document has been added successfully");
            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <section id="contact" className="text-white bg-base-100 select-none">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold lg:text-5xl">Contact Me.</h2>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:col-span-2 lg:py-12">
                            <p className="max-w-xl text-lg text-justify">
                                Thank you for visiting my portfolio. Your interest in my work means a lot to me, and I hope you found it informative and engaging. If you have any inquiries or job opportunities, please feel free to contact me. I'm always eager to connect with people who share my passion.
                            </p>

                            <div className="mt-8">
                                <a href="" className="text-4xl font-bold text-gray-600">
                                    Het Makadia
                                </a>
                                <br/>
                                {/*<a href="tel:+16572959821" className=" mt-2 text-lg font-bold text-gray-400">*/}
                                {/*    (657) 295-9821*/}
                                {/*</a>*/}
                                <br/>
                                <a href="mailto: hetmakadia.28@gmail.com" className="mt-2 text-lg font-bold text-gray-400">
                                    hetmakadia.28@gmail.com
                                </a>
                                <address className=" not-italic text-lg font-bold text-gray-400">
                                    California, United States
                                </address>
                                <br/>
                                <br/>
                                <div className="flex justify-center space-x-6 text-white">
                                    <a href="https://www.linkedin.com/in/hetmakadia/" target="_blank">
                                        <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 link" to="" fill="currentColor" viewBox="0 0 24 24" >
                                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                                        </svg>
                                    </a>
                                    <a href="https://github.com/HetMakadia" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com/het.makadia/" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg bg-neutral p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form action="" className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label className="sr-only" htmlFor="name">Name</label>
                                    <input className="w-full rounded-lg bg-base-100 border-gray-800 hover:bg-black hover:border-white p-3 text-sm" placeholder="Name" type="text" value={name} onChange={e => setName(e.target.value)} disabled={isDisabled}/>
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" htmlFor="email">Email</label>
                                        <input className="w-full bg-base-100 rounded-lg border-gray-800 hover:bg-black hover:border-white p-3 text-sm" placeholder="Email address" type="email" value={email} onChange={e => setEmail(e.target.value)} disabled={isDisabled}/>
                                    </div>
                                    <div>
                                        <label className="sr-only" htmlFor="phone">Phone</label>
                                        <input className="w-full bg-base-100 rounded-lg border-gray-800 hover:bg-black hover:border-white p-3 text-sm" placeholder="Phone Number" type="tel" value={phone} onChange={e => setPhone(e.target.value)} disabled={isDisabled}/>
                                    </div>
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="message">Message</label>

                                    {isDisabled?<textarea disabled className="w-full bg-base-100 rounded-lg border-gray-800 hover:bg-black hover:border-white p-3 text-sm" placeholder="Message" rows="8" value={message} onChange={e => setMessage(e.target.value)} ></textarea> : <textarea  className="w-full bg-base-100 rounded-lg border-gray-800 hover:bg-black hover:border-white p-3 text-sm" placeholder="Message" rows="8" value={message} onChange={e => setMessage(e.target.value)} ></textarea> }


                                </div>
                                {isDisabled ?
                                    <div className="text-success">Thanks for reaching out to me.</div>
                                :
                                null
                                }
                                <div className="mt-4">
                                    <button disabled={isDisabled} type="submit" className="inline-block border border-gray-800 w-full bg-base-100 rounded-lg hover:bg-black hover:border-white px-5 py-3 font-medium text-white sm:w-auto">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;
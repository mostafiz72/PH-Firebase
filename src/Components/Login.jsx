import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from '../Components/FirbaseData/firbase.init'
import { FaEye } from "react-icons/fa";import { FaEyeSlash } from "react-icons/fa6";


export default function Login() {

    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [show, setShow] = useState(false);

    const handleRergister = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;
        const trams = e.target.trams.checked;
         console.log(trams);
         
        // reset error and status

        setError("");
        setSuccess(false)
        if(!trams){
            setError("You must agree to the terms and conditions")
            return;
        }

        /// password check kora hoyse jno onno validation sara dhukte na pare

        // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/; 

        // if(!passwordRegex.test(pass)){
        //     setError("Password should contain at least 6 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character")
        //     return;
        // }

        
        // create user with email and password

        createUserWithEmailAndPassword(auth, email, pass)
        .then(result =>{
            console.log(result.user)
            setSuccess(true)
            sendEmailVerification(auth.currentUser)
            .then(() => {
                 console.log("Email Verification sent!")
             })
        })
        .catch(error => {
            console.log("error", error)
            setError(error.message)
            setSuccess(false)
        })
    }





    return (
        <>
            <div  className=' bg-gray-900 h-screen'>
                <div className=' max-w-screen-sm mx-auto h-screen flex flex-col justify-center items-center'>
                    <div className=" w-full  border border-blue-500 py-8 px-5 rounded-lg">
                        <h2 className=' font-bold text-blue-600 text-3xl text-center'>Login From</h2>
                        <form onSubmit={handleRergister}>
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="E-mail" />
                            </div>
                            <div className="mb-5 relative">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input placeholder='Password' type={show? "text": "password"} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                 <button onClick={()=> setShow(!show)} className=' absolute top-10 right-2'>{show?<FaEyeSlash />:<FaEye />}</button>
                            </div>
                            <div className="form-control">
                                <label className="cursor-pointer justify-start label">
                                    <input type="checkbox" name='trams' defaultChecked className="checkbox checkbox-accent" />
                                    <span className="label-text ml-3">Accept Trams and Condition's</span>
                                </label>
                            </div>
                            <div className="mb-5">
                                <h3 className=' text-right text-blue-500'><Link to="/register">Register Here</Link></h3>
                                {error && <p className=' text-red-500'>{error}</p>}
                                {success && <p className=' text-green-500'>Register Successfully</p>}
                            </div>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log-In</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

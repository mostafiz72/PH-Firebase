import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './FirbaseData/firbase.init';

export default function Register() {
const [succ, setSucc] = useState(false);
const [errors, setSErrors] = useState('');
const emailRef = useRef();


  const handleLoginInfo = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    
    signInWithEmailAndPassword(auth, email, pass)
    .then(result => {
      console.log(result.user);

      if(!result.user.emailVerified){
        setSErrors("Please verify your email address")
        setSucc(false)

      }
      else{
        setSucc(true)
        setSErrors('')
      }
      // sendEmailVerification(auth.currentUser)
      //  .then(() => {
      //     console.log("Verification email sent");
      //   })

    })
    
    .catch(err =>{
      console.log(err.message);
      setSErrors(err.message)
      setSucc(false)
      //...
    })
  }

  /// forgeting password and email verification
  /// forgeting password and email verification

  const handleForget = () => {
    const email = emailRef.current.value;
    if(!email){
      console.log("please provide a valid email address");
    }
    else{
      sendPasswordResetEmail(auth, email)
       .then(() => {
          alert("Password reset email sent, please check your email");
        })
    }
  }


  return (
    <>
        <div className=' bg-gray-900 h-screen'>
          <div className=' max-w-screen-sm mx-auto h-screen flex flex-col justify-center items-center'>
            <form onSubmit={handleLoginInfo} className=" w-full  border border-blue-500 py-8 px-5 rounded-lg">
              <h2 className=' font-bold text-blue-600 text-3xl text-center'>Register From</h2>
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" ref={emailRef} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="E-mail" required />
                </div>
                <div className="mb-5">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                  <input placeholder='Password' type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-5 flex justify-between items-center">
                  <p onClick={handleForget} className=' text-white hover:underline cursor-pointer'>Forget Password</p>
                  <h3 className=' text-right text-white'>I have an account?<Link to="/login" className='text-blue-500 ml-2'>Login Here</Link></h3>
                </div>
                {succ && <p className=' text-green-400'>Login success</p>}
                {errors && <p className=' text-red-400'>{errors}</p>}
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
              </form>
          </div>
        </div>
    </>
  )
}


//// Notic----------------------
//// Notic----------------------

//// tumi kintu last video ta dekhonai jta holo userProfile updateing ...... jtar kaj kinto kora bakiu ase

//// ai site ta niya ato kicu ghabranor kicu nai register page ta k login page hishabe and login page ta register page hishabe kaj kora hoyse
//// ai site ta niya ato kicu ghabranor kicu nai register page ta k login page hishabe and login page ta register page hishabe kaj kora hoyse
//// ai site ta niya ato kicu ghabranor kicu nai register page ta k login page hishabe and login page ta register page hishabe kaj kora hoyse
//// ai site ta niya ato kicu ghabranor kicu nai register page ta k login page hishabe and login page ta register page hishabe kaj kora hoyse


/// What is useRef****************************************
/// What is useRef****************************************

/// useRef holo amn ekta function ta kono ekta valo er man neuyar por sei valuer man amader ke dite pare

//// Example:----
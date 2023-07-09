// export const metadata = {
//   title: 'Sign In - BrPrediction',
//   description: 'Page description',
// }
// import Link from 'next/link'

// export default function SignIn() {
//   return (
//     <section className="bg-gradient-to-b from-gray-100 to-white">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="pt-32 pb-12 md:pt-40 md:pb-20">

//           {/* Page header */}
//           <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
//             <h1 className="h1">Welcome back. We exist to make Alread Scoring easier.</h1>
//           </div>

//           {/* Form */}
//           <div className="max-w-sm mx-auto">
//             <form>
//               <div className="flex flex-wrap -mx-3 mb-4">
//                 <div className="w-full px-3">
//                   <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email</label>
//                   <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
//                 </div>
//               </div>
//               <div className="flex flex-wrap -mx-3 mb-4">
//                 <div className="w-full px-3">
//                   <div className="flex justify-between">
//                     <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password</label>
//                     <Link href="/reset-password" className="text-sm font-medium text-blue-600 hover:underline">Having trouble signing in?</Link>
//                   </div>
//                   <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your password" required />
//                 </div>
//               </div>
//               <div className="flex flex-wrap -mx-3 mb-4">
//                 <div className="w-full px-3">
//                   <div className="flex justify-between">
//                     <label className="flex items-center">
//                       <input type="checkbox" className="form-checkbox" />
//                       <span className="text-gray-600 ml-2">Keep me signed in</span>
//                     </label>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-wrap -mx-3 mt-6">
//                 <div className="w-full px-3">
//                   <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Sign in</button>
//                 </div>
//               </div>
//             </form>
//             <div className="text-gray-600 text-center mt-6">
//               Don't you have an account? <Link href="/signup" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign up</Link>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import React, { useState } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Sign In - BrPrediction',
  description: 'Page description',
};

export default function SignIn(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      await loginUser(email, password);
    } catch (error) {
      console.error('Error occurred during login:', error);
      // Handle login error
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const loginUser = async (email: string, password: string): Promise<void> => {
    console.log(email, password)
    // try {
    //   const response = await fetch(`${process.env.REACT_APP_HOST}/login`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       email,
    //       password,
    //     }),
    //   });

    //   const data = await response.json();

    //   if (data.status) {
    //     localStorage.clear();
    //     localStorage.setItem('token', data.user);
    //     // Perform necessary action on successful login
    //   } else {
    //     // Handle login error
    //   }
    // } catch (error) {
    //   console.error('Error occurred during login:', error);
    // }
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Welcome back. We exist to make Already Scoring easier.</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email" >Email</label>
                  <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" value={email} onChange = {handleEmailChange} required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password" >Password</label>
                    <Link href="/reset-password" className="text-sm font-medium text-blue-600 hover:underline">Having trouble signing in?</Link>
                  </div>
                  <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your password" value={password} onChange={handlePasswordChange} required/>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-gray-600 ml-2">Keep me signed in</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Sign in</button>
                </div>
              </div>
            </form>
            <div className="text-gray-600 text-center mt-6">
              Don't have an account?{' '}
              <Link href="/signup" className="text-blue-600 hover:underline transition duration-150 ease-in-out">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

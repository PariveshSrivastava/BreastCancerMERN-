// export const metadata = {
//   title: 'Sign Up - BrPrediction',
//   description: 'Page description',
// }

// import Link from 'next/link'

// export default function SignUp() {
//   return (
//     <section className="bg-gradient-to-b from-gray-100 to-white">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="pt-32 pb-12 md:pt-40 md:pb-20">

//           {/* Page header */}
//           <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
//             <h1 className="h1">Welcome. We exist to make Alread Scoring easier.</h1>
//           </div>

//           {/* Form */}
//           <div className="max-w-sm mx-auto">
//             <form>
//               <div className="flex flex-wrap -mx-3 mb-4">
//                 <div className="w-full px-3">
//                   <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
//                   <input id="name" type="text" className="form-input w-full text-gray-800" placeholder="Enter your name" required />
//                 </div>
//               </div>
//               <div className="flex flex-wrap -mx-3 mb-4">
//                 <div className="w-full px-3">
//                   <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
//                   <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
//                 </div>
//               </div>
//               <div className="flex flex-wrap -mx-3 mb-4">
//                 <div className="w-full px-3">
//                   <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
//                   <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your password" required />
//                 </div>
//               </div>
//               <div className="flex flex-wrap -mx-3 mt-6">
//                 <div className="w-full px-3">
//                   <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Sign up</button>
//                 </div>
//               </div>
//               <div className="text-sm text-gray-500 text-center mt-3">
//                 By creating an account, you agree to the <a className="underline" href="#0">terms & conditions</a>, and our <a className="underline" href="#0">privacy policy</a>.
//               </div>
//             </form>
//             <div className="text-gray-600 text-center mt-6">
//               Already using BrPrediction? <Link href="/signin" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign in</Link>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useState } from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/router';

export const metadata = {
  title: 'Sign Up - BrPrediction',
  description: 'Page description',
};

export default function SignUp() {
  // const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  async function registerUser(event: React.FormEvent) {
    event.preventDefault();

    // Perform form validation
    if (!name || !email || !password) {
      // Handle form validation error
      return;
    }

    console.log(name ,email, password);

    // Make API call or perform desired action to register the user
    // try {
    //   const response = await fetch(process.env.REACT_APP_HOST + '/register', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       name,
    //       email,
    //       password,
    //     }),
    //   });
    //   const data = await response.json();

    //   if (data.status === 'user created') {
    //     alert('User created successfully');
    //     // router.push('../sighin/login');
    //   } else {
    //     alert('Something went wrong');
    //   }
    // } catch (error) {
    //   console.error('Error registering user:', error);
    //   alert('An error occurred while registering the user');
    // }
  }

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Welcome. We exist to make Already Scoring easier.</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form onSubmit={registerUser}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your name"
                    value={name}
                    onChange={handleNameChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">
                    Password <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full" type="submit">
                    Sign up
                  </button>
                </div>
              </div>
            </form>
            <div className="text-gray-600 text-center mt-6">
              Already using BrPrediction?{' '}
              <Link
                href="/signin"
                className="text-blue-600 hover:underline transition duration-150 ease-in-out">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

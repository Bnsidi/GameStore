

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useColorMode, Button } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMsg('Veuillez remplir tous les champs');
      return;
    }

    try {
      setSubmitButtonDisabled(true);
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      alert(`Connexion réussie avec ${userCredential.user.email}`);
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setSubmitButtonDisabled(false);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
      <div className="flex min-h-full flex-1 flex-col justify-center px-8 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmission} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-center ">
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder=' Email'
                  className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 text-center">
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder=' passworld'
                  className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                disabled={submitButtonDisabled}
              >
                Sign in
              </button>
            </div>
            {errorMsg && <p>{errorMsg}</p>}
            <p className="mt-10 text-center text-sm text-gray-500">
              Don't have an account?{' '}
              <Link to="/Register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

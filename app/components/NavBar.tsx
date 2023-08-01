'use client';
import Link from 'next/link';
import { useContext } from 'react';
import useAuth from '../../hooks/useAuth';
import { AuthenticationContext } from '../context/authContext';

import AuthModal from './AuthModal';

export default function NavBar(): JSX.Element {
  const { data, loading } = useContext(AuthenticationContext);
  const { signout } = useAuth();

  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
        OpenTable
      </Link>
      <div>
        {loading ? null : (
          <div className="flex">
            {data ? (
              <button
                className="bg-blue-400 text-white border p-2 rounded-full px-4 mr-3'"
                onClick={signout}
              >
                Sign Out
              </button>
            ) : (
              <>
                <AuthModal isSignin={true} />
                <AuthModal isSignin={false} />
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

type NavBar = ReturnType<typeof NavBar>;

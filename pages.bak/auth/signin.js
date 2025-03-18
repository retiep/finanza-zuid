import { signIn } from 'next-auth/react';
import Layout from '../../components/common/Layout';
import Image from 'next/image';

export default function SignIn() {
  return (
    <Layout title="Sign In">
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to Finanza Zuid
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Connect with other CFO professionals
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="space-y-6">
              <button
                onClick={() => signIn('linkedin', { callbackUrl: '/members/dashboard' })}
                className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0A66C2] hover:bg-[#004182] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A66C2]"
              >
                <Image
                  src="/images/linkedin-logo.png"
                  alt="LinkedIn Logo"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Sign in with LinkedIn
              </button>
              
              <div className="mt-6">
                <p className="text-center text-sm text-gray-600">
                  By signing in, you agree to our{' '}
                  <a href="/terms" className="font-medium text-blue-600 hover:text-blue-500">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="/privacy" className="font-medium text-blue-600 hover:text-blue-500">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
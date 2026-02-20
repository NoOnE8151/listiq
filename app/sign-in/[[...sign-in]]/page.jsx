import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className='min-h-screen w-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4 md:p-8'>
      <div className='md:w-[80%] flex md:flex-row flex-col bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50'>
        {/* Left side sign up flow */}
        <div className="w-[50%] flex flex-col justify-center items-center pb-7">
        <SignIn/>
        <hr />
        <div className="text-lg text-muted-foreground">
          Don't have an account? <Link href='/sign-up' className="ml-2 text-[#3FBBEB] font-semibold hover:text-[#189BFF] transition-colors text-lg underline decoration-[#3FBBEB]">Create Now</Link>
        </div>
        <div className='text-center mt-8 pb-5'>
            <p className='text-sm text-gray-500 px-5'>
              By signing in, you agree to our{' '}
              <Link href='#' className='text-[#3FBBEB] hover:underline font-medium'>
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href='#' className='text-[#3FBBEB] hover:underline font-medium'>
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>

        {/* Right Side - Branding & Hero */}
        <div className='hidden md:w-[50%] w-full bg-gradient-to-br from-[#3FBBEB] via-[#189BFF] to-[#3FBBEB] p-12 md:flex flex-col items-center justify-center text-white relative overflow-hidden'>
        <div className='relative z-10 text-center max-w-md'>
            <div className='flex items-center justify-center mb-8'>
              <h1 className='font-riot text-5xl md:text-6xl tracking-tight'>
                <span className='text-white drop-shadow-lg'>List</span>
                <span className='text-white/90 drop-shadow-lg'>IQ</span>
              </h1>
            </div>
            
            <h2 className='text-3xl md:text-4xl font-semibold mb-6 bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4 inline-block'>
              Welcome Back
            </h2>
            
            <p className='text-xl md:text-2xl opacity-90 leading-relaxed mb-8'>
               Access your AI-powered product listings instantly
            </p>
            
            <div className='flex items-center justify-center gap-4 text-2xl opacity-80 mb-12'>
              <div className='w-3 h-3 bg-white/50 rounded-full animate-pulse'></div>
              <div className='w-2 h-2 bg-white/30 rounded-full animate-pulse' style={{animationDelay: '200ms'}}></div>
              <div className='w-3 h-3 bg-white/50 rounded-full animate-pulse' style={{animationDelay: '400ms'}}></div>
            </div>
          </div>
          {/* Floating Elements */}
          <div className='absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float'></div>
          <div className='absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse-slow'></div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;

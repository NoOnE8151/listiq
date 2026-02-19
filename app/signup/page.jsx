'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm()

  const onSubmit = (data) => {
    // Demo submission function
    console.log('Form Data:', data)
    alert(isLogin ? 'Login Demo!' : 'Signup Demo!')
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4 md:p-8'>
      <div className='max-w-4xl w-full flex md:flex-row flex-col bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50'>
        {/* Left Side - Branding & Hero */}
        <div className='md:w-1/2 w-full bg-gradient-to-br from-[#3FBBEB] via-[#189BFF] to-[#3FBBEB] p-12 flex flex-col items-center justify-center text-white relative overflow-hidden'>
          <div className='relative z-10 text-center max-w-md'>
            <div className='flex items-center justify-center mb-8'>
              <h1 className='font-riot text-5xl md:text-6xl tracking-tight'>
                <span className='text-white drop-shadow-lg'>List</span>
                <span className='text-white/90 drop-shadow-lg'>IQ</span>
              </h1>
            </div>
            
            <h2 className='text-3xl md:text-4xl font-semibold mb-6 bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4 inline-block'>
              {isLogin ? 'Welcome Back!' : 'Join ListIQ Today'}
            </h2>
            
            <p className='text-xl md:text-2xl opacity-90 leading-relaxed mb-8'>
              {isLogin 
                ? 'Access your AI-powered product listings instantly'
                : 'Create optimized Amazon & Flipkart listings in seconds'
              }
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

        {/* Right Side - Form */}
        <div className='md:w-1/2 w-full p-10 md:p-16 flex flex-col justify-center'>
          <div className='text-center mb-12'>
            <h3 className='text-4xl md:text-5xl font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4'>
              {isLogin ? 'Login' : 'Create Account'}
            </h3>
            <p className='text-xl text-muted-foreground'>
              {isLogin 
                ? 'Enter your credentials to continue'
                : 'Get started with your free account'
              }
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            {!isLogin && (
              <>
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>Full Name</label>
                  <input
                    {...register('fullName', { required: 'Name is required' })}
                    type='text'
                    className='w-full px-5 py-4 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#3FBBEB]/20 focus:border-[#3FBBEB] outline-none transition-all duration-300 bg-gray-50/50 hover:bg-gray-50 text-lg'
                    placeholder='Enter your full name'
                  />
                  {errors.fullName && (
                    <p className='text-red-500 text-sm mt-1 animate-pulse'>{errors.fullName.message}</p>
                  )}
                </div>
              </>
            )}

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Email Address</label>
              <input
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                type='email'
                className='w-full px-5 py-4 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#3FBBEB]/20 focus:border-[#3FBBEB] outline-none transition-all duration-300 bg-gray-50/50 hover:bg-gray-50 text-lg'
                placeholder='your@email.com'
              />
              {errors.email && (
                <p className='text-red-500 text-sm mt-1 animate-pulse'>{errors.email.message}</p>
              )}
            </div>

            <div className='relative'>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Password</label>
              <input
                {...register('password', { 
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters'
                  }
                })}
                type={isPasswordVisible ? 'text' : 'password'}
                className='w-full px-5 py-4 pr-12 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#3FBBEB]/20 focus:border-[#3FBBEB] outline-none transition-all duration-300 bg-gray-50/50 hover:bg-gray-50 text-lg'
                placeholder='Enter your password'
              />
              <button
                type='button'
                className='absolute right-4 top-11 text-gray-500 hover:text-[#3FBBEB] transition-colors'
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? (
                  <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                  </svg>
                ) : (
                  <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21' />
                  </svg>
                )}
              </button>
              {errors.password && (
                <p className='text-red-500 text-sm mt-1 animate-pulse'>{errors.password.message}</p>
              )}
            </div>

            {!isLogin && (
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Confirm Password</label>
                <input
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: value => value === watch('password') || 'Passwords do not match'
                  })}
                  type={isPasswordVisible ? 'text' : 'password'}
                  className='w-full px-5 py-4 pr-12 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#3FBBEB]/20 focus:border-[#3FBBEB] outline-none transition-all duration-300 bg-gray-50/50 hover:bg-gray-50 text-lg'
                  placeholder='Confirm your password'
                />
                {errors.confirmPassword && (
                  <p className='text-red-500 text-sm mt-1 animate-pulse'>{errors.confirmPassword.message}</p>
                )}
              </div>
            )}

            <button
              type='submit'
              className='w-full bg-gradient-to-r from-[#3FBBEB] to-[#189BFF] text-white font-semibold text-xl py-5 px-8 rounded-2xl hover:from-[#2e9bc5] hover:to-[#1378d6] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl shadow-lg active:scale-[0.98] font-riot'
            >
              {isLogin ? 'Login Now' : 'Create Free Account'}
            </button>
          </form>

          <div className='text-center mt-10 pt-8 border-t border-gray-100'>
            <p className='text-lg text-muted-foreground'>
              {isLogin 
                ? "Don't have an account?" 
                : 'Already have an account?'
              }
              <button
                type='button'
                onClick={() => setIsLogin(!isLogin)}
                className='ml-2 text-[#3FBBEB] font-semibold hover:text-[#189BFF] transition-colors text-lg underline decoration-[#3FBBEB]'
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>

          <div className='text-center mt-8'>
            <p className='text-sm text-gray-500'>
              By signing up, you agree to our{' '}
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
      </div>
    </div>
  )
}

export default AuthPage

"use client";

import { useState } from 'react';

export default function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            console.log('Login attempt:', { email, password });
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <div className="bg-black border border-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-amber-900/10 -z-10" />
                
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600 mb-2">
                        Welcome Back
                    </h1>
                    <p className="text-gray-400">Please sign in to your account</p>
                </div>

                <div className="space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 outline-none placeholder-gray-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 outline-none placeholder-gray-500"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember"
                                type="checkbox"
                                className="h-4 w-4 text-amber-500 focus:ring-amber-500 border-gray-600 bg-gray-800 rounded"
                            />
                            <label htmlFor="remember" className="ml-2 block text-sm text-gray-300">
                                Remember me
                            </label>
                        </div>
                        <a href="#" className="text-sm text-amber-400 hover:text-amber-300 transition-colors">
                            Forgot password?
                        </a>
                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 px-4 rounded-lg font-medium hover:from-amber-600 hover:to-orange-700 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-amber-500/20"
                    >
                        {isLoading ? (
                            <div className="flex items-center justify-center">
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                Signing in...
                            </div>
                        ) : (
                            'Sign In'
                        )}
                    </button>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-gray-400">
                        Don't have an account?{' '}
                        <a href="#" className="text-amber-400 hover:text-amber-300 font-medium transition-colors">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
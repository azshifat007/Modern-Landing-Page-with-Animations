import React from 'react';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-32">
        <nav className="flex justify-between items-center mb-16 animate-fade-in">
          <h1 className="text-2xl font-bold text-indigo-600">Quantum</h1>
          <div className="space-x-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">Pricing</a>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>
        </nav>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8 animate-slide-in-left">
            <h2 className="text-5xl font-bold leading-tight text-gray-900">
              Transform Your Workflow with Quantum
            </h2>
            <p className="text-xl text-gray-600">
              Streamline your productivity and unlock new possibilities with our innovative platform.
            </p>
            <div className="flex gap-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-all hover:scale-105 flex items-center gap-2">
                Start Free Trial <ArrowRight size={20} />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-indigo-600 hover:text-indigo-600 transition-all">
                Learn More
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 animate-slide-in-right">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="Modern workspace"
              className="rounded-2xl shadow-2xl hover:shadow-indigo-200 transition-shadow"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24" id="features">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-6 rounded-xl hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Experience unmatched speed and performance.</p>
            </div>
            <div className="p-6 rounded-xl hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure by Design</h3>
              <p className="text-gray-600">Your data is protected with enterprise-grade security.</p>
            </div>
            <div className="p-6 rounded-xl hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Scale</h3>
              <p className="text-gray-600">Connect and collaborate from anywhere in the world.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-500/10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 relative z-10">
        <div className="flex items-center justify-between">
          <div className="text-white text-2xl font-bold flex items-center gap-2">
            <span className="text-3xl">💬</span>
            HomerChat
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-purple-400 transition">Features</a>
            <a href="#about" className="text-gray-300 hover:text-purple-400 transition">About</a>
            <a href="#contact" className="text-gray-300 hover:text-purple-400 transition">Contact</a>
          </div>
          <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-700 hover:to-cyan-700 transition shadow-lg shadow-purple-500/30">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
            Welcome to
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              HomerChat
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
            The next generation chat platform that brings people together with style and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-cyan-700 transform hover:scale-105 transition shadow-2xl shadow-purple-500/50">
              Start Chatting
            </button>
            <button className="bg-slate-800 border-2 border-slate-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-700 transform hover:scale-105 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div id="features" className="grid md:grid-cols-3 gap-8 mt-32">
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 hover:bg-slate-800/70 hover:border-purple-500/50 transition transform hover:-translate-y-2 shadow-xl">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-3">Lightning Fast</h3>
            <p className="text-gray-400">
              Experience real-time messaging with zero lag. Built for speed and performance.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 hover:bg-slate-800/70 hover:border-cyan-500/50 transition transform hover:-translate-y-2 shadow-xl">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold text-white mb-3">Secure & Private</h3>
            <p className="text-gray-400">
              End-to-end encryption ensures your conversations stay private and secure.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 hover:bg-slate-800/70 hover:border-pink-500/50 transition transform hover:-translate-y-2 shadow-xl">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-2xl font-bold text-white mb-3">Beautiful UI</h3>
            <p className="text-gray-400">
              Stunning design that's both intuitive and delightful to use every day.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mt-32 text-center">
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">1M+</div>
            <div className="text-gray-400">Active Users</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">50M+</div>
            <div className="text-gray-400">Messages Sent</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400 mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 mb-2">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 mt-20 relative z-10 border-t border-slate-800">
        <div className="text-center text-gray-500">
          <p>© 2025 HomerChat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

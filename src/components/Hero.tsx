/* eslint-disable no-unused-vars */
import {  ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
      <section id="home" className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 flex items-center relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-20 relative z-10 flex items-center justify-center min-h-screen">
          <motion.div
            className="max-w-3xl text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Partner With Us to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"> Grow</span> Your Business
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Providing the capital base for economic ventures. Comprehensive financial services for small and medium business units in Ilorin, Kwara State.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="https://calendly.com/crescentmfb-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2 no-underline cursor-pointer"
              >
                Open an Account
                <ArrowRight size={20} />
              </motion.a>

              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center no-underline cursor-pointer"
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
};

export default Hero
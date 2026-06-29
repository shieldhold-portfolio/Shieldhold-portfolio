'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-gray-200 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text">ShieldHold</h1>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-primary">Services</a>
            <a href="#portfolio" className="hover:text-primary">Portfolio</a>
            <a href="#pricing" className="hover:text-primary">Pricing</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-purple-50 pt-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h1 initial={{opacity:0}} animate={{opacity:1}} className="text-6xl font-bold gradient-text mb-6">
            Instagram Creator Management
          </motion.h1>
          <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2}} className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Professional account management, growth strategies, and 24/7 creator support
          </motion.p>
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.4}} className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-bold hover:scale-105 transition">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary hover:text-white transition">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold gradient-text text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Account Management', 'Growth Strategy', 'Account Recovery', 'Monetization', 'Content Creation', '24/7 Support'].map((service, i) => (
              <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} className="glass p-8 rounded-xl hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-3">{service}</h3>
                <p className="text-gray-600">Professional {service.toLowerCase()} for Instagram creators</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold gradient-text text-center mb-12">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {name: 'Starter', price: '$299', features: ['Account Management', 'Weekly Meetings', '4 Posts/Week', 'Monthly Report']},
              {name: 'Professional', price: '$599', popular: true, features: ['Full Management', 'Bi-weekly Meetings', '8 Posts/Week', 'Weekly Reports', '24/7 Support']},
              {name: 'Enterprise', price: 'Custom', features: ['Everything', 'Dedicated Manager', 'Daily Monitoring', 'Priority Support']}
            ].map((plan, i) => (
              <motion.div key={i} initial={{opacity:0}} whileInView={{opacity:1}} className={`glass p-8 rounded-xl ${plan.popular ? 'border-2 border-primary shadow-2xl' : 'border border-gray-200'}`}>
                {plan.popular && <div className="text-primary font-bold mb-4">Most Popular</div>}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold gradient-text mb-6">{plan.price}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f, j) => <li key={j} className="flex items-center gap-2"><span>✓</span> {f}</li>)}
                </ul>
                <button className={`w-full py-2 rounded-lg font-bold transition ${plan.popular ? 'bg-gradient-to-r from-primary to-secondary text-white' : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'}`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold gradient-text mb-8">Get In Touch</h2>
          <div className="glass p-8 rounded-xl max-w-md mx-auto">
            <p className="text-xl font-bold mb-4">Contact Us</p>
            <p className="text-gray-600 mb-4">📧 shieldhold1@gmail.com</p>
            <p className="text-gray-600 mb-6">📱 @shieldhold (Telegram)</p>
            <p className="text-gray-600">⏰ 24/7 Available</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>&copy; 2024 ShieldHold. All rights reserved.</p>
      </footer>
    </main>
  )
}

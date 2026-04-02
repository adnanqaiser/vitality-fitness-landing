import { motion } from "motion/react";
import { ShoppingCart, Heart, Activity, Moon, Droplets, Star, Check, ArrowRight, X, ShieldCheck, Truck, CreditCard } from "lucide-react";
import { useState, useEffect } from "react";

// --- Types ---
type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  features: string[];
  image: string;
};

const PRODUCT: Product = {
  id: "vitality-watch-01",
  name: "Vitality Smart Fitness Watch",
  price: 139.99,
  originalPrice: 199.99,
  description: "The ultimate companion for your health journey. Track every beat, step, and dream with precision.",
  features: [
    "24/7 Heart Rate Monitor",
    "Precision Step Counter",
    "Advanced Sleep Tracker",
    "IP68 Waterproof Design",
    "14-Day Battery Life",
    "AMOLED Display"
  ],
  image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=1000"
};

// --- Components ---

const Navbar = ({ onBuyClick }: { onBuyClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
            <Activity size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Vitality</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
          <a href="#reviews" className="hover:text-indigo-600 transition-colors">Reviews</a>
          <a href="#faq" className="hover:text-indigo-600 transition-colors">FAQ</a>
        </div>
        <button 
          onClick={onBuyClick}
          className="bg-indigo-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-indigo-700 transition-all active:scale-95 shadow-lg shadow-indigo-200 flex items-center gap-2"
        >
          <ShoppingCart size={18} />
          Buy Now
        </button>
      </div>
    </nav>
  );
};

const Hero = ({ onBuyClick }: { onBuyClick: () => void }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-400 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full blur-[120px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            Limited Time: 30% OFF + Free Shipping
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
            Track Your Health. <br />
            <span className="text-indigo-600">Transform Your Life.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
            Smart fitness watch designed to keep you active, healthy, and connected. Experience the future of wellness on your wrist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onBuyClick}
              className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all hover:shadow-2xl hover:shadow-indigo-200 active:scale-95 flex items-center justify-center gap-3"
            >
              Buy Now <ArrowRight size={20} />
            </button>
            <div className="flex items-center gap-4 px-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i+10}`} 
                    className="w-10 h-10 rounded-full border-2 border-white"
                    alt="User"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-amber-400">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-500 font-medium">10k+ Happy Users</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-200 border-8 border-white">
            <img 
              src={PRODUCT.image} 
              alt={PRODUCT.name}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden lg:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500">
                <Heart size={28} fill="currentColor" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Heart Rate</p>
                <p className="text-2xl font-black text-slate-900">72 BPM</p>
              </div>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 z-20 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden lg:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500">
                <Activity size={28} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Steps Today</p>
                <p className="text-2xl font-black text-slate-900">8,432</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Tired of ignoring your health and fitness?
          </h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            In today's fast-paced world, it's easy to lose track of your well-being. Our smartwatch acts as your personal health assistant, tracking your steps, heart rate, and sleep in one sleek device.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Activity size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Real-time Data</h3>
              <p className="text-slate-500">Instant feedback on your physical activity and vitals.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Moon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Better Sleep</h3>
              <p className="text-slate-500">Analyze your sleep patterns to wake up refreshed.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Heart Health</h3>
              <p className="text-slate-500">Continuous monitoring for peace of mind.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: <Heart />, title: "Heart Rate Monitor", desc: "Medical-grade accuracy for 24/7 monitoring." },
    { icon: <Activity />, title: "Step Counter", desc: "Precision tracking for every single move." },
    { icon: <Moon />, title: "Sleep Tracker", desc: "Deep insights into your sleep cycles." },
    { icon: <Droplets />, title: "Waterproof Design", desc: "IP68 rated. Swim, shower, and sweat freely." }
  ];

  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Packed with Powerful Features</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Everything you need to stay on top of your game, all packed into a beautiful, durable design.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all"
            >
              <div className="w-12 h-12 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-indigo-600 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-[100px] -ml-48 -mb-48" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
          <div className="flex justify-center text-amber-400 gap-1 mb-2">
            {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
          </div>
          <p className="text-indigo-100">Trusted by over 10,000+ fitness enthusiasts worldwide.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Sarah J.", text: "Amazing product, worth every penny! The sleep tracking is surprisingly accurate." },
            { name: "Mike R.", text: "I've tried many smartwatches, but this one has the best battery life by far." },
            { name: "Elena K.", text: "Stylish enough for work and durable enough for my marathon training. Love it!" }
          ].map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10"
            >
              <p className="text-lg italic mb-6">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-400 rounded-full flex items-center justify-center font-bold">
                  {r.name[0]}
                </div>
                <span className="font-bold">{r.name}</span>
                <Check size={16} className="text-emerald-400" />
                <span className="text-xs text-indigo-200">Verified Buyer</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CheckoutModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [step, setStep] = useState(1);
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative bg-white w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="grid md:grid-cols-5 h-full">
          <div className="md:col-span-2 bg-slate-50 p-8 hidden md:block">
            <h3 className="text-xl font-bold mb-6">Order Summary</h3>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-6">
              <img 
                src={PRODUCT.image} 
                alt={PRODUCT.name} 
                className="w-full h-32 object-cover rounded-xl mb-4" 
                referrerPolicy="no-referrer"
              />
              <p className="font-bold text-sm">{PRODUCT.name}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-indigo-600 font-bold">${PRODUCT.price}</span>
                <span className="text-xs text-slate-400 line-through">${PRODUCT.originalPrice}</span>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal</span>
                <span>${PRODUCT.price}</span>
              </div>
              <div className="flex justify-between text-emerald-600 font-medium">
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <div className="pt-3 border-t border-slate-200 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${PRODUCT.price}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 p-8">
            <div className="flex gap-2 mb-8">
              {[1,2,3].map(i => (
                <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-indigo-600" : "bg-slate-100"}`} />
              ))}
            </div>

            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h3 className="text-2xl font-bold mb-6">Shipping Details</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" />
                    <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" />
                  </div>
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" />
                  <input type="text" placeholder="Shipping Address" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" />
                  <button 
                    onClick={() => setStep(2)}
                    className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold mt-4 hover:bg-indigo-700 transition-all"
                  >
                    Continue to Payment
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h3 className="text-2xl font-bold mb-6">Payment Method</h3>
                <div className="space-y-4">
                  <div className="p-4 border-2 border-indigo-600 rounded-xl bg-indigo-50 flex items-center gap-4">
                    <CreditCard className="text-indigo-600" />
                    <div className="flex-1">
                      <p className="font-bold">Credit / Debit Card</p>
                      <p className="text-xs text-slate-500">Secure encrypted payment</p>
                    </div>
                  </div>
                  <input type="text" placeholder="Card Number" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" />
                    <input type="text" placeholder="CVC" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" />
                  </div>
                  <button 
                    onClick={() => setStep(3)}
                    className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold mt-4 hover:bg-indigo-700 transition-all"
                  >
                    Complete Purchase
                  </button>
                  <button onClick={() => setStep(1)} className="w-full text-slate-500 font-medium text-sm">Back to Shipping</button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check size={40} strokeWidth={3} />
                </div>
                <h3 className="text-3xl font-bold mb-2">Order Confirmed!</h3>
                <p className="text-slate-500 mb-8">Thank you for your purchase. Your Vitality Watch will be shipped within 24 hours.</p>
                <button 
                  onClick={onClose}
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all"
                >
                  Close Window
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "How long does the battery last?", a: "The Vitality Watch features an optimized battery that lasts up to 14 days on a single charge with normal use." },
    { q: "Is it compatible with my phone?", a: "Yes, it connects seamlessly with both iOS and Android devices via our dedicated app." },
    { q: "Can I swim with it?", a: "Absolutely. With an IP68 waterproof rating, you can swim, shower, and dive up to 50 meters." },
    { q: "Do you offer a warranty?", a: "Every Vitality Watch comes with a comprehensive 2-year international warranty." }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
              <p className="text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 text-white mb-6">
              <Activity size={24} className="text-indigo-500" />
              <span className="text-xl font-bold tracking-tight">Vitality</span>
            </div>
            <p className="max-w-sm mb-6">
              Empowering individuals to take control of their health through innovative technology and beautiful design.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all cursor-pointer">
                <Activity size={18} />
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all cursor-pointer">
                <Heart size={18} />
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Order Tracking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Vitality Watch. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1"><ShieldCheck size={14} /> Secure Checkout</div>
            <div className="flex items-center gap-1"><Truck size={14} /> Free Global Shipping</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar onBuyClick={() => setIsCheckoutOpen(true)} />
      
      <main>
        <Hero onBuyClick={() => setIsCheckoutOpen(true)} />
        <ProblemSolution />
        <Features />
        
        {/* Product Showcase Section */}
        <section className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-indigo-50 rounded-[3rem] p-8 md:p-16 grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl font-bold mb-6">The Last Fitness Watch You'll Ever Need</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Designed with premium materials and cutting-edge sensors, the Vitality Watch is built to withstand your toughest workouts while looking elegant enough for any occasion.
                </p>
                <ul className="space-y-4 mb-10">
                  {PRODUCT.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium text-slate-700">
                      <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => setIsCheckoutOpen(true)}
                  className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100"
                >
                  Get Yours Now - 30% OFF
                </button>
              </div>
              <div className="order-1 lg:order-2 relative">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000" 
                    alt="Watch Detail" 
                    className="rounded-3xl shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600 rounded-full flex flex-col items-center justify-center text-white rotate-12 shadow-xl z-20">
                  <span className="text-sm font-bold uppercase">Only</span>
                  <span className="text-3xl font-black">${PRODUCT.price}</span>
                  <span className="text-xs line-through opacity-60">${PRODUCT.originalPrice}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Reviews />
        <FAQ />

        {/* Final CTA Section */}
        <section className="py-24 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to start your journey?</h2>
            <p className="text-xl text-slate-600 mb-10">
              Join thousands of others who have transformed their lives with Vitality. 30-day money-back guarantee.
            </p>
            <div className="flex flex-col items-center gap-6">
              <button 
                onClick={() => setIsCheckoutOpen(true)}
                className="bg-indigo-600 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-indigo-700 transition-all hover:shadow-2xl hover:shadow-indigo-200 active:scale-95"
              >
                Claim Your 30% Discount
              </button>
              <div className="flex items-center gap-8 text-slate-400 text-sm font-medium">
                <div className="flex items-center gap-2"><ShieldCheck size={18} /> 2 Year Warranty</div>
                <div className="flex items-center gap-2"><Truck size={18} /> Free Shipping</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
      />
    </div>
  );
}

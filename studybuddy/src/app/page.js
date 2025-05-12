"use client";
import { useState } from 'react';
import { ArrowRight, Calendar, CheckCircle, ChevronDown, ChevronUp, MessageCircle, Search, Shield, Star, Users } from 'lucide-react';

export default function LandingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  
  const faqItems = [
    {
      question: "How does the smart matching algorithm work?",
      answer: "Our smart matching algorithm analyzes your learning style, academic goals, and scheduling preferences to connect you with the most compatible tutors or study groups in your area of study. The system continuously improves as you use it, making better recommendations over time."
    },
    {
      question: "Are all tutors verified?",
      answer: "Yes, all tutors go through a rigorous verification process including academic credential verification, background checks, and teaching skill assessments. Only tutors who meet our high standards are allowed on the platform."
    },
    {
      question: "How much does it cost to use the platform?",
      answer: "The platform is free for students to join and find study groups. For tutoring services, tutors set their own rates, and we add a small service fee. Premium features are available through subscription plans starting at $9.99/month."
    },
    {
      question: "Can I schedule sessions directly through the app?",
      answer: "Absolutely! Our integrated scheduling system allows you to book sessions, send calendar invites, set reminders, and even conduct virtual sessions directly through the platform."
    },
    {
      question: "How do I start a study group?",
      answer: "After creating your account, you can either join existing study groups or create your own. Simply specify the subject, meeting preferences, and group size limits. Our system will help connect you with compatible study partners."
    }
  ];
  
  const testimonials = [
    {
      name: "Alex K.",
      role: "Computer Science Student",
      text: "I found my perfect study group within days! We meet twice weekly and my grades have improved dramatically.",
      rating: 5
    },
    {
      name: "Maya J.",
      role: "Calculus Tutor",
      text: "As a tutor, this platform has connected me with motivated students who match my teaching style. The scheduling tools save me hours every week.",
      rating: 5
    },
    {
      name: "Jamal T.",
      role: "Pre-Med Student",
      text: "My organic chemistry tutor has been a lifesaver. The smart matching really works - we clicked immediately and the complex concepts finally make sense.",
      rating: 4
    }
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-indigo-600 font-semibold text-xl">StudyMatch</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition-colors">How It Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition-colors">Testimonials</a>
              <a href="#faq" className="text-gray-600 hover:text-indigo-600 transition-colors">FAQ</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Log in</a>
              <a href="#" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">Sign up</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-white mb-12 lg:mb-0">
              <h1 className="text-4xl font-bold mb-6">Find Your Perfect Study Match</h1>
              <p className="text-xl mb-8">Connect with compatible study groups and expert tutors who match your learning style, goals, and schedule.</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#" className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium flex items-center justify-center hover:bg-gray-100 transition-colors">
                  Sign up as Student
                  <ArrowRight size={20} className="ml-2" />
                </a>
                <a href="#" className="bg-emerald-500 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  Sign up as Tutor
                  <ArrowRight size={20} className="ml-2" />
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <Users size={20} className="text-indigo-600" />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium">Study Group Finder</h3>
                      <p className="text-sm text-gray-500">Find your perfect team</p>
                    </div>
                  </div>
                  <div className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm">Popular</div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                        <Star size={16} className="text-amber-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">Physics Study Group</p>
                        <p className="text-xs text-gray-500">3 spots available</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                        <Star size={16} className="text-indigo-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">Data Science Meetup</p>
                        <p className="text-xs text-gray-500">Virtual • Weekly</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-200">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                        <CheckCircle size={16} className="text-indigo-600" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">Calculus II Group</p>
                        <p className="text-xs text-indigo-600">Perfect match!</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-indigo-600 text-white py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors">
                  Find My Study Group
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose StudyMatch?</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform is designed to make learning collaborative, effective, and tailored to your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Search className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Matching</h3>
              <p className="text-gray-600">
                Our AI-powered algorithm connects you with study partners and tutors who match your learning style, academic goals, and schedule.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Calendar className="text-emerald-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Seamless Scheduling</h3>
              <p className="text-gray-600">
                Book sessions, send calendar invites, and manage your study schedule all in one place with automatic reminders.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-amber-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Verified Tutors</h3>
              <p className="text-gray-600">
                All tutors are rigorously vetted for academic credentials, teaching skills, and background checks for a safe learning experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in minutes and find your perfect study match
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Create Profile</h3>
              <p className="text-gray-600">
                Sign up and tell us about your learning style, academic goals, and schedule preferences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Get Matched</h3>
              <p className="text-gray-600">
                Our algorithm suggests the most compatible study groups and tutors for your needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Connect & Schedule</h3>
              <p className="text-gray-600">
                Message potential matches and use our tools to schedule your first session.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-indigo-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Learn & Succeed</h3>
              <p className="text-gray-600">
                Collaborate effectively, track your progress, and achieve your academic goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of students and tutors who've found their perfect study match
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < testimonial.rating ? "text-amber-500 fill-amber-500" : "text-gray-300"} 
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="font-semibold text-indigo-600">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-xl text-gray-600">
              Get answers to common questions about our platform
            </p>
          </div>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button 
                  className="flex justify-between items-center w-full px-6 py-4 text-left bg-white hover:bg-gray-50"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium">{item.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp size={20} className="text-gray-500" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-500" />
                  )}
                </button>
                
                {openFaqIndex === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Find Your Study Match?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join our community of learners and tutors today to start achieving your academic goals together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#" className="bg-white text-indigo-600 px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Get Started for Free
            </a>
            <a href="#" className="bg-transparent text-white border border-white px-8 py-4 rounded-md font-medium hover:bg-indigo-700 transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Take StudyMatch on the Go</h2>
              <p className="text-xl text-gray-600 mb-8">
                Download our mobile app to find study groups, schedule sessions, and connect with tutors from anywhere.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#" className="bg-gray-900 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center hover:bg-black transition-colors">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.928 19.44c-.092.282-.2.552-.333.807a3.93 3.93 0 0 1-.7.989 3.705 3.705 0 0 1-1.044.743 3.23 3.23 0 0 1-1.29.264c-.324 0-.651-.066-.973-.17a5.967 5.967 0 0 1-.888-.329 5.03 5.03 0 0 0-.85-.329 3.727 3.727 0 0 0-.821-.17 3.53 3.53 0 0 0-.84.17c-.275.093-.55.201-.821.329-.279.138-.57.258-.868.329a3.412 3.412 0 0 1-.973.17 3.23 3.23 0 0 1-1.29-.264 3.705 3.705 0 0 1-1.044-.743 3.93 3.93 0 0 1-.7-.989A6.009 6.009 0 0 1 4 19.44 7.72 7.72 0 0 1 3.8 18.19c-.067-.452-.1-.863-.1-1.236 0-.515.098-1.016.275-1.49a3.91 3.91 0 0 1 .816-1.274 3.951 3.951 0 0 1 1.228-.851A3.72 3.72 0 0 1 7.54 13a3.697 3.697 0 0 1 1.277.249c.41.15.797.319 1.154.501.407.209.755.314 1.046.314.25 0 .586-.105.992-.315.358-.182.756-.35 1.194-.5.415-.15.82-.247 1.238-.247.653 0 1.23.128 1.739.381.319.159.61.371.874.635-1.315.796-1.962 1.689-1.962 2.77 0 .917.34 1.719 1.024 2.403.299.3.635.53 1.016.694a5.482 5.482 0 0 1-1.214 2.555zM13.26 4.507c0 .45-.118.933-.373 1.429a4.24 4.24 0 0 1-1.025 1.323 2.404 2.404 0 0 1-.534.31 3.12 3.12 0 0 1-.674.154c-.013-.106-.02-.219-.02-.333 0-.432.094-.896.3-1.371.205-.475.493-.915.867-1.263.373-.347.73-.598 1.07-.764.341-.154.663-.24.965-.254.14.03.20.506.20 769z"></path>
                  </svg>
                  Download for iOS
                </a>
                <a href="#" className="bg-gray-900 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center hover:bg-black transition-colors">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 20.97c.046 1.268 1.182 2.303 2.506 2.303 9.92-.543 2.93-1.167 13.01-2.303 1.326 0 2.462-1.035 2.484-2.303V3.032c-.022-1.266-1.156-2.303-2.484-2.303-3.351.375-9.683 1.128-13.01 2.303C4.182.729 3.046 1.766 3 3.032v17.94zm7.01-18.13c-.228 0-.415.187-.415.417v15.485a.417.417 0 0 0 .414.419h.834a.417.417 0 0 0 .414-.419V3.258a.417.417 0 0 0-.414-.417h-.834zM5.76 12.635v-8.26l4.378 4.173z"></path>
                  </svg>
                  Download for Android
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-96 bg-indigo-600 rounded-3xl shadow-xl overflow-hidden">
                  <div className="absolute inset-0 bg-indigo-600 opacity-50 rounded-3xl"></div>
                  <div className="absolute inset-2 bg-white rounded-2xl overflow-hidden">
                    <div className="w-full h-10 bg-gray-100 flex items-center justify-center">
                      <div className="w-20 h-4 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="p-4">
                      <div className="w-full h-12 bg-indigo-50 rounded-lg mb-4"></div>
                      <div className="w-full h-24 bg-gray-50 rounded-lg mb-4"></div>
                      <div className="space-y-2">
                        <div className="w-full h-12 bg-gray-50 rounded-lg"></div>
                        <div className="w-full h-12 bg-gray-50 rounded-lg"></div>
                        <div className="w-full h-12 bg-indigo-50 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">StudyMatch</h3>
              <p className="text-gray-400">
                Connecting students with the perfect study partners and tutors since 2023.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">For Tutors</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; 2025 StudyMatch. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
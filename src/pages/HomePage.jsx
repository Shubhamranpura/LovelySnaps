import React, { useState } from 'react';
import { Button, Card, CardContent, Rating } from '@mui/material';
import { ChevronRight, Heart, Star } from 'lucide-react';
import axios from 'axios';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletterSignup = async (e) => {
    e.preventDefault();
    try {
      // Example API call - replace with your actual endpoint
      await axios.post('/api/newsletter', { email });
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <nav className='fixed w-full top-0 z-50 bg-white shadow-md'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex items-center space-x-2'>
              <Heart className='w-8 h-8 text-rose-500' fill='currentColor' />
              <span className='text-2xl font-bold text-gray-900'>
                Eternal Moments
              </span>
            </div>
            <div className='hidden md:flex space-x-8'>
              <a
                href='#gallery'
                className='text-gray-700 hover:text-rose-500 transition'
              >
                Gallery
              </a>
              <a
                href='#services'
                className='text-gray-700 hover:text-rose-500 transition'
              >
                Services
              </a>
              <a
                href='#testimonials'
                className='text-gray-700 hover:text-rose-500 transition'
              >
                Testimonials
              </a>
              <a
                href='#contact'
                className='text-gray-700 hover:text-rose-500 transition'
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='pt-32 pb-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6'>
                Your Love Story,
                <span className='text-rose-500'> Beautifully Captured</span>
              </h1>
              <p className='text-xl text-gray-600 mb-8 leading-relaxed'>
                We specialize in capturing intimate moments and authentic
                emotions. From engagement shoots to weddings, we create timeless
                memories you'll treasure forever.
              </p>
              <div className='flex gap-4'>
                <Button
                  variant='contained'
                  sx={{
                    bgcolor: '#f43f5e',
                    color: 'white',
                    padding: '12px 32px',
                    fontSize: '16px',
                    textTransform: 'none',
                    '&:hover': { bgcolor: '#ec4899' },
                  }}
                >
                  Book a Session
                </Button>
                <Button
                  variant='outlined'
                  sx={{
                    color: '#f43f5e',
                    borderColor: '#f43f5e',
                    padding: '12px 32px',
                    fontSize: '16px',
                    textTransform: 'none',
                    '&:hover': { bgcolor: 'rgba(244, 63, 94, 0.05)' },
                  }}
                >
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className='relative h-96 bg-gradient-to-br from-rose-200 to-pink-300 rounded-2xl overflow-hidden shadow-xl'>
              <div className='absolute inset-0 flex items-center justify-center'>
                <Heart
                  className='w-32 h-32 text-white/30'
                  fill='currentColor'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id='gallery' className='py-20 px-4 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-4xl font-bold text-center text-gray-900 mb-4'>
            Featured Weddings
          </h2>
          <p className='text-center text-gray-600 mb-16 text-lg'>
            Explore our recent collections and be inspired
          </p>

          <div className='grid md:grid-cols-3 gap-8'>
            {[1, 2, 3].map((item) => (
              <div key={item} className='group cursor-pointer'>
                <div className='relative h-80 bg-gradient-to-br from-gold/20 to-rose-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300'>
                  <div className='absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform'>
                    <Heart
                      className='w-16 h-16 text-rose-300/50'
                      fill='currentColor'
                    />
                  </div>
                  <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors' />
                </div>
                <div className='mt-4'>
                  <h3 className='text-xl font-semibold text-gray-900'>
                    Sarah & James
                  </h3>
                  <p className='text-gray-600'>Garden Wedding • June 2024</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id='services' className='py-20 px-4 bg-gray-50'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-4xl font-bold text-center text-gray-900 mb-16'>
            Our Services
          </h2>

          <div className='grid md:grid-cols-4 gap-6'>
            {[
              { title: 'Engagement Shoots', icon: '💍' },
              { title: 'Bridal Portraits', icon: '👰' },
              { title: 'Wedding Day Coverage', icon: '📸' },
              { title: 'Reception Events', icon: '🎉' },
            ].map((service, idx) => (
              <Card key={idx} className='hover:shadow-xl transition-shadow'>
                <CardContent className='p-6 text-center'>
                  <div className='text-4xl mb-4'>{service.icon}</div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                    {service.title}
                  </h3>
                  <p className='text-gray-600 text-sm'>
                    Professional photography to capture your special moments.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id='testimonials' className='py-20 px-4 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-4xl font-bold text-center text-gray-900 mb-16'>
            What Our Couples Say
          </h2>

          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                name: 'Emma Wilson',
                text: 'Absolutely phenomenal! They captured every precious moment of our wedding day. We could not have asked for better photographers.',
                rating: 5,
              },
              {
                name: 'Michael Chen',
                text: 'Professional, creative, and incredibly easy to work with. The photos are beyond beautiful and truly timeless.',
                rating: 5,
              },
              {
                name: 'Jessica & David',
                text: 'From the first consultation to receiving our album, everything was perfect. Highly recommend!',
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className='hover:shadow-lg transition-shadow'>
                <CardContent className='p-6'>
                  <Rating
                    value={testimonial.rating}
                    readOnly
                    className='mb-4'
                  />
                  <p className='text-gray-700 mb-4 italic'>
                    "{testimonial.text}"
                  </p>
                  <p className='font-semibold text-gray-900'>
                    — {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className='py-20 px-4 bg-gradient-to-r from-rose-500 to-pink-500'>
        <div className='max-w-2xl mx-auto text-center'>
          <h2 className='text-3xl font-bold text-white mb-4'>Stay Updated</h2>
          <p className='text-white/90 mb-8 text-lg'>
            Subscribe to our newsletter for wedding photography tips and special
            offers
          </p>
          <form onSubmit={handleNewsletterSignup} className='flex gap-3'>
            <input
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white'
            />
            <Button
              type='submit'
              variant='contained'
              sx={{
                bgcolor: 'white',
                color: '#ec4899',
                padding: '12px 24px',
                textTransform: 'none',
                fontSize: '16px',
                fontWeight: 'bold',
                '&:hover': { bgcolor: '#f3f4f6' },
              }}
            >
              Subscribe
            </Button>
          </form>
          {submitted && (
            <p className='text-white mt-4'>Thank you for subscribing! 💌</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-white py-12 px-4'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid md:grid-cols-4 gap-8 mb-8'>
            <div>
              <div className='flex items-center space-x-2 mb-4'>
                <Heart className='w-6 h-6 text-rose-400' fill='currentColor' />
                <span className='text-lg font-bold'>Eternal Moments</span>
              </div>
              <p className='text-gray-400'>
                Capturing your most precious moments.
              </p>
            </div>
            <div>
              <h4 className='font-bold mb-4'>Quick Links</h4>
              <ul className='space-y-2 text-gray-400'>
                <li>
                  <a href='#gallery' className='hover:text-white transition'>
                    Gallery
                  </a>
                </li>
                <li>
                  <a href='#services' className='hover:text-white transition'>
                    Services
                  </a>
                </li>
                <li>
                  <a href='#about' className='hover:text-white transition'>
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-bold mb-4'>Contact</h4>
              <ul className='space-y-2 text-gray-400'>
                <li>📧 info@eternalmoments.com</li>
                <li>📱 (555) 123-4567</li>
              </ul>
            </div>
            <div>
              <h4 className='font-bold mb-4'>Follow Us</h4>
              <div className='flex space-x-4 text-gray-400'>
                <a href='#' className='hover:text-white transition'>
                  Instagram
                </a>
                <a href='#' className='hover:text-white transition'>
                  Facebook
                </a>
                <a href='#' className='hover:text-white transition'>
                  Pinterest
                </a>
              </div>
            </div>
          </div>
          <div className='border-t border-gray-800 pt-8 text-center text-gray-400'>
            <p>&copy; 2024 Eternal Moments. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

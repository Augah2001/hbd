'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const [jump, setJump] = useState(true);
  const router = useRouter();

  const handleNext = () => {
    router.push(`/verification`); // Change this to the actual route
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
        fontFamily: "'Comic Sans MS', sans-serif",
        padding: '0 20px',
        textAlign: 'center',
      }}
    >
      {/* Animated Greeting */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{ fontSize: '3rem', margin: 0 }}
      >
        Hie Fortue🙃🙃
      </motion.h1>

      {/* Fun Message */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        style={{ fontSize: '1.5rem', marginTop: '20px' }}
      >
        
      </motion.p>

      {/* Jumping Next Button */}
      <motion.button
        onClick={()=>handleNext()}
        onMouseEnter={() => setJump(true)} // Triggers jump when hovered
        onMouseLeave={() => setJump(false)} // Stops jumping when mouse leaves
        animate={{
          y: jump ? [-5, -15, 0] : 0, // Makes the button "jump"
        }}
        transition={{
          repeat: jump ? Infinity : 0, // Keeps jumping when hovered
          duration: 0.3,
          ease: 'easeInOut',
        }}
        style={{
          marginTop: '40px',
          padding: '15px 30px',
          fontSize: '1.2rem',
          border: 'none',
          borderRadius: '30px',
          background: '#ff6b6b',
          color: '#fff',
          cursor: 'pointer',
          boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
        }}
      >
        Next 
      </motion.button>
    </div>
  );
};

export default HomePage;

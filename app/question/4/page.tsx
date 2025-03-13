'use client'
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

const DateInvite = () => {
  const router = useRouter();
  const [yesClicked, setYesClicked] = useState(false);

  const handleYesClick = () => {
    setYesClicked(true);
    setTimeout(() => {
      router.push('/question/5'); // Redirect to Page 5 after clicking YES
    }, 1000); // Short delay for effect
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
        fontFamily: "'Comic Sans MS', sans-serif",
        textAlign: 'center',
        padding: '0 20px',
      }}
    >
      {/* Birthday Message */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{ fontSize: '2.5rem', color: '#fff' }}
      >
        🎉 Happy Birthday My Love! 💖
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        style={{
          fontSize: '1.3rem',
          color: '#fff',
          maxWidth: '500px',
          marginBottom: '30px',
        }}
      >
        You’re another year more beautiful, more amazing, more stubborn and still my girlfriend! 😍  
        
      </motion.p>

      {/* Date Request */}
      <motion.h2
        className='yellow-500'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        style={{ fontSize: '2rem', marginBottom: '15px', color: '#fff' }}
      >Since it's your special day, I have a proposal.
        Will you go on a date with me? Let's go clueless together.😅
      </motion.h2>
      

      {/* Highlighted Message Above Button */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        style={{
          backgroundColor: '#fff',
          color: '#ff4081',
          padding: '10px 20px',
          borderRadius: '10px',
          fontWeight: 'bold',
          fontSize: '1.2rem',
          boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
          marginBottom: '15px',
        }}
      >
        Press YES to see the Bonus Question! 🎁  
        (Or No to terminate😜)
      </motion.div>

      {/* Yes Button */}
      <motion.button
        onClick={handleYesClick}
        animate={{ x: yesClicked ? [0, -10, 10, -10, 10, 0] : 0 }}
        transition={{ duration: 0.5, repeat: yesClicked ? Infinity : 0 }}
        style={{
          padding: '15px 30px',
          fontSize: '1.5rem',
          border: 'none',
          borderRadius: '30px',
          background: '#4CAF50',
          color: '#fff',
          cursor: 'pointer',
          boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
        }}
      >
        YES! 😍
      </motion.button>

      
      
    </div>
  );
};

export default DateInvite;

'use client'
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const ProveItPage = () => {
  const router = useRouter();

  const handleStartQuiz = () => {
    router.push('/question/1'); // Adjust this to the actual first question page
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
        padding: '0 20px'
      }}
    >
      {/* Playful Heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{ fontSize: '2.5rem', marginBottom: '10px' }}
      >
        Wait a minute... 🧐
      </motion.h1>

      {/* Fun Identity Challenge */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        style={{ fontSize: '1.3rem', marginBottom: '20px' }}
      >
        Before you continue, you must prove that you are actually my Fortue! 😉  
        Answer a few super serious questions to confirm your identity.  
        
      </motion.p>

      {/* Fun Button to Start Quiz */}
      <motion.button
        onClick={handleStartQuiz}
        whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }} // Wobbly effect
        whileTap={{ scale: 0.9 }}
        style={{
          marginTop: '20px',
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
        Prove It! 🚀
      </motion.button>
    </div>
  );
};

export default ProveItPage;

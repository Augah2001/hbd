'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const QuestionOne = () => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [warning, setWarning] = useState(false);
  const router = useRouter();

  const handleAnswerChange = (answer: string) => {
    if (answer === 'Augustine') {
      setSelectedAnswer(answer);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer === 'Augustine') {
      router.push('/question/2'); // Adjust this to the next question route
    }
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
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        textAlign: 'center',
        padding: '0 20px',
        position: 'relative',
      }}
    >
      {/* Question */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{ fontSize: '2rem', marginBottom: '20px' }}
      >
        Who is your boyfriend? 💘
      </motion.h1>

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {['Augustine', 'George', 'Chikomba chemuwardrobe'].map((option, index) => (
          <motion.label
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: selectedAnswer === option ? '#4CAF50' : '#fff',
              padding: '10px 20px',
              borderRadius: '10px',
              cursor: option === 'Augustine' ? 'pointer' : 'not-allowed',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              transition: 'background 0.3s',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
              color: selectedAnswer === option ? '#fff' : '#333',
              position: 'relative',
            }}
            onMouseEnter={() => option !== 'Augustine' && setWarning(true)}
            onMouseLeave={() => setWarning(false)}
          >
            <input
              type="radio"
              name="boyfriend"
              value={option}
              checked={selectedAnswer === option}
              onChange={() => handleAnswerChange(option)}
              disabled={option !== 'Augustine'}
              style={{ cursor: option === 'Augustine' ? 'pointer' : 'not-allowed' }}
            />
            {option}
          </motion.label>
        ))}
      </div>

      {/* Popover Warning */}
      {warning && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          style={{
            position: 'absolute',
            top: '50%',
            background: '#ff4d4d',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '10px',
            fontSize: '1rem',
            fontWeight: 'bold',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
          }}
        >
          Don't even dare! 😈⚠️
        </motion.div>
      )}

      {/* Next Button */}
      <motion.button
        onClick={handleSubmit}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          marginTop: '30px',
          padding: '15px 30px',
          fontSize: '1.2rem',
          border: 'none',
          borderRadius: '30px',
          background: '#ff6b6b',
          color: '#fff',
          cursor: selectedAnswer ? 'pointer' : 'not-allowed',
          boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
        }}
        disabled={!selectedAnswer}
      >
        Next 👉
      </motion.button>
    </div>
  );
};

export default QuestionOne;

'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Popover } from '@headlessui/react';

const BonusQuestion = () => {
  const [selected, setSelected] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleSelect = (option: string) => {
    setSelected(option);
    if (option === 'Cuddles from Augustine') {
      setShowMessage(true);
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
        background: 'linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)',
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        textAlign: 'center',
        padding: '0 20px',
      }}
    >
      {/* Playful Threat */}
      <motion.h1
      className='yellow-500'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{ fontSize: '2.2rem', color: '#fff' }}
      >
        ⚠️ Warning!!!, I WILL see your answer! 👀  
      </motion.h1>

      <motion.p
      className='yellow-500'
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
        Choose wisely…  
      </motion.p>

      {/* Question */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        style={{ fontSize: '2rem', marginBottom: '15px', color: '#fff' }}
      >
        Would you rather have…  
      </motion.h2>

      {/* Answer Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {/* Food Option with Warning */}
        <Popover>
          <Popover.Button
            onMouseEnter={() => setSelected('')}
            style={{
              padding: '12px 25px',
              fontSize: '1.5rem',
              border: 'none',
              borderRadius: '30px',
              background: selected === 'Food' ? '#ff0000' : '#fff',
              color: selected === 'Food' ? '#fff' : '#ff4081',
              cursor: 'pointer',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
              position: 'relative',
            }}
          >
            🍕 Unlimited Food
          </Popover.Button>
          <Popover.Panel
            style={{
              position: 'absolute',
              background: '#ff0000',
              color: '#fff',
              padding: '10px',
              borderRadius: '10px',
              fontSize: '1rem',
              marginTop: '10px',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
            }}
          >
            Please, Don't do this to me😭😭
          </Popover.Panel>
        </Popover>

        {/* Cuddles Option */}
        <motion.button
          onClick={() => handleSelect('Cuddles from Augustine')}
          style={{
            padding: '12px 25px',
            fontSize: '1.5rem',
            border: 'none',
            borderRadius: '30px',
            background: '#4CAF50',
            color: '#fff',
            cursor: 'pointer',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
          }}
        >
          🥰 Unlimited Cuddles from Augustine
        </motion.button>
      </div>

      {/* Success Message */}
      {showMessage && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: '1.5rem',
            color: '#fff',
            marginTop: '20px',
          }}
        >
          😍 Correct choice! Cuddles incoming!!! 🤗💖
        </motion.p>
      )}
    </div>
  );
};

export default BonusQuestion;

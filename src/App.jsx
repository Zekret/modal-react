import React, { useState } from 'react';
import LazyModal from './components/LazyModal';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='App'>
      <button onClick={handleOpenModal}>Open Modal</button>
      <LazyModal isOpen={isOpen} onClose={handleCloseModal}>
        <h1>Modal content</h1>
        <p>This is the modal content.</p>
      </LazyModal>
    </div>
  );
};

export default App;


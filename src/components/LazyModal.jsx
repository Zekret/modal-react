import React, { lazy, Suspense } from 'react';

const Modal = lazy(() => import('./Modal'));

const LazyModal = ({ isOpen, onClose, children }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isOpen && <Modal isOpen={isOpen} onClose={onClose}>{children}</Modal>}
    </Suspense>
  );
};

export default LazyModal;

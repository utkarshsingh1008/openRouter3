import React, { ReactNode, MouseEvent } from 'react';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLDivElement && e.target.id === 'wrapper') {
      onClose();
    }
  };

  return (
    <div
    className='fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center mt-96'
    id="wrapper"
    onClick={handleClose}
    style={{ backdropFilter: 'blur(24px)' }} // Inline style for testing
  >
    <div className='w-[600px] flex flex-col'>
      <button className='text-white text-xl place-self-end' onClick={onClose}>x</button>
      <div className='bg-white p-2 rounded'>{children}</div>
    </div>
  </div>
  );
}

export default Modal;

import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react'; // Import the X icon from lucide-react

interface PaymentOptionsPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentOptionsPopup: React.FC<PaymentOptionsPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative" // Added relative positioning
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold mb-4 text-center font-open-sans">Payment Options</h2>
        <p className="text-center mb-6 font-mono">Ready to Start Building Your Future?<br/> Secure Your Spot Now!</p>
        
        <div className="space-y-4">
          <button className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300">
            Pay via Stripe
          </button>
          
          <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300">
          Pay via Card/UPI/EMI
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="mb-2">You’re just one step away from transforming your ideas into fully functional web applications.</p>
          <p className="font-bold mb-4">Full course access.</p>
          <button className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300">
            Contact Us
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PaymentOptionsPopup;
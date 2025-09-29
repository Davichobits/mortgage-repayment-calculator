import { useContext } from 'react';
import { PaymentContext } from './payment-context';

export const usePaymentContext = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error('usePaymentContext must be used within a PaymentContextProvider');
  }
  return context;
};
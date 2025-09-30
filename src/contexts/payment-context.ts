import { createContext } from 'react';

export interface Results {
  monthlyPayment: number;
  totalRepay: number;
}

export interface PaymentContextType {
  results: Results;
  setResults: React.Dispatch<React.SetStateAction<Results>>;
}

export const PaymentContext = createContext<PaymentContextType | null>(null);
import { useState, createContext } from 'react';

interface Props {
  children: React.ReactNode;
}

interface Results {
  monthlyPayment: number;
  totalPayment: number;
}

interface PaymentContextType {
  results: Results;
  setResults: React.Dispatch<React.SetStateAction<Results>>;
}

export const PaymentContextProvider = ({children}: Props) => {

  const [results, setResults] = useState<Results>({
    monthlyPayment: 0,
    totalPayment: 0
  });

  const paymentContext = createContext<PaymentContextType | null>(null);

  return (
    <paymentContext.Provider value={{ results, setResults }}>
      {children}
    </paymentContext.Provider>
  );
};

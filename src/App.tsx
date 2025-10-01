import { Calculator } from '@components';
import { PaymentContextProvider } from '@contexts/payment-context-provider';

function App() {
  return (
    <PaymentContextProvider>
      <main className='h-screen grid place-content-center'>
        <Calculator /> 
      </main>
    </PaymentContextProvider>
  );
}

export default App;

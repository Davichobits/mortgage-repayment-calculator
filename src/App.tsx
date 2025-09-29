import { Calculator } from '@components';
import { PaymentContextProvider } from '@contexts/payment-context-provider';

function App() {
  return (
    <PaymentContextProvider>
      <main>
        <Calculator /> 
      </main>
    </PaymentContextProvider>
  );
}

export default App;

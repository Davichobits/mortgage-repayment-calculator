import { Form, Results } from '@components'
import { PaymentContextProvider } from '@contexts/payment-context-provider'


export const Calculator = () => {

  return (
    <PaymentContextProvider>
      <section className='w-[375px]'>
        <Form/>
        <Results/>
      </section>
    </PaymentContextProvider>
  )
}

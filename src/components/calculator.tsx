import { usePaymentContext } from '@contexts/use-payment-context'
import { Form, Results, ResulsInstructions } from '@components'

export const Calculator = () => {
  const { results } = usePaymentContext();

  return (
    <section className='md:max-w-[688px] md:rounded-2xl md:my-10 overflow-hidden'>
      <Form styles=''/>
      {
        results.monthlyPayment === 0 
        ? <ResulsInstructions/>
        : <Results/>
      }
    </section>
  )
}

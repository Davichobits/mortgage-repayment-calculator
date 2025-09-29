import { usePaymentContext } from '@contexts/use-payment-context'
import { Form, Results, ResulsInstructions } from '@components'

export const Calculator = () => {
  const { results } = usePaymentContext();

  return (
    <section className='w-[375px]'>
      <Form/>
      {
        results.monthlyPayment === 0 
        ? <ResulsInstructions/>
        : <Results/>
      }
    </section>
  )
}

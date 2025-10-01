import { usePaymentContext } from '@contexts/use-payment-context'
import { Form, Results, ResulsInstructions } from '@components'

export const Calculator = () => {
  const { results } = usePaymentContext();

  return (
    <section className='md:max-w-[688px] md:rounded-2xl md:my-10 overflow-hidden lg:max-w-[1008px] lg:flex'>
      <Form styles='lg:flex-1'/>
      <div className='lg:flex-1 bg-White'>
        {
          results.monthlyPayment === 0 
          ? <ResulsInstructions />
          : <Results />
        }
      </div>
    </section>
  )
}

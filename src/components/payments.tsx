import { useContext  } from 'react'
import { PaymentContext, type PaymentContextType } from '@contexts/payment-context'

export const Payments = () => {

  const payments = useContext<PaymentContextType>(PaymentContext);

  return (
    <div className='border-t-4 border-Lime rounded-lg py-6 px-4 bg-black/25'>
      <h3 className='text-Slate-300 mb-2'>Your Monthly Payments</h3>
      <p className='text-Lime text-[40px] font-bold mb-4'>$ {payments?.results.monthlyPayment.toFixed(2)}</p>
      <hr className='text-Slate-300 mb-4' />
      <h3 className='text-Slate-300 mb-2'>Total you'll repay over the term</h3>
      <p className='text-2xl font-bold'>$ {payments?.results.totalRepay.toFixed(2)}</p>
    </div>
  )
}

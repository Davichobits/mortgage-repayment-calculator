import { Payments } from '@components'

export const Results = () => {
  return (
    <div className='bg-Slate-900 text-White py-8 px-6 md:p-10 h-full lg:rounded-bl-[80px]'>
      <h2 className='text-2xl mb-6'>Your results</h2>
      <p className='text-Slate-300 mb-6'>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
      <Payments />
    </div>
  )
}

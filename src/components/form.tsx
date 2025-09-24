import { Radio, Input, Button } from '../components'

export const Form = () => {
  return (
    <form className='bg-White py-8 px-6'>
      <h1 className='text-2xl font-bold mb-2'>Mortgage Calculator</h1>
      <button className='font-medium underline text-Slate-700 mb-6 cursor-pointer'>
        Clear All
      </button>

      <Input label='Mortgage Amount' unit='$' />

      <div>
        <Input
          label='Mortgage Term'
          unit='years'
          unitPosition='end'
        />
        <Input 
          label='Interest Rate'
          unit='%'
          unitPosition='end'
        />
      </div>

      <h2 className='font-medium text-Slate-700 mb-3'>Mortgage Type</h2>
      
      <div className='flex flex-col gap-3 mb-6'>
        <Radio text='Repayment' />
        <Radio text='Interest Only' />
      </div>

      <Button />
    </form>
  )
}

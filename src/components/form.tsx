import { calculateMortgage, type MortgageType } from '@utils/calculateMortgage'

import { 
  useForm, 
  type SubmitHandler 
} from "react-hook-form"

import { Radio, Input, Button } from '../components'

type Inputs = {
  mortgageAmount: number,
  mortgageTerm: number,
  interestRate: number,
  mortgageType: MortgageType
}

export const Form = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const {mortgageAmount, mortgageTerm, interestRate, mortgageType} = data;
    const result = calculateMortgage(mortgageAmount, mortgageTerm, interestRate, mortgageType)
    console.log(result);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='bg-White py-8 px-6'>
      <h1 className='text-2xl font-bold mb-2'>Mortgage Calculator</h1>
      <button className='font-medium underline text-Slate-700 mb-6 cursor-pointer'>
        Clear All
      </button>

      <Input 
        {...register("mortgageAmount", { required: true, valueAsNumber: true })}
        error={errors.mortgageAmount?.type === 'required'}
        label='Mortgage Amount'
        unit='$'
      />

      <div>
        <Input
          {...register("mortgageTerm", { required: true })}
          error={errors.mortgageTerm?.type === 'required'}
          label='Mortgage Term'
          unit='years'
          unitPosition='end'
        />
        <Input
          {...register("interestRate", { required: true })}
          error={errors.interestRate?.type === 'required'}
          label='Interest Rate'
          unit='%'
          unitPosition='end'
        />
      </div>

      <h2 className='font-medium text-Slate-700 mb-3'>Mortgage Type</h2>
      
      <div className='flex flex-col gap-3'>
        <Radio {...register("mortgageType", { required: true })} text='Repayment' />
        <Radio {...register("mortgageType", { required: true })} text='Interest Only' />
      </div>
      {errors.mortgageType && <p className='text-Red text-sm mt-3'>This field is required</p>}

      <Button styles='mt-6' />
    </form>
  )
}

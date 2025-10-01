import { calculateMortgage, type MortgageType } from '@utils/calculateMortgage'
import { usePaymentContext } from '@contexts/use-payment-context'

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

interface Props {
  styles?: string;
}

export const Form = ({styles = ''}: Props) => {

  const { setResults } = usePaymentContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const {mortgageAmount, mortgageTerm, interestRate, mortgageType} = data;
    const {monthlyPayment, totalRepay} = calculateMortgage(mortgageAmount, mortgageTerm, interestRate, mortgageType)

    setResults({
      monthlyPayment,
      totalRepay, 
    })
    
  }

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevenir el submit del formulario
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`bg-White py-8 px-6 md:p-10 ${styles}`}>
      <div className='md:flex md:justify-between md:mb-10'>
        <h1 className='text-2xl font-bold mb-2 md:mb-0'>Mortgage Calculator</h1>
        <button onClick={handleClear} className='font-medium underline text-Slate-700 mb-6 cursor-pointer md:mb-0'>
          Clear All
        </button>
      </div>

      <Input 
        {...register("mortgageAmount", { required: true, valueAsNumber: true })}
        error={errors.mortgageAmount?.type === 'required'}
        label='Mortgage Amount'
        unit='$'
      />

      <div className='md:flex md:gap-6'>
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

      <Button styles='mt-6 md:max-w-[314px]' />
    </form>
  )
}

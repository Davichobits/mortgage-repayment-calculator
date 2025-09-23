interface Props {
  label: string;
  unit: string;
  unitPosition?: 'start' | 'end';
}

export const Input = ({ label, unit, unitPosition='start' }: Props) => {

  const isStart = unitPosition === 'start'

  const coditionalStyles =  isStart
    ? 'left-0 rounded-bl-sm rounded-tl-sm' 
    : 'right-0 rounded-br-sm rounded-tr-sm pr-4'

  return (
    <div className='mb-6'>
      <label className='font-medium text-Slate-700 mb-3 block'>{label}</label>

      <div className='relative'>

        
        <input className={`w-full outline-2 outline-Slate-500 rounded-sm focus:outline-Lime cursor-pointer hover:outline-Lime h-[46px] peer ${isStart ? 'pl-14' : 'pl-4'} [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`} type="number" />

        <span className={`bg-Slate-100 grid place-content-center px-4 h-full absolute top-0 focus: ${coditionalStyles} peer-hover:bg-Lime peer-focus:bg-Lime`}>{unit}</span>

      </div>
    </div>
  )
}


// border-2 border-Slate-500 hover:border-Lime  overflow-hidden flex h-[46px] relative cursor-pointer
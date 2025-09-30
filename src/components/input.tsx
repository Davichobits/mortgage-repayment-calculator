interface Props {
  label: string;
  unit: string;
  unitPosition?: 'start' | 'end';
  error: boolean;
}

export const Input = ({ 
  label, 
  unit, 
  unitPosition='start', 
  error, 
  ...props 
}: Props) => {

  const isStart = unitPosition === 'start'

  const positionStyles =  isStart
    ? 'left-0 rounded-bl-sm rounded-tl-sm' 
    : 'right-0 rounded-br-sm rounded-tr-sm pr-4'

  return (
    <div className='mb-6 w-full'>
      <label className='font-medium text-Slate-700 mb-3 block'>{label}</label>

      <div className='relative '>
        <input 
          {...props}
          step="0.01"
          className={`w-full outline ${error ? 'outline-Red' : 'outline-Slate-500'}  rounded-sm focus:outline-Lime cursor-pointer transition-colors hover:outline-Lime h-[46px] peer ${isStart ? 'pl-14' : 'pl-4'} [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`} 
          type="number" 
        />
        <span className={` grid place-content-center font-bold px-4 h-full absolute top-0 focus: ${positionStyles} peer-hover:bg-Lime peer-focus:bg-Lime ${error ? 'bg-Red text-White' : 'bg-Slate-100 text-Slate-700'}`}>{unit}</span>
      </div>
      {error && <p className='text-Red text-sm mt-3'>This field is required</p>}
    </div>
  )
}
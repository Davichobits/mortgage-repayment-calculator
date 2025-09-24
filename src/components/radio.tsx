interface Props {
  text: string;
}

export const Radio = ({text}: Props) => {
  return (
    <div className='inline-flex items-center border border-Slate-500 has-checked:bg-Lime/10 has-checked:border-Lime w-full h-[46px] rounded-sm p-4 cursor-pointer'>
        <label
          className='relative size-5 grid place-content-center cursor-pointer '
          htmlFor={text}
        >
          <input
            name='mortgage'
            required
            type='radio'
            className='peer h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-Slate-500 checked:border-Lime transition-all'
            id={text}
          />
          <span className='absolute bg-Lime size-3 rounded-full transition-opacity duration-200 top-[4px] left-[4px] opacity-0 peer-checked:opacity-100'></span>
        </label>
        <label className="ml-2 cursor-pointer text-sm" htmlFor={text}>{text}</label>
      </div>
  )
}

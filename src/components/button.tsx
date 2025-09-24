export const Button = () => {
  return (
    <button className='bg-Lime w-full flex justify-center gap-4 h-[54px] items-center rounded-full cursor-pointer hover:bg-Lime/50' type="submit">
        <img src="/assets/images/icon-calculator.svg" alt="" />
        <span>Calculate Repayments</span>
      </button>
  )
}

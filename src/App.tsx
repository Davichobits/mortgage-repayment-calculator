import { Radio } from "@material-tailwind/react";
import { Input } from './components'
function App() {
  
  return (
    <main className='bg-White w-[375px] py-8 px-6'>
      <h1 className='text-2xl font-bold mb-2'>Mortgage Calculator</h1>
      <button className='font-medium underline text-Slate-700 mb-6'>Clear All</button>

      <Input label="Mortgage Amount" unit="$" />

      <div>
        <Input label="Mortgage Term" unit="years" unitPosition='end' />
        <Input label="Interest Rate" unit="%" unitPosition='end' />
      </div>


      <div className='flex gap-4 mb-4'>

        <label className='flex flex-row-reverse justify-end items-center p-4 gap-4 border-2 border-Slate-500 w-full h-[46px] rounded-sm hover:border-Lime cursor-pointer hover:bg-Lime/10 has-checked:bg-Lime/10 has-checked:border-Lime' htmlFor="repayment">
          Repayment
          {/* <input className='accent-Lime' type="radio" name="mortgage" id="repayment" /> */}

          <Radio name="color" color="blue" onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
        </label>

      </div>
      <div className='flex items-center gap-4 relative w-full h-[46px] p-4'>
        
        <input className='peer accent-Lime checked:border-2 checked:border-red' type="radio" name="mortgage" id="interest-only" />

        <label className='peer-checked:bg-Lime/10 flex flex-row-reverse justify-end items-center gap-4 border-2 border-Slate-500 w-full rounded-sm hover:border-Lime cursor-pointer hover:bg-Lime/10 absolute inset-0 pl-10' htmlFor="interest-only">Interest Only</label>

      </div>

    </main>
  )
}

export default App

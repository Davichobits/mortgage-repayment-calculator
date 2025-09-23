interface Props {
  unit: string;
  position?: 'start' | 'end';
}

export const InputUnit = ({ unit, position='start' }: Props) => {
  return (
    <span className={`bg-Slate-100 grid place-content-center px-4 absolute ${position === 'start' ? 'left-0' : 'right-0'}`}>{unit}</span>
  )
}

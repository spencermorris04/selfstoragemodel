export default function Instructions({ children }) {
  return (
    <div
      className='absolute top-16 left-1/2 max-w-lg -translate-x-1/2 rounded-lg bg-zinc-800 px-10 py-8 text-sm shadow-xl md:text-base'
      style={{ maxWidth: 'calc(100% - 28px)' }}>
      <p className='mb-8 hidden md:block'>{children}</p>
      <div className='tracking-wider'>
        The user would click on a unit and have a side menu pop up that shows them more information and allows them to purchase the unit
      </div>
    </div>
  )
}

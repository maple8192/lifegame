type Props = {
  state: boolean
}

const Cell = ({state}: Props) => {
  return (
    <div className={"w-2 h-2 inline-block shrink-0 border-r border-b border-black " + (state ? "bg-green-500" : "bg-white")}></div>
  )
}

export default Cell;
type Props = {
  state: boolean
}

const Cell = ({state}: Props) => {
  return (
    <div className={"w-8 h-8 inline-block border border-black " + (state ? "bg-green-500" : "bg-white")}></div>
  )
}

export default Cell;
interface WarningModalProps {
  state: number
}

const WarningModal: React.FC<WarningModalProps> = ({ state }) => {

  const messages = [
    "The word's too short",
    "The word is not valid"
  ]
  const message = messages[state-1]

  return (
    <div className="absolute inset-0 size-full flex justify-center items-center">
      <div className="flex flex-col mb-36 rounded-md bg-zinc-700 text-white items-center justify-center px-8 py-4 text-xl">
        {message}
      </div>
    </div>
  )
}

export default WarningModal
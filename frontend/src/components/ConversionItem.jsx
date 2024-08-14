import useConversasion from "../zustand/useConversasion"

function ConversionItem({ convo }) {
    const { selectedConversasion, setSelectedConversasion } = useConversasion()

    const isSelected = selectedConversasion?._id === convo._id
    return (

        <>
            <div onClick={() => setSelectedConversasion(convo)} className={`flex gap-2 items-center hover:bg-success rounded p-2 py-1 cursor-pointer
                ${isSelected ? 'bg-success' : ""}`
            }>
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src={convo.profilePic} alt='user avatar' />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="font-semibold text-gray-300">{convo.userName}</p>


                    </div>

                </div>


            </div>
            <div className="divider my-0 py-0 h-1" />

        </>
    )
}

export default ConversionItem

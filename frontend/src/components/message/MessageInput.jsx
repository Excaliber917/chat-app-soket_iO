import { IoMdSend } from "react-icons/io";
function MessageInput() {
    return (
        <form className="px-2 my-3">
            <div className="w-full relative">
                <input
                    type="text"
                    placeholder="send a message"
                    className="border input text-sm rounded block w-full p-2.5
                    bg-gray-700 border-gray-600 text-white"
                />
                <button type="submit" className='absolute inset-y-0 end-0 flex items-center pe-3'>
                   <IoMdSend/>
                </button>

            </div>

        </form>
    )
}

export default MessageInput

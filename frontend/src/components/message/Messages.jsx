import { useEffect, useRef } from "react"
import useGetMessages from "../../hooks/useGetMessages"
import Message from "./Message"
import useListenMessages from "../../hooks/useListenMessages"


function Messages() {
  const { loading, messages } = useGetMessages()
  useListenMessages()
  const lastMsg = useRef()
  useEffect(() => {

    lastMsg.current?.scrollIntoView({ behavior: "smooth" });


  }, [messages])
  return (
    <div className="px-4 flex-1 custom-scrollbar overflow-auto">

      {!loading && messages.length > 0 && messages.map((message) => (
        <div key={message._id} ref={lastMsg}>
          <Message message={message} />
        </div>

      ))}

      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}



    </div>
  )
}

export default Messages

import useGetConversasion from "../hooks/useGetConversasion"
import ConversionItem from "./ConversionItem"

function Conversations() {
  const {loading  , conversasion} = useGetConversasion()
  // console.log(conversasion)
  return (
    <div className="overflow-auto px-4 mb-8 custom-scrollbar flex-1">
      {conversasion.map((convo)=>(
        <ConversionItem key={convo._id} convo = {convo}/>
      ))}
      {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
    </div>
  )
}

export default Conversations

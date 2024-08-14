import {create} from 'zustand'

const useConversasion = create((set)=>({
    selectedConversasion : null,
    setSelectedConversasion : (selectedConversasion)=> set({selectedConversasion}),

    messages : [],
    setMessages : (messages)=>set({messages})



}))

export default useConversasion
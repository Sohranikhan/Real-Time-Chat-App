import { AudioWaveform, Camera, Image, Info, Phone, Send, Video } from "lucide-react"
import EmojiPicker from "emoji-picker-react"
import { useEffect, useRef, useState } from "react"

const Chat = () => {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')
  const endRef =  useRef(null)


  useEffect(() => {
endRef.current?.scrollIntoView({behavior: "smooth"})
  }, [])
  
  const handleEmoji = (e) => {
    setText(prev => prev + e.emoji)
    //  setOpen(false)
  }

  return (
    <div className="flex flex-col flex-[2] border-l border-r border-gray-400 h-full">
      <div className="top px-2 pb-2 flex items-center justify-between border-b border-gray-400">
        <div className="user flex items-center gap-5">
          <img src="./avatar.png" alt="User Image" className="w-14 h-14 rounded-full object-cover" />
          <div className="texts flex flex-col">
            <span className="font-bold text-lg">Amir</span>
            <p className="text-sm font-light text-gray-200">Lorem ipsum, dolor sit amet.</p>
          </div>
        </div>

        <div className="icons flex gap-x-3">
          <Phone size={20} />
          <Video size={20} />
          <Info size={20} />
        </div>

      </div>

      <div className="center p-5 flex-[1] flex flex-col overflow-scroll gap-y-4">

        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="./avatar.png" />
            </div>
          </div>
          <div className="chat-header">
            Obi-Wan Kenobi
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble">You were the Chosen One!</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="./avatar.png" />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble">I hate you!</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="./avatar.png" />
            </div>
          </div>
          <div className="chat-header">
            Obi-Wan Kenobi
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble">You were the Chosen One!</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="./avatar.png" />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble">I hate you!</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="./avatar.png" />
            </div>
          </div>
          <div className="chat-header">
            Obi-Wan Kenobi
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble">You were the Chosen One!</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="./avatar.png" />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble">I hate you!</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>

<div ref={endRef}></div>
      </div>

      <div className="bottom p-3 flex items-center gap-2 justify-between border-t border-gray-400">
        <div className="icons flex gap-x-3 ">
          <Image size={20} />
          <Camera size={20} />
          <AudioWaveform size={20} />
        </div>
        <input type="text" placeholder="Type a message..." onChange={e => setText(e.target.value)} className="flex-[1] border-none outline-none text-white bg-primary rounded-lg text-base p-2" />
        <div className="emoji relative">
          <img src="./emoji.png" alt="emoji" value={text} onClick={() => setOpen((prev) => !prev)} className="w-5 h-5 cursor-pointer" />
          <div className="picker absolute bottom-12 left-0">

            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="bg-primary px-2 py-2 rounded-full"><Send /></button>
      </div>

    </div>
  )
}

export default Chat
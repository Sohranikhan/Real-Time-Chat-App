import { Search } from "lucide-react";
import { useState } from "react";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="w-full flex flex-col h-full sticky overflow-y-hidden">

      <div className="w-full flex items-center justify-between search">
        <div className="searchBar bg-primary flex items-center rounded-lg py-2 px-1 relative">
          <div className="absolute left-1">
            <Search size={20} />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none outline-none w-fit text-white pl-6"
          />
        </div>
        <img
          src={addMode ? "./minus.png" : "plus.png"}
          className="p-3 h-10 w-9 bg-primary cursor-pointer rounded-lg"
          alt="Add"
          onClick={() => setAddMode((prev) => !prev)} />

      </div>
      <div className="itemsDiv w-full h-full flex flex-col overflow-scroll gap-3 mt-2 pb-8">

        <div className="w-full item flex items-center gap-4 cursor-pointer border-b-[1px] border-b-gray-500 py-2">
          <img src="./avatar.png" alt="User Avatar" className="w-10 h-10 rounded-full " />
          <div className="texts w-full flex flex-col">
            <span className="font-bold">Amir</span>
            <p className="text-sm font-light text-gray-200">Hello</p>
          </div>
        </div>

        <div className="w-full item flex items-center gap-4 cursor-pointer border-b-[1px] border-b-gray-500 py-2">
          <img src="./avatar.png" alt="User Avatar" className="w-10 h-10 rounded-full " />
          <div className="texts w-full flex flex-col">
            <span className="font-bold">Amir</span>
            <p className="text-sm font-light text-gray-200">Hello</p>
          </div>
        </div>          
        
        <div className="w-full item flex items-center gap-4 cursor-pointer border-b-[1px] border-b-gray-500 py-2">
          <img src="./avatar.png" alt="User Avatar" className="w-10 h-10 rounded-full " />
          <div className="texts w-full flex flex-col">
            <span className="font-bold">Amir</span>
            <p className="text-sm font-light text-gray-200">Hello</p>
          </div>
        </div>         
        
         <div className="w-full item flex items-center gap-4 cursor-pointer border-b-[1px] border-b-gray-500 py-2">
          <img src="./avatar.png" alt="User Avatar" className="w-10 h-10 rounded-full " />
          <div className="texts w-full flex flex-col">
            <span className="font-bold">Amir</span>
            <p className="text-sm font-light text-gray-200">Hello</p>
          </div>
        </div>          
        
        <div className="w-full item flex items-center gap-4 cursor-pointer border-b-[1px] border-b-gray-500 py-2">
          <img src="./avatar.png" alt="User Avatar" className="w-10 h-10 rounded-full " />
          <div className="texts w-full flex flex-col">
            <span className="font-bold">Amir</span>
            <p className="text-sm font-light text-gray-200">Hello</p>
          </div>
        </div>

        <div className="w-full item flex items-center gap-4 cursor-pointer border-b-[1px] border-b-gray-500 py-2">
          <img src="./avatar.png" alt="User Avatar" className="w-10 h-10 rounded-full " />
          <div className="texts w-full flex flex-col">
            <span className="font-bold">Amir</span>
            <p className="text-sm font-light text-gray-200">Hello</p>
          </div>
        </div>

        <div className="w-full item flex items-center gap-4 cursor-pointer border-b-[1px] border-b-gray-500 py-2">
          <img src="./avatar.png" alt="User Avatar" className="w-10 h-10 rounded-full " />
          <div className="texts w-full flex flex-col">
            <span className="font-bold">Amir</span>
            <p className="text-sm font-light text-gray-200">Hello</p>
          </div>
        </div>          
        
        <div className="w-full item flex items-center gap-4 cursor-pointer border-b-[1px] border-b-gray-500 py-2">
          <img src="./avatar.png" alt="User Avatar" className="w-10 h-10 rounded-full " />
          <div className="texts w-full flex flex-col">
            <span className="font-bold">Amir</span>
            <p className="text-sm font-light text-gray-200">Hello</p>
          </div>
        </div>         
        
         <div className="w-full item flex items-center gap-4 cursor-pointer border-b-[1px] border-b-gray-500 py-2">
          <img src="./avatar.png" alt="User Avatar" className="w-10 h-10 rounded-full " />
          <div className="texts w-full flex flex-col">
            <span className="font-bold">Amir</span>
            <p className="text-sm font-light text-gray-200">Hello</p>
          </div>
        </div>          
        
        <div className="w-full item flex items-center gap-4 cursor-pointer border-b-[1px] border-b-gray-500 py-2">
          <img src="./avatar.png" alt="User Avatar" className="w-10 h-10 rounded-full " />
          <div className="texts w-full flex flex-col">
            <span className="font-bold">Amir</span>
            <p className="text-sm font-light text-gray-200">Hello</p>
          </div>
        </div>

        <div className="w-full item flex items-center gap-4 cursor-pointer border-b-[1px] border-b-gray-500 py-2">
          <img src="./avatar.png" alt="User Avatar" className="w-10 h-10 rounded-full " />
          <div className="texts w-full flex flex-col">
            <span className="font-bold">Amir</span>
            <p className="text-sm font-light text-gray-200">Hello</p>
          </div>
        </div>

        <div className="w-full item flex items-center gap-4 cursor-pointer border-b-[1px] border-b-gray-500 py-2">
          <img src="./avatar.png" alt="User Avatar" className="w-10 h-10 rounded-full " />
          <div className="texts w-full flex flex-col">
            <span className="font-bold">1-Amir</span>
            <p className="text-sm font-light text-gray-200">1-Hello</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ChatList;

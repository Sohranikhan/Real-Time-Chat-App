import { ArrowUp, Download } from "lucide-react"

const Details = () => {
  return (
    <div className="details flex-[1] flex flex-col">
      <div className="user flex flex-col items-center gap-2 pb-3 border-b border-gray-400 ">
          <img src="./avatar.png" alt="User Image" className="w-20 h-2w-20 rounded-full object-cover" />

            <h2 className="font-bold text-lg">Amir</h2>
            <p className="text-sm font-light text-gray-100">Lorem ipsum, dolor sit amet.</p>
</div>
            <div className="info flex flex-col w-full h-full overflow-y-scroll gap-4">
              <div className="options">
                <div className="title flex items-center justify-between">
                  <span className="text-sm text-gray-100 font-light">Chat Settings</span>
                  <ArrowUp size={30} className=" bg-slate-800 p-2 rounded-full cursor-pointer" />

                </div>
              </div>
              <div className="options">
                <div className="title flex items-center justify-between">
                  <span className="text-sm text-gray-100 font-light">Privacy & Help</span>
                  <ArrowUp size={30} className=" bg-slate-800 p-2 rounded-full cursor-pointer" />

                </div>
              </div>
              <div className="options">
                <div className="title flex items-center justify-between">
                  <span className="text-sm text-gray-100 font-light">Shared Photos</span>
                  <ArrowUp size={30} className=" bg-slate-800 p-2 rounded-full cursor-pointer" />

                </div>
                <div className="photos mt-2 flex flex-col gap-4">
                  <div className="photoItem flex items-center justify-between">
                    <div className=" flex items-center gap-2 overflow-hidden">
                    <img src="https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shared Photo" className="w-10 h-10 object-cover rounded-lg" />
                    <span>photo_2024_2.png</span>
                    </div>

                    <Download size={30} className="bg-gray-900 rounded-full p-2 cursor-pointer" />
                  </div>

                  <div className="photoItem flex items-center justify-between">
                    <div className=" flex items-center gap-2 overflow-hidden">
                    <img src="https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shared Photo" className="w-10 h-10 object-cover rounded-lg" />
                    <span>photo_2024_2.png</span>
                    </div>

                    <Download size={30} className="bg-gray-900 rounded-full p-2 cursor-pointer" />
                  </div>

                  <div className="photoItem flex items-center justify-between">
                    <div className=" flex items-center gap-2 overflow-hidden">
                    <img src="https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shared Photo" className="w-10 h-10 object-cover rounded-lg" />
                    <span>photo_2024_2.png</span>
                    </div>

                    <Download size={30} className="bg-gray-900 rounded-full p-2 cursor-pointer" />
                  </div>

                  <div className="photoItem flex items-center justify-between">
                    <div className=" flex items-center gap-2 overflow-hidden">
                    <img src="https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shared Photo" className="w-10 h-10 object-cover rounded-lg" />
                    <span>photo_2024_2.png</span>
                    </div>

                    <Download size={30} className="bg-gray-900 rounded-full p-2 cursor-pointer" />
                  </div>

                </div>
              </div>
              <div className="options">
                <div className="title flex items-center justify-between">
                  <span className="text-sm text-gray-100 font-light">Shared Files</span>
                  <ArrowUp size={30} className=" bg-slate-800 p-2 rounded-full cursor-pointer" />

                </div>
              </div>
              <button className="btn btn-error">Block User</button>
              <button className="btn btn-secondary">Logout</button>


            </div>
    </div>
  )
}

export default Details
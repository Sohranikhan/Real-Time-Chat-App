import { Edit, MoreHorizontal, Video } from "lucide-react"

const UserInfo = () => {
    return (
        <div className="w-full flex items-center justify-between my-1">
            <div className="flex items-center gap-5">
                <img src="./avatar.png" className="w-12 max-w-12 h-12 object-cover rounded-full" width={48} height={48} alt="User img" />
                <h2>Amir</h2>
            </div>

            <div className="flex gap-5">
                <MoreHorizontal size={20} className="cursor-pointer" />
                <Video size={20} className="cursor-pointer" />
                <Edit size={20} className="cursor-pointer" />
            </div>
        </div>
    )
}

export default UserInfo
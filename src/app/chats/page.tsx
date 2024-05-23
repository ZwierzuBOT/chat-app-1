import Chat from "../components/chat/chat";
import FriendsBar from "../components/chat/friends-bar";

const Page = () => {
    return ( 
        <div className="w-screen h-screen flex justify-between">
            <div className="w-[20%] h-screen">
                <FriendsBar/>
            </div>
            <div className="w-[80%] h-screen">
                <Chat/>
            </div>
        </div>
     );
}
 
export default Page;
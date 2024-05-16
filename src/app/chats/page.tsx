import FriendsBar from "../components/chat/friends-bar";

const Page = () => {
    return ( 
        <div className="">
            <div className="w-[30%] h-screen">
                <FriendsBar/>
            </div>
            <div className="w-[70%] h-screen">
                {/* <Chat/> */}
            </div>
        </div>
     );
}
 
export default Page;
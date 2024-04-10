
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { currentUser, auth } from "@clerk/nextjs";

const Header = async () => {
    const {userId} = auth();

    const user = await currentUser();

    return ( 
    <div className="bg-gray-600 text-neutral-100 h-[13vh] flex items-center justify-evenly ">
            <div className="w-[70%] flex justify-around h-full items-center">
            
            <UserButton/>
            <Link href="/chat" className="text-3xl mr-[70%]" >Chats</Link>
            </div>
            <div className="w-[30%] flex h-full items-center justify-between">
                { userId ? (
                <Link href="/sign-up" className="w-[50%] text-3xl h-full flex items-center justify-center">Sign Up</Link>
            ) : (
                <div></div>
            )
        }
        { userId ? (
            <Link href="/sign-in" className="w-[50%] text-3xl h-full flex items-center justify-center">Sign In</Link>
        ):(
            <div></div>
        )
        }
        </div>
    </div> 
    );
}
 
export default Header;
import { auth, currentUser } from "@clerk/nextjs";



const Dashboard = async () => {

    const {userId} = auth();
    if(!userId){
        return <div>You are not logged in</div>
    }
    // JESZCZE JEST USER BUTTON WAZNE WAZNE CZYLI SETTINGSY
    const user = await currentUser();
    return ( 
        <div>
            Dashboard Page
        </div>
     );
}
 
export default Dashboard;
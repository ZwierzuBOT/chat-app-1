import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
    return (
    <div className="flex items-center justify-center gap-10 flex-col">
      <h1 className="text-4xl font-bold mt-20">This is Sign Up page</h1>
        <SignUp />
    </div>
  
  );
  }
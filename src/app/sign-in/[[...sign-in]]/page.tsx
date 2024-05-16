import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
  <div className="flex items-center justify-center gap-10 flex-col w-full h-[87vh]">
    <SignIn/>;
  </div>

);
}
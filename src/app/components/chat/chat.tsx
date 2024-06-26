"use client"

import { useState } from "react";
const Chat = () => {


    const isFromMe = false;


    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input) {
            console.log("object");
            setMessages((prev) => [...prev, { text: input, fromMe: true }]);
            setInput('');
        }
    }

    return ( 
        <div className="w-full h-full bg-gray-100 ">
            <div className="w-full h-[70%]">

            </div>
            <div className="w-full h-[30%] flex justify-evenly items-start p-1">
                <button className="w-[10%] h-[30%] bg-blue-300 rounded-lg flex justify-center items-center"><svg className="w-[full] h-[50%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"/></svg></button>
                <input type="text" onChange={((e)=>setInput(e.target.value))} value={input} onKeyDown={handleSubmit} placeholder="Write your message..." className="bg-blue-100 w-[70%] h-[30%] pl-1 rounded-lg border-solid border-black transition-all" />
                <button className="w-[10%] h-[30%] bg-blue-300 rounded-lg flex justify-center items-center"><svg className="w-[full] h-[50%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg></button>
            </div>
        </div>
     );
}
 
export default Chat;
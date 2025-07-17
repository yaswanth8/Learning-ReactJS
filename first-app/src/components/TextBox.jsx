import React from "react";

const TextBbox=()=>{
    const [username,setUsername]=React.useState("");
    const handleChange=(e)=>{
        setUsername(e.target.value);
        console.log(username);
    };
    return(
        <>
        <form>
            <input type="text" placeholder="Enter text here" className="border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" value={username}
            onChange={
                handleChange
            }/>
            
        </form>
        </> 
    )
};
export default TextBbox;
import React from "react";
import spinner from "../assets/spinner.png";
const Spinner = () => {
    return (
        <>
      
         <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
            <img src={spinner} alt="loading..." style={{width:"100px",height:"100px"}}/>
            </div>
        </> 
    );
};
export default Spinner;

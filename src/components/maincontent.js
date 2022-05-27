import React from "react";
import scarecrow from "../images/Scarecrow.png"
import Button from "./button";


const Maincontent = () =>{
    return(
        <div className="row mainbody">
            
            <div className="col-md-4 img">
                <img className="img-fluid scarecrow" src={scarecrow} alt="scarecrow"></img>
            </div>

            <div className="col-md-7   row writing">
                <h1 className="text1 col-md-9" >
                    I have bad news for you
                </h1>
                <p className="text2 col-md-5" >
                    The page you are looking for might be
                    removed or is temporarily unavailable
                </p>
                <Button  />
            </div>
        </div>
    )
}

export default Maincontent;

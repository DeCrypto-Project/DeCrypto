import React from "react";
import './Loading.scss'

const BouncingDotsLoader = (props) => {
    return (
        <div className="bouncing-loader" style={{paddingTop:"15px"}}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default BouncingDotsLoader;
import React from 'react'
import "./InfoBar.css"
import onlineIcon from "./onlineIcon.png"
import closeIcon from "./closeIcon.png"

export default function InfoBar({room}) {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online"/>
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={closeIcon} alt="close"/></a>
            </div>
        </div>
    )
}

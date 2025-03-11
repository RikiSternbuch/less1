// import { useState } from "react";

const ProfileCard = (props) => {

    return (
        <div>
            <h2>Hello {props.userName},age: {props.userAge},hobby: {props.userHobby}</h2>
        </div>
       
    )
}

export default ProfileCard;
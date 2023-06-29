import React from "react";

const MyComponent = () => {
    const name = "Juan";
    let user = {
        name : "Juan user",
        phone : "929429"
    };

    //console.log(user)

    return (
        <div className="my-component">
            <p>Component</p>
            <h1>{name}</h1>
            <ul style={{listStyleType:"none"}}>
                <li>Name:<strong>{user.name}</strong> </li>
                <li>Phone: {user.phone}</li>
            </ul>
        </div>
    );
};

export default MyComponent;
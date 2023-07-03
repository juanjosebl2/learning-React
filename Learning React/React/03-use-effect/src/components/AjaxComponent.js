import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errores, setErrores] = useState("");

    const initUsers = () => {
        setUsers([
            {
                "id": 7,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                "id": 8,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                "id": 9,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
                "avatar": "https://reqres.in/img/faces/9-image.jpg"
            },
        ]);
    };

    const getUsersAjaxPromise = () => {
        fetch("https://reqres.in/api/users?page=1")
            .then(res => res.json())
            .then(
                res_finish => {
                    setUsers(res_finish.data);
                },
                error => {
                    console.log(error);
                }
            );
    };

    const getUsersAjaxAW = async () => {

        setTimeout(async () => {
            try {
                const petition = await fetch("https://reqres.in/api/users?page=1");
                const { data } = await petition.json();
                setUsers(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setErrores(error.message);
            }

        }, 2000);
    };

    useEffect(() => {
        initUsers();
        getUsersAjaxPromise();
        getUsersAjaxAW();
    }, []);

    if (errores !== "") {
        //when there is a mistake
        return (
            <div>
                <h1>Ajax</h1>
                <p> List users</p>
                <p>{errores}</p>
            </div>
        )

    } else if (loading === true) {
        //when load
        return (
            <div>
                <h1>Ajax</h1>
                <p> List users</p>
                <p>LOADING...</p>
            </div>
        )
    } else if (loading === false && errores === ""){
        return (
            <div>
                <h1>Ajax</h1>
                <p> List users</p>
                <ul>
                    {
                        users.map(user => {
                            return (
                                <li key={user.id}>
                                    <img src={user.avatar} alt="User avatar" width="20" />
                                    &nbsp;
                                    {user.first_name} - {user.last_name}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        )
    }


}

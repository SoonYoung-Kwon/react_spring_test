import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserInfo = (props) => {

    const navigate = useNavigate();

    const [msg, setMsg] = useState();

    const infoClick = () => {

        if(props.token === undefined)
            return alert("Undefind TOKEN")

        axios.get('http://localhost:8080/info',{
            headers: {
                ACCESS_TOKEN: props.token
            }
        })
        .then((response) => {
            console.log(response)
            alert("Info Success")
        })
        .catch(() => {
            alert("Info Failed")
        })

    }

    const msgClick = () => {

        if(props.token === undefined)
            return alert("Undefind TOKEN")

        axios.get('http://localhost:8080/message',{
            headers: {
                ACCESS_TOKEN: props.token
            }
        })
        .then((response) => {
            console.log(response)
            alert("Message Success")
            setMsg(response.data)
        })
        .catch(() => {
            alert("Message Failed")
        })

    }

    const signOut = () => {
        props.setUserId()
        props.setToken()
        alert("Sign Out")
        navigate('/')
    }

    return (
        <>
            <h2>Info</h2>
            <button onClick={infoClick}>Info</button>
            <button onClick={msgClick}>Msg</button>
            <button onClick={signOut}>Sign Out</button>
            <div>{msg}</div>
        </>
    );
};

export default UserInfo;
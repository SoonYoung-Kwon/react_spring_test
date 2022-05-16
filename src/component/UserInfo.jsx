import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserInfo = (props) => {

    const navigate = useNavigate();

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
            <button onClick={signOut}>Sign Out</button>
        </>
    );
};

export default UserInfo;
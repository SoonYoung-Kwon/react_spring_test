import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserInfo = (props) => {

    const navigate = useNavigate();

    const [resp, setResp] = useState([
        {
            id: '',
            userId: '',
            pw: ''
        }
    ]);

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
            setResp((resp) => 
                response.data.map((datas) => {
                    ...resp,
                    
                }
                )
            )
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
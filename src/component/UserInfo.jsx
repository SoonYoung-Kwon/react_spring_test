import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserInfo = (props) => {

    const navigate = useNavigate();

    const infoClick = () => {

        if(props.accessToken === undefined)
            return alert("Undefind TOKEN")
        axios.get('http://localhost:8080/info',{
            headers: {
                ACCESS_TOKEN: props.accessToken
            }
        })
        .then((response) => {
            console.log(response)
            if(response.data.length === 0){ // 만료 되었을 떄 response 는 0개
                axios.post('http://localhost:8080/renew',{
                  "userId": props.userId  
                },{
                    headers: {
                        REFRESH_TOKEN: props.refreshToken
                    }
                })
                .then(((response) => {
                    console.log("Renew ACCESS_TOKEN : " + response.data.accessToken)
                    props.setAccessToken(response.data.accessToken)
                    alert("Expired")
                }))
                .catch(() => {
                    alert("Renew Failed")
                })
            }
            alert("Info Success")
            return
        })
        .catch(() => {
            alert("Info Failed")
        })

    }

    const signOut = () => {
        props.setUserId()
        props.setAccessToken()
        props.setRefreshToken()
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
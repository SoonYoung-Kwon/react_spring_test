import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = (props) => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        userId: '',
        userPw: '',
    })

    const { userId, userPw } = form

    const onChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name] : e.target.value
        }
        setForm(nextForm)
    }

    const signInClick = () => {

        axios.post('http://localhost:8080/user/signIn', {
            userId,
            userPw
        })
        .then((response) => {
            console.log("ACCESS_TOKEN : " + response.data.accessToken)
            props.setUserId(userId)
            props.setAccessToken(response.data.accessToken)
            props.setRefreshToken(response.data.refreshToken)
            alert("SignIn Success")
            navigate('/user/info')
        })
        .catch(() => {
            alert("SignIn Failed")
        })

    }

    return (
        <>
            <h2>SignIn</h2>
            <input
                type="text"
                placeholder="ID"
                value={userId}
                name="userId"
                onChange={onChange}
            />
            <input
                type="text"
                placeholder="PW"
                value={userPw}
                name="userPw"
                onChange={onChange}
            />
            <button onClick={signInClick}>Sign In</button>
        </>
    );
};

export default SignIn;
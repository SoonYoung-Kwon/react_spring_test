import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

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

    const signUpClick = () => {

        axios.post('http://localhost:8080/user/signUp', {
            "userId": userId,
            "userPw": userPw
        })
        .then((response) => {
            console.log("ACCESS_TOKEN : " + response.data.access_TOKEN)
            alert("SignUp Success")
            navigate('/signIn')

        })
        .catch(() => {
            alert("SignUp Failed")
        })

    }
    return (
        <>
            <h2>SignUp</h2>
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
            <button onClick={signUpClick}>Sign Up</button>
        </>
    );
};

export default SignUp;
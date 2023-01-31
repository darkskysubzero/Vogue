import React, { useState } from 'react'
import { TextField, Button } from '@mui/material';

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { db } from "../firebase/firebase.util";


const Signin = () => {

    const defaultState = {
        email: "",
        password: ""
    }
    const [login, setLogin] = useState(defaultState);

    const handleSubmit = e => {
        e.preventDefault();
        console.log("logging in!");
        setLogin(defaultState);
    }

    const handleChange = e => {
        const { value, name } = e.target;

        setLogin(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }


    const signInWithGoogle = async (e) => {
        e.preventDefault();
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

    }

    return (
        <div className="sign-in side">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <TextField
                    size='small'
                    label="email"
                    name='email'
                    type="email"
                    required
                    value={login.email}
                    onChange={handleChange}
                />
                <TextField
                    size='small'
                    label="password"
                    name='password'
                    type="password"
                    required
                    value={login.password}
                    onChange={handleChange}
                />
                <div className="buttons">
                    <Button type='submit' variant='contained'>Login</Button>

                    <Button
                        variant='contained'
                        onClick={signInWithGoogle}
                        color="error"
                    >Google</Button>
                </div>
            </form>
        </div >
    )
}

export default Signin
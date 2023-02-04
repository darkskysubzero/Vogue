import React, { useState } from 'react'
import { TextField, Button } from '@mui/material';

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.util";
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const defaultState = {
        name: '',
        email: "",
        password: "",
    }
    const [register, setRegister] = useState(defaultState);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setRegister(defaultState);

        try {
            const { email, password, name } = register;
            const auth = getAuth();
            const userDetails = await createUserWithEmailAndPassword(auth, email, password);
            updateProfile(auth.currentUser, {
                displayName: name
            })

            const user = userDetails.user;
            const dataWithoutPassword = { ...register };
            delete dataWithoutPassword.password;
            dataWithoutPassword.timestamp = serverTimestamp();
            await setDoc(doc(db, "users", user.uid), dataWithoutPassword);
            navigate("/");
            console.log("Successfully signed up!")
            setRegister(defaultState);
        } catch (e) {
            console.log("There was an error!", e.message);
        }
    }

    const handleChange = e => {
        const { value, name } = e.target;

        setRegister(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }




    return (
        <div className="sign-in side">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <TextField
                    size='small'
                    label="Username"
                    name='name'
                    type="text"
                    required
                    value={register.name}
                    onChange={handleChange}
                />

                <TextField
                    size='small'
                    label="Email"
                    name='email'
                    type="email"
                    required
                    value={register.email}
                    onChange={handleChange}
                />
                <TextField
                    size='small'
                    label="Password"
                    name='password'
                    type="password"
                    required
                    value={register.password}
                    onChange={handleChange}
                />
                <div className="buttons">
                    <Button type='submit' variant='contained'>Signup</Button>
                </div>
            </form>
        </div >
    )
}

export default Signup
import React from "react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Home() {
    const userData = useSelector(state => state.login)
    const isLoggedin = userData.isAutenticated
    const navigate = useNavigate()

    useEffect(() => {

        if (!isLoggedin) {
            navigate('/')
        }

    }, [isLoggedin, navigate])

    console.log(userData)
    return <>
        <Typography variant="h1">Hola {userData.userName} como rol: {userData.userRol} </Typography>
    </>
}

export default Home;
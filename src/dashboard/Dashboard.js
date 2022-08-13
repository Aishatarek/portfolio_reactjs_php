import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import GetAllData from './GetAllData';
function Dashboard() {
    const [auth, setAuth] = useState('');
    let navigate = useNavigate();
    useEffect(() => {
        var auth = localStorage.getItem('name');
        setAuth(auth);
    },
        [])
    if (auth === null) {
        navigate(`/Signin`);
    }
    return (
        <div>
            <GetAllData />
        </div>
    )
}

export default Dashboard
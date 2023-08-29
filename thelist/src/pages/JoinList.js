import React from 'react';
import Header from '../components/Header';
import {useNavigate} from "react-router-dom";
import colors from '../components/colors';

export default function JoinListPage() {
    
    let navigate = useNavigate();
    const [passcode, setPasscode] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (passcode === "12345") {
            navigate("/manageListPage")
        }
        else {
            alert("incorrect passcode")
        }
      }
    
    return (
        <>
            <Header/>
            <div style={joinContainer}>
                <h2>Join A List</h2>
                <div style={joinContainer}>
                    <form onSubmit={handleSubmit}>
                        <input style = {inputStyle} value = {passcode} onChange={(e) => setPasscode(e.target.value)} type = "password" placeholder = "*****" id = "passcode" name = "passcode" />           
                        <button style = {navButton} type="submit">Join</button>
                    </form>
                </div>
            </div>
        </>
    )
}

const joinContainer = {display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", padding:'5%', backgroundColor: colors.primary, color: colors.secondary, fontSize: "1.5rem"};
const navButton ={backgroundColor: colors.medium, color: colors.secondary, fontSize: "1.5rem", borderRadius: 10, padding: 10, margin: 10, width: "60%"}
const inputStyle = {backgroundColor: 'white', color: colors.secondary, fontSize: "1.5rem", borderRadius: 10, padding: 10, margin: 10, width: "60%", alignItems: "center", justifyContent: "center"}
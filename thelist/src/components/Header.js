import * as React from 'react';
import colors from '../components/colors';
import {useNavigate} from "react-router-dom";

export default function Header() {
    let navigate = useNavigate();
    return (
        <div style = {container}>
            <button
             style = {logoStyle}
             onClick = {() => {
                navigate("/home")} }>theList</button>
            <div style={checkboxStyle}>
                <input style={inputStyle} type="checkbox" />
                <div style = {switcher}>
                <label style={labelStyle}>
                    <div>☼</div>
                    <div>☾</div>
                </label>
                </div>
            </div>
        </div>
    );
};

const container = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1rem', height: '10vh', backgroundColor: colors.primary, color: colors.secondary, fontSize: '1.5rem', borderBottom: '1px solid #ccc' };
const switcher = { position: 'relative', display: 'inline-block', width: '60px', height: '34px'};
const checkboxStyle = { display: 'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'center'};
const inputStyle = { width: '0', height: '0', visibility: 'hidden', display: 'none'};
const labelStyle = { position: 'absolute', cursor: 'pointer', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: '#ccc', borderRadius: '34px', transition: '.4s', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '0 1rem'};
const logoStyle = {color: colors.secondary, fontSize: '3.0rem', backgroundColor:'transparent', border: 'none', cursor: 'pointer', FontFace: 'Roboto', fontWeight: 'bold'}
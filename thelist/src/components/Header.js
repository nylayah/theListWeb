import * as React from 'react';
import colors from '../components/colors';

export default function Header() {
    
    return (
        <div style = {container}>
            <h1>theList</h1>
            <div>
                <input type="checkbox" />
                <div style = {switcher}>
                <label htmlfor="switcher">
                    <div>☼</div>
                    <div>☾</div>
                </label>
                </div>
            </div>
        </div>
    );
};

const container = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1rem', height: '10vh', backgroundColor: colors.primary, color: colors.secondary, fontSize: '1.5rem' };
const switcher = { position: 'relative', display: 'inline-block', width: '60px', height: '34px'};
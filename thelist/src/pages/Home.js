import Header from '../components/Header';
import {useNavigate} from "react-router-dom";
import colors from '../components/colors';
import {ViewListItem} from '../components/ListItem';
import React from 'react';

export default function HomePage() {
    let navigate = useNavigate();
    const items = [{item: "laykilla", points: 3},
             {item: "bob", points: 11},
             {item: "joe", points: 2},
             {item: "kellie", points: 1}]

    
    return (
        <div>
            <Header/>
            <div style={homeContainer}>
            <h2>Home Page</h2>
            {/* TODO: view of current list, not editable */}
            
            <div style={listContainer}>
            {items.map((item) =>(
                <ViewListItem item ={item.item} points = {item.points}/>
            ))}
            </div>
            
            <button style = {navButton}onClick = {() => {
            navigate("/managelistpage")
            }}>Manage Your List</button>
            <button style = {navButton} onClick = {() => {
            navigate("/joinlistpage")
            }}>Join a List</button>
            <button style = {navButton} onClick = {() => {
            navigate("/login")
            }}>Logout</button>
            </div>
        </div>
    )
}
const homeContainer = {display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", height: "100vh", padding:'5%', backgroundColor: colors.primary, color: colors.secondary, fontSize: "1.5rem"};
const navButton ={backgroundColor: colors.medium, color: colors.secondary, fontSize: "1.5rem", borderRadius: 10, padding: 10, margin: 10, width: "60%"}
const listContainer = {flex: 4/5, backgroundColor: colors.medium, alignItems: 'center', flexDirection: 'column', borderRadius: 10, padding: 10, display: 'flex', width:'80%', justifyContent: 'space-between', };

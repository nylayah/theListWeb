import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid';
import Header from '../components/Header';
import colors from '../components/colors';
import {useNavigate} from "react-router-dom";
import {EditListItem} from '../components/ListItem';

export let items;
uuidv4();


export default function ManageListPage() {
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);
    
    const addItem = item => {
        setItems([...items, {id: uuidv4(), item: item ,points: 0 }])
    }
    const handleSubmit = e => {
        e.preventDefault();
        addItem(value);
        setValue('');
    }
    return (
        <div>
            <Header/>
            <div style={wholePage}>
            <h2>Manage Your List</h2>
            <form style={inputContainer} onSubmit={handleSubmit}>
                <input style = {inputStyle} type='text' 
                value = {value}
                placeholder='List Item'
                onChange={(e) => setValue(e.target.value)}/>
                <button style={addButton} type='submit'>add</button>
            </form>
            {/* items.sort((a,b) => (a.score > b.score) ? : -1) */}
            <div style={listContainer}>
            {items.map((item) =>(
                <EditListItem item ={item.item} points = {item.points}/>
            ))}
            </div>
            <button style = {navButton} onClick = {() => {
            navigate("/home")
            }}>Confirm</button>
            </div>
        </div>
    )
}
const navButton ={backgroundColor: colors.medium, color: colors.secondary, fontSize: "1.5rem", borderRadius: 10, padding: 10, margin: 10, width: "60%"}
const wholePage = {flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', height: '100vh', backgroundColor: colors.primary, color: colors.secondary, fontSize: '1.5rem', display: 'flex',  };
const listContainer = {flex: 4/5, backgroundColor: colors.medium, alignItems: 'center', flexDirection: 'column', borderRadius: 10, padding: 10, display: 'flex', width:'80%', justifyContent: 'space-between', };
const inputStyle = {backgroundColor: 'white', color: colors.secondary, fontSize: "1.5rem", borderRadius: 10, padding: 10, margin: 10, width: "80%", alignItems: "center", justifyContent: "center"}
const inputContainer = {backgroundColor: colors.medium, alignItems: 'center', flexDirection: 'row', borderRadius: 10, padding: 10, display: 'flex', width:'80%', justifyContent: 'space-between', };
const addButton = {backgroundColor: colors.secondary, color: colors.dark, fontSize: "1.5rem", borderRadius: 10, padding: 10, margin: 10, width: "20%"}


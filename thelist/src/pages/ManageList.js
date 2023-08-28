import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid';
import ListItem from '../components/ListItem'
import Header from '../components/Header';
import colors from '../components/colors';

uuidv4();


export default function ManageListPage() {
    const [value, setValue] = useState('');
    const [items, setItems] =useState([]);
    const addItem = item => {
        setItems([...items, {id: uuidv4(), value: item}])
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
            <form className='List Form' onSubmit={handleSubmit}>
                <input type='text' className='list-input' 
                value = {value}
                placeholder='List Item'
                onChange={(e) => setValue(e.target.value)}/>
                <button type='submit' className='add-btn'>add</button>
            </form>
            {/* items.sort((a,b) => (a.score > b.score) ? : -1) */}
            <div style={listContainer}>
            {items.map((item,index) =>(
                <ListItem item = {item} key = {index}/>
            ))}
            <ListItem/>
            </div>
            </div>
        </div>
    )
}

const wholePage = {flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: colors.primary, color: colors.secondary, fontSize: '1.5rem', display: 'flex',  };
const listContainer = {flex: 4/5, backgroundColor: colors.medium, alignItems: 'center', flexDirection: 'column', borderRadius: 10, padding: 10, display: 'flex', width:'80%', justifyContent: 'space-between', };
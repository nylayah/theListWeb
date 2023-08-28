import React,{useState} from 'react'
import {v4 as uuivd4} from 'uuid';
import ListItem from '../components/ListItem'

uuivd4();


export default function ManageListPage() {
    const [value, setValue] = useState('');
    const [items, setItems] =useState([]);
    const addItem = item => {
        setItems([...items, {id: uuidv4(), value: item, points: 0, isEditing: false}])
    }
    const handleSubmit = e => {
        e.preventDefault();

        addItem(value);
        setValue('');
    }
    
    return (
        <>
            <Header/>
            <h2>Manage Your List</h2>
            <form className='List Form' onSubmit={handleSubmit}>
                <input type='text' className='list-input' 
                value = {value}
                placeholder='List Item'
                onChange={(e) => setValue(e.target.value)}/>
                <button type='submit' className='add-btn'>add</button>
            </form>
            {/* items.sort((a,b) => (a.score > b.score) ? : -1) */}
            {items.map((item,index) =>(
                <ListItem itemname = {item} key = {index}/>
            ))}
            <ListItem/>
        </>
    )
}
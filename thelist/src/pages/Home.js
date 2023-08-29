import Header from '../components/Header';
import colors from '../components/colors';
import {ListPreview, ViewListItem} from '../components/ListItem';
import React, {useState, useEffect} from 'react';
import {db} from '../firebase-config';
import {getDocs, collection} from 'firebase/firestore';


export default function HomePage({isAuth}) {
    
    const items = [{item: "laykilla", points: 3},
             {item: "bob", points: 11},
             {item: "joe", points: 2},
             {item: "kellie", points: 1}]
    const [listsLists, setListsLists] = useState([]);
    const ListsCollectionsRef = collection(db, 'Lists');

    useEffect(() => {
        const getLists = async () => {
            const lists = await getDocs(ListsCollectionsRef); 
            setListsLists(lists.docs.map((doc) => ({...doc.data(), id: doc.id})));
     };
        getLists();
    })

    return (
        <div style={{display:'flex', flex:1, flexDirection:'column'}} >
            <Header/>
            <div style={homeContainer}> 
            {isAuth ? (
                       <>
                        <h2>Your Lists</h2>
                        <div style={listContainer}>
                            {listsLists.map((list) => (
                                <ListPreview listName={list.ListName} owner={list.owner.name} />
                            ))}
                        </div>
                        <h2>Community Lists</h2>
                            <div style={listContainer}>   
                            {listsLists.map((list) => (
                            <ListPreview listName={list.ListName} owner={list.owner.name} />))
                            }
                            </div>
                       </>):

                    ( <div style = {{display:'flex', flexDirection:'column', width:'100%', alignItems: 'center'}}>
                        <h2>Community Lists</h2>
                        <button style={listContainer}>
                            {listsLists.map((list) => (
                            <ListPreview listName={list.ListName} owner={list.owner.name} />))
                            }
                        </button>
                      </div>
                    )
            }
            </div>
        </div>
    )
}
const homeContainer = {display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", padding:'5%', backgroundColor: colors.primary, color: colors.secondary, fontSize: "1.5rem"};
const listContainer = {backgroundColor: colors.medium, alignItems: 'center', flexDirection: 'column', borderRadius: 10, padding: '2%', display: 'flex', width:'90%', justifyContent: 'space-between', maxHeight: '80%' };
const unloggedinContainer = {flex: 1, backgroundColor: colors.primary, alignItems: 'center', flexDirection: 'column', borderRadius: 10, padding: '2%', display: 'flex', width:'80%', justifyContent: 'space-between', maxHeight: '80%', height:'100%' };  
import React from 'react'
import colors from '../components/colors'

function EditListItem(props){
    return (
        <div style={itemContainer}>
            <div style={rank}> 
                <p>{props.points}</p>
            </div>
            <p style={itemText}>{props.item}</p>
            <div style = {buttonContainer}>
                <button style={buttons}>edit</button>
                <button style={buttons}> ↑ </button>
                <button style={buttons}> ↓ </button>
            </div>
        </div>
    )
}

function ViewListItem(props){
    return (
        <div style={itemContainer}>
            <div style={rank}> 
                <p style={rankText}> {props.points} </p>
            </div>
            <p style={itemText}>{props.item}</p>
           
        </div>
    )
}
function ListPreview(props){
    return (
        <div style={listContainer}>
            <div>
                <p style={itemText}>{props.listName}</p>
                <p style={subText}> {props.owner} </p>
                
            </div>
        </div>
    )
}

const itemContainer = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.light,
    flexDirection: 'row',
    padding: '5%',
    width:"85%",
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: "medium",
    borderColor: colors.dark,
}
const listContainer = {
    display: 'flex',
    alignItems: 'flex-start',
    backgroundColor: colors.light,
    flexDirection: 'column',
    width:"85%",
    padding: '5%',
    justifyContent: 'space-between',
    borderRadius: 10,   
    borderWidth: "medium",
    borderColor: colors.dark,
}
const itemText = {
    fontSize: '1.5rem',
    color: colors.dark
}
const subText = {
    fontSize: '1rem',
    color: 'gray'
}
const rankText = {
    fontSize: '1.5rem',
    color: colors.light
}
const rank = {
    fontSize: '1.5rem',
    backgroundColor: colors.dark,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1/4,
    display: 'flex',
}
const buttonContainer = {   
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    width: '33%'

}
const buttons= {
    backgroundColor: colors.dark,
    color: colors.secondary,
    borderRadius: 10,
    padding: 10,
    height: '100%',
    width: '50%'

}
export {EditListItem, ViewListItem, ListPreview};
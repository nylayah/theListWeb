import React from 'react'
import colors from '../components/colors'

export default function ListItem({value}){
    return (
        <div style={itemContainer}>
            <div style={rank}> 0 </div>
            <p style={itemText}>{value}</p>
            <div style = {buttonContainer}>
                <button style={buttons}>edit</button>
                <button> ↑ </button>
                <button> ↓ </button>
            </div>
        </div>
    )
}

const itemContainer = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.light,
    flexDirection: 'row',
    padding: 2,
    width:"90%",
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: "medium",
    borderColor: colors.dark,
    

}
const itemText = {
    fontSize: '1.5rem',
    color: colors.secondary
}
const rank = {
    fontSize: '1.5rem',
    backgroundColor: colors.dark,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1/3,
    display: 'flex',
}
const buttonContainer = {   
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

}
const buttons= {
    backgroundColor: colors.dark,
    color: colors.secondary,
    borderRadius: 10,

}

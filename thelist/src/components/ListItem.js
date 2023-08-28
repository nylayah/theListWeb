import React from 'react'

export const ListItem = ({itemname, points}) => {
    points = 0;
    return (
        <div>
            <div>
                <p>{points}</p>
            </div>
            <p>{item.itemname}</p>
            <div>
                <button>edit</button>
                <button> ↑ </button>
                <button> ↓ </button>
            </div>
        </div>
    )
}
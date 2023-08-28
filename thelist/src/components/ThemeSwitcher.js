import React from 'react'

function ThemeSwitcher(){
    return (
        <div>
            <input type="checkbox" id="switcher"/>
            <label htmlfor="switcher">
                <div>☼</div>
                <div>☾</div>
            </label>
        </div>
    )
}

const ThemeSwitcherStyles = styled.div`
    label {
        --gap: 5px;
        --size: 20px;
        height: 30px;
        width: 55px;
        padding:0 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        cursor: pointer;
        background-color: #cfc8f4;
        border-radius: 50px;
        z-index:1;
        .icon {
            height: var(--size);
            width: var(--size);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        svg {
            width:75%;
            color: var(--white);
        }
    }
    input{
        width: 0;
        height: 0;
        display: none;
        visibility: hidden;
    }
    label::after {
        position: absolute;
        content: '';
        border-radius: 50%;
        transform: translateY(-50%);
        height: var(--size);
        width: var(--size);
        top: 50%;
        left: var(--gap);
        background: var(--mediumStateBlue);
        z-index: -1;
        transition: 0.5s ease left;
    }
    input:checked + label::after{
        left:calc(100% - var(--gap));
    }
`;

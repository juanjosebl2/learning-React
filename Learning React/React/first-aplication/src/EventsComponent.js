import React from 'react'

export const EventsComponent = () => {

    const clickLeft = (event, prop) => {
        console.log('Event clicked ' + prop)
    }

    const doubleClick = (e) => {
        console.log('Event clicked double')
    }

    const onMouse = (e, text) => {
        console.log(text)
    }

    const inInput = e => {
        console.log("Input")
    }
    const inInputOut = (e) => {
        console.log("Input outsite")
    }


    return (
        <div className='events-component'>
            <h2>EventsComponent</h2>
            <p>
                {/* Event click */}
                <button onClick={ event => clickLeft(event, "exemplo")} >Click here</button>
            </p>
            <p>
                {/* Event double click */}
                <button onDoubleClick={ doubleClick } >Double click here</button>
            </p>
            <div id='box' 
                onMouseEnter={ event => onMouse(event, "in site") }
                onMouseLeave={ event => onMouse(event, "out site") }
            >
                {/* On mouse enter or leave */}
                
            </div>
            <p>
                {/* Click in input execute onFocus */}
                <input type='text' 
                    onFocus={ inInput }
                    onBlur={ inInputOut } 
                    placeholder='Enter name' 
                />
            </p>
        </div>
    )
}

import React from 'react'

function Header(props) {
    console.warn("header",props.data);
    return (
        <div>
        <div className="">
        <span>{props.data.length }</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoWwNcSmq3J1eI1YLTRTZnwxsBQMey1Rwxqw&usqp=CAU"/>
        </div>
        </div>
    )
}

export default Header

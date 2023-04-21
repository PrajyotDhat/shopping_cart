import React from 'react'

function Home(props) {
    console.warn("home",props.data);
    return (
        <div>
            <h1>Home Component</h1>
            <div className="grid grid-cols-1">
                <div className=" ">
                    <img src="https://img.freepik.com/free-psd/laptop-psd-mockup-with-gradient-led-light_53876-138283.jpg"/>
                </div>
                <div className="font-semibold">
                    <span>DELL</span>
                    <span>Price: $1000.0</span>
                    <div className="">
                        <button className='bg-orange-500' onClick={()=>props.addToCartHandler({price:1000,name:'HP'})}>Add Cart</button>
                    </div>
                    <div className="">
                        <button className='bg-green-500' onClick={()=>props.removeFromCartHandler()}>Remove Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

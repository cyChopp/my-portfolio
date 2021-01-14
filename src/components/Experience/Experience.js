import React from 'react'
import './Experiece.css'

const Experience = () => {
    return (
    <div id='experience' className='experience_wrapper'>
        <div className='experience_titleWrapper'>
            <p className="experience_anchorTitle">Experience</p>
        </div>
        <div className='experience_paragraph'>
            <p className='experience_title'>Social-Network</p>
            <p>This application was designed in React + React-Redux. It uses Flux architecture which makes tracing changes
             during development simpler and makes bugs easier to track down and fix. As back-end was used Firebase (NoSQL real time database). </p>
        </div>
        <div className='experience_paragraph'>
            <p className='experience_title'>E-commerce shop</p>
            <p>This Single Page Application was made with React ,React-Context and with the help of commerce.js (eCommerce SDK),
             where a user can add / remove items to the cart and purchase them.</p>
        </div>
        <div className='experience_paragraph'>
            <p className='experience_title'>Galaxy todo</p>
            <p>Todo list that can add / delete todos. Each task is sorted by its time stamp so that the user can prioritize the tasks.This app uses React Hooks ,
             making it easy to manipulate the state of our functional component without needing to convert them into class components.</p>
        </div>
        </div>
    )
}

export default Experience

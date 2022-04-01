import React from 'react';
import './Sidebar.css'
import { AiOutlineDelete } from 'react-icons/ai';
const Sidebar = ({name,randomMovie,randomData,clearData,count,handleRemoveFromCart}) => {
    return (
        <div className='sidebar'>
            <div className='sidebar-div'>
                <h2>Selected Movies<sup className='sup'>{count}</sup> </h2>
                <div>
                    {
                        name.map(nam=><p className='sidebar-align' key={nam.id}><img className='sidebar-img' src={nam.img} alt=''/>{nam.name} <button className='sidebar-btn' onClick={()=>handleRemoveFromCart(nam)}><AiOutlineDelete></AiOutlineDelete></button></p>)
                    }
                </div>
                <button disabled={name==''} onClick={randomMovie}>Select 1 for You</button> <br />
                <p>Selected for you: <img src={randomData.img} alt="" /> {randomData.name}</p>
                <button onClick={()=>clearData(name)}>Choose Again</button>
            </div>
        </div>
    );
};

export default Sidebar;
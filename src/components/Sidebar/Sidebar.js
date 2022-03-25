import React from 'react';
import './Sidebar.css'
const Sidebar = (props) => {
    return (
        <div className='sidebar'>
            <div className='sidebar-div'>
                <h2>Selected Movies</h2>
                <div>
                    {
                        props.name.map(nam=><p className='sidebar-align' key={nam.id}><img className='sidebar-img' src={nam.img} alt=''/>{nam.name}</p>)
                    }
                </div>
                <button>Select for You</button> <br />
                <button onClick={()=>props.clearData(props.name)}>Choose Again</button>
            </div>
        </div>
    );
};

export default Sidebar;
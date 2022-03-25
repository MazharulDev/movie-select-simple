import React from 'react';
import './Sidebar.css'
const Sidebar = (props) => {
    return (
        <div className='sidebar'>
            <div className='sidebar-div'>
            <h2>Selected Movies</h2>
            <div>
                {
                    props.name.map(nam=><p key={nam.id}>{nam.name}</p>)
                }
            </div>
            </div>
        </div>
    );
};

export default Sidebar;
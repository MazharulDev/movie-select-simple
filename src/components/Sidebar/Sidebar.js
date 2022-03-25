import React from 'react';
import './Sidebar.css'
const Sidebar = (props) => {
    return (
        <div className='sidebar'>
            <h2>Selected Movies</h2>
            <div>
                {
                    props.name.map(nam=><p key={nam.id}>{nam.name}</p>)
                }
            </div>
        </div>
    );
};

export default Sidebar;
import React from 'react';

import '../css/sidebar_option.css';

function SidebarOption({title, Icon}) {
    return (
        <div className={Icon ? 'sidebarOptionWithIcon' : 'sidebarOption'}>
            {Icon && <Icon className='sidebarOptionIcon' />}
            {Icon ? <h4>{title}</h4> :
            <span>{title}</span> }
        </div>
    )
}

export default SidebarOption

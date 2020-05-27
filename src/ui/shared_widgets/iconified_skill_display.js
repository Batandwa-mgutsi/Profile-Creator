import React from 'react';

/**
 * 
 * @param {String} icon 
 * @param {String} name 
 * @param {Boolean} isSelected 
 */
export default function IconifiedSkillDisplay(icon, name = null, isSelected = false) {
    return <div className='row' style={{
        background: '#FFFFFF00 0% 0% no-repeat padding-box',
        border: isSelected ? '4px solid #051F74' : '0px', borderRadius: '16px',
    }}>
        <div className='col 12'>
            <div className='col s12' style={{ textAlign: 'center' }}>
                <img className='responsive-img' src={icon} />
            </div>
            {name !== null &&
                <div className='col s12' style={{ textAlign: 'center', color: '#585858FA', fontWeight: 'bold' }}>
                    {name}
                </div>
            }
        </div>
    </div>
}
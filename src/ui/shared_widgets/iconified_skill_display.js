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
        margin: 'auto'
    }}>
        <div className='col s2' style={{ margin: 'auto' }}>
            <div>
                <img className='responsive-img' src={icon} style={{ maxWidth: '94.5px', maxHeight: '78px' }} />
            </div>
            <div style={{ textAlign: 'end' }}>
                {name != null &&
                    <p style={{ color: '#585858FA', fontWeight: 'bold' }}>
                        {name}
                    </p>
                }
            </div>
        </div>
    </div>
}
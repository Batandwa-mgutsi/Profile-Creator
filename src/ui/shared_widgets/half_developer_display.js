import React from 'react';
import { getCurrentOccupation, getDeveloperFullName } from '../common/utils';

/**
 * A view that only displays the given developers profile picture, name, company, and shortBiography.
 * 
 * @param {Developer} developer - in props
 * @param {React.Component} footer - in props.children
 */
export default function HalfDeveloperDisplay(props) {
    return <div>
        <div className='col s4'>
            <img src={props.developer?.profilePicture} style={{ maxHeight: '210px', maxWidth: '210px', borderRadius: '50%' }} />
        </div>
        <div className='col s8'>
            <div className='col s12' style={{ fontWeight: 'bold', fontSize: '20px', color: '#051F74FA' }}>
                {getDeveloperCurrentCompanyName(props.developer) + ' Developer'}
            </div>
            <div className='col s12' style={{ fontWeight: 'bold', fontSize: '40px', color: '#051F74FA' }}>
                {getDeveloperFullName(props.developer)}
            </div>
            <div className='col s12'>
                <div className='col' style={{ fontWeight: 'medium', fontSize: '20px', color: '#051F74FA' }}>
                    {props.developer.shortBiography}
                </div>
            </div>
            <div className='col s12' style={{ marginTop: '10px' }}>
                {props.children}
            </div>
        </div>
    </div>
}


function getDeveloperCurrentCompanyName(developer) {
    var company = getCurrentOccupation(developer);
    if (company === null)
        return '';

    return company.companyName;
}
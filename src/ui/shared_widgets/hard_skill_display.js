import React from 'react';
import { HardSkill } from '../common/models';

import StarRatingComponent from 'react-star-rating-component';

import { getHardSkillIconById } from '../common/skills';


/**
 * 
 * @param {HardSkill} hardSkill - in props
 * @param {Booolean}  isEditable - in props
 * @param {Function(Number)} onRatingChanged
 */
export default function HardSkillDisplay(props) {
    return <div className='row' style={{
        background: '#FFFFFF00 0% 0% no-repeat padding-box',
        margin: 'auto'
    }}>
        <div className='col s12' style={{ margin: 'auto' }}>
            <div className='col s12'>
                <img className='responsive-img' src={getHardSkillIconById(props.hardSkill.id)} style={{ maxWidth: '94.5px', maxHeight: '78px' }} />
            </div>
            <div className='col s12' style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <StarRatingComponent
                    name={props.hardSkill.id}
                    value={props.hardSkill.rating}
                    starCount={5}
                    editing={props.isEditable}
                    onStarClick={(nextValue, prevValue, name) => props.onRatingChanged(nextValue)}
                />
            </div>
            <div className='col s12' style={{ textAlign: 'center', background: '#051F74 0% 0% no-repeat padding-box', color: '#FFFFFFFA' }}>
                {props.hardSkill.years + ' YEARS'}
            </div>
        </div>
    </div>
}
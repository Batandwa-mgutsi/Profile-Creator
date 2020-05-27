import React from 'react';
import { HardSkill } from '../common/models';

import StarRatings from 'react-star-ratings';

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
                <img className='responsive-img' src={getHardSkillIconById(props.hardSkill.id)} />
            </div>
            <div className='col s12' style={{ textAlign: 'center' }}>
                <StarRatings
                    name={props.hardSkill.id}
                    rating={props.hardSkill.rating}
                    starRatedColor='orange'
                    starHoverColor='orange'
                    numberOfStars={5}
                    starDimension='1vw'
                    starSpacing='0px'
                    changeRating={props.isEditable && ((nextValue, prevValue, name) => props.onRatingChanged(nextValue))}
                />
            </div>
            <div className='col s12' style={{ textAlign: 'center', background: '#051F74 0% 0% no-repeat padding-box', color: '#FFFFFFFA' }}>
                {props.hardSkill.years + ' YEARS'}
            </div>
        </div>
    </div>
}
import { HardSkill } from '../common/models';

import StarRatings from 'react-star-ratings';

import { getHardSkillIconById } from '../common/skills';

import React from 'react';
import { ViewModelConsumer } from '../../mvvm';

import HardSkillDisplayViewModel from './hard_skill_display_viewmodel'

/**
 * 
 * @param {HardSkill} hardSkill - in props
 * @param {Booolean}  isEditable - in props
 * @param {Function(Number)} onRatingChanged - in props
 * @param {Function(NUmber)} onYearsChanged - in props
 */
export default class HardSkillDisplay extends ViewModelConsumer {
    constructor(props) {
        super(props, new HardSkillDisplayViewModel(props.hardSkill.years));
    }

    /**
     * @param {HardSkillDisplayViewModel} model.
     */
    onRender(props, model) {
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
                    {(props.isEditable && model.isEditingYears) ?
                        <input type='number'
                            value={model.years}
                            min={1}
                            onChange={(e) => model.setYears(e.target.value)}
                            onBlur={(e) => {
                                model.setIsEditingYears(false);
                                props.onYearsChanged(model.years);
                            }}
                            style={{
                                color: 'white'
                            }}
                        />
                        : <div
                            onClick={(e) => model.setIsEditingYears(true)}
                        >
                            {props.hardSkill.years + ' YEARS'}
                        </div>
                    }
                </div>
            </div>
        </div>
    }


}
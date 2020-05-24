import React from 'react';
import { ViewModelConsumer } from '../../mvvm';
import SoftSkillDisplayViewModel from './soft_skill_display_viewmodel';
import { SoftSkill } from '../common/models';

import { getSoftSkillIconById } from '../common/skills';

import StarRatingComponent from 'react-star-rating-component';


export default class SoftSkillDisplay extends ViewModelConsumer {
    /**
     * @param {SoftSkill} softSkill - in props
     * @param {Function(Number)} onRatingChanged - in props
     * @param {Function(Number)} onDescriptionChanged - in props
     * @param {Boolean} isEditable - in props
     */
    constructor(props) {
        super(props, new SoftSkillDisplayViewModel(props.softSkill?.description))
    }

    /**
     * @param {SoftSkillDisplayViewModel} model
     */
    onRender(props, model) {
        return <div className='row' >
            <div className='col s4'>
                <img src={getSoftSkillIconById(props.softSkill.id)} style={{ maxHeight: '206', maxWidth: '190px' }} />
            </div>
            <div className='col s8'>
                <div className='col s12'>
                    <div style={{ fontSize: '26px' }}>
                        <StarRatingComponent
                            name={props.softSkill.id}
                            value={props.softSkill.rating}
                            starCount={5}
                            editing={props.isEditable}
                            onStarClick={(nextValue, prevValue, name) => props.onRatingChanged(nextValue)}
                        />
                    </div>

                </div>
                <div className='col s12'>
                    {(props.isEditable && model.isEditingDescription) ?
                        <textarea
                            onChange={(e) => model.setDescription(e.target.value)}
                            onBlur={(e) => {
                                model.setIsEditingDescription(false);
                                props.onDescriptionChanged(model.description);
                            }}
                        >
                            {model.description}
                        </textarea>
                        : <div className='col'
                            style={{
                                fontWeight: 'medium',
                                fontSize: '25px',
                                color: '#333232FA'
                            }}
                            onClick={(e) => model.setIsEditingDescription(true)}
                        >
                            {model.description}
                        </div>
                    }
                </div>
            </div>
        </div>
    }
}
import React from 'react';
import SelectSkillsViewModel from './select_skills_viewmodel';
import { ViewModelConsumer } from '../../../../mvvm';
import { SelectableSkill } from '../../../common/models';

import IconifiedSkillDisplay from '../../../shared_widgets/iconified_skill_display'

import '../../../common/styles.css';

export default class SelectSkillsView extends ViewModelConsumer {
    constructor(props) {
        super(props, new SelectSkillsViewModel(props.skills ?? []));
    }

    /**
     * @param {SelectSkillsViewModel} model
     */
    onRender(props, model) {
        return <div className='row' style={{ paddingBottom: '0px' }}>
            <div className='col s12' style={{ margin: 'auto' }}>
                <div className='col s6 offset-s3' style={{
                    background: '#FBFBFB 0% 0% no-repeat padding-box',
                    border: '1px solid #26A69A',
                    borderRadius: '53px',
                    paddingLeft: '30px'
                }}>
                    <input type='text' style={{ borderBottom: '0px', boxShadow: '0 0px 0 0' }} placeholder={props.placeholder ?? 'search skills'} onChange={(e) => model.setNameFilter(e.target.value)} />
                </div>

                <div className='col s12 divider' style={{ marginTop: '10px', marginBottom: '10px' }} />
                <div className='col s12'>
                    {
                        (model.getFilteredUnselectedSkills().slice().concat(model.selectedSkills)).map((skill) => {
                            return <div key={skill.name} className='col s2 selectable-floating-view' onClick={(e) => {
                                model.isSelected(skill) ?
                                    model.unselectSkill(skill) : model.selectSkill(skill)
                            }}>
                                {IconifiedSkillDisplay(skill.iconSrc, skill.name, model.isSelected(skill))}
                            </div>
                        })
                    }
                </div>

                <div style={{ float: 'right', paddingTop: '20px' }}>
                    <div className='btn-flat' style={{ color: 'teal', fontSize: '20px' }} onClick={(e) => props?.onAddSkills(model.selectedSkills)}>Done</div>
                </div>
            </div>


        </div>
    }
}
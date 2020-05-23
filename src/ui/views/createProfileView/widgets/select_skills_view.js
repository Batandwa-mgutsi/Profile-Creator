import React from 'react';
import SelectSkillsViewModel from './select_skills_viewmodel';
import { ViewModelConsumer } from '../../../../mvvm';
import '../../../../materialize/css/materialize.css';
import { SelectableSkill } from '../../../common/models';

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
                <div className='col s12' style={{ marginRight: '10px', marginLeft: '10px' }}>
                    {
                        (model.getFilteredUnselectedSkills().slice().concat(model.selectedSkills)).map((skill) => {
                            return <div className='col' style={{ marginRight: '10px' }} onClick={(e) => {
                                model.isSelected(skill) ?
                                    model.unselectSkill(skill) : model.selectSkill(skill)
                            }}>
                                {SelectableSkillView(skill, model.isSelected(skill))}
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

/**
 * @param {SelectableSkill} skill
 * @param {Boolean} isSelected
 */
function SelectableSkillView(skill, isSelected) {
    return <div className='row' style={{
        background: '#FFFFFF00 0% 0% no-repeat padding-box',
        border: isSelected ? '4px solid #051F74' : '0px', borderRadius: '16px',
        margin: 'auto'
    }}>
        <div className='col s2' style={{ margin: 'auto' }}>
            <div>
                <img className='responsive-img' src={skill.iconSrc} style={{ maxWidth: '94.5px', maxHeight: '78px' }} />
            </div>
            <div style={{ textAlign: 'end' }}>
                <p style={{ color: '#585858FA', fontWeight: 'bold' }}>
                    {skill.name}
                </p>
            </div>
        </div>
    </div>
}
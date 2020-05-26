import '../../../../materialize/css/materialize.css';
import { SoftSkill } from '../../../common/models';
import React from 'react';


/**
 * @param {Array<SoftSkill>} softSkills - in props
 * @param {Function(SoftSkill)} onSkillSelected in props
 */
export default function SelectSoftSkillView(props) {
    return <div className='row' >
        <h4 style={{
            color: '#585858FA',
            font: 'Medium 50px/24px Roboto',
            fontWeight: 'bold',
        }} >Select Soft Skill</h4>
        <div className='col s12'>
            <ul className='collection with-header'>
                {
                    props.softSkills.map((skill) => {
                        return <a href='#!' className='collection-item' key={skill.id} onClick={(e) => props.onSkillSelected(skill)}>
                            {skill.id}
                        </a>
                    })
                }
            </ul>
        </div>
    </div>
}
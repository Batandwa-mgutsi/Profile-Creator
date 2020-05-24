import { SelectableSkill, SoftSkill } from './models'
import Running from '../../image_assets/skill_icons/running.png'
import SelfMotivation from '../../image_assets/skill_icons/self_motivation.png'
import Java from '../../image_assets/skill_icons/java.png'


// TODO- Implement
export function getSelectableTechnicalSkills() {
    return [
        new SelectableSkill('running', Running),
        new SelectableSkill('exercising', Running),
    ];
}

export function getSelectableHobies() {
    return [
        new SelectableSkill('running', Running),
    ];
}

export function getSelectableHardSkills() {
    return [
        new SelectableSkill('running', Running),
    ];
}

export function getSelectableSoftSkills() {
    return [
        new SoftSkill('Talking To People', 1, ''),
        new SoftSkill('Eating Pizza', 1, ''),
    ];
}

/**
 * @param {String} softSkillId 
 */
export function getSoftSkillIconById(softSkillId) {
    return SelfMotivation;
}


/**
 * @param {String} hardSkillId 
 */
export function getHardSkillIconById(hardSkillId) {
    return Java;
}
import { SelectableSkill } from './models'
import Running from '../../image_assets/skill_icons/running.png'

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
        'Talking To People',
    ];
}
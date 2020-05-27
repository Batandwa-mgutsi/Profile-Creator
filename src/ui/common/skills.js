import { SelectableSkill, SoftSkill, HardSkill } from './models'
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
 * 
 * @param {*} technicalSkillId 
 */
export function getTechnicalSkillIconById(technicalSkillId) {
    return Java;
}

/**
 * 
 * @param {*} hobbyId 
 */
export function getHobbyIconById(hobbyId) {
    return Running;
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

/**
 * From the given list of hard skills returns all those that are languages
 * 
 * @param {Array<HardSkill>} hardSkills
 * @returns {Array<HardSkill>}
 */
export function getLanguages(hardSkills) {
    // TODO
    return hardSkills;
}


/**
 * From the given list of hard skills returns all those that are frontend technologies
 * 
 * @param {Array<HardSkill>} hardSkills
 * @returns {Array<HardSkill>}
 */
export function getFrontends(hardSkills) {
    // TODO
    return hardSkills;
}


/**
 * From the given list of hard skills returns all those that are backend technologies
 * 
 * @param {Array<HardSkill>} hardSkills
 * @returns {Array<HardSkill>}
 */
export function getBackends(hardSkills) {
    // TODO
    return hardSkills;
}


/**
 * From the given list of hard skills returns all those that are database technologies
 * 
 * @param {Array<HardSkill>} hardSkills
 * @returns {Array<HardSkill>}
 */
export function getDatabases(hardSkills) {
    // TODO
    return hardSkills;
}


/**
 * From the given list of hard skills returns all those that are mobile and tools
 * 
 * @param {Array<HardSkill>} hardSkills
 * @returns {Array<HardSkill>}
 */
export function getMobileTools(hardSkills) {
    // TODO
    return hardSkills;
}

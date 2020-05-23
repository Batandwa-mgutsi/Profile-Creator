import { SelectableSkill } from '../../../common/models'
import { BaseViewModel } from '../../../../mvvm';

import { removeItemFromList } from '../../../common/utils'

/**
 * ViewModel for the SelectSkillView
 */
export default class SelectSkillsViewModel extends BaseViewModel {
    /**
     * @param {Array<SelectableSkill>} skills
     */
    constructor(skills) {
        super();
        this.nameFilter = '';
        this.unselectedSkills = skills;
        this.selectedSkills = [];

        this.setNameFilter = this.setNameFilter.bind(this);
        this.selectSkill = this.selectSkill.bind(this);
        this.unselectSkill = this.unselectSkill.bind(this);
        this.isSelected = this.isSelected.bind(this);
        this.getFilteredUnselectedSkills = this.getFilteredUnselectedSkills.bind(this);
    }

    /**
     * @param {String} filter
     */
    setNameFilter(filter) {
        this.nameFilter = filter;
        this.notifyListeners(this);
    }

    /**
     * @param {SelectableSkill} skill
     */
    selectSkill(skill) {
        if (this.unselectedSkills.indexOf(skill) !== -1)
            removeItemFromList(this.unselectedSkills, skill);

        this.selectedSkills.push(skill);
        this.notifyListeners(this);
    }

    /**
     * @param {SelectableSkill} skill
     */
    unselectSkill(skill) {
        if (this.selectedSkills.indexOf(skill) !== -1)
            removeItemFromList(this.selectedSkills, skill);

        this.unselectedSkills.push(skill);
        this.notifyListeners(this);
    }

    /**
     * @param {SelectableSkill} skill
     */
    isSelected(skill) {
        return this.selectedSkills.indexOf(skill) !== -1;
    }

    /**
     * @return {Array<SelectableSkill>}
     */
    getFilteredUnselectedSkills() {
        var output = [];
        for (var skillIndex in this.unselectedSkills) {
            console.log(this.unselectedSkills[skillIndex]);
            if (this.unselectedSkills[skillIndex].name.includes(this.nameFilter))
                output.push(this.unselectedSkills[skillIndex]);
        }

        return output;
    }
}

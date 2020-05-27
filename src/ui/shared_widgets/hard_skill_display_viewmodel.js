import { BaseViewModel } from '../../mvvm';

/**
 * ViewModel for the hardSkill display view.
 * 
 * This is for editing the number of years
 */
export default class HardSkillDisplayViewMOdel extends BaseViewModel {

    /**
     * 
     * @param {String} initialYears 
     */
    constructor(initialYears) {
        super();

        this.years = initialYears;
        this.isEditingYears = false;

        this.setYears = this.setYears.bind(this);
        this.setIsEditingYears = this.setIsEditingYears.bind(this);
    }

    /**
     * @param {String} years
     */
    setYears(years) {
        this.years = years;
        this.notifyListeners(this);
    }

    /**
     * @param {Boolean} isEditingYears
     */
    setIsEditingYears(isEditingYears) {
        this.isEditingYears = isEditingYears;
        this.notifyListeners(this);
    }
}
import { BaseViewModel } from '../../mvvm';

/**
 * ViewModel for the soft skill display.
 * 
 * Used for editing the skill description
 */
export default class SoftSkillDisplayViewModel extends BaseViewModel {
    constructor(initialDescription) {
        super();
        this.isEditingDescription = false;
        this.description = initialDescription;

        this.setDescription = this.setDescription.bind(this);
        this.setIsEditingDescription = this.setIsEditingDescription.bind(this);
    }

    /**
     * @param {String} description
     */
    setDescription(description) {
        this.description = description;
        this.notifyListeners(this);
    }

    /**
     * @param {Boolean} isEditingDescription
     */
    setIsEditingDescription(isEditingDescription) {
        this.isEditingDescription = isEditingDescription;
        this.notifyListeners(this);
    }
}

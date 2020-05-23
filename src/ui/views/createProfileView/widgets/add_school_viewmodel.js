import { BaseViewModel } from '../../../../mvvm';
import { School } from '../models'
import { displayImage } from '../../../utils'


/**
 * ViewModel for the AddSchoolView
 */
export default class AddSchoolViewModel extends BaseViewModel {
    constructor() {
        super();
        this.school = new School('', '', '', '', null);

        this.setSchoolName = this.setSchoolName.bind(this);
        this.setLocation = this.setLocation.bind(this);
        this.setFieldsOfStudy = this.setFieldsOfStudy.bind(this);
        this.setAchievements = this.setAchievements.bind(this);
        this.setSchoolLogo = this.setSchoolLogo.bind(this);
        this.shouldAddSchool = this.shouldAddSchool.bind(this);
    }

    /**
     * @param {String} name
     */
    setSchoolName(name) {
        this.school.schoolName = name;
        this.notifyListeners(this);
    }

    /**
     * @param {String} location
     */
    setLocation(location) {
        this.school.schoolLocation = location;
        this.notifyListeners(this);
    }

    /**
     * @param {String} fields
     */
    setFieldsOfStudy(fields) {
        this.school.fieldsOfStudy = fields;
        this.notifyListeners(this);
    }

    /**
     * @param {String} achievements
     */
    setAchievements(achievements) {
        this.school.achievements = achievements;
        this.notifyListeners(this);
    }

    /**
     * @param {HTMLInputElement} fileInputElement
     */
    setSchoolLogo(fileInputElement, targetId) {
        if (fileInputElement.files && fileInputElement.files[0]) {
            this.school.schoolLogo = fileInputElement.files[0];
            displayImage(fileInputElement, targetId)
        }
    }

    /**
     * Returns true if the the schoolName, schoolLocation, and fields of Study are given
     */
    shouldAddSchool() {
        return (this.school.schoolName.length > 0) && (this.school.schoolLocation.length > 0) && (this.school.fieldsOfStudy.length > 0)
    }

}
import { BaseViewModel } from '../../../mvvm';
import { School, Company, HardSkill, SoftSkill } from '../../common/models'
import { displayImage } from '../../common/utils'

/**
 * ViewModel for the create profile view.
 */
export class CreateProfileViewModel extends BaseViewModel {

    constructor() {
        super();
        this.dialogToShow = DialogToShow.none;
        this.youtubeLink = '';
        this.githubLink = '';
        this.developer = {
            firstName: '',
            lastName: '',
            shortBiography: '',
            isPublic: true,
            profilePicture: null,

            socialMedia: [],
            education: [],
            experience: [],
            technicalSkills: [],
            hobies: [],
            hardSkills: [],
            softSkills: [],
        }

        this.showDialog = this.showDialog.bind(this);
        this.dismissCurrentDialog = this.dismissCurrentDialog.bind(this)
        this.setNameSurname = this.setNameSurname.bind(this);
        this.setShortBiography = this.setShortBiography.bind(this);
        this.setIsPublic = this.setIsPublic.bind(this);
        this.setProfilePicture = this.setProfilePicture.bind(this);
        this.addEducation = this.addEducation.bind(this);
        this.removeEducation = this.removeEducation.bind(this);
        this.addExperience = this.addExperience.bind(this);
        this.removeExperience = this.removeExperience.bind(this);
        this.addTechnicalSkill = this.addTechnicalSkill.bind(this);
        this.removeTechnicalSkill = this.removeTechnicalSkill.bind(this);
        this.addHobby = this.addHobby.bind(this);
        this.removeHobby = this.removeHobby.bind(this);
        this.addHardSkill = this.addHardSkill.bind(this);
        this.removeHardSkill = this.removeHardSkill.bind(this);
        this.addSoftSkill = this.addSoftSkill.bind(this);
        this.removeSoftSkill = this.removeSoftSkill.bind(this);
        this.rateHardSkill = this.rateHardSkill.bind(this);
        this.rateSoftSkill = this.rateSoftSkill.bind(this);
        this.updateSoftSkillDescription = this.updateSoftSkillDescription.bind(this);
        this.setHardSkillExperience = this.setHardSkillExperience.bind(this);
        this.setYouTubeLink = this.setYouTubeLink.bind(this);
        this.setGithubLink = this.setGithubLink.bind(this);

        this.addTechnicalSkillsFromArray = this.addTechnicalSkillsFromArray.bind(this);
        this.addHobiesFromArray = this.addHobiesFromArray.bind(this);
        this.addHardSkillsFromArray = this.addHardSkillsFromArray.bind(this);

        this._rateSkill = this._rateSkill.bind(this);
    }

    /**
     * @param {Number} dialogToShow 
     */
    showDialog(dialogToShow) {
        this.dialogToShow = dialogToShow;
        this.notifyListeners(this);
    }

    dismissCurrentDialog() {
        this.dialogToShow = DialogToShow.none;
        this.notifyListeners(this);
    }

    /**
     * 
     * @param {String} name 
     */
    setNameSurname(name) {
        this.developer.firstName = name;
        this.notifyListeners(this);
    }

    /**
     * @param {String} shortBiography
     */
    setShortBiography(shortBiography) {
        this.developer.shortBiography = shortBiography;
        this.notifyListeners(this);
    }

    /**
     * @param {Boolean} isPublic
     */
    setIsPublic(isPublic) {
        this.developer.isPublic = isPublic;
        this.notifyListeners(this);
    }

    /**
     * @param {HTMLInputElement} fileInputElement
     */
    setProfilePicture(fileInputElement, targetId) {
        if (fileInputElement.files && fileInputElement.files[0]) {
            this.developer.profilePicture = fileInputElement.files[0];
            displayImage(fileInputElement, targetId)
        }
    }

    /**
     * @param {School} school 
     */
    addEducation(school) {
        this.developer.education.push(school);
        this.notifyListeners(this);
    }

    /**
     * @param {School} school
     */
    removeEducation(school) {
        this.developer.education = this.developer.education.splice(this.developer.education.findIndex((sch) => sch === school), 1);
        this.notifyListeners(this);
    }

    /**
     * @param {Company} company
     */
    addExperience(company) {
        this.developer.experience.push(company);
        this.notifyListeners(this);
    }

    /**
     * @param {Company} company 
     */
    removeExperience(company) {
        this.developer.experience = this.developer.experience.splice(this.developer.experience.findIndex((cmp) => cmp === company), 1);
        this.notifyListeners(this);
    }

    /**
     * @param {String} technicalSkill
     */
    addTechnicalSkill(technicalSkill) {
        this.developer.technicalSkills.push(technicalSkill);
        this.notifyListeners(this);
    }

    /**
     * @param {Array<String>} technicalSkills
     */
    addTechnicalSkillsFromArray(technicalSkills) {
        this.developer.technicalSkills = this.developer.technicalSkills.concat(technicalSkills);
        this.notifyListeners(this);
    }

    /**
     * @param {Array<String>} hobies
     */
    addHobiesFromArray(hobies) {
        this.developer.hobies = this.developer.hobies.concat(hobies);
        this.notifyListeners(this);
    }

    /**
     * @param {Array<HardSkill>} hardSkills
     */
    addHardSkillsFromArray(hardSkills) {
        this.developer.hardSkills = this.developer.hardSkills.concat(hardSkills);
        this.notifyListeners(this);
    }

    /**
     * @param {String} technicalSkill 
     */
    removeTechnicalSkill(technicalSkill) {
        this.developer.technicalSkills = this.developer.technicalSkills.splice(this.developer.technicalSkills.findIndex((skl) => skl === technicalSkill), 1);
        this.notifyListeners(this);
    }

    /**
     * @param {String} hobby
     */
    addHobby(hobby) {
        this.developer.hobies.push(hobby);
        this.notifyListeners(this);
    }

    /**
     * 
     * @param {String} hobby 
     */
    removeHobby(hobby) {
        this.developer.hobies = this.developer.hobies.splice(this.developer.hobies.findIndex((hby) => hby === hobby), 1);
        this.notifyListeners(this);
    }

    /**
     * @param {HardSkill} hardSkill
     */
    addHardSkill(hardSkill) {
        this.developer.hardSkills.push(hardSkill);
        this.notifyListeners(this);
    }

    /**
     * @param {HardSkill} hardSkill 
     */
    removeHardSkill(hardSkill) {
        this.developer.hardSkills = this.developer.hardSkills.splice(this.developer.hardSkills.findIndex((skl) => skl === hardSkill), 1);
        this.notifyListeners(this);
    }

    /**
     * @param {SoftSkill} softSkill
     */
    addSoftSkill(softSkill) {
        this.developer.softSkills.push(softSkill);
        this.notifyListeners(this);
    }

    /**
     * @param {SoftSkill} softSkill 
     */
    removeSoftSkill(softSkill) {
        this.developer.softSkills = this.developer.softSkills.splice(this.developer.softSkills.findIndex((skl) => skl === softSkill), 1);
        this.notifyListeners(this);
    }

    /**
     * @param {HardSkill} hardSkill
     * @param {Number} rating
     */
    rateHardSkill(hardSkill, rating) {
        this._rateSkill(hardSkill, rating, false);
    }

    /**
     * @param {SoftSkill} softSkill
     * @param {Number} rating
     */
    rateSoftSkill(softSkill, rating) {
        this._rateSkill(softSkill, rating, true);
    }

    /**
     * 
     * @param {SoftSkill} softSkill 
     * @param {String} newDescription 
     */
    updateSoftSkillDescription(softSkill, newDescription) {
        softSkill.description = newDescription;
        var index = this.developer.softSkills.findIndex((skl) => skl.id == softSkill.id);
        this.developer.softSkills[index] = softSkill;

        this.notifyListeners(this);
    }

    /**
     * @param {HardSkill} hardSkill
     * @param {Number} years
     */
    setHardSkillExperience(hardSkill, years) {
        var updatedSkill = hardSkill;
        updatedSkill.years = years;

        var index = this.developer.hardSkills.findIndex((skl) => skl === hardSkill);
        this.developer.hardSkills[index] = updatedSkill;
        this.notifyListeners(this);
    }

    /**
     * @param {String} link
     */
    setYouTubeLink(link) {
        this.youtubeLink = link;
        this.notifyListeners(this);
    }

    /**
     * @param {String} link
     */
    setGithubLink(link) {
        this.githubLink = link;
        this.notifyListeners(this);
    }

    /**
     * Updates the rating of the given skill
     * 
     * @param {any} skill
     * @param {Number} rating
     * @param {Boolean} isSoftSkill
     */
    _rateSkill(skill, rating, isSoftSkill) {
        var updatedSkill = skill;
        updatedSkill.rating = rating;

        if (isSoftSkill) {
            var index = this.developer.softSkills.findIndex((skl) => skl === skill);
            this.developer.softSkills[index] = updatedSkill;
        } else {
            var index = this.developer.hardSkills.findIndex((skl) => skl === skill);
            this.developer.hardSkills[index] = updatedSkill;
        }

        this.notifyListeners(this);
    }
}

export const DialogToShow = {
    none: -1,
    addSchool: 0,
    addCompany: 1,
    addTechnicalSkill: 2,
    addHoby: 3,
    addHardSkill: 4,
    addSoftSkill: 5,
}
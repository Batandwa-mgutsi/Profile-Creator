import { BaseViewModel } from '../../../../mvvm';
import { Company } from '../../../common/models'
import { displayImage } from '../../../common/utils'

/**
 * ViewModel forthe Add Company View
 */
export default class AddCompanyViewModel extends BaseViewModel {
    constructor() {
        super();
        this.company = new Company('', '', '', '', null);

        this.setCompanyName = this.setCompanyName.bind(this);
        this.setTitle = this.setTitle.bind(this);
        this.setDuration = this.setDuration.bind(this);
        this.setJobDescription = this.setJobDescription.bind(this);
        this.setCompanyLogo = this.setCompanyLogo.bind(this);
        this.shouldAddCompany = this.shouldAddCompany.bind(this);
    }

    /**
     * @param {String} name
     */
    setCompanyName(name) {
        this.company.companyName = name;
        this.notifyListeners(this);
    }

    /**
     * @param {String} title
     */
    setTitle(title) {
        this.company.title = title;
        this.notifyListeners(this);
    }

    /**
     * @param {String} duration
     */
    setDuration(duration) {
        this.company.duration = duration;
        this.notifyListeners(this);
    }

    /**
     * @param {String} jobDescription
     */
    setJobDescription(jobDescription) {
        this.jobDescription = jobDescription;
        this.notifyListeners(this);
    }

    /**
     * @param {HTMLInputElement} fileInputElement
     */
    setCompanyLogo(fileInputElement, targetId) {
        if (fileInputElement.files && fileInputElement.files[0]) {
            this.company.companyLogo = fileInputElement.files[0];
            displayImage(fileInputElement, targetId)
        }
    }

    /**
     * Returns true if the the companyName, job title, and duration are given
     */
    shouldAddCompany() {
        return (this.company.companyName.length > 0) && (this.company.title.length > 0) && (this.company.duration.length > 0)
    }
}
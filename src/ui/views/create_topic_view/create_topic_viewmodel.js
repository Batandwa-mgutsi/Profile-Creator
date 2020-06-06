import AuthenticatedViewmodel from '../authenticated_viewmodel';
import { Topic, DeliverableMaterial, VideoMaterial } from '../../common/models';
import { removeItemFromList } from '../../common/utils';

/**
 * ViewModel for the CreateTopicView
 */
export default class CreateTopicViewModel extends AuthenticatedViewmodel {
    constructor() {
        super();

        this.topic = new Topic('', '', fakeMaterial);

        this.setTitle = this.setTitle.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.addMaterial = this.addMaterial.bind(this);
        this.removeMaterial = this.removeMaterial.bind(this);
    }

    /**
     * @param {String} title 
     */
    setTitle(title) {
        this.topic.title = title;
        this.notifyListeners(this);
    }

    /**
     * @param {String} description
     */
    setDescription(description) {
        this.topic.description = description;
        this.notifyListeners(this);
    }

    /**
     * Material should be VideoMaterial or DeliverableMaterial.
     * @param {any} material
     */
    addMaterial(material) {
        this.topic.material.push(material);
        this.notifyListeners(this);
    }

    /**
     * Material should be VideoMaterial or DeliverableMaterial.
     * @param {any} material
     */
    removeMaterial(material) {
        removeItemFromList(this.topic.material, material);
        this.notifyListeners(this);
    }
}

const fakeMaterial = [
    new VideoMaterial('Welcome & Intros', 'You know it', null, null),
    new DeliverableMaterial('Something to be done', 'Make sure to finish it', 123, 'Not Today'),
]
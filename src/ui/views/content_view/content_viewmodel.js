import AuthenticatedViewModel from '../authenticated_viewmodel';

import { Content, Topic, VideoMaterial, DeliverableMaterial } from '../../common/models';

/**
 * ViewModel for the Content View.
 */
export default class ContentViewModel extends AuthenticatedViewModel {
    constructor() {
        super();

        this._busy = true;
        this.content = null;

        this.allTopics = this.allTopics.bind(this);
        this.fetchContent = this.fetchContent.bind(this);
        this.deleteTopic = this.deleteTopic.bind(this);
    }

    /**
     * @returns {Array<Topic>}
     */
    allTopics() {
        return this.content.topics;
    }

    async fetchContent() {
        this.setBusy(true);
        this.notifyListeners(this);

        this.content = fakeContent;

        this.setBusy(false);
        this.notifyListeners(this);
    }

    /**
     * TODO- Implement
     */
    async deleteTopic() {

    }

    onViewMounted() {
        this.fetchContent();
    }
}

const fakeContent = new Content(
    [
        new Topic(
            'Welcome',
            'Just a welcome topic',
            [
                new VideoMaterial(
                    'Welcome & getting an idea of the overall program',
                    'Just welcome material',
                    'no url for now',
                    'no url for now',
                ),

                new VideoMaterial(
                    'Intro to computing',
                    'Just welcome material',
                    'no url for now',
                    'no url for now',
                ),
            ]
        ),
        new Topic(
            'Intro to the internet and the World Wide Web',
            'Just a welcome topic',
            [
                new VideoMaterial(
                    'Learning Guide - Networks',
                    'Just welcome material',
                    'no url for now',
                    'no url for now',
                ),

                new VideoMaterial(
                    'What is the internet',
                    'Just welcome material',
                    'no url for now',
                    'no url for now',
                ),

                new VideoMaterial(
                    'The world wide web',
                    'Just welcome material',
                    'no url for now',
                    'no url for now',
                ),

                new VideoMaterial(
                    'Modems, Web and browsers and ISPs',
                    'Just welcome material',
                    'no url for now',
                    'no url for now',
                ),

                new VideoMaterial(
                    'Bandwidth',
                    'Just welcome material',
                    'no url for now',
                    'no url for now',
                ),
            ]
        )
    ]
);
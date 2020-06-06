import React from 'react';
import { withCookies } from 'react-cookie';

import { ViewModelConsumer } from '../../../mvvm';
import CreateTopicViewModel from './create_topic_viewmodel';

import '../../shared_widgets/boxed_text_field';

class CreateTopicView extends ViewModelConsumer {
    constructor(props) {
        super(props, new CreateTopicViewModel());
    }

    /**
     * @param {CreateTopicViewModel} model 
     */
    onRender(props, model) {
        return <div className='row'>
            <div col='col s12'>
                <div col='col s8'>
                    <div className='col s12'>
                        Create a topic here
                    </div>
                </div>
            </div>
        </div>
    }
}

export default withCookies(CreateTopicView);
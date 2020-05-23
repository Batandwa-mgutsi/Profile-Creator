import React from 'react';
import AddSchoolViewModel from './add_school_viewmodel';
import { ViewModelConsumer } from '../../../../mvvm';
import '../../../../materialize/css/materialize.css';

import NoSchoolLogo from '../../../../image_assets/no_school_logo.png';

export default class AddSchool extends ViewModelConsumer {
    constructor(props) {
        super(props, new AddSchoolViewModel());
    }

    /**
     * @param {AddSchoolViewModel} model
     */
    onRender(props, model) {
        return <div className='col s12 section' style={{ paddingBottom: '50px' }}>
            <h4 style={{
                color: '#585858FA',
                font: 'Medium 50px/24px Roboto',
                fontWeight: 'bold'
            }} >Add Education</h4>

            <input type='file' id='schoolLogoFileElem' accept='image/*' style={{ display: 'none' }} onChange={(e) => model.setSchoolLogo(e.target, 'schoolLogoSelectDisplay')} />
            <div style={{ textAlign: 'center' }} >
                <img id='schoolLogoSelectDisplay' src={model.school.schoolLogo ?? NoSchoolLogo} alt='School Logo' style={{ height: '190', width: '190px', }} onClick={(e) => document.getElementById('schoolLogoFileElem').click()} />
            </div>
            <div className='col' >
                <input type='text' placeholder='School Name' value={model.school.schoolName} onChange={(e) => model.setSchoolName(e.target.value)} />
                <input type='text' placeholder='Location' value={model.school.schoolLocation} onChange={(e) => model.setLocation(e.target.value)} />
                <input type='text' placeholder='Fields Of Study' value={model.school.fieldsOfStudy} onChange={(e) => model.setFieldsOfStudy(e.target.value)} />
                <input type='text' placeholder='Achievements' value={model.school.achievements} onChange={(e) => model.setAchievements(e.target.value)} />

                <div style={{ float: 'right', paddingTop: '20px' }}>
                    {model.shouldAddSchool() ?
                        <div className='btn' onClick={(e) => props?.onAddSchool(model.school)}>Add</div>
                        : <div className='btn' disabled>Add</div>
                    }
                </div>
            </div>
        </div>
    }
}
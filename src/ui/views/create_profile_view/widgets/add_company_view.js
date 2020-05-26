import React from 'react';
import AddCompanyViewModel from './add_company_viewmodel';
import { ViewModelConsumer } from '../../../../mvvm';
import '../../../../materialize/css/materialize.css';

export default class AddCompanyView extends ViewModelConsumer {
    constructor(props) {
        super(props, new AddCompanyViewModel())
    }

    /**
     * @param {AddCompanyViewModel} model
     */
    onRender(props, model) {
        return <div className='col s12 section' style={{ paddingBottom: '50px' }}>
            <h4 style={{
                color: '#585858FA',
                font: 'Medium 50px/24px Roboto',
                fontWeight: 'bold'
            }} >Add Company</h4>

            <input type='file' id='companyLogoFileElem' accept='image/*' style={{ display: 'none' }} onChange={(e) => model.setCompanyLogo(e.target, 'companyLogoSelectDisplay')} />
            <div style={{ margin: 'auto' }} >
                <div style={{ height: '190px', width: '190px', border: '1px solid #707070', backgroundColor: '#F1F1F1' }} onClick={(e) => document.getElementById('companyLogoFileElem').click()}>
                    <img style={{ height: '190px', width: '190px' }} id='companyLogoSelectDisplay' alt='Select Logo' />
                </div>
            </div>
            <div className='col' >
                <input type='text' placeholder='Company Name' value={model.company.companyName} onChange={(e) => model.setCompanyName(e.target.value)} />
                <input type='text' placeholder='Title' value={model.company.title} onChange={(e) => model.setTitle(e.target.value)} />
                <input type='text' placeholder='Duration' value={model.company.duration} onChange={(e) => model.setDuration(e.target.value)} />
                <textarea style={{ resize: 'vertical', height: '110px' }} placeholder='What did they do?' onChange={(e) => model.setJobDescription(e.target.value)}>
                    {model.company.jobDescription}
                </textarea>

                <div style={{ float: 'right', paddingTop: '20px' }}>
                    {model.shouldAddCompany() ?
                        <div className='btn' onClick={(e) => props?.onAddCompany(model.company)}>Add</div>
                        : <div className='btn' disabled>Add</div>
                    }
                </div>
            </div>

        </div>
    }
}
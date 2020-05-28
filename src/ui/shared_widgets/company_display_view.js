import React from 'react';
import { Company } from '../common/models';
import NoSchoolLogo from '../../image_assets/no_school_logo.png';

import { getImageUrl } from '../common/utils';

/**
 * Displays the information of the given company
 * @param {Company} company - in props
 * @param {Boolean} companyLogoIsFile - in props should be true
 *      if {company.companyLogo} is a file.
 */
export default class CompanyDisplayView extends React.Component {
    constructor(props) {
        super(props);

        this.getLogoElemId = this.getLogoElemId.bind(this);
    }

    render() {
        return <div className='row' >
            <div className='col s4'>
                <img id={this.getLogoElemId()} className='responsive-img' src={this.props.company?.companyLogo == null ? NoSchoolLogo : (!this.props.companyLogoIsFile && getImageUrl(this.props.company?.companyLogo))} />
            </div>
            <div className='col s8'>
                <div className='col s12' style={{ fontWeight: 'bold', fontSize: '1.4vw', color: '#051F74FA' }}>
                    {this.props.company?.companyName}
                </div>
                <div className='col s12'>
                    <div className='col' style={{ fontWeight: 'medium', fontSize: '1vw', color: '#051F74FA' }}>
                        {this.props.company?.title}
                    </div>
                </div>

                <div className='col s12'>
                    <div className='col' style={{ fontWeight: 'medium', fontSize: '1vw', color: '#7B7B7BFA' }}>
                        {this.props.company?.duration}
                    </div>
                </div>
            </div>


            <div className='col s12' style={{ fontWeight: 'medium', fontSize: '1vw', color: '#7B7B7BFA', marginTop: '10px' }}>
                {this.props.company?.jobDescription}
            </div>
        </div>
    }

    componentDidMount() {
        if (this.props.companyLogoIsFile) {
            var reader = new FileReader();

            reader.onload = function (e) {
                document.getElementById(this.getLogoElemId()).src = e.target.result;
            }

            reader.onload = reader.onload.bind(this);
            reader.readAsDataURL(this.props.company?.schoolLogo);
        }
    }

    getLogoElemId() {
        return this.props.company.companyName;
    }
}
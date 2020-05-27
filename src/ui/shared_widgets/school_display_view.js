import React from 'react';
import { School } from '../common/models';
import { displayImage } from '../common/utils'

import GraduationIcon from '../../image_assets/graduation_hat.png';
import AchievementsIcom from '../../image_assets/achievements.png';
import NoSchoolLogo from '../../image_assets/no_school_logo.png';

/**
 * Displays the information of the given school
 * @param {School} school - in props
 * @param {Boolean} schoolLogoIsFile - in props should be true
 *      if {school.schoolLogo} is a file.
 */
export default class SchoolDisplayView extends React.Component {
    constructor(props) {
        super(props);

        this.getLogoElemId = this.getLogoElemId.bind(this);
    }

    render() {
        return <div className='row' >
            <div className='col s4'>
                <img id={this.getLogoElemId()} className='responsive-img' src={this.props.school?.schoolLogo == null ? NoSchoolLogo : (!this.props.schoolLogoIsFile && this.props.school?.schoolLogo)} />
            </div>
            <div className='col s8'>
                <div className='col s12' style={{ fontWeight: 'medium', fontSize: '1.4vw', color: '#051F74FA' }}>
                    {this.props.school?.schoolName.concat(', ', this.props.school?.schoolLocation)}
                </div>
                <div className='col s12'>
                    <div className='col s1' style={{ marginRight: '30px' }}>
                        <img src={GraduationIcon} alt='' height='40vw' width='40vw' />
                    </div>
                    <div className='col' style={{ fontWeight: 'medium', fontSize: '1vw', color: '#051F74FA' }}>
                        {this.props.school?.fieldsOfStudy}
                    </div>
                </div>

                <div className='col s12'>
                    <div className='col s1' style={{ marginRight: '30px' }}>
                        <img src={AchievementsIcom} alt='' height='40vw' width='40vw' />
                    </div>
                    <div className='col' style={{ fontWeight: 'medium', fontSize: '1vw', color: '#051F74FA' }}>
                        {this.props.school?.achievements}
                    </div>
                </div>
            </div>
        </div>
    }

    componentDidMount() {
        if (this.props.schoolLogoIsFile) {
            var reader = new FileReader();

            reader.onload = function (e) {
                document.getElementById(this.getLogoElemId()).src = e.target.result;
            }

            reader.onload = reader.onload.bind(this);
            reader.readAsDataURL(this.props.school?.schoolLogo);
        }
    }

    getLogoElemId() {
        return this.props.school.schoolName.concat(this.props.school.schoolLocation)
    }
}
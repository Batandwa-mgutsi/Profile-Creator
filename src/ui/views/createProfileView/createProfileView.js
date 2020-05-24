import { CreateProfileViewModel, DialogToShow } from './create_profile_viewmodel';
import { School, Company, SelectableSkill, HardSkill, SoftSkill, SocialMedia } from '../../common/models';
import { getSelectableTechnicalSkills, getSelectableHardSkills, getSelectableHobies, getSelectableSoftSkills } from '../../common/skills';
import React from 'react';
import { ViewModelConsumer } from '../../../mvvm';
import '../../../materialize/css/materialize.css';

import NoProfilePictureImg from '../../../image_assets/no_profile_picture.png'
import YouTubeIcon from '../../../image_assets/youtube.png';
import GithubIcon from '../../../image_assets/github.png';
import Runninng from '../../../image_assets/skill_icons/running.png'

import { Dialog, DialogOverlay } from "@reach/dialog";
import "@reach/dialog/styles.css";

import AddSchoolView from './widgets/add_school_view';
import AddCompany from './widgets/add_company_view';
import SelectSkillsView from './widgets/select_skills_view'
import SelectSoftSkillView from './widgets/select_soft_skill_view'

import SchoolDisplayView from '../../shared_widgets/school_display_view'
import CompanyDisplayView from '../../shared_widgets/company_display_view'
import IconifiedSkillDisplay from '../../shared_widgets/iconified_skill_display'
import SoftSkillDisplay from '../../shared_widgets/soft_skill_display'
import HardSkillDisplay from '../../shared_widgets/hard_skill_display'

export default class CreateProfileView extends ViewModelConsumer {
    constructor(props) {
        super(props, new CreateProfileViewModel());
    }

    /**
     * @param {CreateProfileViewModel} model
     */
    onRender(props, model) {
        return <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#FBFBFB' }}>
            <nav style={{ top: 0, display: 'fix' }}>
                <div className='nav-wrapper indigo darken-4'>
                    <a href='#!' class='brand-logo left' style={{ marginLeft: 20 }}>Profile Creator</a>
                    <ul className='right hide-on-med-and-down'>
                        <li><a href='/profiles'>Profiles</a></li>
                        {/* TODO - Logout the user */}
                        <li><a href="/">Log Out</a></li>
                    </ul>
                </div>
            </nav>
            <div style={{ height: 15 }}></div>
            <div style={{ overflow: 'auto' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col s12 section' style={{ border: '1px solid #707070', paddingBottom: '20px' }}>
                            <h4 style={this.getSectionHeaderStyle()} >General</h4>

                            <input type='file' id='fileElem' accept='image/*' style={{ display: 'none' }} onChange={(e) => model.setProfilePicture(e.target, 'profilePicDisplay')} />
                            <img id='profilePicDisplay' className='col s3' src={model.developer.profilePicture ?? NoProfilePictureImg} alt='Profile Picture' style={{ height: '180px', width: '190px', }} onClick={(e) => document.getElementById('fileElem').click()} />
                            <div className='col s9'>
                                <input type='text' placeholder='Developer Name and Surname' value={model.developer.firstName} onChange={(e) => model.setNameSurname(e.target.value)} />
                                <br /><br />
                                <input type='text' placeholder='Short Bio' value={model.developer.shortBiography} onChange={(e) => model.setShortBiography(e.target.value)} />
                                <br /><br />
                                <div className='switch' style={{ float: 'right' }}>
                                    <label>
                                        is Public
                                    {model.developer.isPublic ?
                                            <input type='checkbox' onChange={(e) => model.setIsPublic(false)} checked />
                                            : <input type='checkbox' onChange={(e) => model.setIsPublic(true)} />
                                        }
                                        <span className='lever offset-s6'></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col s12 section' style={{ border: '1px solid #707070', paddingBottom: '20px' }}>
                            <h4 style={this.getSectionHeaderStyle()} >Education</h4>
                            <div className='col s12'>
                                {
                                    model.developer.education.map((school) => {
                                        return <div>
                                            <div className='col s11'>
                                                <SchoolDisplayView key={school.schoolName.concat(school.schoolLocation)} school={school} schoolLogoIsFile={school.schoolLogo != null} />
                                            </div>
                                            <div className='col s1'>
                                                h
                                    </div>
                                        </div>
                                    })
                                }
                            </div>

                            <div className='divider col s12' style={{ marginBottom: '10px' }} />
                            <div className='col s12' style={{ textAlign: 'center', position: 'relative', zIndex: '0' }}>
                                <div class='waves-effect waves-teal btn-flat' onClick={(e) => model.showDialog(DialogToShow.addSchool)}>
                                    <i className='material-icons' style={{ fontSize: '60px', color: 'teal' }}>add</i>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col s12 section' style={{ border: '1px solid #707070', paddingBottom: '20px' }}>
                            <h4 style={this.getSectionHeaderStyle()} >Experience</h4>
                            <div className='col s12'>
                                {
                                    model.developer.experience.map((company) => {
                                        return <div>
                                            <div className='col s11'>
                                                <CompanyDisplayView key={company.companyName} company={company} companyNameIsFile={company.companyLogo != null} />
                                            </div>
                                            <div className='col s1'>
                                                h
                                    </div>
                                        </div>
                                    })
                                }
                            </div>

                            <div className='divider col s12' style={{ marginBottom: '10px' }} />
                            <div className='col s12' style={{ textAlign: 'center', position: 'relative', zIndex: '0' }} >
                                <div class="waves-effect waves-teal btn-flat" onClick={(e) => model.showDialog(DialogToShow.addCompany)}>
                                    <i className='material-icons' style={{ fontSize: '60px', color: 'teal' }}>add</i>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col s12 section' style={{ border: '1px solid #707070', paddingBottom: '20px' }}>
                            <h4 style={this.getSectionHeaderStyle()} >Technical Skills</h4>
                            {
                                model.developer.technicalSkills.map((skillName) => {
                                    var skill = getSelectableTechnicalSkills().find((item => item.name == skillName));
                                    return <div className='col'>
                                        {IconifiedSkillDisplay(skill.iconSrc)}
                                    </div>
                                })
                            }
                            <div className='col s2' style={{ position: 'relative', zIndex: '0' }}>
                                <div class="waves-effect waves-teal btn-flat" onClick={(e) => model.showDialog(DialogToShow.addTechnicalSkill)}>
                                    <i className='material-icons' style={{ fontSize: '60px', color: 'teal' }}>add</i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col s12 section' style={{ border: '1px solid #707070', paddingBottom: '20px' }}>
                            <h4 style={this.getSectionHeaderStyle()} >Hobies/Extra - Curricular Activities</h4>

                            {
                                model.developer.hobies.map((hobbyName) => {
                                    var hobby = getSelectableHobies().find((item => item.name == hobbyName));
                                    return <div className='col'>
                                        {IconifiedSkillDisplay(hobby.iconSrc, hobby.name)}
                                    </div>
                                })
                            }
                            <div className='col s2' style={{ position: 'relative', zIndex: '0' }}>
                                <div class="waves-effect waves-teal btn-flat" onClick={(e) => model.showDialog(DialogToShow.addHoby)}>
                                    <i className='material-icons' style={{ fontSize: '60px', color: 'teal' }}>add</i>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col s12 section' style={{ border: '1px solid #707070', paddingBottom: '20px' }}>
                            <h4 style={this.getSectionHeaderStyle()} >Hard Skills</h4>
                            <div className='col s12' style={{ marginBottom: '10px' }}>
                                {
                                    model.developer.hardSkills.map((hardSkill) => {
                                        return <div className='col s2'>
                                            <HardSkillDisplay
                                                isEditable={true}
                                                key={hardSkill.id}
                                                hardSkill={hardSkill}
                                                onRatingChanged={(newRating) => model.rateHardSkill(hardSkill, newRating)}
                                            />
                                        </div>
                                    })
                                }
                            </div>
                            <div className='divider col s12' style={{ marginBottom: '10px' }} />
                            <div className='col s12' style={{ textAlign: 'center', position: 'relative', zIndex: '0' }} >
                                <div class="waves-effect waves-teal btn-flat" onClick={(e) => model.showDialog(DialogToShow.addHardSkill)}>
                                    <i className='material-icons' style={{ fontSize: '60px', color: 'teal' }}>add</i>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col s12 section' style={{ border: '1px solid #707070', color: '#585858FA', paddingBottom: '20px' }}>
                            <h4 style={this.getSectionHeaderStyle()} >Soft Skills</h4>

                            <div className='col s12'>
                                {
                                    model.developer.softSkills.map((softSkill) => {
                                        return <div>
                                            <div className='col s12' style={{ fontSize: '24px', marginBottom: '10px' }}>{softSkill.id}</div>
                                            <div className='col s11'>
                                                <SoftSkillDisplay
                                                    isEditable={true}
                                                    key={softSkill.id}
                                                    softSkill={softSkill}
                                                    onDescriptionChanged={(newDescription) => model.updateSoftSkillDescription(softSkill, newDescription)}
                                                    onRatingChanged={(newRating) => model.rateSoftSkill(softSkill, newRating)} />
                                            </div>
                                            <div className='col s1'>
                                                h
                                            </div>
                                        </div>
                                    })
                                }
                            </div>

                            <div className='divider col s12' style={{ marginBottom: '10px' }} />
                            <div className='col s12' style={{ textAlign: 'center', position: 'relative', zIndex: '0' }} >
                                <div class="waves-effect waves-teal btn-flat" onClick={(e) => model.showDialog(DialogToShow.addSoftSkill)}>
                                    <i className='material-icons' style={{ fontSize: '60px', color: 'teal' }}>add</i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col s12 section' style={{ border: '1px solid #707070', paddingBottom: '20px' }}>
                            <h4 style={this.getSectionHeaderStyle()} >Social Media</h4>

                            <div className='col s12' style={{ position: 'relative' }}>
                                <img className='col' src={YouTubeIcon} alt='YouTube' style={{ height: '81px', width: '116px', }} />
                                <input className='col s10' style={{ position: 'absolute', bottom: '0px' }} type='text' placeholder='YouTube channel link' value={model.youtubeLink} onChange={(e) => model.setYouTubeLink(e.target.value)} />
                            </div>
                            <div className='col s12' style={{ height: 20 }} />
                            <div className='col s12' style={{ position: 'relative' }} >
                                <img className='col s2' src={GithubIcon} alt='YouTube' style={{ height: '81px', width: '116px', }} />
                                <input className='col s10' style={{ position: 'absolute', bottom: '0px' }} type='text' placeholder='YouTube channel link' value={model.githubLink} onChange={(e) => model.setGithubLink(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* The different dialogs */}
            <div>
                <DialogOverlay isOpen={model.dialogToShow !== DialogToShow.none}>
                    <Dialog isOpen={model.dialogToShow === DialogToShow.addSchool} onDismiss={(e) => model.dismissCurrentDialog()}>
                        <AddSchoolView onAddSchool={(school) => { model.addEducation(school); model.dismissCurrentDialog(); }} />
                    </Dialog>

                    <Dialog isOpen={model.dialogToShow === DialogToShow.addCompany} onDismiss={(e) => model.dismissCurrentDialog()}>
                        <AddCompany onAddCompany={(company) => { model.addExperience(company); model.dismissCurrentDialog(); }} />
                    </Dialog>

                    <Dialog isOpen={model.dialogToShow === DialogToShow.addTechnicalSkill} onDismiss={(e) => model.dismissCurrentDialog()}>
                        <SelectSkillsView
                            onAddSkills={(skills) => {
                                var transformedSkills = skills.map((skl) => skl.name);
                                model.addTechnicalSkillsFromArray(transformedSkills);
                                model.dismissCurrentDialog();
                            }}
                            skills={getSelectableTechnicalSkills()}
                            placeholder='Search techical skills' />
                    </Dialog>


                    <Dialog isOpen={model.dialogToShow === DialogToShow.addHoby} onDismiss={(e) => model.dismissCurrentDialog()}>
                        <SelectSkillsView
                            onAddSkills={(skills) => {
                                var transformedSkills = skills.map((skl) => skl.name);
                                model.addHobiesFromArray(transformedSkills);
                                model.dismissCurrentDialog();
                            }}
                            skills={getSelectableHobies()}
                            placeholder='Search hobies' />
                    </Dialog>

                    <Dialog isOpen={model.dialogToShow === DialogToShow.addHardSkill} onDismiss={(e) => model.dismissCurrentDialog()}>
                        <SelectSkillsView
                            onAddSkills={(skills) => {
                                var transformedSkills = skills.map((skl) => new HardSkill(skl.name, 1, 1));
                                model.addHardSkillsFromArray(transformedSkills);
                                model.dismissCurrentDialog();
                            }}
                            skills={getSelectableHardSkills()}
                            placeholder='Search hard skills' />
                    </Dialog>

                    <Dialog isOpen={model.dialogToShow === DialogToShow.addSoftSkill} onDismiss={(e) => model.dismissCurrentDialog()}>
                        <SelectSoftSkillView
                            onSkillSelected={(skill) => {
                                skill.description = 'click here to edit ';
                                model.addSoftSkill(skill);
                                model.dismissCurrentDialog();
                            }}
                            softSkills={getSelectableSoftSkills()}
                        />
                    </Dialog>
                </DialogOverlay>
            </div>
        </div>
    }

    getSectionHeaderStyle() {
        return {
            color: '#585858FA',
            font: 'Medium 50px/24px Roboto',
            fontWeight: 'bold'

        }
    }

    /**
     * @param {School} school
     */
    getSchoolView(school) {
        return
    }

    /**
     * @param {Company} company
     */
    getCompanyView(company) {
        return <h1>{company.companyName}</h1>
    }
}
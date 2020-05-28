import React from 'react';
import { ViewModelConsumer } from '../../../mvvm';
import DisplayDeveloperProfileViewModel from './display_developer_profile_viewmodel'

import HalfDeveloperDisplay from '../../shared_widgets/half_developer_display';
import { getDeveloperFullName } from '../../common/utils';

import YouTubeIcon from '../../../image_assets/youtube.png';
import GithubIcon from '../../../image_assets/github.png';

import SchoolDisplayView from '../../shared_widgets/school_display_view';
import CompanyDisplayView from '../../shared_widgets/company_display_view';

import IconifiedSkillDisplay from '../../shared_widgets/iconified_skill_display';
import HardSkillDisplay from '../../shared_widgets/hard_skill_display';
import SoftSkillDisplay from '../../shared_widgets/soft_skill_display';

import StarRatings from 'react-star-ratings';

import {
    getTechnicalSkillIconById, getHobbyIconById,
    getLanguages, getFrontends, getBackends, getDatabases, getMobileTools
} from '../../common/skills'

export default class DisplayDeveloperProfileView extends ViewModelConsumer {
    constructor(props) {
        super(props, new DisplayDeveloperProfileViewModel());
    }

    /**
     * @param {DisplayDeveloperProfileViewModel} model
     */
    onRender(props, model) {
        return <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#051F74' }}>
            <nav style={{ top: 0, display: 'fix' }}>
                <div className='nav-wrapper indigo darken-4'>
                    <a href='#!' class='brand-logo left' style={{ marginLeft: 20 }}>
                        {model.developer === null || model.developer === undefined ?
                            'Profile Creator'
                            : getDeveloperFullName(model.developer)
                        }
                    </a>
                    <ul className='right hide-on-med-and-down'>
                        {model.userCanEditProfile ?
                            <li>
                                <a href='#!'
                                    onClick={(e) => props.history.push(`/profile/${getDeveloperFullName(model.developer)}/${model.developer._id}/`)}>Edit
                                </a>
                            </li>
                            : <li><a href="/">Log In</a></li>
                        }
                    </ul>
                </div>
            </nav>
            {model.isBusy() ?
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
                : model.developer === null || model.developer === undefined ?
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: 'white' }}>
                        <div>Aw snap! The profile you requested is either not public or does not exist.</div>
                    </div>
                    : <div style={{ overflow: 'auto' }}>
                        <div className='container' style={{ paddingTop: '20px' }}>
                            <div className='row white' style={{ padding: '20px' }}>
                                <HalfDeveloperDisplay developer={model.developer} >
                                    <div className='col s12' style={{ color: '#051F74', fontWeight: 'bold' }}>
                                        Meet Me
                                    </div>
                                    <div className='col s12' style={{ paddingTop: '7px' }}>
                                        <div className='col s6'>
                                            <div className='col s2'>
                                                <img src={YouTubeIcon} style={{ maxHeight: '30px', maxWidth: '30px' }} alt='youtube' />
                                            </div>
                                            <a href={this.getSocialMediaLink('youtube', model.developer)} className='col s10'>
                                                {this.getSocialMediaLink('youtube', model.developer)}
                                            </a>
                                        </div>
                                        <div className='col s6'>
                                            <div className='col s2'>
                                                <img src={GithubIcon} style={{ maxHeight: '30px', maxWidth: '30px' }} alt='github' />
                                            </div>
                                            <a href={this.getSocialMediaLink('github', model.developer)} className='col s10'>

                                                {this.getSocialMediaLink('github', model.developer)}
                                            </a>
                                        </div>
                                    </div>
                                </HalfDeveloperDisplay>
                            </div>

                            <div className='row'>
                                <div className='col s7' style={{ paddingRight: '10px' }}>
                                    <div className='col s12'>
                                        <Section title='EDUCATION'>
                                            <div className='col s12'>
                                                {
                                                    model.developer.education.map((school) => {
                                                        return <div className='col s12' style={{ marginTop: '3px' }}>
                                                            <SchoolDisplayView school={school} schoolLogoIsFile={false} />
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        </Section>
                                    </div>
                                </div>

                                <div className='col s5'>
                                    <Section title='RATING'>
                                        <div className='col s12' style={{ textAlign: 'center', paddingTop: '10px' }}>
                                            <StarRatings
                                                name={'average rating'}
                                                starRatedColor='orange'
                                                numberOfStars={5}
                                                starDimension='3vw'
                                                rating={this.getAverageStarRating(model.developer)}
                                            />
                                        </div>
                                        <div className='col s12' style={{ textAlign: 'center' }}>
                                            {'This is an average star rating based on hard skills & soft skills'}
                                        </div>
                                    </Section>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col s12'>
                                    <Section title='EXPERIENCE' >
                                        <div className='col s12'>
                                            {
                                                model.developer.experience.map((company) => {
                                                    return <div className='col s6' style={{ marginTop: '10px' }}>
                                                        <CompanyDisplayView company={company} companyLogoIsFile={false} />
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </Section>
                                </div>
                            </div>

                            <div className='row'>
                                <Section title='TECHNICAL SKILLS'>
                                    <div className='col s12'>
                                        {
                                            model.developer.technicalSkills.map((skill) => {
                                                return <div className='col s2' style={{ marginTop: '10px' }}>
                                                    {IconifiedSkillDisplay(getTechnicalSkillIconById(skill))}
                                                </div>
                                            })
                                        }
                                    </div>
                                </Section>
                            </div>


                            <div className='row'>
                                <Section title='HOBBIES/EXTRA-CURRICULAR ACTIVITES'>
                                    <div className='col s12'>
                                        {
                                            model.developer.hobbies.map((hobby) => {
                                                return <div className='col s2' style={{ marginTop: '10px' }}>
                                                    {IconifiedSkillDisplay(getHobbyIconById(hobby), hobby)}
                                                </div>
                                            })
                                        }
                                    </div>
                                </Section>
                            </div>

                            <div className='row white' style={{ padding: '10px' }}>
                                <div className='col s12' style={{ color: '#051F74', fontWeight: 'bold', fontSize: '4vw' }}>
                                    HARD SKILLS
                                </div>
                                <div className='col s12'>
                                    <RatingInfo
                                        info={[
                                            'Not Confident',
                                            'Need practice, but understand concepts',
                                            'Have some practice & can build tech with this skill',
                                            'Fairly confident & have solid understanding of concepts',
                                            'Very Confident'
                                        ]}
                                    />
                                </div>
                            </div>

                            <div className='row white'>
                                {getLanguages(model.developer.hardSkills).length !== 0 &&
                                    <div className='col s12'>
                                        <Section title='LANGUAGES'>
                                            <div className='col s12'>
                                                {
                                                    getLanguages(model.developer.hardSkills).map((hardSkill) => {
                                                        return <div className='col s2' style={{ marginTop: '10px' }}>
                                                            <HardSkillDisplay hardSkill={hardSkill} isEditable={false} />
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        </Section>
                                    </div>
                                }
                                {getFrontends(model.developer.hardSkills).length !== 0 &&
                                    <div className='col s12'>
                                        <Section title='FRONTEND'>
                                            <div className='col s12'>
                                                {
                                                    getFrontends(model.developer.hardSkills).map((hardSkill) => {
                                                        return <div className='col s2' style={{ marginTop: '10px' }}>
                                                            <HardSkillDisplay hardSkill={hardSkill} isEditable={false} />
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        </Section>
                                    </div>
                                }
                                {getBackends(model.developer.hardSkills).length !== 0 &&
                                    <div className='col s12'>
                                        <Section title='BACKEND'>
                                            <div className='col s12'>
                                                {
                                                    getBackends(model.developer.hardSkills).map((hardSkill) => {
                                                        return <div className='col s2' style={{ marginTop: '10px' }}>
                                                            <HardSkillDisplay hardSkill={hardSkill} isEditable={false} />
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        </Section>
                                    </div>
                                }
                                {getDatabases(model.developer.hardSkills).length !== 0 &&
                                    <div className='col s12'>
                                        <Section title='DATABASE'>
                                            <div className='col s12'>
                                                {
                                                    getDatabases(model.developer.hardSkills).map((hardSkill) => {
                                                        return <div className='col s2' style={{ marginTop: '10px' }}>
                                                            <HardSkillDisplay hardSkill={hardSkill} isEditable={false} />
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        </Section>
                                    </div>
                                }
                                {getMobileTools(model.developer.hardSkills).length !== 0 &&
                                    <div className='col s12'>
                                        <Section title='MOBILE/TOOLS'>
                                            <div className='col s12'>
                                                {
                                                    getMobileTools(model.developer.hardSkills).map((hardSkill) => {
                                                        return <div className='col s2' style={{ marginTop: '10px' }}>
                                                            <HardSkillDisplay hardSkill={hardSkill} isEditable={false} />
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        </Section>
                                    </div>
                                }
                            </div>

                            <div className='row white' style={{ padding: '10px' }}>
                                <div className='col s12' style={{ color: '#051F74', fontWeight: 'bold', fontSize: '4vw' }}>
                                    SOFT SKILLS
                                </div>
                                <div className='col s12'>
                                    <RatingInfo
                                        info={[
                                            'Not good, but trying',
                                            'Trying, but can be more consistent',
                                            'Decent & manageable to work with',
                                            'Fairly good and consistent',
                                            'Excellent'
                                        ]}
                                    />
                                </div>
                            </div>

                            <div className='row'>
                                {
                                    model.developer.softSkills.map((softSkill) => {
                                        return <div className='col s12'>
                                            <Section title={softSkill.id}>
                                                <div className='col s12' style={{ marginTop: '10px' }}>
                                                    <SoftSkillDisplay softSkill={softSkill} isEditable={false} />
                                                </div>
                                            </Section>
                                        </div>
                                    })
                                }
                            </div>

                            {/* Just for easy scrolling */}
                            <div className='row' style={{ height: '60px' }} />
                        </div>
                    </div>
            }

        </div>
    }

    /**
    * @param {DisplayDeveloperProfileViewModel} model
    */
    onModelReady(model) {
        model.onInitView(this.props.match.params.name, this.props.match.params.id);
    }

    /** 
     * @param {String} socialMediaId
     */
    getSocialMediaLink(socialMediaId, developer) {
        return developer.socialMedia.find((service) => service.name === socialMediaId).link;
    }

    /**
     * Returns the average star rating based onhard skills & soft skills
     */
    getAverageStarRating(developer) {
        var sum = 0;

        for (var hardSkill in developer.hardSkills)
            sum += developer.hardSkills[hardSkill].rating;
        for (var softSkill in developer.softSkills)
            sum += developer.softSkills[softSkill].rating;

        var divider = developer.hardSkills.length + developer.softSkills.length;
        if (divider === 0)
            return 0;
        else
            return sum / divider;

    }


}

/**
 * 
 * @param {React.Component} props.children - the content to display under this section.
 */
function Section(props) {
    return <div className='row white'>
        <div className='col s12' style={{ padding: '4px' }}>
            <div className='col s12 indigo darken-4 white-text'
                style={{
                    paddingLeft: '2px',
                    fontWeight: 'bold',
                    fontSize: '20px'
                }}>
                {props.title.toUpperCase()}
            </div>
            <div className='col s12'>
                {props.children}
            </div>
        </div>
    </div>
}

/**
 * 
 * @param {Array<String>} props.info
 */
function RatingInfo(props) {
    const textStyle = {
        color: '#404040',
    }
    return <div className='col s12'>
        <div className='col s12' style={{ color: '#051F74', fontWeight: 'bold', fontSize: '1.5vw' }}>
            RATING
        </div>
        <div className='col s12'>
            <div className='col s4'>
                <StarRatings
                    name={'info1'}
                    starRatedColor='orange'
                    numberOfStars={5}
                    starDimension='20px'
                    rating={1}
                />
            </div>
            <div className='col s8' style={textStyle}>
                {props.info[0]}
            </div>
        </div>
        <div className='col s12'>
            <div className='col s4'>
                <StarRatings
                    name={'info2'}
                    starRatedColor='orange'
                    numberOfStars={5}
                    starDimension='20px'
                    rating={2}
                />
            </div>
            <div className='col s8' style={textStyle}>
                {props.info[1]}
            </div>
        </div>
        <div className='col s12'>
            <div className='col s4'>
                <StarRatings
                    name={'info3'}
                    starRatedColor='orange'
                    numberOfStars={5}
                    starDimension='20px'
                    rating={3}
                />
            </div>
            <div className='col s8' style={textStyle}>
                {props.info[2]}
            </div>
        </div>
        <div className='col s12'>
            <div className='col s4'>
                <StarRatings
                    name={'info1'}
                    starRatedColor='orange'
                    numberOfStars={5}
                    starDimension='20px'
                    rating={4}
                />
            </div>
            <div className='col s8' style={textStyle}>
                {props.info[3]}
            </div>
        </div>
        <div className='col s12'>
            <div className='col s4'>
                <StarRatings
                    name={'info1'}
                    starRatedColor='orange'
                    numberOfStars={5}
                    starDimension='20px'
                    rating={5}
                />
            </div>
            <div className='col s8' style={textStyle}>
                {props.info[4]}
            </div>
        </div>
    </div>
}
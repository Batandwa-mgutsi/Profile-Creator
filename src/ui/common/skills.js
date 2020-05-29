import { SelectableSkill, SoftSkill, HardSkill } from './models'
import Running from '../../image_assets/skill_icons/running.png'
import SelfMotivation from '../../image_assets/skill_icons/self_motivation.png'

import Java from '../../image_assets/skill_icons/java.png';
import JavaScript from '../../image_assets/skill_icons/javascript.png';
import Python from '../../image_assets/skill_icons/python.png';
import Cpp from '../../image_assets/skill_icons/cpp.png';
import Swift from '../../image_assets/skill_icons/swift.png';
import Golang from '../../image_assets/skill_icons/golang.png';
import Sql from '../../image_assets/skill_icons/sql.png';
import Ruby from '../../image_assets/skill_icons/ruby.png';
import Rlang from '../../image_assets/skill_icons/rlang.png';
import Php from '../../image_assets/skill_icons/php.png';
import Perl from '../../image_assets/skill_icons/perl.png';
import Kotlin from '../../image_assets/skill_icons/kotlin.png';
import Csharp from '../../image_assets/skill_icons/csharp.png';
import Rustlang from '../../image_assets/skill_icons/rustlang.png';
import Scheme from '../../image_assets/skill_icons/scheme.png';
import Erlang from '../../image_assets/skill_icons/erlang.png';
import Scala from '../../image_assets/skill_icons/scala.png';
import Elixir from '../../image_assets/skill_icons/elixir.png';
import Haskell from '../../image_assets/skill_icons/haskell.png';

import ReactLogo from '../../image_assets/skill_icons/reactjs.png';
import Angular from '../../image_assets/skill_icons/angular.png';
import VueJs from '../../image_assets/skill_icons/vuejs.png';
import Flutter from '../../image_assets/skill_icons/flutter.png';

import ExpressJs from '../../image_assets/skill_icons/expressjs.png';
import NodeJs from '../../image_assets/skill_icons/nodejs.png';
import Django from '../../image_assets/skill_icons/django.png';
import Pyramid from '../../image_assets/skill_icons/pyramid.png';
import Flask from '../../image_assets/skill_icons/flaskpython.png';
import Laravel from '../../image_assets/skill_icons/laravelphp.png';
import RubyOnRails from '../../image_assets/skill_icons/rubyonrails.png';
import Phoenix from '../../image_assets/skill_icons/phoenixelixir.png';

import OracleDb from '../../image_assets/skill_icons/oracledatabase.png';
import MySql from '../../image_assets/skill_icons/mysql.png';
import PostgreSql from '../../image_assets/skill_icons/postgresql.png';
import MongoDB from '../../image_assets/skill_icons/mongodb.png';
import MicrosoftAccess from '../../image_assets/skill_icons/microsoftaccess.png';
import Cassandra from '../../image_assets/skill_icons/cassandradb.png';
import RedisDb from '../../image_assets/skill_icons/redis.png';

import Android from '../../image_assets/skill_icons/android.png';
import Git from '../../image_assets/skill_icons/git.png';
import Github from '../../image_assets/skill_icons/github.png';
import AndroidStudio from '../../image_assets/skill_icons/androidstudio.png';
import VsCode from '../../image_assets/skill_icons/vscode.png';
import XCode from '../../image_assets/skill_icons/xcode.png';

import Writing from '../../image_assets/skill_icons/writing.png';
import BoardGame from '../../image_assets/skill_icons/boardgame.png';
import Art from '../../image_assets/skill_icons/art.png';
import Cooking from '../../image_assets/skill_icons/cooking.png';
import Reading from '../../image_assets/skill_icons/reading.png';
import VideoGames from '../../image_assets/skill_icons/videogames.png';
import SportExercise from '../../image_assets/skill_icons/exercising.png';
import Music from '../../image_assets/skill_icons/music.png';

import Empathy from '../../image_assets/skill_icons/empathy.png';
import GoodCommunication from '../../image_assets/skill_icons/goodcommunication.png';
import Teamwork from '../../image_assets/skill_icons/teamwork.png';
import Approachable from '../../image_assets/skill_icons/approachable.png';
import Patient from '../../image_assets/skill_icons/patience.png';
import OpenMinded from '../../image_assets/skill_icons/openminded.png';
import ProblemSolver from '../../image_assets/skill_icons/problemsolver.png';
import Accountable from '../../image_assets/skill_icons/accountable.png';
import Creative from '../../image_assets/skill_icons/creative.png';
import GoodTimeManagement from '../../image_assets/skill_icons/timemanagement.png';

// TODO- Implement
export function getSelectableTechnicalSkills() {
    var selectableSkills = [];
    for (let [key, value] of ALL_TECHNICAL_SKILLS) {
        var skill = new SelectableSkill(key, value);
        selectableSkills.push(skill);
    }

    return selectableSkills;
}

export function getSelectableHobies() {
    var bobies = [];
    for (let [key, value] of ALL_HOBIES) {
        var hobby = new SelectableSkill(key, value);
        bobies.push(hobby);
    }

    return bobies;
}

export function getSelectableHardSkills() {
    // Hard Skills are the same as technical skills
    return getSelectableTechnicalSkills();
}

export function getSelectableSoftSkills() {
    var selectableSkills = [];
    for (let [key, value] of All_SOFT_SKILLS) {
        var skill = new SoftSkill(key, 1, '');
        selectableSkills.push(skill);
    }

    return selectableSkills;
}

/**
 * 
 * @param {*} technicalSkillId 
 */
export function getTechnicalSkillIconById(technicalSkillId) {
    for (let [key, value] of ALL_TECHNICAL_SKILLS) {
        if (key === technicalSkillId)
            return value;
    }

    return null;
}

/**
 * 
 * @param {*} hobbyId 
 */
export function getHobbyIconById(hobbyId) {
    for (let [key, value] of ALL_HOBIES) {
        if (key === hobbyId)
            return value;
    }

    return null;
}

/**
 * @param {String} softSkillId 
 */
export function getSoftSkillIconById(softSkillId) {
    for (let [key, value] of All_SOFT_SKILLS) {
        if (key === softSkillId)
            return value;
    }

    return null;
}


/**
 * @param {String} hardSkillId 
 */
export function getHardSkillIconById(hardSkillId) {
    // Hard Skills are the same as technical skills
    return getTechnicalSkillIconById(hardSkillId);
}

/**
 * From the given list of hard skills returns all those that are languages
 * 
 * @param {Array<HardSkill>} hardSkills
 * @returns {Array<HardSkill>}
 */
export function getLanguages(hardSkills) {
    return getFilteredHardSkills(hardSkills, LANGUAGES);
}


/**
 * From the given list of hard skills returns all those that are frontend technologies
 * 
 * @param {Array<HardSkill>} hardSkills
 * @returns {Array<HardSkill>}
 */
export function getFrontends(hardSkills) {
    return getFilteredHardSkills(hardSkills, FRONTENDS);
}


/**
 * From the given list of hard skills returns all those that are backend technologies
 * 
 * @param {Array<HardSkill>} hardSkills
 * @returns {Array<HardSkill>}
 */
export function getBackends(hardSkills) {
    return getFilteredHardSkills(hardSkills, BACKENDS);
}


/**
 * From the given list of hard skills returns all those that are database technologies
 * 
 * @param {Array<HardSkill>} hardSkills
 * @returns {Array<HardSkill>}
 */
export function getDatabases(hardSkills) {
    return getFilteredHardSkills(hardSkills, DATABASES);
}


/**
 * From the given list of hard skills returns all those that are mobile and tools
 * 
 * @param {Array<HardSkill>} hardSkills
 * @returns {Array<HardSkill>}
 */
export function getMobileTools(hardSkills) {
    return getFilteredHardSkills(hardSkills, MOBILETOOLS);
}

/**
 * 
 * @param {Array<HardSkill>} subject 
 * @param {Map<String, String>} filter 
 */
function getFilteredHardSkills(subject, filter) {
    var output = [];
    for (var index in subject) {
        if (filter.has(subject[index].id))
            output.push(subject[index]);
    }

    return output;
}

// Selectable skills
const LANGUAGES = new Map([
    ['Java', Java],
    ['JavaScript', JavaScript],
    ['Python', Python],
    ['C++', Cpp],
    ['Swift', Swift],
    ['Golang', Golang],
    ['SQL', Sql],
    ['Ruby', Ruby],
    ['R', Rlang],
    ['Php', Php],
    ['Perl', Perl],
    ['Kotlin', Kotlin],
    ['C#', Csharp],
    ['Rust', Rustlang],
    ['Scheme', Scheme],
    ['Erlang', Erlang],
    ['Scala', Scala],
    ['Elixir', Elixir],
    ['Haskell', Haskell],
]);

const FRONTENDS = new Map([
    ['React', ReactLogo],
    ['Angular', Angular],
    ['VueJs', VueJs],
    ['Flutter', Flutter],
]);

const BACKENDS = new Map([
    ['ExpressJs', ExpressJs],
    ['NodeJs', NodeJs],
    ['Django', Django],
    ['Pyramid', Pyramid],
    ['Flask', Flask],
    ['Laravel', Laravel],
    ['Ruby On Rails', RubyOnRails],
    ['Phoenix', Phoenix],
]);

const DATABASES = new Map([
    ['Oracle', OracleDb],
    ['MySql', MySql],
    ['Postgre Sql', PostgreSql],
    ['MongoDb', MongoDB],
    ['Microsoft Access', MicrosoftAccess],
    ['Cassandra', Cassandra],
    ['Redis', RedisDb],
]);

const MOBILETOOLS = new Map([
    ['Android', Android],
    ['Git', Git],
    ['Github', Github],
    ['Android Studio', AndroidStudio],
    ['VS Code', VsCode],
    ['X Code', XCode],
]);

const ALL_TECHNICAL_SKILLS = new Map([
    ...LANGUAGES,
    ...FRONTENDS,
    ...BACKENDS,
    ...DATABASES,
    ...MOBILETOOLS
]);

const ALL_HOBIES = new Map([
    ['Writing', Writing],
    ['Board Games', BoardGame],
    ['Art', Art],
    ['Cooking', Cooking],
    ['Reading', Reading],
    ['Video Games', VideoGames],
    ['Sports and Excercise', SportExercise],
    ['Music', Music],
]);

const All_SOFT_SKILLS = new Map([
    ['Has Empathy', Empathy],
    ['Good Communicator', GoodCommunication],
    ['Teamworker', Teamwork],
    ['Approachable and Helpful', Approachable],
    ['Patient', Patient],
    ['Open Minded', OpenMinded],
    ['Problem Solver', ProblemSolver],
    ['Accountable', Accountable],
    ['Creative', Creative],
    ['Good Time Manager', GoodTimeManagement],
])
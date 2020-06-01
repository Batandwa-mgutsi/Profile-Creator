
export class School {
    constructor(schoolName, schoolLocation, fieldsOfStudy, achievements, schoolLogo = null) {
        this.schoolName = schoolName;
        this.schoolLocation = schoolLocation;
        this.schoolLogo = schoolLogo;
        this.fieldsOfStudy = fieldsOfStudy;
        this.achievements = achievements;
    }
}

export class Company {
    constructor(companyName, title, duration, jobDescription, companyLogo = null) {
        this.companyName = companyName;
        this.companyLogo = companyLogo;
        this.title = title;
        this.duration = duration;
        this.jobDescription = jobDescription;
    }
}

export class HardSkill {
    constructor(id, rating, years) {
        this.id = id;
        this.rating = rating;
        this.years = years;
    }
}

export class SoftSkill {
    constructor(id, rating, description) {
        this.id = id;
        this.rating = rating;
        this.description = description;
    }
}

export class SocialMedia {
    constructor(name, link) {
        this.name = name;
        this.link = link;
    }
}

// Used by SelectSkillView
export class SelectableSkill {
    constructor(name, iconSrc) {
        this.name = name;
        this.iconSrc = iconSrc;
    }
}

export class Content {
    /**
     * 
     * @param {Array<Topic>} topics 
     */
    constructor(topics) {
        this.topics = topics;
    }
}

export class Topic {
    /**
     * 
     * @param {String} title 
     * @param {String} description 
     * @param {Array<any>} material 
     */
    constructor(title, description, material) {
        this._id = title;
        this.title = title;
        this.description = description;
        this.material = material;
    }
}

export class VideoMaterial {
    /**
     * 
     * @param {String} title 
     * @param {String} description 
     * @param {String} thumnailUrl 
     * @param {String} videoUrl 
     */
    constructor(title, description, thumnailUrl, videoUrl) {
        this.type = 'video';
        this._id = title;
        this.title = title;
        this.description = description;
        this.thumnailUrl = thumnailUrl;
        this.videoUrl = videoUrl;
    }
}

export class DeliverableMaterial {
    /**
     * 
     * @param {String} title 
     * @param {String} instructions 
     * @param {Number} points 
     * @param {String} dueDate 
     */
    constructor(title, instructions, points, dueDate) {
        this.type = 'deliverable';
        this._id = title;
        this.title = title;
        this.instructions = instructions;
        this.points = points;
        this.dueDate = dueDate;
    }
}
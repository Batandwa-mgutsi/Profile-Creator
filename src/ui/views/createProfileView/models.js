
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
const employee = require("./employee.js");

class engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer"
    }
    getRole(){
        return "Engineer"
    }

    getGithub(){
        return this.github
    }
}
module.exports = Engineer
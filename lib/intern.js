const employee = require("./employee.js");

class intern extends employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
        this.role = "Intern"
    }
    getRole(){
        return "Intern"
    }
    getSchool() {
        return this.school
    }
}
module.exports = Intern;
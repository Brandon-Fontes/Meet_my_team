const ManagerExport = require("./lib/manager");
const EngineerExport = require("./lib/engineer");
const InternExport = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputpath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/renderHtml");
const teamMembers = [];
const idArray = [];

function appMenu(){
    function createManager(){
        inquirer.prompt([{
            type: "input",
            name: "managerName",
            message: "Managers Name:",
            validate: answer => {
                if (answer !== ""){
                    return true;
                }
                return "Please enter a name:"
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "manager's id:",
            validate: answer =>  {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                    if(idArray.includes(answer)) {
                        return "This ID cannot be used. Please re-enter manager's id:"
                    }else{
                        return true;
                    }
                }
                return  "Enter a number greater than zero:";
            }

        },
        {
            type: "input",
            name: "managerEmail",
            message: "Enter Managers Email:",
            validate: answer => {
                const pass = answer.match (/\S+@\S+\.\S+/);
                if(pass){
                    return true;
                }
                return "Enter a valid Email:"
            }
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "Managers office number:",
            validate: answer => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass){
                    return true;
                }
                return "enter a number greater than zero:"
            }
        }
    ])

    .then(answers => {
        const manager = new ManagerExport(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
        teamMembers.push(manager);
        idArray.push(answers.managerId);
        createTeam();
    })
    }

    function addEngineer() {
        inquirer.prompt([{
            type: "input",
            name: "engineerName",
            message: "Engineer's Name:",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "enter a name:"
            }
        },
        {
            type: "input",
            name: "engineerId",
            message: "Engineer's ID:",
            validate: answer => {
                const pass = answer.match
                (/^[1-9]\d*$/);
                if (pass) {
                    if (idArray.includes(answer)) {
                        return "This ID is already being used. Please re-enter Manager's ID:"
                    }
                    else {
                        return true;
                    }
                }
                return "Please enter a number greater than zero:";
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Engineer's Email:",
            validate: answer => {
                const pass = answer.match(
                    /\S+@\S+\.\S+/
                );
                if (pass) {
                    return true;
                }
                return "Please enter a valid email:"
            }
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "Engineer's GitHub Username:",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a username:"
            }
        }
        ]).then(answers => {
            const engineer = new EngineerExport(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
            teamMembers.push(engineer);
            idArray.push(answers.engineerId);
            createTeam();
        });
    }
    function addIntern() {
        inquirer.prompt([{
            type: "input",
            name: "internName",
            message: "What is the intern's Name:",
            validate: answer => {
                if (answer !== ""){
                    return true;
                }
                return "Enter a name"
            }
        },
        {
            type: "input",
            name: "internId",
            message: "Intern's ID:",
            validate: answer =>{
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass){
                    if (idArray.includes(answer)){
                        return "This id is already being used. Please enter Intern ID:"
                    }else{
                        return true;
                    }
                }
                return "Enter a number Greater than zero"
            }
        },
        {
            type: "input",
            name: "internEmail",
            message: "enter intern's email:",
            validate: answer => {
                const pass = answer.match
                    (/\S+@\S+\.\S+/);
                    if(pass){
                        return true;
                    }
                    return  "enter valid email"
                }
        },
        {
            type: "input",
            name: "internSchool",
            message: "Enter Interns School Name:",
            validate: answer => {
                if (answer !== ""){
                    return true;
                }
                return "Enter intern's school name:"
            }

        }
        ])
        .then(answers =>{
            const intern = new InternExport(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
            teamMembers.push(intern);
            idArray.push(answers.internId);
            createTeam();
        })
    }
    function createTeam(){
        inquirer.prompt([{
            type: "list",
            name: "memberChoice",
            message: "Do you want to add another team member?",
            choices: [
                "Engineer",
                "Intern",
                "No"
            ]
        }])
        .then(userChoice => {
            switch (userChoice.memberChoice){
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break
                    default:
                        buildTeam();
            }
        })
    }

    function buildTeam(){
        if(!fs.existsSync(OUTPUT_DIR)){
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputpath, render(teamMembers), "utf-8");
    }
    createManager();
}
appMenu();
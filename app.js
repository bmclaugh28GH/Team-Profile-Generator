// **********************************************
// **********************************************

var inquirer = require ("inquirer"); 
var fs = require ("fs"); 
var Manager = require ("./lib/Manager");
var Intern = require ("./lib/Intern"); 
var Engineer = require ("./lib/Engineer"); 

nextID = 0; 
teamList = []; 

function getNewTeamMember () {
   inquirer
   .prompt([
      // 
      // ****************************************
      // general questions, apply to all employees
      // ****************************************
      {
      type: "input",
      message: "What is your name?",
      name: "name"
      },
      {
      type: "list",
      message: "What is your role?", 
      name: "role", 
      choices: ['Manager', 'Engineer', 'Intern']
      }, 
      {
      type: "input",
      message: "What is your email address?",
      name: "email"
      },
      {
      type: "input",
      message: "What is your github user ID?",
      name: "github_user_id"
      },
      {
      type: "list",
      message: "'Upload' a profile image", 
      name: "profile_image", 
      choices: ['img1', 'img2', 'img3']
      },
      // 
      // ****************************************
      // manager-specific
      // ****************************************
      {
      type: "list",
      message: "What is your specialty", 
      name: "specialty", 
      choices: ['Team Manager', 'QA Manager', 'Development Manager'],
      when: function(answers) {
      return answers.role=='Manager'; 
      }
      }, 
      // 
      // ****************************************
      // engineer-specific
      // ****************************************
      {
      type: "list",
      message: "What is your specialty", 
      name: "specialty", 
      choices: ['QA', 'Development'],
      when: function(answers) {
      return answers.role=='Engineer'; 
      }
      }, 
      // 
      // ****************************************
      // intern-specific
      // ****************************************
      {
      type: "input",
      message: "What school are you from?", 
      name: "school", 
      when: function(answers) {
      return answers.role=='Intern'; 
      }
      }, 
      {
      type: "input",
      message: "What is your major", 
      name: "major", 
      when: function(answers) {
      return answers.role=='Intern'; 
      }
      }, 
      {
      type: 'confirm',
      name: 'continue',
      message: 'Do you want to add another team member?',
      default: false 
      }
   ])
   .then(function(response) {

      //console.log(response);

      nextID++; 
      switch (response.role){
      case 'Manager':
         var myObj = new Manager 
            (response.name, 
            nextID, 
            response.email, 
            response.profile_image, 
            response.github_user_id, 
            response.role); 
         break;
      case 'Engineer':
         var myObj = new Engineer 
            (response.name, 
            nextID, 
            response.email, 
            response.profile_image, 
            response.github_user_id, 
            response.specialty);
         break;  
      case 'Intern':
         var myObj = new Intern 
            (response.name, 
            nextID, 
            response.email, 
            response.profile_image, 
            response.github_user_id, 
            response.school,
            response.major); 
         break; 
      default: console.log ("new object error"); 
      }

      //console.log(myObj);

      teamList.push(myObj); 

      console.log(teamList);

      // ****************************************
      // ****************************************
      if (response.continue){
         getNewTeamMember(); 
      }; 

   }); // getNewTeamMember
}

//while (addNewTeamMember){
   getNewTeamMember(); 
   //addNewTeamMember = false; 
//}


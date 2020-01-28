// **********************************************
// **********************************************

var inquirer = require ("inquirer"); 
var fs = require ("fs"); 
var Manager = require ("./lib/Manager");
var Intern = require ("./lib/Intern"); 
var Engineer = require ("./lib/Engineer"); 

nextID = 0; 
teamList = []; 

// **********************************************
// **********************************************

function getCardHTML(tempList,i) {

   var str = "";
   if (tempList[i] instanceof Manager){

      str = 
      `<div class="col-lg-12">
      <div class="card">
         <div class="card-header">
            <h4 class="card-title">${tempList[i].getName()}</h4>
            <img src="../docs/images/${tempList[i].getImage()}" alt="Image not found">
         </div>
         <div class="card-body">
            <h5 class="card-text">Role: ${tempList[i].getManagerRole()}</h5>
            <h5 class="card-text">Email: ${tempList[i].getEmail()}</h5>
            <h5 class="card-text">Github: ${tempList[i].getGithubUserId()}</h5>
         </div>
      </div> 
      </div>\n`; 

   }
   else if (tempList[i] instanceof Engineer){

      str = 
      `<div class="col-lg-12">
      <div class="card">
         <div class="card-header">
            <h4 class="card-title">${tempList[i].getName()}</h4>
            <img src="../docs/images/${tempList[i].getImage()}" alt="Image not found">
         </div>
         <div class="card-body">
            <h5 class="card-text">Role: Engineer</h5>
            <h5 class="card-text">Specialty: ${tempList[i].getSpecialty()}</h5>
            <h5 class="card-text">Email: ${tempList[i].getEmail()}</h5>
            <h5 class="card-text">Github: ${tempList[i].getGithubUserId()}</h5>
         </div>   
      </div> 
      </div>\n`; 

   }
   else if (tempList[i] instanceof Intern){

      str = 
      `<div class="col-lg-12">
      <div class="card">
         <div class="card-header">
            <h4 class="card-title">${tempList[i].getName()}</h4>
            <img src="../docs/images/${tempList[i].getImage()}" alt="Image not found">
         </div>
         <div class="card-body">
            <h5 class="card-text">Role: Intern</h5>
            <h5 class="card-text">Email: ${tempList[i].getEmail()}</h5>
            <h5 class="card-text">Github: ${tempList[i].getGithubUserId()}</h5>
            <h5 class="card-text">School: ${tempList[i].getSchool()}</h5>
            <h5 class="card-text">Major: ${tempList[i].getAreaOfInterest()}</h5>
         </div>   
      </div> 
      </div>\n`; 

   }

   return str;
}; //getCardHTML

// **********************************************
// getNewTeamMember
// **********************************************

function getNewTeamMember () {
   inquirer
   .prompt([
      // 
      // ****************************************
      // general questions, apply to all employees
      // ****************************************
      {
      type: "input",
      message: "What is the team member's name?",
      name: "name"
      },
      {
      type: "list",
      message: "What is the team member's role?", 
      name: "role", 
      choices: ['Manager', 'Engineer', 'Intern']
      }, 
      {
      type: "input",
      message: "What is the team member's email address?",
      name: "email"
      },
      {
      type: "input",
      message: "What is the team member's github user ID?",
      name: "github_user_id"
      },
      {
      type: "list",
      message: "'Upload' a profile image", 
      name: "profile_image", 
      choices: ['u.jpg', 'ew.jpg', 'q.jpg', 'h.jpg']
      },
      // 
      // ****************************************
      // manager-specific
      // ****************************************
      {
      type: "list",
      message: "What is the manager's specialty?", 
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
      message: "What is the engineer's specialty?", 
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
      message: "What school is the intern from?", 
      name: "school", 
      when: function(answers) {
      return answers.role=='Intern'; 
      }
      }, 
      {
      type: "input",
      message: "What is the intern's major?", 
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

      nextID++; 
      switch (response.role){
      case 'Manager':
         var myObj = new Manager 
            (response.name, 
            nextID, 
            response.email, 
            response.profile_image, 
            response.github_user_id, 
            response.specialty); 
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

      teamList.push(myObj); 

      // ****************************************
      // The user wants to enter another team member. circle back around. 
      // With recursion, gulp!!
      // ****************************************
      if (response.continue){
         getNewTeamMember(); 
      }
      // ****************************************
      // done entering team members. Continue on to follow-on processing 
      // ****************************************
      else {

         // *************************************
         // build up the strings of my buttons and cards
         // *************************************
         var myButtons =""; 
         var myCards = ""; 

         // Im doing a hierarchy here, in a very rudimentary way.

         // team managers 
         var tempList = teamList.filter(function(obj) {
            return (obj instanceof Manager) && obj.manager_role === 'Team Manager'; });
         for (i=0;i<tempList.length;i++){
            myButtons += `\n<button type="button" class="btn btn-info" id="${tempList[i].id}">${tempList[i].name}</button>`;
            myCards += getCardHTML(tempList,i); 
            //console.log ('TM\n'+myCards); 
         }

         // other managers 
         var tempList = teamList.filter(function(obj) {
            return (obj instanceof Manager) && obj.manager_role != 'Team Manager'; });
         for (let i=0;i<tempList.length;i++){
            myButtons += `\n<button type="button" class="btn btn-info" id="${tempList[i].id}">${tempList[i].name}</button>`;
            myCards += getCardHTML(tempList,i); 
            //console.log ('Mgr\n'+myCards); 
         } 

         // engineers 
         var tempList = teamList.filter(function(obj) {
            return (obj instanceof Engineer);});
         for (let i=0;i<tempList.length;i++){
            myButtons += `\n<button type="button" class="btn btn-info" id="${tempList[i].id}">${tempList[i].name}</button>`;
            myCards += getCardHTML(tempList,i); 
            //console.log ('Eng\n'+myCards); 
         } 

         // interns 
         var tempList = teamList.filter(function(obj) {
            return (obj instanceof Intern);});
         for (let i=0;i<tempList.length;i++){
            myButtons += `\n<button type="button" class="btn btn-info" id="${tempList[i].id}">${tempList[i].name}</button>`
            myCards += getCardHTML(tempList,i); 
            //console.log ('Intern\n'+myCards); 
         } 

         myButtons += '\n';  
         myCards += '\n';  

         var myHtml = `<!DOCTYPE html>
            <html lang="en">

            <!-- **************************************** -->
            <!-- **************************************** -->
            <head>

               <meta charset="UTF-8" />
               <meta name="viewport" content="width=device-width, initial-scale=1.0" />
               <meta http-equiv="X-UA-Compatible" content="ie=edge" />

               <title>Team Profile Generator</title>

               <!--css links-->
               <link rel="stylesheet" type="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/popper.min.js">
               <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
               <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

               <style>
                  body{
                     background-color: ivory;
                  }
                  .jumbotron{
                     background-color:aqua;
                  }
                  .row{
                     height:450px;
                  }
                  #teamList, #teamMate{
                     text-align: center;
                     border-color: #003333;
                  }
                  #teamList{
                     background-color: #99ffff;
                     padding:8px; 
                     border-left:solid;
                     border-top:solid;
                     border-bottom:solid;
                  }
                  .btn {
                     width:175px; 
                     height:45px; 
                     margin:3px; 
                     background-color: #008080;
                  }
                  #teamMate{
                     background-color: #e6ffff;
                     padding:8px; 
                     border:solid;
                  }
                  #teamMateDtl{
                     text-align:left;
                     padding:15px; 
                     padding-left:75px; 
                  }
                  .card-title{
                     display: inline; 
                     margin-right: 100px 
                  }
                  .card-header, .card-body{
                     background-color: #e6ffff;
                  }
                  .card-body{
                     text-align:left; 
                  }
                  img{
                     height:100px;
                     width:150px;
                  }
                  .teamMateLineItem{
                     padding-top:15px; 
                  }
               </style>

            </head>

            <!-- **************************************** -->
            <!-- **************************************** -->
            <body>

               <div class="container">

                  <!--jumbotron-->
                  <div class="jumbotron">
                     <h1 class="text-center">Team Ranjan's Minions!</h1>
                  </div> <!--jumbotron-->

                  <div class="row">
                     <div class="col-lg-3" id="teamList">
                        <h3>The Team</h3>
                        <hr> 
                        <div id="teamMateButtons">
                        ${myButtons}
                     </div>
                  </div> 

                  <div class="col-lg-9" id="teamMate">
                     <div class="row" id="teamMateHdrRow">
                        ${myCards}
                     </div>
                  </div>

               </div> <!--row-->

            </div> <!--container-->

            <!--**************************************-->
            <!--js links-->
            <!--**************************************-->
            <script src="https://code.jquery.com/jquery.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
            <!--<script src="./assets/script/script.js"></script>-->
            <script>

               $('#teamMateButtons').on("click", function () {
                  event.preventDefault(); 
                  alert (event.target.id); 
               }); 
         
            </script>

         <!-- **************************************** -->
         <!-- **************************************** -->
         </body>
         </html>

         `;

         fs.writeFile ("./output/index.html", myHtml, function(err){
            if (err){console.log(err)}
         }); 
      }; 

   }); 
}; // getNewTeamMember

// **********************************************
// **********************************************

getNewTeamMember(); 


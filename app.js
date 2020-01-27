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
      choices: ['u', 'ew', 'q', 'h']
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

      //console.log(myObj);

      teamList.push(myObj); 

      //console.log(teamList);

      // ****************************************
      // ****************************************
      if (response.continue){
         getNewTeamMember(); 
      }
      else {

         //console.log ("move on to write the HTML"); 

         // *************************************
         // build up the string of my buttons 
         // *************************************
         var myButtons =""; 

         // Im doing a hierarchy here, in a very rudimentary way.
         // team managers 
         var tempList = teamList.filter(function(obj) {
            return (obj instanceof Manager) && obj.manager_role === 'Team Manager'; });
         console.log('Team Manager(s)\n' + tempList);
         for (i=0;i<tempList.length;i++){
            myButtons += `\n<button type="button" class="btn btn-info" id="${tempList[i].id}">${tempList[i].name}</button>`
         } 

         // other managers 
         var tempList = teamList.filter(function(obj) {
            return (obj instanceof Manager) && obj.manager_role != 'Team Manager'; });
         console.log('Other Manager(s)\n' + tempList);
         for (let i=0;i<tempList.length;i++){
            myButtons += `\n<button type="button" class="btn btn-info" id="${tempList[i].id}">${tempList[i].name}</button>`
         } 

         // engineers 
         var tempList = teamList.filter(function(obj) {
            return (obj instanceof Engineer);});
         console.log('Engineer(s)\n' + tempList);
         for (let i=0;i<tempList.length;i++){
            myButtons += `\n<button type="button" class="btn btn-info" id="${tempList[i].id}">${tempList[i].name}</button>`
         } 

         // interns 
         var tempList = teamList.filter(function(obj) {
            return (obj instanceof Intern);});
         console.log('Intern(s)\n' + tempList);
         for (let i=0;i<tempList.length;i++){
            myButtons += `\n<button type="button" class="btn btn-info" id="${tempList[i].id}">${tempList[i].name}</button>`
         } 
         myButtons += '\n';  

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
                     <h1 class="text-center">Team Dynamo!</h1>
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
                        <div class="col-lg-3">
                           <img src="../docs/images/q.jpg" alt="Image not found">
                        </div>

                        <div class="col-lg-9" id="teamMateDtl">
                           <h3 class="teamMateLineItem">Brian</h3>
                           <h3 class="teamMateLineItem">Email: </h3 class="teamMateLineItem">
                           <h3 class="teamMateLineItem">Github User ID: </h3 class="teamMateLineItem">
                        </div>
                     </div>

                     <hr>
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

         fs.writeFile ("index.html", myHtml, function(err){
            if (err){console.log(err)}
         }); 
      }; 

   }); // getNewTeamMember
}

//while (addNewTeamMember){
   getNewTeamMember(); 
   //addNewTeamMember = false; 
//}


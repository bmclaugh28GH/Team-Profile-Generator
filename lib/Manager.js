// **********************************************
// **********************************************

var Employee = require ("./Employee"); 

class Manager extends Employee { 
   constructor (name, id, email, image, github_id, manager_role) {
      super (name, id, email, image, github_id); 
      this.manager_role = manager_role; 
   };
   getManagerRole(){
      return this.manager_role; 
   };
   createStr(){
      const str = 
         `{"name":"${this.getName()}",
         "role":"Manager",
         "id":"${this.getID()}",
         "email":"${this.getEmail()}",
         "image":"${this.getImage()}",
         "githubUserID":"${this.getGithubUserId()}",
         "managerRole":"${this.getManagerRole()}"
         }`;
      return str; 
   };
}

module.exports = Manager; 
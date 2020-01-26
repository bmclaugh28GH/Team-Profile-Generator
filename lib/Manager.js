// **********************************************
// **********************************************

var Employee = require ("./Employee"); 

class Manager extends Employee { 
   constructor (name, id, email, image, github_id, manager_role) {
      super (name, id, email, image, github_id); 
      this.manager_role = manager_role; 
   }
   getManagerRole(){
      return this.manager_role; 
   }
}

module.exports = Manager; 
// **********************************************
// **********************************************

var Employee = require ("./Employee"); 

class Manager extends Employee { 
   constructor (name, id, email, image, github_id, manager_type) {
      super (name, id, email, image, github_id); 
      this.manager_type = manager_type; 
   }
}

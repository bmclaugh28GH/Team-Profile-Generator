// **********************************************
// **********************************************

var Employee = require ("./Employee"); 

class Engineer extends Employee { 
   constructor (name, id, email, image, github_id, specialty) {
      super (name, id, email, image, github_id); 
      this.specialty = specialty; 
   }
}

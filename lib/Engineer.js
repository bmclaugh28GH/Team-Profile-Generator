// **********************************************
// **********************************************

var Employee = require ("./Employee"); 

class Engineer extends Employee { 
   constructor (name, id, email, image, github_id, specialty) {
      super (name, id, email, image, github_id); 
      this.specialty = specialty; 
   }
   getSpecialty () {
      return this.specialty; 
   }
   createStr(){
      const str = 
         `{"name":"${this.getName()}",
         "role":"Engineer",
         "id":"${this.getID()}",
         "email":"${this.getEmail()}",
         "image":"${this.getImage()}",
         "specialty":"${this.getSpecialty()}"
         }`;
      return str; 
   };
}
module.exports = Engineer;

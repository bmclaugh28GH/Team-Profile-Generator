// **********************************************
// **********************************************

var Employee = require ("./Employee"); 

class Intern extends Employee { 
   constructor (name, id, email, image, github_id, school, area_of_interest) {
      super (name, id, email, image, github_id); 
      this.school = school; 
      this.area_of_interest = area_of_interest; 
   }
   getSchool () {
      return this.school; 
   }
   getAreaOfInterest () {
      return this.area_of_interest; 
   }
   createStr(){
      const str = 
         `{"name":"${this.getName()}",
         "role":"Intern",
         "id":"${this.getID()}",
         "email":"${this.getEmail()}",
         "image":"${this.getImage()}",
         "school":"${this.getSchool()}",
         "major":"${this.getAreaOfInterest()}"
         }`;
      return str; 
   };
}
module.exports = Intern; 
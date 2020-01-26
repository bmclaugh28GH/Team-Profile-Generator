// **********************************************
// **********************************************

var Employee = require ("./Employee"); 

class Intern extends Employee { 
   constructor (name, id, email, image, github_id, school, area_of_interest) {
      super (name, id, email, image, github_id); 
      this.school = school; 
      this.area_of_interest = area_of_interest; 
}

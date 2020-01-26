// **********************************************
// **********************************************

class Employee {
   constructor (name, id, email, image, github_id){
      this.name = name;  
      this.id = id; 
      this.email = email; 
      this.image = image;
      this.github_user_id = github_id; 
   }
   getName (){
      return this.name; 
   }
   getID () {
      return this.id; 
   }
   getEmail () {
      return this.email; 
   }
   getImage () {
      return this.image;
   }
   getGithubUserId () {
      return this.github_user_id; 
   }
}
module.exports = Employee; 
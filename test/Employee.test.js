// **********************************************
// Employee Tests 
// **********************************************
const Employee = require ("../lib/Employee"); 
describe ("Employee", () => {
   describe ("Initialization", () => {
      const name = 'brian'; 
      const id = 1; 
      const email = 'brian@fakeEmail.com'; 
      const image = 'brian.jpg'; 
      const github_user_id = 'bmclaugh28gh'; 
      const myObj = new Employee (name, id, email, image, github_user_id); 
      it ("should intialize an employee objects with name set to 'brian'", () => {
         expect (myObj.name).toEqual(name); 
      });
      it ("should intialize an employee objects with id set to 1", () => {
         expect (myObj.id).toEqual(id); 
      });
      it ("should intialize an employee objects with email set to 'brian@fakeEmail.com'", () => {
         expect (myObj.email).toEqual(email); 
      });
      it ("should intialize an employee objects with name set to 'brian.jpg'", () => {
         expect (myObj.image).toEqual(image); 
      });
      it ("should intialize an employee objects with name set to 'bmclaugh28gh'", () => {
         expect (myObj.github_user_id).toEqual(github_user_id); 
      });
   }); 
   describe ("Getters", () => {
      const name = 'brian'; 
      const id = 1; 
      const email = 'brian@fakeEmail.com'; 
      const image = 'brian.jpg'; 
      const github_user_id = 'bmclaugh28gh'; 
      const myObj = new Employee (name, id, email, image, github_user_id); 
      it ("getName should return 'brian'", () => {
         expect (myObj.getName()).toEqual(name); 
      });
      it ("getID should return 1", () => {
         expect (myObj.getID()).toEqual(id); 
      });
      it ("getEmail should return 'brian@fakeEmail.com'", () => {
         expect (myObj.getEmail()).toEqual(email); 
      });
      it ("getImage should return 'brian.jpg'", () => {
         expect (myObj.getImage()).toEqual(image); 
      });
      it ("getGithubUserId should return 'bmclaugh28gh'", () => {
         expect (myObj.getGithubUserId()).toEqual(github_user_id); 
      });
   })

})


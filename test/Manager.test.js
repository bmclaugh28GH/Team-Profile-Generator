// **********************************************
// Manager Tests 
// **********************************************
const Manager = require ("../lib/Manager"); 
describe ("Manager", () => {
   describe ("Initialization", () => {
      const name = 'brian'; 
      const id = 1; 
      const email = 'brian@fakeEmail.com'; 
      const image = 'brian.jpg'; 
      const github_user_id = 'bmclaugh28gh';
      const manager_role = 'Development Manager';  
      const myObj = new Manager (name, id, email, image, github_user_id, manager_role); 
      
      console.log (myObj.manager_role);

      it ("should intialize a Manager object with name set to 'brian'", () => {
         expect (myObj.name).toEqual(name); 
      });
      it ("should intialize a Manager object with id set to 1", () => {
         expect (myObj.id).toEqual(id); 
      });
      it ("should intialize a Manager object with email set to 'brian@fakeEmail.com'", () => {
         expect (myObj.email).toEqual(email); 
      });
      it ("should intialize a Manager object with image set to 'brian.jpg'", () => {
         expect (myObj.image).toEqual(image); 
      });
      it ("should intialize a Manager object with github user ID set to 'bmclaugh28gh'", () => {
         expect (myObj.github_user_id).toEqual(github_user_id); 
      });
      it ("should intialize a Manager object with manager_role set to 'Development Manager'", () => {
         expect (myObj.manager_role).toEqual(manager_role); 
      });
   }); 
   describe ("Getters", () => {
      const name = 'brian'; 
      const id = 1; 
      const email = 'brian@fakeEmail.com'; 
      const image = 'brian.jpg'; 
      const github_user_id = 'bmclaugh28gh'; 
      const manager_role = 'Development Manager';  
      const myObj = new Manager (name, id, email, image, github_user_id, manager_role); 
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
      it ("getManagerRole should return 'Development Manager'", () => {
         expect (myObj.manager_role).toEqual(manager_role); 
      });
   })

})


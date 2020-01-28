// **********************************************
// Engineer Tests 
// **********************************************
const Engineer = require ("../lib/Engineer"); 
describe ("Engineer", () => {
   describe ("Initialization", () => {
      const name = 'brian'; 
      const id = 1; 
      const email = 'brian@fakeEmail.com'; 
      const image = 'brian.jpg'; 
      const github_user_id = 'bmclaugh28gh';
      const specialty = 'QA';   
      const myObj = new Engineer (name, id, email, image, github_user_id, specialty); 
      
      it ("should intialize an Engineer object with name set to 'brian'", () => {
         expect (myObj.name).toEqual(name); 
      });
      it ("should intialize an Engineer object with id set to 1", () => {
         expect (myObj.id).toEqual(id); 
      });
      it ("should intialize an Engineer object with email set to 'brian@fakeEmail.com'", () => {
         expect (myObj.email).toEqual(email); 
      });
      it ("should intialize an Engineer object with image set to 'brian.jpg'", () => {
         expect (myObj.image).toEqual(image); 
      });
      it ("should intialize an Engineer object with github user ID set to 'bmclaugh28gh'", () => {
         expect (myObj.github_user_id).toEqual(github_user_id); 
      });
      it ("should intialize an Engineer object with specialty set to 'QA'", () => {
         expect (myObj.specialty).toEqual(specialty); 
      });
   }); 
   describe ("Getters", () => {
      const name = 'brian'; 
      const id = 1; 
      const email = 'brian@fakeEmail.com'; 
      const image = 'brian.jpg'; 
      const github_user_id = 'bmclaugh28gh'; 
      const specialty = 'QA';  
      const myObj = new Engineer (name, id, email, image, github_user_id, specialty); 
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
      it ("getSpecialty should return 'QA'", () => {
         expect (myObj.specialty).toEqual(specialty); 
      });
   })
})


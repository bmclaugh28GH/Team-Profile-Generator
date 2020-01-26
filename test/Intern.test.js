// **********************************************
// Intern Tests 
// **********************************************
const Intern = require ("../lib/Intern"); 
describe ("Intern", () => {
   describe ("Initialization", () => {
      const name = 'brian'; 
      const id = 1; 
      const email = 'brian@fakeEmail.com'; 
      const image = 'brian.jpg'; 
      const github_user_id = 'bmclaugh28gh';
      const school = 'Rutgers';
      const area_of_interest = 'quidditch';   
      const myObj = new Intern (name, id, email, image, github_user_id, school, area_of_interest); 
      
      it ("should intialize an Intern object with name set to 'brian'", () => {
         expect (myObj.name).toEqual(name); 
      });
      it ("should intialize an Intern object with id set to 1", () => {
         expect (myObj.id).toEqual(id); 
      });
      it ("should intialize an Intern object with email set to 'brian@fakeEmail.com'", () => {
         expect (myObj.email).toEqual(email); 
      });
      it ("should intialize an Intern object with image set to 'brian.jpg'", () => {
         expect (myObj.image).toEqual(image); 
      });
      it ("should intialize an Intern object with github user ID set to 'bmclaugh28gh'", () => {
         expect (myObj.github_user_id).toEqual(github_user_id); 
      });
      it ("should intialize an Intern object with school set to 'Rutgers'", () => {
         expect (myObj.school).toEqual(school); 
      });
      it ("should intialize an Intern object with area of interest set to 'quidditch'", () => {
         expect (myObj.area_of_interest).toEqual(area_of_interest); 
      });
   }); 
   describe ("Getters", () => {
      const name = 'brian'; 
      const id = 1; 
      const email = 'brian@fakeEmail.com'; 
      const image = 'brian.jpg'; 
      const github_user_id = 'bmclaugh28gh'; 
      const school = 'Rutgers';  
      const area_of_interest = 'Hackeysack';  
      const myObj = new Intern (name, id, email, image, github_user_id, school, area_of_interest); 
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
      it ("getSchool should return 'Rutgers'", () => {
         expect (myObj.school).toEqual(school); 
      });
      it ("getAreaOfInterest should return 'hackeysack'", () => {
         expect (myObj.area_of_interest).toEqual(area_of_interest); 
      });
   })

})


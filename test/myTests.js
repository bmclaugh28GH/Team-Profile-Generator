// **********************************************
// **********************************************

const Intern = require ("../lib/Intern"); 
const Engineer = require ("../lib/Engineer"); 
const Manager = require ("../lib/Manager"); 

const name = 'brian'; 
const id = 1; 
const email = 'brian@fakeEmail.com'; 
const image = 'brian.jpg'; 
const github_user_id = 'bmclaugh28gh'; 
const school = 'Rutgers';  
const area_of_interest = 'Hackeysack';  
const myIntern = new Intern (name, id, email, image, github_user_id, school, area_of_interest); 

console.log (myIntern.createStr()); 

const specialty = 'QA';   
const myEngineer = new Engineer (name, id, email, image, github_user_id, specialty); 
console.log (myEngineer.createStr()); 

const manager_role = 'Development Manager';  
const myManager = new Manager (name, id, email, image, github_user_id, manager_role); 
console.log (myManager.createStr()); 

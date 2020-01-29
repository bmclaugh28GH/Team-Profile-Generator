# Team-Profile-Generator

This app will allow a user to enter one or more team members, assign a role and other attributes to each, and write off a page that will allow the user to view the team in a browser. 

The UI is done via node using inquirer. It uses a couple different input types, and asks for some input that is role-specific. That is, only an intern will be asked for a school and major, etc. I decided to add image as an Employee attribute. It's a simple operation; they don't actually find a file in the file system, I'm just letting them pick from a couple goofy images I downloaded. 

The "workflow"(?) of the page is that it will open with a list of team members on the left, and no detailed team member info displayed at all. The team member list are buttons. Clicking each name will display that team member's data. 

I use .filter to enforce sortation regardless of the order in which the team members were entered via inquirer. The members should always sort: Team Manager, Dev/QA Manager, Engineer, then Interns. 

# Architecture

Team member data is stored in an array of objects. The object hierarchy is Employee as the ancestor of everything, and Intern, Manager, and Engineer extend Employee. Common attributes are stored on Employee, where a constructor and a series of Getters() are provided. The descendants will have role-specific attributes with Getters() for those. The constructor on a descendant will load its own attributes and also call super to load the Employee attributes. 

# Tests

Test scripts are provided in the test folder. They're pretty basic; they validate that the objects get created and initialized correctly, and that the Getters() return correct values. 

# Questions/Issues

I struggled initially making inquirer repeat until the user is done adding team members. I finally got it working, but am using a recursive function call. Despite it working ok, it makes me kinda uneasy on principle. 

My HTML is inline. I kinda see where the instructions were going with the hint to have template html for each role, but I can't understand how to make that work. 

My card are being built using a series of IFs in a function. There's some duplication in there where I common attributes unnecessarily in each role's branch. They could be moved to the top to prevent duplicate code. 

In general I think I'm missing something organizationally about how to put all this stuff in multiple files. 

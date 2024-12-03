# GameDex

## Project Choice (Tell us which project you're doing!)

- [ ] GameDex 

## Project Description 
The Game Catalog App is a simple and user-friendly web application designed to allow users to manage their personal game library. The app enables users to add, view, update, and delete game entries while providing options for filtering and organizing their collection. Built with the MEN (MongoDB, Express, Node.js) stack, the app is lightweight, scalable, and optimized for simplicity and usability.

## Routing Table

| HTTP Method (Verb) | Path/Endpoint/URI          | CRUD Operation | Description                                    |
|---------------------|---------------------------|----------------|------------------------------------------------|
| GET                 | `/auth/sign`             | Read           | Displays form to sign in or sign up.          |
| POST                | `/auth/sign-up`          | Create         | Handles submission of sign-up form.           |
| GET                 | `/auth/sign-in`          | Read           | Displays the sign-in form.                    |
| POST                | `/auth/sign-in`          | Create         | Handles submission of sign-in form.           |
| GET                 | `/auth/sign-out`         | Read           | Logs the user out and redirects to a page.    |
| GET                 | `/videogames`            | Read           | Displays a list of video games.               |
| GET                 | `/videogames/new`        | Read           | Shows a form to add a new video game.         |
| POST                | `/videogames`            | Create         | Adds a new video game to the collection.      |
| GET                 | `/videogames/:videogameId` | Read           | Displays details of a specific video game.    |
| GET                 | `/videogames/:videogameId/edit` | Read      | Displays form to edit a specific video game.  |
| PUT                 | `/videogames/:videogameId` | Update        | Updates a specific video game.                |
| DELETE              | `/videogames/:videogameId` | Delete        | Removes a specific video game from the collection. |



## ERD Diagram
![ERD](https://github.com/Jsalcedo19/GameDex/blob/main/public/ERD%20diagram.png)       

## Wire Frames
- Home Page
![62BA98CE-A813-4446-9234-C3670CE0F125](https://github.com/user-attachments/assets/9847b85f-5adf-4a78-af1e-ea16d2e98bd1)


- Registration Page
![B55B0FEA-131F-4246-A615-04AF2EE64A0D](https://github.com/user-attachments/assets/b6072634-c098-4c71-bb99-47cbbc635d6c)


- Login Page
![2FB926BB-637C-4103-90AA-0368E5F5345B](https://github.com/user-attachments/assets/c144b110-0908-459d-9861-b91f85603e44)


- My Game Catalog Page
![DFD76732-00ED-482C-96BE-437B51658542](https://github.com/user-attachments/assets/cac41281-a2b6-4065-ab57-debea8d6177d)

- Game Catalog Page
![DA0BD0C8-87EF-48DD-9707-20182E79470A](https://github.com/user-attachments/assets/0f45f8b1-d1af-4cc6-acaa-c42f90c22ecf)


## User Stories
- **AAU,** I want to be able to register or log into the app using my email and password.
- **AAU,** I want to be able to log out
- **AAU,** I want to add a new game to my catalog by providing details such as title, type, and release date so that I can keep track of games I own or want to play.
- **AAU,** I want to see a list of all games in my catalog so that I can review what I have tracked so far.
- **AAU,** I want to update the details of a game (e.g., change the status of completed or not completed) so that I can keep my catalog accurate and up to date.
- **AAU,** I want to remove games from my catalog I no longer own or have completed. 



#### Stretch Goals
- AAU, I want to be able to see game box art and images of the videogame.
- AAU, I want to be able to add future games I plan to buy or play in the future.
- AAU, I want to be able to share my game catalog with my friends.


#### Timeline - Daily Accountability

Timeline:
| Day        |   | Task                               | Deliverables          |
|------------|---|------------------------------------|-----------------------|
| Friday     |   | Create & present proposal          | Initialized Project   |                 
| Monday     |   | Create & present proposal          | Initialized Project   |                 
| Tuesday    |   | Database setup                     | Setup Database        | 
| Tuesday    |   | Authenticating                     | Registration          |   
| Wednesday  |   | Data modelling                     | Schemas & models      |                 
| Thursday   |   | CRUD implementation                | Routes setup          |                 
| Thursday   |   | CRUD implementation                | Create & Update       |                 
| Friday     |   | CRUD implementation                | Add & Delete          |                
| Friday     |   | Frontend Setup                     | EJS setup             |                 
| Saturday   |   | Frontend Setup                     | EJS setup             |                 
| Sunday     |   | Testing & Deployment               | Testing Phase         |                 
| Monday     |   | Testing & Deployment               | Test & Delpoyment     |                 
| Tuesday    |   | Presentation day                    | Fully deployment      |                 

#### References:
- https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
- https://www.geeksforgeeks.org/css-tutorial/?ref=gcse_outind
- Chat GPT 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
- https://generalassembly.instructure.com/courses/573/assignments/11966
- https://tympanus.net/codrops/css_reference/#section_css-property

  #### Deployed GameDex app
  - Deployed project link: https://gamedex-2d3236169dad.herokuapp.com/

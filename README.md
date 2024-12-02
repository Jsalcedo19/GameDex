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
 ![Page 1](https://github.com/Jsalcedo19/GameDex/blob/main/public/Page1%202.jpg)

- Registration Page
 ![Page 2](https://github.com/Jsalcedo19/GameDex/blob/main/public/Page2%202.jpg)

- Login Page
![Page 3](https://github.com/Jsalcedo19/GameDex/blob/main/public/Page3%202.jpg)

- Game Catalog Page
![Page 4](https://github.com/Jsalcedo19/GameDex/blob/main/public/Page4%202.jpg)


## User Stories
- **AAU,** I want to be able to register or log into the app using my email and password.
- **AAU,** I want to be able to log out
- **AAU,** I want to add a new game to my catalog by providing details such as title, type, and release date so that I can keep track of games I own or want to play.
- **AAU,** I want to see a list of all games in my catalog so that I can review what I have tracked so far.
- **AAU,** I want to update the details of a game (e.g., change the status of completed or not completed) so that I can keep my catalog accurate and up to date.
- **AAU,** I want to filter games by genre or platform so that I can focus on specific types of games. 



#### Stretch Goals

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
| Tuesday    |   | Presentatio day                    | Fully deployment      |                 

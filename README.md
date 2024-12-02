# GameDex

## Project Choice (Tell us which project you're doing!)

- [ ] GameDex 

## Project Description 
The Game Catalog App is a simple and user-friendly web application designed to allow users to manage their personal game library. The app enables users to add, view, update, and delete game entries while providing options for filtering and organizing their collection. Built with the MEN (MongoDB, Express, Node.js) stack, the app is lightweight, scalable, and optimized for simplicity and usability.

## Routing Table 

| HTTP Method (Verb) | Path/Endpoint/URI | CRUD Operation | Description                          |------------------ | --------------------- | ----------------------------- |
| GET | `/auth/sign`      | Read   | Displays form sign-in or sign-up.
| POST| `/auth/sign-up`   | Create | Adds sign-up form.
| GET | `/auth/sign-in`   | Read   | Displays sign-in form.
| POST| `/auth/sign-in`   | Create | Adds sing-in form.
| GET | `/auth/sign-out`  | Read   | Signs user out of page.
| GET | `/videogames`     | Read   | Displays a list of videogames.
| GET | `/videogames/new` | Read   | Shows a form to add.
| POST| `/videogames`     | Create | Adds a new videogame to the collection        
| GET | `/videogames/:videogameId`     | Read   | Displays specific videogame.
| POST| `/videogames/:videogameId/edit`| Read   | Shows form to edit specific videogame.
| PUT | `/videogames/:videogameId`     | Update | Updates specific videogame info.
| DELETE | `/videogames/:videogameId`  | Delete | Removes specific videogame from collection.                                            



## ERD Diagram
![alt text](image.png)       

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

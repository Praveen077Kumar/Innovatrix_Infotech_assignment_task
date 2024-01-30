# Innovatrix Infotech 🎆

An assignment task for "Innovatrix Infotech" using MERN stack development.



![Logo](https://blog.hyperiondev.com/wp-content/uploads/2018/09/Blog-Article-MERN-Stack.jpg)


## Features 🫰

-  The user signs up
-  The user logs in
-  user is able to add and update their name and age
-  Multiple users can register and sign in with different emails and passwords
-  Everyone should be able to update their name and age
-  Once the user updates the name or the age, it should show instantaneous effect.
-  authentication and authorization implimentation 
-  used redux , reduxToolKit from state Management 
-  used tailwind for better and easy integration of CSS classes


## Run Locally 🏃 🏃

Clone the project

```bash
  git clone git@github.com:Praveen077Kumar/Innovatrix_Infotech_assignment_task.git
```

Go to the project directory

```bash
  cd Innovatrix_Infotech_assignment_task
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## API Reference ✈️ 

#### Get items

```http
  GET /api/userdata/data/${user_id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user_id` | `string` | **Required**. Your API key  |



```http
  POST /api/userdata/create
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `body:{name,age}` | `string` | **Required**. access_token |


```http
  POST /api/userdata/update/${item_id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `body:{name,age,user_ref}` | `string` | **Required**. access_token |


## Lessons Learned
learned many things related to state managemnet and token uses, localStorage, persited data handling and many more.


## Screenshots 📷

![App Screenshot](./images/Screenshot%202024-01-31%20044102.png)

![App Screenshot](./images/Screenshot%202024-01-31%20044113.png)

![App Screenshot](./images/Screenshot%202024-01-31%20044205.png)


## Tech Stack 🧑‍💻

**Client:** React, Redux, ReduxToolKit, react-router-dom, Jsx, TailwindCSS

**Server:** Node, Express, Cors, Mongoose



##Thanks for Reading ME 👍 👍


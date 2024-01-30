
# Innovatrix Infotech

An assignment task for "Innovatrix Infotech" using MERN stack development.



![Logo](https://blog.hyperiondev.com/wp-content/uploads/2018/09/Blog-Article-MERN-Stack.jpg)


## Features

- The user signs up
- The user logs in
-  user is able to add and update their name and age
-  Multiple users can register and sign in with different emails and passwords
-  Everyone should be able to update their name and age
- Once the user updates the name or the age, it should show instantaneous effect.


## Run Locally

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


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express


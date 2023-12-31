# Wa-thakkir App

This is the back-end part of this app.
Wa-thakkir is an app for sharing Islamic teachings built with OOP vanilla JS, HTML5 and CSS3 bundled with Webpack in the frontend, Node.js/Express REST API that uses MongoDB for a database in the backend

![Screenshot of the app](https://github.com/mohammadmansour200/wa-thakkir-frontend/assets/137171976/bdffa382-62ad-4017-ba55-5465418aacfe)

## 💻 Demo

You can try it out by visiting the [live demo](https://wa-thakkir.onrender.com).


## ⚙️ Features

✅ Edit teachings route

✅ Create teachings route

✅ Delete teachings route

✅ Full error-handling


## 💻 Usage

### Install Dependencies

```bash
npm install
```

### Start server

```bash
npm start
```

or

```bash
npm run dev (Nodemon)
```

Visit `http://localhost:5000`

### Environment Variables

Rename `.env-example` to `.env` and add your MongoDB URI to the `.env` file.

```
MONGO_URI=your_mongodb_uri
```

## REST Endpoints

| Endpoint       | Description    | Method | Body                    |
| -------------- | -------------- | ------ | ----------------------- |
| /api/teachings     | Get all teachings  | GET    | None                    |
| /api/teachings/:id | Get teaching by id | GET    | None                    |
| /api/teachings     | Add teaching       | POST   | { text, tag, username } |
| /api/teachings/:id | Update teaching    | PUT    | { text, tag, username } |
| /api/teachings/:id | Delete teaching    | DELETE | username                |

When updating or deleting, the username must match the username of the teaching creator.

![](https://img.shields.io/badge/Microverse-blueviolet)

# Awesome Restaurants

> Check your region's top restaurants and make reservations to eat in them!


## Built With

- Major languages
    - JavaScript
    - Ruby
- Frameworks
    - React & Redux
    - Ruby on Rails
- Technologies used
    - Node.JS
    - VSCode
    - Git & GitHub
<!-- 
## Live Demo (if available)

[Live Demo Link](https://livedemo.com) -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- Ruby Version 2.7.3 or higher
- Rails Version 5 or higher
- Atom or VSCode 
- Git
- Node.js Version 14 or higher

### Setup

- Clone the repo by running `git clone https://github.com/fortuneonyeka/awesome-resturants.git`

### Install

- Open the created folder in your code editor
- In the editor's console:
    - Run `bundle install`
    - Run `npm install`
    - Run `rails webpacker:install` and say yes to any override request
    - Run `rails webpacker:install:react` nd say yes to any override request
    - Run `yarn install`


### Usage

- You can access the rails console via running `rails c`
- Run `rails s` to deploy the application locally
- Open http://localhost:3000/ in your browser

## API Guide

> Awesome Restaurants uses a Rails-powered API to send and receive information in the React front-end

### Endpoints

- /v1/signup 

This endpoint receives a POST action and requires no authentication token.
The body's format must be the following:

```
{
    "user": {
        "name": "JaneDoe",
        "password_digest": "12345"
        }
}

```

The request will return a confirmation message and an authentication key if the user has been successfully signed up. Otherwise it will return a list of the errors that prevented it from happening

- /v1/auth/login 

This endpoint receives a POST action and requires no authentication token.
The body's format must be the following:

```
{
    "user": {
        "name": "JaneDoe",
        "password_digest": "12345"
        }
}

```

The request will return a confirmation message and an authentication key if the user has been successfully logged in. Otherwise it will return a list of the errors that prevented it from happening

- /v1/reservations (GET)

This endpoint receives a GET action and requires an authentication token to resolve.

The request will return a list of the reservations the current user has made

- /v1/reservations (POST)

This endpoint receives a POST action and requires an authentication token to resolve.
The body of the request must be: 
```
{
    "start_time": "Thu Feb 10 2022 13:34:57 GMT-0300",
    "end_time": "Thu Feb 10 2022 14:34:57 GMT-0300",
    "resturant_id": 3
}
```
The request will return a confirmation message if the reservation has been successfully booked. Otherwise it will return a list of the errors that prevented it from happening.

- /v1/reservations/:id

This endpoint receives a DELETE action and requires an authentication token to resolve.

The request will delete the reservation with the given ID and send a confirmation message if succeded. Otherwise it will return a list of the errors that prevented it from happening.

- /v1/restaurants (GET)

This endpoint receives a GET method and doesn't require authentication

Upon request it will return a list of all restaurants stored in the database

> The following endpoints are yet to be implemented

- /v1/restaurants (POST)

This endpoint receives a POST method and doesn't require authentication
The body must have the following format:
```
{
    "name": "John Doe's Palace"
    "description": "Lorem Ipsum Dolor sit amet"
    "location": "here, next to there"
    "rating": "1" (use numbers form 1 to 5)
}
```
Upon success at creating the new restaurant, you'll receive a confirmation message. Otherwise, you'll get a list of the errors that prevented it.

- /v1/restaurants/:id

This endpoint receives a DELETE action and doesn't require an authentication token to resolve.

The request will delete the restaurant with the given ID and send a confirmation message if succeded. Otherwise it will return a list of the errors that prevented it from happening.


## Authors

👤 **Ihedoro Fortunatus Onyekachi**

- GitHub: [@fortuneonyeka](https://github.com/fortuneonyeka)
- Twitter: [@FortuneOnyeka](https://twitter.com/FortuneOnyeka)
- LinkedIn: [Fortunatus Ihedoro O](https://www.linkedin.com/in/fortunatus-ihedoro/)

👤 **Azeez Rotimi Arigbabuwo**

- GitHub: [@githubhandle](https://github.com/rotimiazeez)
- Twitter: [@harzeyzh](https://twitter.com/harzeyzh)
- LinkedIn: [Azeez Rotimi](https://www.linkedin.com/in/azeezrotimi019/)

👤 **Tiago Rahal**

- GitHub: [@tiagorahal](https://github.com/tiagorahal)
- Twitter: [@RahalAires](https://twitter.com/RahalAires)
- LinkedIn: [Tiago Rahal](https://www.linkedin.com/in/tiagorahal/)

👤 **Julian Carracedo**

- GitHub: [@JuliCarracedo](https://github.com/JuliCarracedo)
- Twitter: [@CarracedoTrigo](https://twitter.com/CarracedoTrigo)
- LinkedIn: [Julian Carracedo](https://www.linkedin.com/in/julian-carracedo/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is MIT licensed.
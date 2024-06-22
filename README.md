## Architecture

We are using hexagonal architecture
Note the projects are splited in "entities" (in this case, pages), following DDD

You will find three different posible folders, besides the ones created following DDD

1. infra
2. domain
3. application

Domain does not know anything else than just the domain and itself
Application just knows of domain and application
Infra knows from infra, domain and application

## Technologies used

1. Vite does not allow ejecting the project. From the interview I understood that the project configuration is on us, so I decided to create it with create-react-app, as it allows ejecting and getting decoupled from the tool

2. We are using javascript and not typescript, as I understood you don't use it in the project

3. I am using websockets for several reasons:
   - this is what is recommended in the documentation
   - we need the framework getting updated, so better off letting the backend handle it, and we just get subscribed from the frontend

## Available Scripts

### `npm start`

Start the project

### `npm run eject`

Get decoupled from create-react-app

### `npm run lint`

Make visible the linter checks

### `format`

Solve for linter errors

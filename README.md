# TGE - Trybe Github Evaluator

<img src = "https://img.shields.io/website-up-down-green-red/http/monip.org.svg"/>

Front-end application in ReactJS that evaluates a GitHub user profile on 10 criteria and assigns a grade to it.

## Technologies used
[React](https://reactjs.org/) single-page application
- Routing is done using [React Router](https://reacttraining.com/react-router/web/guides/philosophy)
- State management via [Hooks](https://reactjs.org/docs/hooks-intro.html)
- Scroll animations with [aos](https://github.com/michalsnik/aos)
- Stylization done with [Tailwindcss](https://tailwindcss.com) and [PostCSS](https://postcss.org)
- Build done with [ViteJs](https://vitejs.dev)

### Architecture diagrams

![diagram](https://github.com/irahel/Trybe-Github-Evaluator-Front/blob/main/img/diagram.png?raw=true)

## Setup

1. Clone the repository and install the dependencies
```bash
npm install
```
2. Start the frontend application locally
```bash
npm run dev
```

## Routes

This project is using [`react-router-dom v6`](https://reacttraining.com/react-router/core), have a look at `/routes` which is the directory that defines the available routes.


```bash
/
```
- Represents the initial route and loads the index page

```bash
/aval
```
- Represents the evaluation page and shows the user grade and specific criteria.

## Contributing

Feel free to contribute to this project, first fork this repository, then code your suggestions and open a pull request.

> Or consider opening an issue on GitHub.

![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
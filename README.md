Talentica software presents:

#Form builder.

###starring *REACT* and *REDUX*

with...

- [Webpack](http://webpack.github.io/docs/)
- [Babel](http://babeljs.io/docs/setup/#installation)
- [Flow](https://flowtype.org/)
- [React-router](https://react-router.now.sh/)
- [React-bootstrap](https://react-bootstrap.github.io/getting-started.html)
- [W3 CSS Themes](http://www.w3schools.com/w3css/w3css_color_themes.asp)

and...

- [React-DnD](https://gaearon.github.io/react-dnd/) by Dan Abramov.


Setup
---

You'll need the node package manager. Download the source code and run

```
npm install
```



Usage
---

Start the development server with this command:

```
npm start
```

You can see your app running on http://localhost:3000/


Credits
---

The setup was created from scratch using Andrew Farmer's build-your-own-startup [tutorial](http://andrewhfarmer.com/build-your-own-starter/#0-intro). Apart from the official docs of the tools mentioned, Brad Westfall's [blog posts](https://css-tricks.com/learning-react-router/) were very helpful. The folder structure was inspired by the popular [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit), although their code wasn't used.

Documentation
---

The app uses ES6 and JSX syntax, which are both transpiled to plain-old JS using Babel. Flow is a dev-dependency for type-checking. Typescript isn't used anywhere.

`www\index.html` contains a single div in which the react app is mounted.

`src\main.js` is currently the entry point of the application. It uses react-router to render different componets on different routes. Routes are managed using hash-history.

The app has a fractal folder structure with separate folders containing containers and presentational components for each route.

`src\routes\app\AppContainer.js` houses the actual app. It is the `DragDropContext` required by react-DnD.

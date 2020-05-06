## Card Catalog

A code sample to connect with the Elder Scrolls Legends API. Results are shown in a responsive grid format. Results return in grous of 20 cards and the user should experience an nfiniate scroll effect. Cards may also be searched by Name. 

The project is built with React.  
Dependencies:  
Node >= 8.10  
npm >= 5.6  

Node can downloaded from the Node website, npm will install with it.  
https://nodejs.org/en/

You can check your versions with  
node -v  
npm -v  

Clone the Repository  
`git clone https://github.com/HeatherB/catalog.git`

Cd into your repository and install the dependencies  
`npm install`

Run the project   
`npm start`

The site should load in your default browser, at this url   
http://localhost:3000/


When ready to deploy to production, create an optimized build in the build folder  
`npm run build`



## Other Notes

## Axios?
Axios is a promis-based HTTP client for the browser and Node.js
https://github.com/axios/axios

Axios is popularly used in React, and is similar to the Fetch API. However, Axios is considered to have some advantages over the Fetch API. Axios will automatically transform data in JSON, it supports older browsers, the ability to cancel requests and track upload progress.

To use Axios, we need to install it and save it to our package.json
In the terminal, navigate to the project folder and enter this command
 `npm install axios --save`



## Node-Sass
install node-sass to provide support for SASS (sassy css)
To use Node-Sass, we need to install it and save it to our package.json
In the terminal, navigate to the project folder and enter this command
 `npm install node-sass --save`

When we build the app, required vendor prefixes will be automatically added. The vendor prefixes used are determined by the 'browserslist' on the package.json

If we follow the naming convention of [name].module.scss, we can use it as a CSS Module. The [name] needs to be the name of the stylesheet, and it will provide a unique scope for the styles. In our Component file, we need to import the library with a command like 
import { name } from './Name.module.scss';

we then use that [name] as a class name in our returned markup and the stlying will apply.

## Intersection Observer
https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
This is a native browser feature that can be a good alternative to adding and event listener for scrolling.
Listening for scrolling can be pretty intensive on the javascript, and make the page run slowly or janky. The Intersection Observer allows us to pay attention to specific element and if it changes, trigger a callback function. I use it to produce the infinite scroll for the card catalog.



## JSX
Learn more about JSX
https://reactjs.org/docs/introducing-jsx.html

JSX is a syntax expression to Javascript. Also popular usage in React.
You may wrap any valid javascript expression inside urly braces for use in JSX, and its pretty useful for embedding results and you can treat it a little like templating.


## NPX
npx is an alternative command to npm
npx is apackage runner tool and it will pull the latest packages from the npm registry
if you are running npm 5.2+, npx will be available for use

At the bottom of the Component files, we need to export so that we may import in another file
The syntax is 
export default [classname]



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

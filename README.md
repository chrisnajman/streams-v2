# Streams V2
Part 2 of streaming app.
From [Modern React with Redux (2019 Update)](https://www.udemy.com/course/react-redux/)

## V2 Features
- Json Server API
- Redux Thunk
- REST
- Redux Form
- React Router
- React Portals

Note: run `npm install` in both 'client' and 'api' folders.

## V1
State moved to Redux store. `App.js` (or any other component) can now access the `isSignedIn` prop and display e.g. extra content if `isSignedIn === true`.

### Google

- create project at [Google Developer Console] (https://console.developers.google.com/)
- Enter project name and originating URL on Oauth Consent Screen
- Get Credentials
- Copy Client Id token

### Create React App

#### /src/GoogleAuth.js
Add your `clientId` token inside `componentDidMount()`.


You can now sign in/out with Google.

Navigate to /streams/new to see form created with **Redux Form**.



### Redux Dev Tools

#### Debug Session
http://localhost:3000/?debug_session=randomstring

will persist store even after page refresh.

You can name sessions:

http://localhost:3000/?debug_session=logged_in
http://localhost:3000/?debug_session=logged_out

Delete string after use.
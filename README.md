# YouTube
search and filter functionality

This is a small web app smiliar to youtube and its functionalities as search and filter consuming data from Youtube Api/V3 .

This app is built by Vite module bundler.

--> The app this not totally finised or in the perfect shape due to lack of time , Tests, enhancements, fix github actions workflow and husky precommit and UI fixes need to be done. 

-- run "yarn dev" to start the app

 You need to generate youtube API-KEY and use inside the the searchActions.ts inside action creator dir in the appstate

 folder instead of  ${process.env.API_KEY}.

-- run "yarn test" to execute a unit test 

Unit tests in the project is for the components

-- run "yarn test-ui" to execute E2E test

E2E test is for screens 


## App Tech Stack:

This web app was built with reactjs with typescripts and Sass

## Dependecies

redux, redux-thunk, moment, react-device-detectable, immer, eslint,fortawesom, prettier, axios, jest, @testing-library,

husky, redux-mock-store, playwright

# App Structure 

App state folder: contain redux actions,types and reducers

copmonents folder: contain some subfolders like 
            
   global:components that can be used in the whole app
           
   other components: used in the screen folder
           
Screen: contain the screens of the app 

utils: contain a file with some helper functions

types: contain app types

# App Architecture

I followed Flux Arch which is the same Arch as redux data flow, I follow the guidelines of css and js as much as I can.

I added husky precommit to run eslint and prettier

# App Design

I followed the design as much as I dont have assets or aspect ratio and still need alot of adjustment.

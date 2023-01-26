# YouTube
search and filter functionality

To start the app run "yarn dev"

-- tha app this not totally finised or in the perfect shape due to lack of time.

This is a small web app smiliar to youtube and its functionalities as search and filter consuming data from Youtube Api/V3 .

## App Tech Stack:

This web app was built with reactjs with typescripts and Sass

## Dependecies

redux, redux-thunk, moment, react-device-detectable, immer, eslint,fortawesom, prettier and axios

# App Structure 

App state folder: contain redux actions,types,reducers

copmonents folder: contain  some subfolders like 
            
           global:components that can be used in the whole app
           
           other components: used in the screen folder
           
Screen: contain the screens of the app 

utils: contain a file with some helper functions

types: contain app types

# App Architecture

I tried to follow Flux Arch which is the same as redux data flow, and follow the guidelines of css and js as much as I can. plus add husky precommit to run eslint

and prettier.

# App Design

I followed the design as much as I dont have assets or aspect ratio.

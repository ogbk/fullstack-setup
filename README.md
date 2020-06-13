# Karate Profile

## Tech stack

- React
- Flow - static typechecking tool
- Sass - css preprocessor
- Eslint - code linter
- Jest & Enzyme - React testing tools
- Redux
- React Router

## App structure

- main component : ```<App/>```
- sub components: ```<Profile/>``` , ```<NotFound/>```

## Coding techniques / styles

## App enhancement

## Application

When it starts, user can select one of 2 profiles:
- mine (Ogbu Olu) -> main purpose of the application
  - displays a profile picture and some data via `<Profile/>` component
- another (Chuck Norris) -> 
  - this profile record is deliberately not stored on `profiles.json` [ server data ]
  - So the app handles this missing record, sending an appropriate `<NotFound/>` component
  - (And besides, Chuck Norris is great in judo and brazilian jiu-jitsu, not karate ;))

App also assumes:
  - server (api) has `assets/img/` folder where the `req.params.id` extracted from express `req.url` corresponds to a particular jpeg image file.

  - each profile corresponds to a unique id ==> `req.params.id`

## Running

- If necessary, change the following default ports in the files below:
  - server port (4000): `.env`, `server/api/index.js`
  - client port (8080): `.env`

- Clone or download the application
- ```git clone``` or download this repository
- ```cd ____``` or ```cd ____-master```
- ```yarn install``` to download required packages (client-side)
- ```yarn server-install``` to download required packages (server-side)
- ```yarn start``` to run the application ==> it opens up a new browser


## Linting

- ESLint `yarn eslint`
- Sass lint `yarn sass-lint`


## Static typechecking with Flow

- Stop flow server `npm run flow stop`
- Start flow server `npm run flow start`
- Run flow `npm run flow status`


## Testing with jest & enzyme

- test: `yarn test`

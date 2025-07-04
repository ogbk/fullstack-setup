# Karate Profile

## Tech stack

- React
- Sass - css preprocessor
- Eslint - code linter
- Jest & Enzyme - React testing tools

- I did not use the following (app was fairly simple, no need for these):
  - Redux
  - React Router

## App structure

- main component : ```<App/>```
- sub components: ```<Profile/>``` , ```<NotFound/>```

## Coding techniques / styles

## App enhancement

## Application

When it starts, user can select a profile --> search list is imported from `components/utils/search.json`
- Ogbu Olu -> 
  - show profile and picture via `<Profile/>` component
- Chuck Norris -> 
  - this profile record is deliberately not stored on `profiles.json` [ server data ]
  - So the app handles this missing record, sending an appropriate `<NotFound/>` component
  - (And besides, Chuck Norris is great in judo and brazilian jiu-jitsu, not karate ;))
- Jet Li ->
  - profile is stored
  - profile picture is not stored

App also assumes:
  - server (api) has `assets/img/` folder where the `req.params.id` extracted from express `req.url` corresponds to a particular jpeg image file.

  - each profile corresponds to a unique id ==> `req.params.id`

## Running

- If necessary, change the following default ports in `.port_config.js`:
  - server [ 4000 ] & client [ 8080 ]

    Alternatively, store this info in an `.env` file.
    ( Remember `.env` files are generally not committed on git )

- Clone or download the application
- ```git clone``` or download this repository
- ```cd ____``` or ```cd ____-master```
- ```yarn install``` to download required packages (client-side)
- ```yarn server-install``` to download required packages (server-side)
- ```yarn start``` to run the application ==> it opens up a new browser


## Linting

- ESLint `yarn eslint`
- Sass lint `yarn sass-lint`



## Testing with jest & enzyme

- test: `yarn test`

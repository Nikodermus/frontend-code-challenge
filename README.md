# Front-end Code Challenge - React

This is a boilerplate for a code-challenge meant for Front-end engineers using React as library tool for development. It includes all necessary HTML and CSS, so your work is to focus on the development of the app. Please fork this repository in your own account.

### For other technologies

Switch to the branch of the technology of your expertise and follow the README:

```bash
git checkout [react-native|angular]
```

## How to use

```bash
git clone https://github.com/Nikodermus/frontend-code-challenge.git
cd frontend-code-challenge
npm install
npm run start
```

The app will be available in your browser at `localhost:3000`

## Challenges

These are a series of features the app should do, here they are sorted in the priority they have, if you feel unable to complete one you can continue with the next one in hope to do as much as possible in given the time scope.

1.  Fetch the given `.json` file inside `src/App.jsx` when the user writes in the input
1.  Filter the results given user input, it can be searched by `Name` or one of its `Types`
1.  Results should be not more than 4 at any time.
1.  Sort elements first if the match the `Name`, then if they match the `Type`
1.  User can toggle on/off to sort by maximum combat points (`MaxCP`), this will take effect on the whole list, but you should only show the first 4 elements that match the current search
1.  If the search matches a part of the name, that part of the name should be hightlighted
1.  While the list is being downloaded, show the loader.
1.  If there're no results, show the `No Results` badge

## Development

- You can use internet, other projects, textbooks and whatever you think you need to complete the task, work as you usually would.
- Please speak as you develop, this in order to understand better what you are trying to do.
- You can ask questions if you need to, but try to refer to this document in first place, should have all what you need.
- You can create as many components in the fasion you want (classes, stateless functional components, react hooks).
- This setup uses EcmaScript Stage 4, you can use destructure, rest syntax, etc... This project is meant to be written with ES6+ standard.
- Do not add dependencies.
- Do not spend time in configuration, babel, webpack. This project has enough for its purpose and time is short.

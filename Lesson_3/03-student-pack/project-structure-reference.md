# Lesson 03 Project Structure Reference

Use this guide when the lesson asks you to identify the purpose of the generated files and folders.

## `App.js`
- This is the main file students edit in lesson 03.
- It contains the visible UI for the generated starter app used in this lesson.
- When you change text, layout, or colors here and save the file, the running app should update.

## `app.json`
- This is a configuration file for the Expo project.
- It stores project details such as the app name and slug.
- **slug** means the short project identifier Expo uses for the app configuration.
- Students may edit it later, but it is not the first place to change visible UI.

## `package.json`
- This file lists project dependencies and script commands.
- **dependencies** means the libraries the project needs in order to run.
- **scripts** means the named terminal commands the project makes available, such as `npm start`.
- In this lesson, students mainly use it to understand what packages are installed and what the start command means.
- Students should read it more often than they edit it at this stage.

## `assets/`
- This folder stores static files such as images.
- It is part of the normal project structure even if students do not use it heavily in lesson 03.
- It becomes more important once the app starts using images and other media.

## `node_modules/`
- This folder contains installed packages for the project.
- It is created by the dependency-install step.
- Students should not edit files in this folder directly.

## `package-lock.json`
- This file records the exact package versions installed for the project.
- It helps keep installs consistent.
- Students usually do not edit it manually.

## Simple mental model
- `App.js` is where today’s visible UI lives.
- `app.json` describes the project.
- `package.json` describes the tools and libraries.
- `assets/` stores files the app can use.
- `node_modules/` stores the installed code the project depends on.

## Workflow map
| Action | File or tool | Result |
| --- | --- | --- |
| Create project | terminal + `create-expo-app` | new project folder exists |
| Start app | terminal + `npx expo start` | Expo server starts |
| Edit UI | `App.js` | visible app text, layout, or color changes |

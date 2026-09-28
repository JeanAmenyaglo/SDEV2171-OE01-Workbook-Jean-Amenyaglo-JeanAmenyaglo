# Lesson 03 Project Creation Checklist

Use this checklist during class. Move in order and stop when one step is failing.

## Plain-Language Definitions
- **template**: the starter project structure created for you by Expo
- **entry point**: the main file where this lesson’s visible UI starts, `App.js`
- **launch path**: the emulator, simulator, or prepared device path used to open the app
- **reload**: the way the app updates after you save a code change
- **QR flow**: the QR code and scan step shown by Expo when a prepared device path is being used
- **approved recovery path**: the instructor-approved step you must finish before moving on if lesson-02 setup is still incomplete
- **development build**: an installed app built from your own project and used as the main course runtime

## Step 1: Confirm your lesson-02 baseline
- verify that `node --version` works
- verify that `npm --version` works
- verify that Node.js is version `22.13.x` or newer for the course SDK 56 baseline
- confirm you have at least one working launch path from lesson 02, or an approved recovery path

If `node` or `npm` is not found:
- stop here
- do not create the new project yet
- use issue 1 in [troubleshooting-checklist.md](troubleshooting-checklist.md)

If Node.js is older than `22.13.x`:
- stop here
- do not create the new project yet
- use issue 1 in [troubleshooting-checklist.md](troubleshooting-checklist.md)

Decision gate before Step 2:
- if you were `verified` in lesson 02, continue
- if you were `partial`, finish the recorded next action first
- if you were `blocked`, get instructor approval before creating a new project
- instructor pairing or a shared-device check from lesson 02 does not automatically mean you are ready to create your own project today

Recovery branch:
- use up to the first recovery window to finish the missing baseline step
- join the main sequence as soon as Node.js and one launch path are working
- if you do not recover in time, use the instructor reference project for file-structure and edit practice while keeping a recorded next step for your own project

## Step 2: Choose where the project will live
- open a terminal in the folder where you want to create the project
- choose a simple project name with no spaces
- make sure you understand which folder is your current working folder

## Step 3: Create the project
Run:

```bash
npx create-expo-app@latest lesson03-first-app --template blank@sdk-56
```

Why this exact command:
- `create-expo-app@latest` without an SDK-specific template still creates SDK 54 during the current transition period
- the course uses the `blank` template so the project structure stays small enough for lesson 03 and lesson 04

## Step 4: Move into the project folder
Run:

```bash
cd lesson03-first-app
```

Then confirm:
- `App.js` exists
- `app.json` exists
- `package.json` exists

## Step 5: Add dev-client support
Run:

```bash
npx expo install expo-dev-client
```

## Step 6: Create and install the development build
Run one of these:

```bash
npx expo run:android
```

or on macOS:

```bash
npx expo run:ios
```

## Step 7: Start the project
Run:

```bash
npx expo start
```

Wait until:
- the Expo server finishes starting
- the launch menu or app-open flow appears

## Step 8: Open the app on one working path
Preferred path for class:
- Android emulator with the installed development build, or
- iOS simulator on macOS with the installed development build

Launch actions:
- Android emulator: press `A` in the Expo terminal UI
- iOS simulator on macOS: press `I` in the Expo terminal UI

Use a physical device only if:
- your SDK 56 development-build device workflow was already prepared and verified

If your screen does not match the instructor reference exactly:
- that is expected
- the instructor reference app is a prepared demo variant
- your first generated starter app should still count as correct if it opens and your edit appears

## Step 9: Make one visible edit
- open `App.js`
- change one title, paragraph, or color value
- save the file
- watch for the running app to update

## Step 10: Confirm success
You are successful in this lesson when:
- the project is created
- the app opens on one path
- one saved change appears in the running app
- you can explain what `App.js`, `app.json`, and `package.json` do at a basic level

## Step 11: Leave a lesson-04-ready baseline
- keep the project folder
- keep one known-good `App.js` state that still runs
- do not replace the project with a different template
- make sure you can reopen the project next class

## If you are not successful yet
- identify the failing step number
- consult [troubleshooting-checklist.md](troubleshooting-checklist.md)
- record the exact error or symptom before trying a second fix

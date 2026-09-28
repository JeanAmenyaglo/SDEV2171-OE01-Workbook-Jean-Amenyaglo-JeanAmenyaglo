# Lesson 03 Troubleshooting Checklist

Use this guide when project creation or the first run stops working. Start by identifying the failing step.

## Issue 1: Node.js is missing or too old
Likely failing step:
- Step 1: confirm your lesson-02 baseline

Try first:
- run `node --version`
- run `npm --version`
- verify that Node.js is `22.13.x` or newer for Expo SDK 56
- if the version is older, update Node.js before creating the project

Evidence of improvement:
- version commands return real version numbers
- Node.js meets the lesson minimum

## Issue 2: The create command fails or creates the wrong baseline
Likely failing step:
- Step 3: create the project

Try first:
- confirm you used `npx create-expo-app@latest lesson03-first-app --template blank@sdk-56`
- confirm the project name has no spaces
- retry only after correcting the command

Evidence of improvement:
- the project folder is created
- the generated files appear in the new folder

## Issue 3: Expo server does not start
Likely failing step:
- Step 7: start the project

Try first:
- confirm you are inside the new project folder
- rerun `npx expo start`
- check whether the error points to Node.js version, missing dependencies, or a path mistake

Evidence of improvement:
- the Expo launch menu or QR flow appears

## Issue 4: The development build is not installed yet
Likely failing step:
- Step 6: create and install the development build

Try first:
- confirm `npx expo install expo-dev-client` completed successfully
- rerun `npx expo run:android` or `npx expo run:ios`
- read the first native-build error line before changing anything else

Evidence of improvement:
- the development build installs on the emulator, simulator, or prepared device

## Issue 5: The app does not open on your chosen path
Likely failing step:
- Step 8: open the app

Try first:
- confirm the emulator or simulator is already open
- press `A` for Android or `I` for iOS from the running Expo terminal UI
- retry the launch from the running Expo session
- switch to another approved path if your original path is not ready

Evidence of improvement:
- the app begins opening
- the generated starter app screen loads

## Issue 6: You saved `App.js`, but nothing changed
Likely failing step:
- Step 9: make one visible edit

Try first:
- confirm you edited the correct `App.js`
- confirm the file was saved
- make a bigger visible change such as the title text
- restart the app session if needed

Evidence of improvement:
- the visible text, layout, or color updates in the app

## Issue 7: You are trying many fixes without a clear pattern
Likely failing step:
- troubleshooting process itself

Try first:
- stop and record the exact failing step number
- write down the error or symptom
- try one fix only
- recheck before attempting anything else

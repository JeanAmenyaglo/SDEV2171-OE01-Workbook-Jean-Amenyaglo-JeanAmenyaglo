# Lesson 04 Guided Build Checklist

Use this checklist during class. Move in order and re-run the app after small changes instead of rewriting the whole screen at once.

## Plain-Language Definitions
- **nesting**: putting one component inside another component
- **container**: a component that groups other UI parts
- **core component**: a built-in React Native component such as `View` or `Text`
- **screen structure**: the arrangement of sections and components on the screen

Use these references while you build:
- [starting-state-reference.md](starting-state-reference.md)
- [starter-snippets.md](starter-snippets.md)

## Step 1: Confirm your lesson-03 baseline
- open the same Expo project from lesson 03
- run the app
- confirm `App.js` still loads successfully before you change larger sections

If the project does not run:
- stop here
- identify whether the issue is startup, launch path, or a broken `App.js`
- use [troubleshooting-checklist.md](troubleshooting-checklist.md)

Canonical starting state:
- a working lesson-03 project with `SafeAreaView`, `View`, and `Text` already present
- if your project is not in that state, use the instructor recovery app and record the changes you make yourself

## Step 2: Add `ScrollView`
- import `ScrollView` from `react-native`
- wrap the main screen content so the screen can scroll if the content grows
- save and confirm the app still renders

You should see:
- the app still runs
- the screen may look almost the same if the content is still short

Minimal syntax:
```js
<ScrollView>
  <View>{/* existing content */}</View>
</ScrollView>
```

## Step 3: Build structure with `View` and `Text`
- add one new content section using `View`
- place headings and body text inside `Text`
- confirm all visible strings are inside `Text`

You should see:
- one extra section on screen
- visible text still rendering correctly

## Step 4: Add `Image`
- import `Image`
- add one image block to a card or section
- make sure the image has a valid `source`
- make sure the image has visible width and height

Course image choice:
- use the shared remote URL from [starter-snippets.md](starter-snippets.md) unless the instructor gives a different source
- if the network blocks the image, continue the rest of the lesson and use another debugging example instead of stopping the build

You should see:
- one visible image block after saving

## Step 5: Add `TextInput`
- import `TextInput`
- add one input field for notes, reflection, or a short response
- confirm the field appears and accepts typing

You should see:
- one field that responds to typing

## Step 6: Check nesting and structure
- confirm the new sections are inside the intended parent `View`
- confirm the screen structure still makes sense from top to bottom
- move one block if the nesting is wrong

## Step 7: Make one small experiment
- change text length, image size, or section order
- observe what changes on screen
- keep the version that is easiest to understand

## Step 8: Do one debugging mini-loop
- temporarily remove the `Image` width or height
- observe what changes
- restore the size and confirm the image returns

Why this step exists:
- it gives you one real example of debugging a UI component during class

## Step 9: Confirm lesson success
You are successful in this lesson when:
- the app still runs
- the screen uses multiple core components
- you can identify where `View`, `Text`, `Image`, `ScrollView`, and `TextInput` appear
- you can explain one structure or nesting decision

## Step 10: Leave a lesson-05-ready baseline
- keep a known-good `App.js` state
- keep the screen structure readable
- do not remove the core components you just added
- leave at least one clear section that lesson 05 can style next
- expect some visual issues to remain, such as plain spacing, rough alignment, or simple text hierarchy

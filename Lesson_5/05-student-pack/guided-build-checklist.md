# Lesson 05 Guided Build Checklist

Use this checklist during class. Move in order and re-run the app after small style changes instead of rewriting the whole screen at once.

## Plain-Language Definitions
- **hierarchy**: the visual difference between more important and less important content
- **alignment**: how elements line up relative to each other
- **surface**: a visible container area such as a card or section block
- **layout**: the arrangement of components on the screen

Use these references while you build:
- [starting-state-reference.md](starting-state-reference.md)
- [starter-snippets.md](starter-snippets.md)
- [styling-reference.md](styling-reference.md)

## Step 1: Confirm your lesson-04 baseline
- open the same Expo project from lesson 04
- run the app
- confirm the screen structure still renders before you change styling

If the project does not run:
- stop here
- use this decision rule:
- if Expo starts but the screen code is broken, restore the last working `src/app/App.js`
- if the whole project does not launch in time for class progress, open `example/styling-reference/` and do today’s work there
- use [troubleshooting-checklist.md](troubleshooting-checklist.md)

Canonical starting state:
- a working lesson-04 project with `View`, `Text`, `Image`, `ScrollView`, and `TextInput`
- at least two visible content sections and one possible row or grouped block
- if your project is not in that state, use the instructor recovery app and record the changes you make yourself

## Step 2: Create a `styles` object
- import `StyleSheet`
- create `StyleSheet.create({...})`
- move at least one inline style or repeated style idea into the named styles object

You should see:
- the app still runs
- the code is easier to scan, even if the screen looks almost the same

## Step 3: Improve container spacing
- add or adjust `padding`, `margin`, or `gap`
- focus on the main container and one section surface first

You should see:
- clearer space between sections
- less crowded content

## Step 4: Improve text hierarchy
- style the title, section headings, and body text
- use `fontSize`, `fontWeight`, `lineHeight`, or `color`

You should see:
- headings and body text are easier to distinguish
- paragraphs are easier to read

## Step 5: Improve surfaces
- style one section or card with `backgroundColor`, `borderWidth`, `borderColor`, or `borderRadius`
- keep the change simple and readable

You should see:
- one section stands out as a clear grouped block

## Step 6: Improve alignment
- adjust one layout area with `flexDirection`, `alignItems`, or `justifyContent`
- use this on a row, image/text block, or grouped section

You should see:
- one part of the screen lines up more predictably

## Step 7: Make one small experiment
- compare two spacing values, two text sizes, or two alignment choices
- keep the version that is easiest to understand

## Step 8: Do one debugging mini-loop
- temporarily change a small row from `flexDirection: 'row'` to `flexDirection: 'column'`
- observe what changes
- restore the original direction and confirm the layout returns

Why this step exists:
- it gives you one real example of debugging a layout problem during class

## Step 9: Confirm lesson success
You are successful in this lesson when:
- the app still runs
- the screen is more readable than the lesson-04 version
- you can identify one spacing change, one text change, and one alignment change
- you can explain why one style change improved clarity

## Step 10: Leave a lesson-06-ready baseline
- keep a known-good `src/app/App.js` state
- keep the screen readable and stable
- leave at least two clear content sections that lesson 06 can later separate into screens
- before class ends, record which project you will carry into lesson 06:
- your own project with a saved working `App.js`, or
- the recovery app plus one written next step for restoring your own project

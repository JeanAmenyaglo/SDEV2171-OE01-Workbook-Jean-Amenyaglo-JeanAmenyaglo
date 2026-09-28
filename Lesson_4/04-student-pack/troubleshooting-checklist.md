# Lesson 04 Troubleshooting Checklist

Use this guide when the UI stops rendering correctly or a component does not behave as expected.

## Issue 1: The app fails to load after a component change
Likely cause:
- a syntax error
- a missing import
- a missing closing tag or bracket

Try first:
- check the most recent change only
- confirm every new component was imported from `react-native`
- look for a missing `)` `}` or closing component tag

Evidence of improvement:
- the app renders again
- the red error screen disappears

## Issue 2: Text is not showing where you expect
Likely cause:
- the string is not inside `Text`
- the text is nested in the wrong container

Try first:
- confirm all visible text is inside `Text`
- move the `Text` block into the intended `View`

Evidence of improvement:
- the text appears in the correct place

## Issue 3: The image does not appear
Likely cause:
- invalid image source
- missing width or height

Try first:
- confirm the `source` value is valid
- confirm the `Image` style includes visible width and height
- recheck the most recent image edit
- if the shared remote URL is blocked by the network, skip the image temporarily and continue the rest of the build

Evidence of improvement:
- the image block becomes visible

## Issue 4: The screen does not scroll
Likely cause:
- the content is not tall enough to require scrolling
- the content is not wrapped in `ScrollView`

Try first:
- confirm `ScrollView` was imported and used
- add more text temporarily to test scrolling
- confirm the main content is actually inside the `ScrollView`

Evidence of improvement:
- the screen scrolls when content is taller than the display

## Issue 5: The input field appears, but the layout looks wrong
Likely cause:
- the `TextInput` is nested in the wrong container
- spacing or section order is confusing

Try first:
- move the `TextInput` into the intended section
- compare the screen structure to the guided build order
- change one container at a time

Evidence of improvement:
- the input field appears in the expected section

## Issue 6: Too many things changed at once
Likely cause:
- multiple edits were made before rechecking the app

Try first:
- stop and identify the last known-good state
- compare the newest section to the last working version
- fix one small problem before changing anything else

Evidence of improvement:
- you can explain which specific edit caused the issue

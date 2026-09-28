# Lesson 05 Troubleshooting Checklist

Use this guide when styling changes do not behave the way you expect.

## Issue 1: The app breaks after a styling edit
Likely cause:
- a syntax error in the `styles` object
- a missing comma, brace, or quote
- a style name that does not exist

Try first:
- check the most recent style edit only
- confirm the `styles` object syntax is complete
- confirm the component uses the correct named style

Evidence of improvement:
- the app renders again
- the error screen disappears

## Issue 2: Spacing changes do not appear
Likely cause:
- the style is attached to the wrong component
- the wrong spacing property was changed

Try first:
- confirm the style is attached to the intended parent container
- check whether `padding`, `margin`, or `gap` is the property you actually need
- recheck the smallest changed area first

Evidence of improvement:
- sections or rows visibly separate more clearly

## Issue 3: Text still looks hard to read
Likely cause:
- font size changed without matching line height
- hierarchy is too similar across headings and body text

Try first:
- adjust `fontSize` and `lineHeight` together
- increase contrast between title and body styles

Evidence of improvement:
- headings and paragraphs are easier to distinguish

## Issue 4: Alignment looks wrong
Likely cause:
- the parent container uses the wrong `flexDirection`
- `alignItems` or `justifyContent` changed on the wrong axis

Try first:
- confirm the current `flexDirection`
- change one alignment property at a time
- inspect the parent container before changing the child

Quick reasoning example:
- if `flexDirection` is `row`, `justifyContent` moves items left-to-right and `alignItems` moves them up-and-down
- if `flexDirection` is `column`, `justifyContent` moves items top-to-bottom and `alignItems` moves them left-to-right

Evidence of improvement:
- the row or group lines up more predictably

## Issue 5: The layout feels inconsistent
Likely cause:
- too many one-off style values
- sections were styled independently without a shared pattern

Try first:
- compare repeated sections and normalize their spacing
- reuse one style pattern for similar surfaces or text groups

Evidence of improvement:
- repeated sections look more consistent

## Issue 6: Too many style changes happened at once
Likely cause:
- multiple edits were made before rechecking the app

Try first:
- stop and identify the last known-good state
- recheck the newest style group only
- fix one issue before trying another change

Evidence of improvement:
- you can explain which specific style change caused the problem

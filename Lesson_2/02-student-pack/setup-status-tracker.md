# Lesson 02 Setup Status Tracker

Fill this out during class and bring it back for lesson 03 if your setup is not fully verified.

## Student Status
- Name: Jean Amenyaglo
- Date: September 7, 2026
- Verification path attempted:
  - Android emulator with development build

## Current Status
Choose one:
- `verified`

## Furthest Successful Step
Completed Step 8 (Confirm success): built and installed the development client with `npx expo run:android`, started the Expo server with `npm run start`, opened the app on the Android emulator, and confirmed the verification checklist screen renders and responds to taps (all four checklist items completed; in-app status shows "verified").


## Current Blocker
None currently and fully verified. Two blockers were hit and resolved during setup, noted here as evidence:
1. Android build failed with `CreateProcess error=2` (a Windows path-length limit) when building from a deeply nested project folder. Resolved by moving the project to a short path (`C:\rn\environment-check-app`) and rebuilding.
2. After a successful build, the app opened to Expo Router's "Unmatched Route" screen. Cause: `src/app` had no `index` file (only `_layout.tsx` and `App.js`). Resolved by adding `src/app/index.js` containing `export { default } from './App';`.


## Next Required Action
None required, now ready to begin lesson 03.

## Instructor Follow-Up
Instructor completes this section during or after the checkpoint.
- immediate in-class help needed:
- okay to continue in lesson 03:
- needs alternate verification route:

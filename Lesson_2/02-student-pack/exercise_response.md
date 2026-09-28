# Environment Verification and Troubleshooting Reflection

**Name:** Jean Amenyaglo
**Course:** SDEV2171 — Mobile Application Development
**Date:** September 7, 2026

## Part 1: Setup Status Snapshot

**Status:** `verified`

**Verification path used:** Android emulator with a development build

**Furthest successful step completed:** Completed Step 8 of the setup checklist — the verification app built successfully, installed on the emulator, opened, rendered the verification screen, and responded correctly to touch input. All four in-app checklist items were confirmed and the app's own status indicator showed `verified`.

**Next required action:** None required — ready to begin lesson 03.

## Part 2: Workflow Explanation

Verification is necessary because it proves that the entire toolchain actually works together, not just that each tool is installed. You can have every tool correctly installed and still fail — for example, if the project's file path is longer than what Windows allows, or if a required file is missing from the app's own code, as happened in my setup. Verification confirms that all ten connected pieces of the toolchain are correctly installed and correctly wired together on this specific machine, meaning it's genuinely ready for real development work, not just technically set up on paper.

One key difference is that Expo Go is a generic, pre-built app anyone can download from the app store, which can run many different Expo projects as long as they only use standard built-in features. A development build, on the other hand, is a custom app compiled specifically for one project — which is why the emulator's app drawer showed an icon named "environment-check-app" rather than "Expo Go." In my case, the terminal explicitly offered a choice between the two (`Using development build (Press s to switch to Expo Go)`), and the course's checklist specifically required the development build path since it's more reliable for the current SDK version.

Testing on an emulator gives the flexibility to simulate different devices and OS versions from a single computer, without needing the physical hardware. Testing on a physical device restricts testing to that one specific device, and — based on my setup checklist — it also requires extra preparation beforehand (an SDK 56-compatible device workflow set up in advance), whereas the emulator path was ready to use as soon as it was created in Android Studio's Device Manager.

The course uses a shared verification app and setup baseline (Expo SDK 56, specific Node.js and React Native versions) so that everyone is troubleshooting the exact same known-working configuration, rather than each student's own varying setup. This matters practically too — the lesson slides specifically warn that running `create-expo-app@latest` without an SDK-specific template currently still creates an SDK 54 project instead of SDK 56, which would silently put a student on the wrong version without them realizing it. A shared baseline avoids version-mismatch bugs that have nothing to do with what's actually being taught, and it means instructor help and troubleshooting guides can assume the same environment for everyone instead of debugging each person's unique combination of versions.

## Part 3: Troubleshooting Reasoning

**Issue 3 — Expo server starts, but the app does not open on the device**

*Likely failing step:* Step 6, "open the app."

*First troubleshooting action:* Confirm you are using the correct device path and connection workflow — for example, checking whether you're trying to open a project via Expo Go when it was actually built as a development build (or the reverse). Since a development build is a custom-compiled app specific to one project, while Expo Go is a generic pre-built app, trying to open the wrong one for what the server expects would explain why nothing appears even though the server is running.

*Result that shows it worked:* The app begins opening, or the launch flow visibly changes after retrying with the correct device path/runtime combination — matching what the checklist calls "evidence of improvement."

**Issue 5 — Code changes do not appear**

*Likely failing step:* Step 7, "confirm success."

*First troubleshooting action:* Confirm the file was actually saved (Ctrl+S), and verify you're editing the file inside the currently running project folder — this is especially relevant in my case, since I have more than one copy of this project on disk (the original nested folder and the renamed `C:\Mobile App Dev` copy), and editing the wrong one would mean the running server never sees the change no matter what else I try.

*Result that shows it worked:* The screen visibly refreshes or updates with the edited content after saving — Expo's "Fast Refresh" normally applies JavaScript changes automatically without needing a manual restart, so if changes still don't appear after confirming the save and correct folder, restarting the app session is the next step.
---
sidebar_position: 6
sidebar_label: 💡 Suggestions and Bugs
title: Suggestions and Bugs
---

# Suggestions and Bugs
Do you have a suggestion or a bug report for the server? Please submit them on the [Discord](https://discord.hexarchon.net/)!

:::warning
**The in-game chat is NOT the right place to submit suggestions or bugs.** As much as we would love to read in-game chat 24/7, we cannot always do so. However, if they are submitted on the Discord, it is *guaranteed* that we will see it.
:::

## 💡 Submitting a Suggestion
To submit a suggestion, head over to the #bot-commands channel on the [Discord](https://discord.hexarchon.net/) and use the `-suggest Your Suggestion Here` command. Please note that suggestions are a courtesy and are not guaranteed to be accepted - some suggestions may be out of reach or not be possible. Suggestions can take a while to be implemented, as we prioritize Bug Reports and other planned features first.

## 🐛 Submitting a Bug Report
To submit a bug report, head over to the #bot-commands channel on the [Discord](https://discord.hexarchon.net/) and use the `-bugreport Your Bug Report Here` command.

### ⭐ Important: PLEASE make sure that your bug report follows one of the following formats:
1. **(Preferred)** Provide a short description of the bug, and add a link to a video/GIF of your game showing how to replicate the bug (Using YouTube, Imgur, Tenor, Gyazo, etc.)
2. Provide a description of the bug, and an *in-depth step-by-step* description of how to replicate the bug.

:::info
A video is *REALLY* worth a trillion words.
:::

### *Why?* We need to be able to reliably replicate the bug ourselves in order to fix it.

The bug fixing process (not limited to the server, but **in the entire field of Computer Science**) follows these steps:
1. Try to replicate the bug reliably. This will help find out *what* is causing the issue, and *where* to look at (in the code) to fix this issue, and help us ensure that a bug is fixed when we implement a fix.
2. Using the findings from step 1, we go look at the relevant code to find the issue and propose a fix.
3. We test if the bug was fixed, following the exact same steps provided. If the bug is not fixed, we go back to step 2.

Thus, **providing a constructive, detailed bug-report is EXTREMELY IMPORTANT** in fixing bugs. It helps *everyone* involved - it helps us fix the bug, it saves our time, and it also saves *your* time.

### ❌ Example (What NOT to do):
**Player:** I have a bug with dungeons <br />
**Staff:** What is the bug? <br />
**Player:** The door doesn't open <br />
**Staff:** What dungeon is this? <br />
**Player:** Feriah Caverns <br />
> *The staff spends the next hour trying to replicate the bug, just to be unsuccessful.* <br />

**Staff:** We can't replicate the bug, you can report the bug if it happens again. <br />
**Player:** It happened again <br />
**Staff:** Any more details? What do you do? How do you open the door? <br />
**Player:** I just click on the lodestone, and it doesn't work <br />
> *The staff spends several more hours trying to replicate the bug, testing many different theories, just to be unsuccessful.* <br />
> *The staff implements a potential fix, but since they're unable to replicate the issue themselves, they don't know if the fix works or not. They also don't know if the fix is in any way related to the cause of the bug or not.* <br />

**Staff:** Try to see if it's fixed now. <br />
**Player:** It's still not fixed <br />

> *The staff implements another potential fix, but still knows nothing about what causes the bug and still cannot test the fix since they're unable to replicate the issue.*

**Staff:** How about now? <br />
**Player:** It's still not fixed <br />

> *At this point, both the staff and the player is frustrated. This bug report has not gone anywhere, despite hours of work from the staff and many back and forth conversations.* <br />

**Result: The bug takes months to be eventually fixed, or is NEVER fixed.** <br />

### ✅ Example - With Video (PLEASE DO THIS):
**Player:** I have a bug with the Feriah Caverns dungeon. The first door beside the Gatekeeper sometimes doesn't open. This happens after I do X, Y, and Z. Here is a video of it happening: https://youtube.com/watch?v=dQw4w9WgXcQ <br />
> *The staff looks at the video, and sees the EXACT steps necessary to replicate the bug. The staff deviates from the steps in the videos little by little to find out what exactly is causing the bug. The staff finds out what triggers the bug, looks into the relevant codebase, and comes up with a proposed solution. The staff implements this solution, and follows the exact steps shown again and see that the bug doesn't happen anymore.* <br />

**Staff:** This is fixed now. <br />

**Result: The bug is fixed in a day. There was no confusion in how to replicate the bug. There was no need for further clarifications or communications. A HUGE amount of time is saved for both the player and the staff, and both parties are happy.**

### ✅ Example - Detailed Description (Please do this ONLY if a video is not possible):
**Player:** I have a bug with the Feriah Caverns dungeon. The first door beside the Gatekeeper sometimes doesn't open. This happens when I first join the dungeon, place a Void Power Orb at the group of mobs at the entrance, and use a Mobility Hook to jump to the 2 spikes of the cavern right before the first gravel door besides the Gatekeeper. I kill the mobs with the Cryo Divinity skill, search the chest at the back corner (left of the door) besides the waterfall first, and then kill the Gatekeeper with an Ember Blade. I click the lodestone activator with the Ember Blade, and sometimes the door doesn't open. The Void Power Orb, Mobility Hook, Cryo Divinity, and Ember Blade that I use for my dungeon runs are in my inventory. <br />
> *The staff reviews this description to find the EXACT steps necessary to replicate the bug. The staff deviates from the detailed steps little by little to find out what exactly is causing the bug. The staff finds out what triggers the bug, looks into the relevant codebase, and comes up with a proposed solution. The staff implements this solution, and follows the exact steps shown again and see that the bug doesn't happen anymore.* <br />

**Staff:** This is fixed now. <br />

**Result: The bug is fixed in a day. There was no confusion in how to replicate the bug. There was no need for further clarifications or communications. A HUGE amount of time is saved for both the player and the staff, and both parties are happy.**

### ✅ Example - Simple Description (Please do this ONLY if a video is not needed to replicate the bug):
**Player:** I have a bug, I bought a Computer Chair furniture from `/shop` and didn't get it.

> *The staff buys the same furniture from /shop, and finds that they didn't get the item. The staff goes to look at the shop code, finds a problem, and fixes it.
The staff follows the same steps to buy the same furniture, and now gets the furniture in their inventory.*

**Staff:** This is fixed now. <br />

**Result: The bug is fixed in a day. Since there was an exact way to reliably replicate the bug, there was no need for further clarifications or communications.**
---
sidebar_position: 5
sidebar_label: 🪟 HUD Issues
title: HUD Issues
---

# HUD Issues
How to fix issues related to the Custom HUD.

## Health bar not loading / HUD looks messed up
If your health bar is not loading or your HUD looks messed up, it is likely caused by a 3rd party Minecraft client settings or mods that tweak GUI scales or boss bars.

### [Lunar Client Fix](./hud-issues.md#lunar-client-fix-1)
### [Feather Client Fix](./hud-issues.md#feather-client-fix-1)

### Example of a broken HUD:
![Lunar Client](./img/hud-issues/broken-hud.png) <br />

### Example of a properly functioning HUD:
![Normal HUD](./img/hud-issues/normal-hud.png) <br />

## Lunar Client Fix:
Make sure that ALL of these settings are set to fix the issue.

### 1. Lunar Options -> Settings Tab (at the top) -> Set Use Minecraft GUI Scale to "ALL"
![Lunar Client GUI Scale Setting](./img/hud-issues/LC-setting-guiscale.png) <br />

### 2. Lunar Options -> Mods Tab (at the top) -> Set Boss Bar to "ENABLED"
![Lunar Client Boss Bar Setting](./img/hud-issues/LC-setting-bossbar.png) <br />

### 3. Lunar Options -> Mods Tab (at the top) -> Boss Bar Options
![Lunar Client Boss Bar Setting](./img/hud-issues/LC-setting-bossbaroptions.png) <br />
### Set Scale to "1.00", Set Use Custom Boss Bar to "OFF"
![Lunar Client Boss Bar Setting](./img/hud-issues/LC-setting-bossbaroptionspage.png) <br />
### Click EDIT HUD LAYOUT at the bottom left corner
![Lunar Client Edit HUD Layout](./img/hud-issues/LC-setting-bossbarlayout1.png) <br />
### Move the Boss Bar to the top center position as shown
![Lunar Client Boss Bar Layout](./img/hud-issues/LC-setting-bossbarlayout2.png) <br />

## Feather Client Fix:
### Feather Options -> Mod Menu Tab (to the left) -> Boss Bar -> Set Text Color to WHITE, Text Shadow to ENABLED, Overwrite Text Color to DISABLED
![Lunar Client Boss Bar Layout](./img/hud-issues/FC-setting-bossbar.png) <br />

## Other Clients Fix:
Check your client settings to see if there are any settings that tweak GUI scales or boss bars. Try tweaking or disabling those options to see if the issue is fixed (refer to the Lunar Client fixes if necessary.)

If you're using a client not listed on this wiki page and have found a solution, let us know on the [Discord](https://discord.hexarchon.net/) so we can add the solution to this wiki page.

## Fabric/Forge/Quilt Fix:
If you are on a modded platform such as Fabric, Forge, or Quilt and are experiencing broken HUD, one of your installed mods are causing the issue.

Check through your mods list to see if you have any mods that tweak GUI scales or boss bars. Try removing those mods, and see if the issue is fixed.

If you found a mod that breaks the HUD, let us know on the [Discord](https://discord.hexarchon.net/) so we can add the mod name to this wiki page.

## Why don't you fix these issues so I don't have to deal with it?
Unfortunately, there is no way from the server side to fix these issues. If you join the server on vanilla Minecraft, you will see that the HUD works perfectly fine. 3rd party Minecraft clients and mods can adjust your client in ways that would not be possible on a vanilla Minecraft client - therefore, the server cannot do anything about it.
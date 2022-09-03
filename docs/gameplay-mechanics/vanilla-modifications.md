---
sidebar_position: 12
sidebar_label: Vanilla Modifications
title: Vanilla Modifications
---

# Vanilla Modifications

The list of small modifications to vanilla Minecraft.

### Keep Inventory
* Keep Inventory is on throughout the entire server. However, you will lose 10% of your balance on death in the Overworld, Nether, The End, and the Skylands. You don't lose any in boss arenas, or dungeons.

### Enchantments
* Infinity can be put on crossbows.
* Mending will always repair the most damaged equipment first.

### Items
* Milk Buckets will clear the bad omen effect.
* Totem of Undying will activate even if you do not have it equipped on hand.
* Elytras take 3x higher durability loss.
* Diamond Items require more Netherite Ingots to upgrade. The amount depends on their crafting recipe. For example, Chestplates require 8 ingots, pickaxes require 3 ingots, etc.
* Tridents thrown from the offhand will return to the offhand.
* Redstone components are not craftable, and can only be obtained from the shop. 
* Tridents with Loyalty cannot be thrown through portals to avoid losing them.
* Tridents with Loyalty will still return to the player after getting thrown into the void.
**Note: You will need to get close to where the trident was thrown for this to work (< 32 Blocks)**

### Blocks
* Spawners will drop using a silk touch pickaxe.
* You can break half of full slab blocks by sneak + left-clicking.
* Chests can still open with a full block above them.
* Spawners can be deactivated with redstone power.
* Farmland can be moistened from water blow.
* Composters can be bulk processed by sneak + right-clicking with the item in hand.

### Entities
* Armor Stands have arms.
* Phantoms are ridable and controllable.
* Mobs from spawners do not have AI.

### Other Mechanics
* End Portals exhibit safer teleporting.
* Beds only require 30% of all active players to sleep to skip the night.

### Villagers
* Villagers may act slower to preserve ticks (technical: 4 brain-ticks).
* Any villagers within a distance of 120 blocks are counted as one group. More than 6 villagers in a group will have their collisions and random movements removed. More than 11 villagers in a group will have their awareness removed. More than 16 villagers in a group will be removed.
* Villager curing mechanism has been disabled.

#### Custom Enchantments from Villagers
* Custom Enchantments may be obtained from villagers. Below are the ranges of trade pricing and the required profession level for each rarity of Custom Enchantments. <br />
* **Common:** 5-12 Emeralds, profession level 1-5 <br />
* **Uncommon:** 12-20 Emeralds, profession level 2-5 <br />
* **Rare:** 20-32 Emeralds, profession level 3-5 <br />
* **Epic:** 32-48 Emeralds, profession level 4-5 <br />
* **Legendary:** 48-64 Emeralds, 2-6 Netherite Ingots, profession level 4-5 <br />
* **Special:** 48-64 Emeralds, 4-10 Netherite Ingots, profession level 5 <br />
* **Very Special:** 48-64 Emeralds, 8-14 Netherite Ingots, profession level 5 <br />
* Enchantments that do not follow these pricing rules include: Proximity, Dullness, End Infusion, First Strike, Vitalize, Valor, Obsidian Shield, and Prosperity.

### Mob Limits
Unfortunately, mob limits are necessary for balancing and to prevent abuse or lag.

Below descriptions represent the actions that will be taken when one "group" of entities surpasses the specified counts. A group of entities are determined by their distance away from the same category.

For instance, all chickens within 24 blocks of each other will be counted as one group, and if that group surpasses 25 chickens, the collisions and movements will be disabled.

**Animals** <br />
* Count: 50, Distance: 24 -> Collisions & Movements Disabled. <br />
* Count: 70, Distance: 24 -> Collisions & Movements & Awareness Disabled. <br />
* Count: 100, Distance: 24 -> Removed. <br />

**Monsters:** <br />
* Count: 36, Distance: 7 -> Removed. <br />

**Iron Golems:** <br />
* Count: 1, Distance: 96 -> Removed. <br />

**Enderman:** <br />
* Count: 5, Distance: 32 -> Removed. <br />

**Villagers** <br />
* Count: 14, Distance: 120 -> Collisions & Movements Disabled. <br />
* Count: 19, Distance: 120 -> Collisions & Movements & Awareness Disabled. <br />
* Count: 25, Distance: 120 -> Removed. <br />

:::info
Cow, pig, sheep, and chicken spawners require grass blocks for them to spawn on. This is vanilla behavior.
:::

### Block Limits Per Chunk
Unfortunately, block limits are necessary for balancing automations and to prevent abuse or lag. Below are the block limits per chunk. <br />

* Hoppers: 8/chunk
* All other redstone items: 32/chunk
* Tiles: 128/chunk
* Tiles (Player shops): 192/chunk
* Cactus: 160/chunk
* Beds: 64/chunk

### Spawner Modifications
Spawners have an efficiency (speed) rating, linked to your active playtime ratio. The efficiency of your spawner depends on your activity index and the amount of your internal AFK points. <br />

The activity index is calculated using your playtime for the last 3 weeks using this equation: <br />
`5.0 - (5.0 * ((1.0 / (Π / 2.0 * (weekOneActivePlaytimeMs) + 1.0) + (1.0 / (Π / 2.0 * (weekTwoActivePlaytimeMs) + 1.0) + (1.0 / (Π / 2.0 * (weekThreeActivePlaytimeMs) + 1.0))/ 3.0))` <br />

Only raw playtime are counted towards the activity index - time spent AFK are not counted towards the activity index. <br />

Every few minutes, if you are detected as being AFK near a spawner, an AFK point will be assigned to you. You can lower your AFK points to 0 by simply playing. There is a cap of 100 AFK points, so even if you AFK for a very long time, you won't have to play for the same amount of time to lower your AFK points back to 0. <br />

The spawner efficiency is calculated as a combination of your activity index and the amount of AFK points. The activity index is translated to a raw percentage with an 80% max efficiency of vanilla spawners. With 0 being the lowest index and 5 being the highest, this means that having an activity index of 5 equates to an 80% spawner efficiency. After this calculation, the amount of your AFK points will be translated to deduct from the calculated previous percentage. The formula is as follows: `3.06(1.094)^((1/2)*x+6.4)`, with x being the amount of AFK points you have. The function of this equation (percentage) will be subtracted from the previous calculated percentage, which will be the new spawner efficiency. A spawner cannot have below 10% efficiency. <br />

:::warning
Due to how the internal system works, **spawners will NOT function if there is more than two players within the spawner's radius.**
:::
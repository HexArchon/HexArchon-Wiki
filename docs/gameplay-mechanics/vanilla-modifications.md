---
sidebar_position: 12
sidebar_label: Vanilla Modifications
title: Vanilla Modifications
---

# Vanilla Modifications

The list of small modifications to vanilla Minecraft.

#### Keep Inventory
* Keep Inventory is on throughout the entire server. However, you will lose 10% of your balance on death in the Overworld, Nether, The End, and the Skylands. You don't lose any in boss arenas, or dungeons.

#### Enchantments
* Infinity can be put on crossbows.
* Mending will always repair the most damaged equipment first.

#### Items
* Milk Buckets will clear the bad omen effect.
* Totem of Undying will activate even if you do not have it equipped on hand.
* Elytras take 3x higher durability loss.
* Diamond Items require more Netherite Ingots to upgrade. The amount depends on their crafting recipe. For example, Chestplates require 8 ingots, pickaxes require 3 ingots, etc.
* Tridents thrown from the offhand will return to the offhand.
* Redstone components are not craftable, and can only be obtained from the shop. 
* Tridents with Loyalty cannot be thrown through portals to avoid losing them.
* Tridents with Loyalty will still return to the player after getting thrown into the void.
**Note: You will need to get close to where the trident was thrown for this to work (< 32 Blocks)**

#### Blocks
* Spawners will drop using a silk touch pickaxe.
* You can break half of full slab blocks by sneak + left-clicking.
* Chests can still open with a full block above them.
* Spawners can be deactivated with redstone power.
* Farmland can be moistened from water blow.
* Composters can be bulk processed by sneak + right-clicking with the item in hand.

#### Entities
* Armor Stands have arms.
* Phantoms are ridable and controllable.
* Mobs from spawners do not have AI.

#### Other Mechanics
* End Portals exhibit safer teleporting.
* Beds only require 30% of all active players to sleep to skip the night.

#### Villagers
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

#### Mob Limits
Unfortunately, mob limits are necessary for balancing and to prevent abuse or lag.

Below descriptions represent the actions that will be taken when one "group" of entities surpasses the specified counts. A group of entities are determined by their distance away from the same category.

For instance, all chickens within 24 blocks of each other will be counted as one group, and if that group surpasses 25 chickens, the collisions and movements will be disabled.

**Animals** <br />
* Count: 25, Distance: 24 -> Collisions & Movements Disabled. <br />
* Count: 35, Distance: 24 -> Collisions & Movements & Awareness Disabled. <br />
* Count: 50, Distance: 24 -> Removed. <br />

**Monsters:** <br />
* Count: 12, Distance: 7 -> Removed. <br />

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

#### Block Limits Per Chunk
Unfortunately, block limits are necessary for balancing automations and to prevent abuse or lag. Below are the block limits per chunk. <br />

* Hoppers: 8/chunk
* All other redstone items: 32/chunk
* Tiles: 128/chunk
* Tiles (Player shops): 192/chunk
* Cactus: 160/chunk
* Beds: 64/chunk


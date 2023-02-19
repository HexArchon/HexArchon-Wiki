---
sidebar_position: 14
sidebar_label: ⚙️ Vanilla Modifications
title: Vanilla Modifications
---

# Vanilla Modifications

The list of smaller modifications to vanilla Minecraft.

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
* Redstone components are not craftable and can only be obtained from the shop, as they are extremely powerful tools of automation.
* Tridents with Loyalty cannot be thrown through portals to avoid losing them.
* Tridents with Loyalty will still return to the player after getting thrown into the void. **Note: You will need to get close to where the trident was thrown for this to work (< 32 Blocks)**
* Pickaxes deal much more damage to Stone and Blackstone Golems.

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
* Flying Machines are disabled, as such a powerful automation tool cannot be balanced.

### Villagers
* Villagers may act slower to preserve ticks (technical: 4 brain-ticks).
* Villager curing mechanism has been disabled due to balancing and technical limitations.
* Villager trades have been nerfed (you need more items to trade for emeralds) as villagers can be used to obtain powerful custom items at huge discounts.

#### Custom Enchantments from Villagers
Custom Enchantments may be obtained from villagers. Below are the ranges of trade pricing and the required profession level for each rarity of Custom Enchantments. <br />
* **Common:** 5-12 Emeralds, profession level 1-5 <br />
* **Uncommon:** 12-20 Emeralds, profession level 2-5 <br />
* **Rare:** 20-32 Emeralds, profession level 3-5 <br />
* **Epic:** 32-48 Emeralds, profession level 4-5 <br />
* **Legendary:** 48-64 Emeralds, 2-6 Netherite Ingots, profession level 4-5 <br />
* **Special:** 48-64 Emeralds, 4-10 Netherite Ingots, profession level 5 <br />
* **Very Special:** 48-64 Emeralds, 8-14 Netherite Ingots, profession level 5 <br />
* Enchantments that do not follow these pricing rules include: Proximity, Dullness, End Infusion, First Strike, Vitalize, Valor, Obsidian Shield, and Prosperity.

### Mob Limits
Mob limits are necessary to balance gameplay and to prevent abuse and lag.

Below descriptions represent the actions that will be taken when one "group" of entities surpasses the specified counts. A group of entities are determined by their distance away from the same category.

For instance, all chickens within 24 blocks of each other will be counted as one group, and if that group surpasses 50 chickens, the collisions and movements will be disabled.

**Animals** <br />
* Count: 51, Distance: 24 -> Collisions & Movements Disabled. <br />
* Count: 71, Distance: 24 -> Collisions & Movements & Awareness Disabled. <br />
* Count: 101, Distance: 24 -> Removed. <br />

**Monsters:** <br />
* Count: 37, Distance: 7 -> Removed. <br />

**Iron Golems:** <br />
* Count: 2, Distance: 96 -> Removed. <br />

**Enderman:** <br />
* Count: 6, Distance: 32 -> Removed. <br />

**Villagers** <br />
* Count: 15, Distance: 120 -> Collisions & Movements Disabled. <br />
* Count: 20, Distance: 120 -> Collisions & Movements & Awareness Disabled. <br />
* Count: 26, Distance: 120 -> Removed. <br />

:::info
Cow, pig, sheep, and chicken spawners require grass blocks for them to spawn on. This is vanilla behavior.
:::

### Block Limits Per Chunk
Block limits are necessary for balancing automations and to prevent abuse and lag. Below are the block limits per chunk. <br />

* Hoppers: 8/chunk
* All redstone items: 32/chunk
* [Tiles (Block Entities)](https://minecraft.fandom.com/wiki/Block_entity): 192/chunk

### Spawners and Crops Modifications
Efficiency rates of crops growing and spawners spawning will go down the longer you AFK (ONLY if you are AFK near growing crops/spawners). This was done to keep the sandbox nature of Minecraft and to balance gameplay.

The Efficiency rating __cannot__ go below 10%. Additionally, there is a cap to the efficiency score, so even if you AFK for multiple days at a time, you can recover your efficiency score back to 100% by playing just for 2-3 hours.

You can check what your current efficiency score of crops and spawners are by using the command `/score`.

:::warning
If there are multiple players near a spawner/crop, the lowest efficiency score from nearby players will be taken.
:::

#### Why this system was implemented
This system was implemented to encourage building large farms while also balancing the output of large farms.

Before this system was implemented, there was no penalty for being AFK. It was ridiculously easy to exploit the shop by simply being AFK next to a bunch of animal and crop farms. You could earn millions easily by just having your game open in the background, not actually playing - the "meta" was to just AFK next to farms. That's not very fun.

Therefore, we had to introduce extremely low mob caps (so that mobs were deleted just after there were a few in close range), along with abysmal sell prices and low allowed blocks per chunk build limits. Now that's not fun either. People who play would be largely inconvenienced as you couldn't have farms that had more than a few animals, and sell prices were so low that you had to build mega farms just to earn back a tiny fraction of your investment cost of time and money. You couldn't even place more than a few crops and hoppers per chunk. Now that's not fun for builders either, as that limits freedom and the sandbox aspect of Minecraft.

With this, we had to find a middle ground - something that would be fair and balanced to both active players and also those who like to build farms and AFK. That's why this system was implemented. You can now build big arms without any restrictions, and the output is now more balanced as growth rates will gradually slow down as you AFK (ONLY if you are near active farms). There is an exponential curve to the slowdown so you wouldn't even notice this system if you AFK for small amounts at a time, as that would just be annoying. This system really only takes into place once you AFK for a while, which makes sense as that would mean you're idling instead of simply being away from your computer for a short amount of time. Additionally, there is a cap to the amount of AFK score you can obtain, so that even if you AFK for multiple days at a time, you could recover it all by playing just for 2-3 hours. You're still able to build big farms and grasp benefits from it; you're not strictly limited in building in any way; it's just that it wouldn't guide you to the point where you would be so overpowered compared to players who would actually play in the same amount of time.
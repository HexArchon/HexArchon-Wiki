---
sidebar_position: 3
sidebar_label: 🌐 Connection Issues
title: Connection Issues
---

# Connection Issues
Are you having extremely high ping? Random ping spikes making you unable to play? Random disconnections? Read below to fix it!

### Why is my ping always high, but steady (100-300 ping)?
If you have a high, but __STEADY__ ping ranging from __100-300__, it most likely means you *physically* live far away from the server. This is a US-East hosted server. There is no way to decrease this ping, unless you *physically* move closer to the server. However, if you are experiencing any other issues **(such as ping over 300, random ping spikes and disconnections)**, make sure to continue reading below.

### How do I fix connection issues? (i.e. extremely high inconsistent 300+ ping, random ping spikes, disconnections)
**In short:**
1. Type `/whitelistme` on the server. The command will show red, it's normal.
2. Download [Cloudflare Warp](https://1.1.1.1/).
3. Open the installer, and install Cloudflare Warp.
4. Enable Cloudflare Warp.
5. Join the server.

There is a chance that you'll be seeing a little "higher" average ping. This is normal. Consistent higher ping leads to a much more playable experience compared to inconsistent lower ping.

Read below on why Cloudflare Warp could resolve your issue.

### Why am I getting connection issues?
First, check that it's not your internet. Are websites loading at normal speeds? Are you able to play on other servers fine? <br />

If the answer to both of the above is yes, and you are only having connection issues to HexArchon, it may mean that your "route" to the server has some faults. <br />

Every server is hosted at a different location, at a different datacenter. When you connect to a server, your internet jumps from your house to multiple locations, called a "hop", to finally reach the server. If you are experiencing issues with lag only on HexArchon, that likely means that the "hops" your internet takes from your house to the server has some faults. Generally, this issue is more common the further you are physically from the server, as you would be taking more hops.<br />

:::warning
The issue with bad hops are amplified if you reside in the **South America or Asia region**. Unfortunately, those regions have one of the worst routing infrastructure in the world, and we can't do anything about it.
:::

### What does this mean, and why can I connect to other servers (or games) fine?
![Connection Illustration](./img/connection-illustration.png) <br />

Think about it this way. You are driving to HexArchon from your house, and you have 2 routes that you can choose. Route A has roads that are brand new, and free of any bumps or construction. However, Route B has old roads with a lot of dangerous potholes and construction. You will have a smooth, fast ride on the way to the store on Route A. However, on Route B, you're going to have a rough time with bumps and construction (ping spikes) and might even damage your car (packet loss, resulting in disconnections). This is exactly what may be occuring with your connection. <br />

**Every server is prone to this issue.** Just like how a convinience store doesn't control the roads that consumers drive on, the server doesn't control the hops that your internet takes. And just like how there are bad roads and construction in real life that slow down and harm traffic, there are bad routes and hops that will cause you connection issues. <br />

### Why Cloudflare Warp?
Cloudflare Warp takes your internet through a series of different hops in an attempt to avoid the bad hops. Most of the times, this may improve and/or fix issues with your connections. <br />

### Still having issues?
You can open a support ticket on our [Discord](https://discord.hexarchon.net/), and we will be glad to help you out. <br />
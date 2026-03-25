If you've ever touched a computer even once, you've probably heard of memory - RAM, physical storage, whatever the case may be, memory, to most of the world, is a "get-all" term that nowadays doesn't really encapsulate what it is.

At least, that's how it feels to me - and I'm writing this as a simple post to explain what memory actually is for both technical and non-technical people.

---

# So What _is_ Memory?

You can think of memory as essentially being the part of your computer that handles data of _any_ kind. I mean, it's in the name - it's how your computer actually remembers things.

Now, as I said, this is the "get-all" definition of memory - in truth, memory is much more than just that, but it really is just that. Let me explain.

# The Two Kinds of Memory

Memory falls under two categories: **volatile memory**, and **non-volatile memory**, which is just essentially, short-term memory and long-term memory, respectively.

These two categories are quite broad, and we'll just focus on a few kinds that people actually interact with. To ensure you understand what I really mean though, volatile memory is basically just temporary memory - it's data your computer holds onto temporarily until it turns off. Non-volatile is the opposite!

---

# Non-volatile memory

We'll focus on non-volatile memory first - it's usually what people are actually familiar with. The two kinds just boil down to these: **the SSD and the HDD**. There's also **ROM** - which we'll get to afterward.

You probably already know about SSDs and HDDs - they are the storage devices where all your computer's data is stored. They are quite different from one another, though.

---

## Hard Disk Drives - HDDs

If you're older, you're definitely familiar with HDDs more. They are:

- The devices with a spinning disk on them
- Relatively cheap and cost-effective
- Devices that can hold vast amounts of storage
- Great if you are on a tight budget, but need lots of storage

However, they have their downsides. They are not as durable as SSDs and can be quite slow at times! This is because HDD devices have a physical spinning disk; think those old record players. The mechanical parts can get damaged, and how fast the memory is read or written is dependent on how fast the disk spins.

## Solid State Drives - SSDs

SSDs, on the other hand, are like the HDD's cooler younger brother. They are:

- Modern
- Much faster (flash memory for the win!)
- Smaller & take up less energy
- Battery-efficient (they stay cooler)
- More durable (no mechanical parts)

Although it has its downsides compared to HDDs. While SSDs provide many benefits, they are more expensive than HDDs. While nowadays SSDs compare to HDDs in terms of storage capacity, you'll find that there are more HDDs out there with huge storage than SSDs.

These are basically the two kings of file and data storage. Every computer you can think of has them! Anyway, you're probably (not) wondering "what about ROM? you mentioned ROM!" - to which, even if you didn't really ask, I'll provide an explanation for below.

## Read-Only Memory - ROM

If you're a nerd like me, you know about game ROMs - like Pokemon ROMs, for example. The name actually comes from the read-only memory (ROM) chips - people dumped the game data off the cartrdige's physical ROM chip into the computer.

While the ROMs you download now are not read-only memory, the idea of it is still as important as ever. 

- It's basically the memory that's embedded into the computer you're using to read this site. 
- It's in the firmware, and tells your computer how to turn things on and what not.

It's read-only because that's all it's used for: reading. If you tried to manually change the data of a ROM chip - well, things would not go very well. You typically don't see talk about ROMs outside of tech circles, but it's still cool to know if you're even remotely interested in emulating console games.

---

# Volatile memory

Now, this is where we talk about every tech person's biggest concern in 2026: **RAM**. Or, well, we will talk about the category that RAM falls under, which is volatile memory. As I said, it's just temporary memory that the computer needs to function! We'll dig into the two kinds here:

---

## Random Access Memory - RAM

Everyone's favorite (including your CPU's)! If you imagine your computer as a corporate business, RAM is basically the group of people no one notices that actually keep the entire business from falling apart! Or, really, just the people you call when you need something. Without RAM, your computer would _not_ function - it wouldn't even be able to turn on properly.

Every computer has RAM (or, well, here we're talking about **DRAM** - dynamic RAM), and it's basically just a giant block of random, temporary storage that everything on your computer needs. 

- Your game needs to render in graphics and all that? Goes straight into RAM. 
- You wrote a program that does stuff? Stored in RAM. 

RAM is undeniably one of the most important parts of memory, period.

Just remember though - **only get more RAM if you _need_ more RAM!** If you have 32 GB of RAM and are only using ~14 GB of it, you don't need 64 GB! It won't do anything for your performance, since, well, it won't even have a job to do.

## DRAM Shortage...

Given the shortage of RAM currently, I should honestly explain more on that, which I'll be doing so here. Right now, as of March 2026, the RAM situation is, well, not ideal. The two main types of DRAM that most people use - **DDR4** and **DDR5** - are currently suffering massive price problems due to different reasons.

DDR5, which is the most modern version of consumer DRAM, is currently undergoing a massive shortage due to rapid buying to fuel AI data centers worldwide. 

- Exceptionally high-end AI models currently use a _boatload_ of DRAM
- Corporations are scrambling to get their hands on them as much as possible. 
- DDR5 is amazing for AI specifically because of its latest tech, hence the scramble.

DDR4, on the other hand, is suffering a shortage for a different reason: legacy. Since DDR5 released, DDR4 is becoming a thing of the past. 

- It's still highly functional, and most older devices use DDR4 RAM, but no one is actively producing DDR4 RAM as much anymore, causing a legacy shortage. 
- RAM companies are focused on DDR5, which we already discussed. 

It's a terrifying feedback loop for us normal people...

So, what do we do? Honestly: I have no clue! I'm not a wizard that can predict the future, but my advice is to just... wait it out. Don't spend so much money on more sticks - instead, see how you can optimize your DRAM usage: 

- If you use Windows (10, 11 or, if older, then definitely switch), consider **Linux**. Windows is _addicted_ to consuming RAM, while Linux just treats it as a breakfast. 
- If you really need to stay on Windows though, then look for **debloating scripts**, or just **removing any unwanted apps**. Helps out a ton!
- Micros(lop) loves to add unneeded apps and bloat up apps that don't need them (seriously, how do you get a critical vulnerability on Notepad??), so definitely keep in mind for any new apps you see lying around.

Alternatively, try to see what's causing massive RAM issues. Here are some common ones:
- Unoptimized games can cause massive big RAM spikes.
- 50 billion tabs being open! 
- Random apps being open in the background
- If you run an AI locally, it consumes a lot of RAM. Same with other CPU-intensive programs. Make sure you know what you install!

While I'd love to talk more about RAM, virtual memory, address translation, yada yada, those are big technical details that would be better fit in a specialized page of its own. We'll move onto the next, and last, big player of memory.

## Cache

You've definitely heard of cache or caching before, even if it's not _technically_ the kind of cache we'e talking about. What I mean by that is program cache - which is just any kind of program or app's cache, which they use to help retrieve data faster. In fact, that's pretty much cache's entire job - just that that cache is typically just stored on your device, which you can delete yourself and persists after turning the computer off!

If RAM is the group of people keeping things afloat, then cache is basically every worker's desk. It's what the computer uses to retrieve specific data _faster_ than if they were to retrieve it from RAM.

In CPUs, for example, it uses what is called **L1, L2, and L3 caches**, which run on **SRAM** - static RAM. The main point of cache is to be able to retrieve specific data faster than if you were to search for the specific person that has what you need. It's easier to grab something off your desk than it is to call someone to fetch it for you!

In that example, getting it off your desk is like the CPU getting data off L1 cache. L1 cache is:

- Small,
- Blazingly fast.

It's directly embedded directly into the CPU itself.

L2 cache is your cubicle, or something; still faster than calling, but you have to get up for it. It's:

- bigger than L1 cache
- slightly slower, though

It's in each CPU core, and the CPU uses it if the data isn't in the L1 cache. If it's not in the L3 cache, then it's like looking in the actual room or office outside the cubicle. L3 is:

- bigger than L2
- slower than L2
- still faster than calling RAM
- shared by the _entire_ CPU

But... if the data isn't in there, that's a cache miss! Basically, just imagine you thought you had a specific document on your desk, cubicle, or office, but it's not. You have to call up RAM as a result, which takes up time!

## What's the Difference between DRAM & SRAM anyway?

If you're wondering why we even bother with DRAM compared to SRAM if SRAM is just way faster, then I don't blame you, but there's a specific reason why we use DRAM.

DRAM is _affordable_ (although, given how things are...), and you can easily put them into the motherboard slots on your computer.

SRAM, however, is expensive. It's instant in speed, but it's embedded directly into the CPU chip, so you can't really take it out or anything. Did I mention it's expensive? Anyway...

---

# Praise Memory!!

Praise memory! Seriously, they're underrated. Most people don't really know what memory is, but now you basically do! Or, at least, you know where to look if you _really_ want to know more, and honestly? That's worth more (and definitely more doable) than making yourself remember every nitty gritty detail. 

If you do want more information, I'll paste some links here for other pages on my site where I talk more about specific things (although, right now, this website is rather empty...). I'll update it as time goes on.

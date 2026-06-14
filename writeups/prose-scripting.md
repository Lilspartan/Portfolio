---
title: "Building a Beginner Friendly Scripting System"
project: kregs-toolbox
date: 2026-06-13
description: "How we created a scratch-like scripting system for a class project."
---

## Overview

For my GAM300 class at [DigiPen](https://www.digipen.edu/), I was a part of a team of 8 Computer Science majors with the goal to build a custom game engine in C++ and use it to build a game over the course of the two semester class. We started in fall by building out the basics of an engine, the entriety of which was defined by large scope for portfolio spectacle. Our Graphics programmer built a Vulkan renderer, we had a custom Audio mixer and track system to integrate with scripting, our Physics programmer implemeted Jolt. But most important to this, was our custom scripting system, Prose.

Our Game was based heavily on existing games like [Kodu Game Lab](https://www.kodugamelab.com/), [Project Spark](https://en.wikipedia.org/wiki/Project_Spark), and [Dreams](https://indreams.me/). As such we needed to keep everything approachable for a beginner, and as far as logic goes this can be tricky, but we decided to give it a try. I (as the UI/UX programmer on the team) implemeted the [Clay UI library](https://www.nicbarker.com/clay) and used it to build a drag and drop block editor on top of the custom scripting language our Systems programmer built. This writeup covers the UI layer; the panels, the blocks, and how drag-and-drop works.

---

## The Editor Layout

The scripting editor is a two-panel view that opens when you select a script file from the properties panel.

![My original mockup of the editor](mockup.png)

**Left panel, the block sidebar**
- Lists all available block categories (Events, Objects, Whiteboard, Functions, Math, Movement, Logic, Text, Audio)
- Each category is a collapsible accordion section; clicking a header toggles it open/closed
- Each category has its own color scheme defined in its JSON file, so blocks are visually grouped by type at a glance
- Blocks shown in the sidebar are *templates*, they stay put when you drag one out but are used to create the actual block

*NOTE: The "Whiteboard" was our solution to variables, a per-object key value storage.*

**Right panel, the sentence canvas**
- Scrollable list of *sentences* (the top-level scripting unit)
- Each sentence has a WHEN section and a THEN section
- A green "Add New Sentence" button lives at the bottom

![A screenshot of the block scripting editor](example.png)

---


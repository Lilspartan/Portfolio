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

## Sentences

A sentence is the basic logical unit in Prose: **WHEN** [conditions] **THEN** [actions].

```prose
// Generated Prose Code, line 3 in above screenshot
sentence Sentence3:
{
	events: told("take_damage");
	when:
	{
		return ((wbget(self, "lives") < 1) and (wbget(self, "immunity_timer") < 0));
	}
	then:
	{
		on_start;
		tell(self, "die");
	}
}
```

- Conditions and actions are separate ordered lists of blocks
- Between every block (and at each end) there is an invisible drop zone that lets you insert a block at any position, not just at the ends

![The damage handling sentence in the editor](sentence.png)

A trash icon sits to the left of each sentence to delete it entirely. Dropping any non-sidebar block back onto the sidebar also deletes it.

<!-- SCREENSHOT: sentence row mid-drag with a drop zone highlighted -->

---

## Blocks

Blocks are the draggable pieces. Every block is a horizontal strip of content. It contaons a mix of static text labels and interactive input slots.

![The mockup for the structure of a block](block_anatomy.png)

Each block has:
- **Category** — which group it belongs to (sets its color and sidebar location)
- **Placement rules** — whether it can go in CONDITION or ACTION (WHEN or THEN), and whether it's an outer or inner block
- **Content** — an ordered list of text and input pieces that make up its visual label, each content can also contain an inner block instead
- **A unique ID** — used to track and move it when dragging

Blocks are defined entirely in JSON files under `res/Scripting/blocks/`. Adding a new block means adding an entry to the right category file.

```json
{
    "category": {
        "id": "wb",
        "name": "Whiteboard",
        "description": "Use these blocks to directly interact with the values in an object's whiteboard",
        "color": {
            "text": [ 255, 255, 255 ],
            "bg":   [ 139, 92, 246]
        }
    },
    "blocks": {
        "wbset": {
            "name": "Set",
            "description": "Set the value of a variable on the whiteboard of this object.",
            "argument": false,
            "placement_restrictions": {

            },
            "content": [
                {
                    "type": "STRING",
                    "label": "variable",
                    "id": 1
                },
                {
                    "type": "TEXT",
                    "text": "to"
                },
                {
                    "type": "ANY",
                    "label": "value",
                    "id": 2
                }
            ],
            "output": "wbset(self, $1, $2)"
        },
    }
}
```

### Inner vs Outer blocks

- **Outer blocks** live directly in a sentence's condition or action row
- **Inner blocks** can be nested *inside* another block's input slot, replacing the default text/number field with a computed value

<!-- DIAGRAM: outer block with an inner block snapped into one of its input slots -->

---

## Input Slots

Input slots are the interactive pieces embedded inside a block. Each slot has a type:

| Type | Widget | Example |
|---|---|---|
| String | Text field | A dialog line |
| Number | Text field | A distance value |
| Enum | Dropdown | Direction (Left/Right/Up/Down) |
| Variable | Dropdown | A named world-board variable |
| Object Reference | Dropdown | A prefab to spawn |
| SFX / Music | Dropdown | An audio asset |
| Entity Reference | (placeholder) | A live entity |
| Boolean | (placeholder) | True/False |

Dropdown inputs populate their options from the project registry at runtime, so the list of variables or audio assets updates automatically as the project changes.

<!-- SCREENSHOT: a block with a dropdown input open -->

An input slot can also accept an **inner block** as its value instead of a typed input. The slot becomes a drop zone and the nested block's output is used in its place.

---
# Toy Robot Challenge

<details>
<summary>Table of content</summary>
  
## Table of Content
- [Summary](#summary)
- [Technologies](#technologies)
- [Instructions](#instructions)
- [Updates](#updates)
- [Live Site](#live-site)  
- [Status](#status)
- [License](#license)  

</details>

## Summary
Move a toy robot around a 5x5 grid using simple commands<br>
A coding challenge project built for ReadyTech

## Technologies
[
<img align="left" height="32" width="32" alt="React logo" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/react.svg" />
<img align="left" height="32" width="32" alt="NPM logo" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/npm.svg" />
<img align="left" height="32" width="32" alt="HTML5 logo" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/html5.svg" />
<img align="left" height="32" width="32" alt="CSS3 logo" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/css3.svg" />
<img align="left" height="32" width="32" alt="JavaScript logo" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/javascript.svg" />
](https://github.com/MakeItBack/Learning-Tracker)<br>

This project is built with **React** using [Create React App](https://github.com/facebook/create-react-app)

---

![App screenshot](screencapture.gif)

---

## Instructions

This game be played at **[toy-robot-challenge.netlify.app](https://toy-robot-challenge.netlify.app/)**<br>
Move the robot anywhere on the 5x5 grid using commands available in the yellow panel

### Orientate yourself on the grid
- The grid squares are numbered 0 to 4 in the x and y directions like a typical map grid reference (x,y). i.e. Left to right (column# / x-direction) then bottom to top (row# / y-direction). So bottom left is (0,0) and top right is (4,4)
- The grid also uses the 4 cardinal directions of the compass where the top is NORTH, right side is EAST, left side is WEST and bottom is SOUTH

### Description of the available commands

- **place** - teleports the robot to any square on the grid. 
- **move** - advances the robot one square in the direction it is facing
- **left** - rotate the robot anticlockwise to the next primary cardinal direction
- **right** - rotate the robot clockwise to the next primary cardinal direction
- **report** - asks the robot to report it's current position on the grid and the direction it's facing

### To operate the robot

1) Select a command from the The ``Command type`` dropdown box
2) **IF** you have selected **place** you must also complete the ``Column`` ``Row`` and ``Facing`` fields with valid values. Otherwise you can ignore them.
3) Click the green ``SEND COMMAND`` button to send the command to the robot.
4) Feedback is displayed in the grey panel to the right of the command inputs. This will either be acknowledging the previous action or notifiying you of an invalid command. Examples of invalid commands are attempting to move the robot outside the grid or providing incomplete or otherwise invalid inputs. 


## Updates

#### Ideas for future improvements
- Add a graphic displaying cardinal directions
- Make the design more responsive for different screen sizes
- A better robot sprite image!
- Add sounds
- Improved visual design
- Add animations

## Live Site

This project is deployed on **Netlify** at **[toy-robot-challenge.netlify.app](https://toy-robot-challenge.netlify.app/)**

[![Netlify Status](https://api.netlify.com/api/v1/badges/c11f6b75-05e5-435d-bf81-b02361d79bb3/deploy-status)](https://app.netlify.com/sites/toy-robot-challenge/deploys)

## Status
<a href="https://GitHub.com/MakeItBack/Toy-Robot-Challenge/graphs/commit-activity"><img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg"></a>
<a href="https://GitHub.com/MakeItBack/Toy-Robot-Challenge/commit"><img src="https://img.shields.io/github/last-commit/MakeItBack/Toy-Robot-Challenge"></a>

## License

This project is licensed under the terms of the BSD 3-clause "New" or "Revised" license.

<a href="https://opensource.org/licenses"><img src="https://img.shields.io/github/license/MakeItBack/toy-robot-challenge?color=dodgerblue"></a><br>

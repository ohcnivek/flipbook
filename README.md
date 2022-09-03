# [Frontend Project] Digital Flipbook Player

## Please read this before starting the Digital Flipbook Player project

If you select the Digital Flipbook Player project, we will be considering you for a position with our Frontend team. Here are a few things we’ll be looking for as we evaluate your project and as you go through our interview process:

- General knowledge of browsers and the web platform
- Proficiency using JavaScript / React / HTML / CSS to build UI components
- Sense of visual design and attention to detail

Should you make it to the next stage, we ask that candidates have good critical thinking skills, a solid foundation in web technology, and a passion for FE development. Please reach out to 2022-coding-project@neeva.co if you questions or concerns prior to completing the project.

---

## Table of Contents

1. [Problem](#problem)
2. [Requirements](#requirements)
   1. [Additional features to implement](#additionally-please-pick-one-of-these-additional-features-to-implement)
3. [Deliverables](#deliverables)
   1. [Some "musts" to keed in mind](#some-musts-to-keep-in-mind)
   2. [How we evaluate the project](#how-we-evaluate-the-project)
4. [Getting started](#getting-started)

---

## Problem

Alice from Noovi is tasked with showing a video in their web app by calling an API endpoint to get the video. However, the API endpoint that should be returning the video is actually returning an array of image URLs where each image is a frame of the video! You ask your manager and they tell you that this is intentional; it’s up to you to stitch these images together to create a flipbook that mimics a video.

## Requirements

We would like you to build a flipbook player with the images given to you from the API endpoint. The flipbook player should support the following core features:

1. Support playing and pausing the flipbook.
2. The flipbook should run at at-least 30 frames-per-second (fps).
3. The images must be loaded over the network.
   1. you cannot download them and then load them locally.

### Additionally, please pick one of these additional features to implement:

1. A navigation bar that lets you jump to different parts of the flipbook.
2. Ability to customize the frame rate (10 fps, 30 fps, 60 fps).
3. Ability to zoom in/out and pan.
4. Another product feature that you want to design and implement, and feel shows a similar level of complexity. Feel free to be creative! (if you choose #4, please implement a feature that demonstrates a skill beyond what you’ve used to build the base app from the requirements above).

## Deliverables

1. Any and all code, tests, or mocks you write/create in `client/`.
   1. Please do not include the `server/` and node_modules` directories when sending us your project.
2. A README that describes:
   1. How to run your project
   2. Any additional features you implemented
   3. Your approach to the product, including any design decisions or tradeoffs you made
   4. How you could improve the performance of the flipbook (e.g. smoother frame rate)

### Some “musts” to keep in mind

- Your FE code must use React and be written with Javascript or Typescript.
  - At Neeva, we use React with Typescript internally, so we're most familiar with those.
- You may use external libraries and packages as long as they do not make meeting the project requirements trivial. You are responsible for implementing the major pieces of logic and styling by yourself. For example, you may use the Bootstrap CSS framework but we would like to see some custom styling with stylesheets as well.
- Your project must run successfully and have a README in the root folder with instructions on how to deploy and run the project.
- The project must be be installable and runnable from the command line without any additional software required beyond NodeJS and Yarn. Note that we use Macs as our dev machines, though we have access to a pure linux environment.

### How we evaluate the project

This project is designed to reflect the day-to-day work a frontend software engineer does at Neeva. As such, considering the user experience, the overall functionality, and the readability of code are important criteria. Here's how we’ll evaluate the project:

- Functionality
  Does the app work smoothly? Are there no obvious or glaring bugs? For example, what happens if a user uses keyboard navigation and presses the spacebar while using the flipbook?
- Software engineering
  Does your project show good understanding and use of your selected framework? Are you following good software engineering practices? Is the code logically structured and easy to read? Does the project show that you understand how to handle application state, respond to user input, and/or correctly utilize APIs?
- Design
  We're more interested in user experience than polished visual design. We want the information to be easily understandable. In other words, the design emphasis is on information architecture, not visual design. For example, instead of displaying a blank loading screen with a sharp transition, can an informative loading screen with a smooth transition be used?

# Getting started

**Note:** You will need [NodeJS](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/getting-started) installed on your computer.

This project is composed of two parts: the client and the server. You will only be working on the client part of this project.

To setup the app, you will need 2 terminal instances running simultaneously: one to run the server and one to run the client. Please follow the respective `README.md` in `server/` and `client/` to set them up.

<br />
Please **do not** post this question or your solution publicly on the internet. We sincerely appreciate the time you put into this project. Have fun!
<br />
<br />
<br />

<img src="https://lh6.googleusercontent.com/WV27s6xXl9rxUuol_iJh4EboVZ6F3fMTB0bzrL9GiuW7cZlklawf6uIXIq8PmkBmPY8AGJhnPD36U_Ywgo618HoVGqc-hWdEgcWwecqmlxi1GI3MaF6QyssEP04iB1SR8xCvR5PR" alt="Neeva logo" width="250" />

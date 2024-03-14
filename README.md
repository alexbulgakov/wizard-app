# Wizard app - VK mini app

This is a mini-app for the VK social network where you can find out the age of a name and interesting facts about cats.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [How to install](#how-to-install)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- Open the application in the VK social network
- Choose from two menu items: cat facts and name age
- Receive a cat fact by pressing a button. The cursor in the text field should be placed after the first word
- Enter a name and receive the age of the name by pressing a button or after 3 seconds of finishing typing
- Receive an error message in case of an attempt to duplicate a request

The application should cancel the request if the result of the previous one is no longer needed (in case of slow internet).

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [github.com/alexbulgakov/wizard-app](https://github.com/alexbulgakov/fun-communities)
- Live Site URL: [vk.com/app51874943](https://vk.com/app51874943)

### How to install

For local installation, you need to run the following command in the terminal of the project directory:

```bash
npm install
```

To start in development mode, you need to run the command:

```bash
npm run dev
```

## My process

### Built with

- [VK UI](https://vkcom.github.io/VKUI/#/About) - This is a library of adaptive React components for building web applications
- [React](https://reactjs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/)
- [Feature Sliced Design](https://feature-sliced.design/) - Architectural methodology for frontend projects
- [Tan Stack Query](https://tanstack.com/query/latest) - Powerful asynchronous state management
- [React Hook Form](https://www.react-hook-form.com/) - Performant, flexible and extensible forms with easy-to-use validation
- [YUP](https://github.com/jquense/yup) - Dead simple Object schema validation
- [Cat Facts API](https://catfact.ninja/)
- [Age prediction api](https://agify.io/)

### Useful resources

- [VK mini app creation guide](https://dev.vk.com/en/mini-apps/getting-started)

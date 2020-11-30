# SPKR
## Wire Frame
A **High Fidelity Wireframe** will be used. Our idea is to have an app you can talk to and retrieve information on. News Articles in the headlines such as:
- Sports
- Business
- Politics
- Anything you want to know about in **The New York Times**


We will use the title **SPKR**. Our app will be one long page called a **parallax scrolling.** ; in the hamburger menu is where you will get instructions on how to use app, Contact Us and About Us.
It will use the logo, SPKR which will be in a black oval. The topic pictures with the titles will be in several rounded squares to show what the topics are.


The main feature of the app will be the microphone that will show on the front screen. You click on the mic and speak what you want into the app. You must say, **“Hey SPKR”** (pronounced: speaker), give me _[whatever]_. When saying the command, the API endpoint will produce results for its endpoints for what was called. Your voice will be the input into the machine, inside the voice API it will call onto another API endpoint allowing you to retrieve the best end results.
Afterward, the API will read what you were looking for and with a few simple commands, such as:
-SPKR find...
-SPKR next
-SPKR read...
-SPKR stop
Voice Command in SPKR can handle any topic which is given, not just news or books; for more information, go to **Alan Documentation**:
[alan](https://alan.app/docs/usage/getting-started)
This app will be processing two (2) API’s simultaneously. The news API, which is [news](https://newsapi.org/) will be pushed through the Alan API to retrieve endpoint information asked for.


## DESCRIPTION
We will use
 - Wireframing
    - Code for
         - Desktop
         - Laptop
         - Tablet
         - Phone
    - Figma
    - Alan API
    - Visual Studio Code
    - Our Imagination
## INSTALLATION
Here are the installation instructions:
**Installation**
```zsh
yarn init
```
```zsh
yarn add parcel-bundler --dev
```
```zsh
Yarn add axios dotenv
```
```zsh
npm install @alan-ai/alan-sdk-web --save
```
## OBJECTIVES
We would like to create an app-like web page which will connect the user to the world around them. It will also provide disabled users with access to the news and any entertainment they may want to see or hear.
The mission is to provide a website which is fun, interactive and useful. We will accomplish this by making it easy to read and be read from.

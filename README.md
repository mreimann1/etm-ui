# ETM-UI-offline
### Endurance Testing Machine User Interface (Offline Version)

## Description

This is an electron Project containing a functioning Desktop Application which serves
as the interface for the Endurance Testing Machine at Nextflex

At this time, the application is simply a faceplate and not connected to the back-end

## Usage

This project is meant to be run with node.js using ```npm install``` then ```npm start`` in package directory

Otherwise, a compiled executable is available in "../out/etm-ui-win32-x64/etm-ui.exe"

## Updating Offline Version

This is the "offline version" which means that all dependencies are already a part of the project. This includes bootstrap, jquery, and poppers. Updating these dependencies requires the following commands:

```npm update bootstrap```

```npm update jquery```

```npm update @popperjs/core```


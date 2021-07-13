# Frontend Code Challenge

## Objective:

In this challenge you will use React components and hooks to display a list of songs, with the ability to rate, remove and create a new song, with data persisting on the page. Assets, data, and the file structure/environment were provided. Please reference the requirements and tasks below to complete the challenge.

## Setup:
* Clone this repo: ```git clone https://github.com/thejenweb/music_rating_app.git```
* Have Node >= 8.10 installed
* Run ```yarn``` to install all necessary packages.
* Run the environment: ```npm start``` or ```yarn start```
* Visit ```http://localhost:3000```

## Requirements:

* Make each task a separate commit - this way, we can easily see your progress with each step.
* Build out your components in src/components
* Use Container.js to render your components
* Use hooks to manage state

## Tasks:

***Using the provided data/assets below, complete the following tasks:***

1. Display song data, in a list format on the page
2. Style list according to the output example below (don't worry about exact fonts/colors)
3. Implement rating UI and persist data on the page
4. Implement removing song from list and persist data on the page
5. Implement rudimentary form for adding a new song (inputs: title, artist)
6. Bonus: Rate a new song

**Output example:**

![](public/example-wireframe.jpg)


**Assets/Data provided:**

Inside src/assets you will find:

<img src="src/assets/play.svg" width="100">
<img src="src/assets/star.svg" width="100">
<img src="src/assets/trash.svg" width="100">


Inside src/data you will find:
```
{ 
  "songs": [
    {
      "artist":  "Skrillex",
      "title": "Bangarang",
      "rating": 0
    },
    {
      "artist":  "James Brown",
      "title": "I Feel Good",
      "rating": 0
    },
    {
      "artist":  "Santana",
      "title": "Smooth",
      "rating": 0
    },
    {
      "artist":  "Star Wars Theme",
      "title": "John Williams",
      "rating": 0
    },
    {
      "artist":  "Rebecca Black",
      "title": "Friday",
      "rating": 0
    }
  ]
}
```

# 11-Note-Taker
## Table of Contents
* [General info](#general-info)
* [Recording](#screenshot)
* [Technologies](#technologies)
* [Setup](#setup)
* [User Story](#User-Story)
* [Acceptance Criteria](#Acceptance-Criteria)

## General Info
An application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

An example of this can be found loaded on heroku pages here: https://shrouded-hamlet-44070.herokuapp.com/

## Recording
Recording of the generator working can be found here: https://drive.google.com/file/d/1wmhW9vrPY2ktXptgQJ7QpCNP_-0U99XZ/view

## Technologies
Project is created with:
* Nodejs
* Express
* HTML 5
* CSS

The example was deployed on Heroku.

## Setup
To setup the dependencies required for this project, copy the contents and run `npm install` in the root directory.

Once setup, to run the project run `npm start`.

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```


## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```
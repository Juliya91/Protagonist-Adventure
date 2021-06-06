# Rule the Story

## Code Institute - Milestone Project 2

- The purpose of the **Rule the Story** game is to inspire milenials and generation Z to read more while enjoying playing the game where they decide how the story unfolds.



## Table of Contents
> - [Overview](#overview)
> - [Description](#description)
> - [Ux](#ux)
> - [Features](#features)
> - [Technologies Used](#technologies-used)



## Overview

The idea has been inspired by Bundersnatch episode from Black Mirror series, but in this case it will be text based. There are many **"Choose your own adventure"** games, however most of them are done in the last century. **Rule the Story** is a way to bring back a retro game using new technologies.
 
## Description 

This project will have three pages, which are: "Home", "Story" and "Feedback" pages. The "Home" page has pop up box with a little description of the game, sound effect and **click here** button which leads user to "Story" page. The "Story" page has the game itself - text with two or more choices.

---
## UX  1

## Strategy

This website is targeting from teenagers to middle aged groups, for those who enjoy reading and would like to be truly involved in the story. Users here can choose how character will procceed, which will make them feel as part of the story. 

**User Stories**

#### As a First Time User:

- I want to easily understand the main purpose of the site.
- I want to intuitively navigate throughout the site and easily start the game itself.
- I want to see engaging design and content.

#### As a Frequent User: 

- I want the game being easily accepable and being able to get to it without too many clicks
- I want story to be interesting as well as choices options
- I want to be able to restart the game should I get to the dead end.

## Scope

- I have chosen simple design and navigation. The Home page to have pop up box with text animated gif/ image, click button as a link to the Story page and the welcome sound. At the top of each page to have navbar with the logo.
- For the Story page to have story text followed by the options to choose from and once certain options chosen to have images dispayed. Additionally, once user gets to dead end to have a sound effect.
- For the Feedback page to have contact input information and text area which once submited to have it sent to my email using emailjs.
- I have used mixed content of text, images and sounds.

## Structure

I decided to separate the website into three pages: the Home page, Begin Your Adventure page and Feedback page.

## Skeleton

- Home Page: <a href="assets/wireframes/home-wireframe-rs.pdf" target="_blank" >Home</a>

- Story Page: <a href="assets/wireframes/story-wireframe-rs.pdf" target="_blank" >Story</a>

- Feedback Page: <a href="assets/wireframes/feedback-wireframe-rs.pdf" target="_blank" >Feedback</a>

---

## Surface

I used a very simple layout with two predominant dark colors, while playing their shades. For logo I used rainbow text-shadow to give the pages retro look. All buttons, content boxes and input fields are in rounded shapes, which creates consistency and harmony throughout all 3 pages.


### Gif
- Gif was used for Home page to add a little bit of visual interactivity.
-   ### Design
    -   #### Colour Scheme
        - Main colors of the website are - black, purple and white. This colourscheme is consistant throughout all pages and in my opinion the best for retro look. For the buttons I used slightly lighter shade of purple with black borders and when hover over it reverses border and background colours. For the logo - rainbow text-shadow has been used.
    -   #### Typography
        -   The Orbitron font used for logo/name of the website. While Play font is the main font used throughout the whole website with Sans Serif as the fallback font in case the font isn't loading. 
        Orbitron is perfect for retro looking logo and combining with rainbow text-shadow. Play is very similar to Orbitron in the way it shaped, which creates uniformity throughout the whole website. Play has as well a retro while still is nicely spaced out and easy to read.
    -   #### Icons
        - Font Awesome was used for icons and they are psent on all pages at the footer.
## Features

#### Navbar
- The navbar's background has been designed with a vertical gradient-style fading to the body, creating seamless transition to black body background. 
- Nav elements have rounded shapes placed in the centre right underneath the logo.
- Logo can be clicked on any page and it will take the user to home one.
- For the logo a rainbow text-shadow declaration have been used.

#### Home
- Content box is present in the middle of the body 
- Box shadow declaration used for the content box
- Gif added to the content box
- Underneath gif and text is button "Click Here!" that takes user to Begin your Adventure page.

#### Begin your Adventure
- In the middle of the page content box is present similar to the one on Home page
- Content box have same as home page box shadow present 
- Text for the game is wrapper in another container to have a white background
- Text for the game is changing depending on user's choice of actions
- Buttons inside content box underneeth the text are in the same style as navbar buttons for the consistency, however the font weight is 400 instead of 700 for easier readability as they contain more text
- Each button inside content box is the choices for a user to pick from for the desired story involvement
- When arrive to dead end the restart button takes you to the begining

#### Feedback 
- Contains form to fill out for leaving feedback or requesting a new content
- EmailJS used to link the form to my email

#### Footer
- The same as header vertical gradient-style fade has been aplied
- Feedback link can be clicked for user to go straight to feedback page
- Social media icons link to my profile pages

### Features Left to Implement
- Music effects when arrive to the dead end.
- Visual ilustrations to curtain scenes
- Ability to get, exchange and store items
---
## Technologies Used

#### Languages:
- [HTML](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

#### Libraries:
- [Bootstrap v5.0](https://getbootstrap.com/) - A mobile-first responsive library used to construct various parts of the website, including the Navbar, Grid System Buttons.
- [GoogleFonts](https://fonts.google.com/) - Orbitron and Play fonts
- [FontAwesome](https://fontawesome.com/) - Used for icons used for the footer 
- [Balsamiq](https://balsamiq.com/wireframes/?gclid=EAIaIQobChMIn-_lgbiJ7QIVn4BQBh1X3Av6EAAYASAAEgL1XfD_BwE) - used for creating the wireframes

#### Version Control:
- [Github](https://github.com/) - Used to store the code and to deploy the website. 
- [Gitpod](https://gitpod.io/) - Used as the primary version control IDE for development to further push and commit code to Gihub.

#### Other:
- [Code Institute Course Content](https://courses.codeinstitute.net/) - Main learning base as well as inspiration for curtain features.
- [ChromeDevTools](https://developers.google.com/web/tools/chrome-devtools) - Used frequently to check layout, responsivness and any malfunctions, especially using console for JS functionality.
- [W3Schools](https://www.w3schools.com/) - used for CSS coding for gradient navbar and alighnment tips.
- [HTML.am](https://www.html.am/) - Used for Copyright sign code.
- [Mathew Lein](https://matthewlein.com/) - Used for rainbox text-shadow for the logo.


## Testing

- Form testing: to check feedback form functionality, I tested it on different devices and browsers. For that I clicked the send your feedback button on the Feedback page without any text in inputs to see it showing the desired response of 'Please fill out this field'. For emailJs functionality I have submited feedback from my friends email - first of all it showed in devtools console '200 SUCCESS' and secon of all I received an email.
- Links (Internal & External): internal links - when clicking on brand/logo it is leading user to Home page from any page; button/link insiide vontent box on Home page is redirecting to the Begin Your Adventure page. External links - in this case icons, used in the footer are leading user to my social media profiles and for better UX I used traget:_blank, so it opens it in the new tab.
- Checked the website was mobile responsive on all pages through [Google Mobile Friendly Test](https://search.google.com/test/mobile-friendly?utm_source=gws&utm_medium=onebox&utm_campaign=suit)



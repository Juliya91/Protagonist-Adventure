# [Protagonist Adventure](https://juliya91.github.io/Protagonist-Adventure/index.html)

## Code Institute - Milestone Project 2

### View the live project [here.](https://juliya91.github.io/Protagonist-Adventure/index.html)

- The purpose of the **Protagonist Adventure** game is to inspire milenials and generation Z to read more while enjoying playing the game where they decide how the story unfolds.

![am-i-responsive](https://user-images.githubusercontent.com/75125486/120950104-f7d81c80-c73d-11eb-9d29-612fdc5ca160.png)

## Table of Contents
> - [Overview](#overview)
> - [Description](#description)
> - [Ux](#ux)
> - [Features](#features)
> - [Technologies Used](#technologies-used)
> - [Testing](#testing)
> - [Project bugs and solutions](#bugs-and-solutions)
> - [Testing User Stories](#testing-user-stories)
> - [Deployment](#deployment)
> - [Credits](#credits)
> - [Acknowledgments](#acknowledgements)




## Overview

The idea has been inspired by Bundersnatch episode from Black Mirror series, but in this case it will be text based. There are many **"Choose your own adventure"** games, however most of them are done in the last century. **Protagonist Adventure** is a way to bring back a retro game using new technologies.
 
## Description 

This project will have three pages, which are: "Home", "Begin Your Adventure" and "Feedback" pages. The "Home" page has pop up box with a little description of the game, sound effect and **click here** button which leads user to "Begin Your Adventure" page. The "Begin Your Adventure" page has the game itself - text with two or more choices.

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
- [Google Mobile Friendly Test](https://search.google.com/test/mobile-friendly) - Used to test all pages on a mobile device
- [AmIResponsive](http://ami.responsivedesign.is/) - Used to see how the layout of the website looks across different devices- found at the top of this [README](https://github.com/Juliya91/Protagonist-Adventure/blob/master/README.md). 



## Testing

- Form testing: to check feedback form functionality, I tested it on different devices and browsers. For that I clicked the send your feedback button on the Feedback page without any text in inputs to see it showing the desired response of 'Please fill out this field'. For emailJs functionality I have submited feedback from my friends email - first of all it showed in devtools console '200 SUCCESS' and secon of all I received an email.
- Links (Internal & External): internal links - when clicking on brand/logo it is leading user to Home page from any page; button/link insiide vontent box on Home page is redirecting to the Begin Your Adventure page. External links - in this case icons, used in the footer are leading user to my social media profiles and for better UX I used traget:_blank, so it opens it in the new tab.
- Checked that the website was mobile responsive on all pages through [Google Mobile Friendly Test](https://search.google.com/test/mobile-friendly?utm_source=gws&utm_medium=onebox&utm_campaign=suit)

- **Home**
![home-mob-responsive](https://user-images.githubusercontent.com/75125486/120943383-7032e380-c726-11eb-86b0-1a46f935e589.png)
- **Begin Your Adventure**
![adventure-mob-responsive](https://user-images.githubusercontent.com/75125486/120943507-31e9f400-c727-11eb-911e-bfc6458e8c50.png)
- **Feedback**
![feedback-mob-responsive](https://user-images.githubusercontent.com/75125486/120943561-96a54e80-c727-11eb-9920-d79f4947d75f.png)

#### Validation

HTML - [W3C](https://validator.w3.org/) - Markup Validation

![feedback-validate-er](https://user-images.githubusercontent.com/75125486/120946294-e25df500-c733-11eb-98ff-8496ad88f4c0.png)
- On feedback.html showed warning for unnecassary type attribute in script cources for JavaScript
- Showing warnings for two consecutive hyphens in a comments.

![html-feedback-js-cor](https://user-images.githubusercontent.com/75125486/120946483-98c1da00-c734-11eb-9141-04044eb41361.png)
- Removed type attribute from script tags in the head of feedback.html
- Kept the comments in the current format as it easear to read through the code

CSS - [W3C](https://jigsaw.w3.org/css-validator/) - CSS Validation
![css-validation](https://user-images.githubusercontent.com/75125486/120946723-5fd63500-c735-11eb-8e80-459b7f79354f.png)

#### Bugs and Solutions

- Removed btn-dark class from choice buttons on adventure.html as it wasn't aligning correctly and font-weight was too thick. Added sepate properties to .btn instead to have more control.
- Footer wasn't sticking to the bottom on ipad and large screen and once aplied position: fixed to all screens, on the desktop and mobile versions content boxes were partially covered by the footer being unable to scroll down. Added position: relative to mobile and desktop versions and position: fixed to ipad and large screen versions
- Content boxes on index.html and adventure.html were not displaying ideally in centre - I changed width to 100% and added margins left and right: auto.
- Content box on index.html was partially covered on the sides on mobile verstion - added width: 300px to #welcomeBox separetely undertneath the (#welcomeBox, #contentBox).

#### Testing User Stories

#### As a First Time User:

**"I want to easily understand the main purpose of the site."**
> *The moment the user opens the website they can see the logo - Protagonist Adventure right at the middle top with rainbow text shadow and the name gives a very good idea of what the website is about.
Subsquently, right under the header you see content box with welcome text and invitation to play the game.*

**"I want to intuitively navigate throughout the site and easily start the game itself."**
> *Navbar has the buttons that lead user to all the pages right at the top. Additionally, content box in the middle of the Home page has 'click here' button that will redirect the user straight to the Begin Your Adventure page where user can play the game.* 

**"I want to see engaging design and content."**
> *Main colours are black, purple and white with rainbow text shadow for the logo/brand which creates retro look which consides with choose your own adventure game. 
The content boxes are matching the colourscheme of header, body and footer. Content box on the Home page has welcome text, gif (saying 'Play') and 'Click here!', which is estetocally pleasing and fetching. The content box on Begin Your Adventure has the game itself with the story  which is easy to follow and is engaging.*

#### As a Frequent User:

**"I want the game being easily accepable and being able to get to it without too many clicks."**
> *Very easy to get to the Begin your Adventure page which is the game itself, user only needs either click on the button in the navbar or the button inside welcome content box on the Home page.*

**"I want story to be interesting as well as choices options."**
> *My friends played the game and advised that story is very engaging and the options are interesting. They played repeatedly as got to the dead ends few times.*

**"I want to be able to restart the game should I get to the dead end."**
> *Once the user gets to the dead end there restart button that gets them back to the start of the start of the game and they can attemt to move mofard in the story again.*

## Deployment

- Once I had set up my account Github, I created a new repository by clicking "+" next to my profile avatar and choosing "New repository". To create this project and all follow along projects, I used the Code Institute's student [template](https://github.com/Code-Institute-Org/gitpod-full-template).
- Once added a Gitpod extention to a browser, on GitHub repository click on the green "Gitpod" button which will redirect to [Gitpod](https://gitpod.io/)
- Gitpod, an IDE used to write all the code and this README file for this project.
- After every significant change and edition to the project it was saved, commited and pushed to Github where it is stored in a [repository](https://github.com/Juliya91/instacity-goteborg)
- Under "Settings", I scrolled down to Github Pages and it is now has its own dedicated tab. I clicked on the link and there I then selected "Master Branch".
- Once this was selected, the project was pushed to Github pages and the URL is then displayed. That URL gets updated automatically each time I made a change on Gitpod and pushed it to GitHub.

## Credits

### Content

- Content was created by myself with proofreading and slight amendments from my friend - Jessica George

### Media

- The ilustration for the 404.html taken Pixabay and Gif for endex.html taken from Giphy.
---
### Acknowledgements

- My friend Jessica Gearge for all the help with content and especially huge support.
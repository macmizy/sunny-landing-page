# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

(Screenshot 2022-06-30 134727.png)
(Screenshot 2022-06-30 134812.png)
(Screenshot 2022-06-30 134856.png)
(Screenshot 2022-06-30 134927.png)
(Screenshot_20220630-135420_mobile.jpg)

### Links

- Solution URL: (https://github.com/macmizy/sunny-landing-page)
- Live Site URL: (https://sunny-landing-page.rufairahim.repl.co/)


### Built with

- HTML
- CSS
- Javascript

### What I learned
I learnt how to use the "::before, position, transform " properly and many other things.


```css
#menu.active::before{
        content: "";
        position: absolute;
        border-style: solid;
        border-width: 0 0 28px 28px;
        top: -8%;
        right: 0;
        border-color: transparent transparent var(--cl-White) transparent;
    }
```

```js
menuBars.addEventListener("click", function () {
    menu.classList.toggle("active");
});
```

### Continued development

I'll probably learn more of Javascript

## Author
- Frontend Mentor - [@macmizy](https://www.frontendmentor.io/profile/macmizy)
- Twitter - [@rahim_moyo](https://www.twitter.com/rahim_moyo)

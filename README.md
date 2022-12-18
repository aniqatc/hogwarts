# <a href="https://hogwarts.aniqa.dev" target="_blank">Hogwarts</a>
A landing page about the fictional institution, Hogwarts, from the Harry Potter series. Redesigned from the original version to have a cleaner look and more features!


<img src="https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png" width="20px">  <img src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" width="20px"> <img src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" width="20px">  <img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" width="20px">

# Key Features
Despite having no real purpose and being one of my first landing page projects, it was meant to be mainly HTML & CSS. But I came back to it (after I had learned more concepts) to make it better visually and functionally. Here are some the key features I added and the things I improved from the original version:
- Fully responsive layout
- Overlaying text on an element that only appears on `:hover` (Section: Courses)
- Used a responsive grid for the Course section and media queries with `grid-column` and `nth-child()` to target last two child items to center align them in smaller screens
- Used `@keyframe` animations that appear on `:hover` for all buttons & text overlays
- Used `touchstart` with an Event Listener so that all elements can be easily hovered on mobile with a single-tap (thanks to event bubbling)
- Added sticky navigation that appears at the bottom of the window after hero is no longer in viewport (thanks to `IntersectionObserver`)
- Created a functional form with logic built through `if else` statements
- Form has two buttons that execute different logic (and will print different messages based on user input)
- Added my own form validation so that incomplete & empty answers are not given a successful submission message
- Use `scrollIntoView()` to allow smooth scrolling
- Added cards to represent each Hogwarts house that allows toggling between them to display different House content
- Use nested `for` loops to loop through each Hogwarts card as a button and then loop through it to show the correct content for each


# Preview
<a href="https://hogwarts.aniqa.dev" target="_blank">
<img src="https://github.com/aniqatc/hogwarts/blob/main/assets/preview.gif?raw=true" style="max-width:100%;"></a>

# <a href="https://www.aniqa.io/hogwarts-reflection" target="_blank">Reflection</a>

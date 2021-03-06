# coding-challenge-front-end

Welcome to the Cove coding challenge! š

Adam and Matt just signed a deal with a large real estate owner š. Before we can launch our *powered by cove* platform in their office building, we need to get a reservation system up and going. 

In our backlog grooming Jeremy (our Product person) presented the problem we are trying solve for our users:

*As Angela at Allsafe (office user), Iād like to book a the large conference room for the strategy meeting and I need to find a time when it's avaiable.*

The team broke this problem down and decided to start first with this User Story:
- As an office user, Iād like to see the schedule for a selected room and date, because I need to find a time when it's available.

For this challenge, we've provided you with a simple application that is meant to display a list of reservations and allows the user to filter by date and room. Your job is to complete this application so that it functions as intended.

Questions along the way? Don't hesitate to reach out to engineering@cove.is!

## Running the App

- `yarn`
- `yarn start`

## Part 1

Your first objective is to take a look at the TODOs in [`App.js`](./src/App.js). We'd simply like you to "wire-up" the existing components using React [Hooks](https://reactjs.org/docs/hooks-intro.html). No need to change the UI at this stage in terms of styling or functionality, apart from hooking up the components.

You'll need to:
- manage the state for both filters (`DatePicker` & `DropDownSelect`)
- fetch a list of reservations from this endpoint: https://cove-coding-challenge-api.herokuapp.com/reservations
- populate `DropDownSelect` with options based on the rooms you get back from the endpoint (e.g. "Room A", "Room B", ...)
- pass a filtered version of the reservations you get back to `ReservationList`

After this step, the user should be able to change the value of both filters, and they should only see reservations that match their filters.

### Explain your approach to Part 1

Explain your approach here
- "Angela at Allsafe" - Nice Mr Robot reference.  š  I could just throw out all the requirements, _since she's dead_, but I'll still complete the challenge.  š
- I converted this to a `react-scripts` app.  Obviously, if this were a "real" company app, this wouldn't be an option.  But the Webpack config in the demo app was, umm... suboptimal, and I didn't want to spend copious amounts of time in a mere demo app try to fix the Webpack config.
- Reservations are loaded with a custom Hook that leverages Axios for the asynchronous `GET`.
- I used my `@toolz/use-constructor` custom NPM package to ensure that the `GET` is triggered only once upon application load.
- I used my `@toolz/allow-react` custom NPM package to ensure the integrity of function arguments.
- PLEASE NOTE: The instructions only gave me a single endpoint - for reservations.  And I'm supposed to _infer_ the list of rooms from the existing reservations.  However, this couldn't be a "proper" approach for a true, live application.  Because this approach will only allow me to display a list of rooms _that already have at least one reservation_.  Ideally, there should be a separate "rooms" endpoint.  Because, under this current approach, a room that currently has NO reservations will never show up in the drop-down select.  (ALSO NOTE: I tried to do a `GET` against https://cove-coding-challenge-api.herokuapp.com/rooms, just to see if maybe the endpoint exists, but is not mentioned in these instructions.  But there was no endpoint there to hit.)
- It seems logical to me that these results should also be _sorted_ by time.  But the mockups provided specifically show results that are _not_ sorted by time.  So I did not include time-filtering in this solution.


## Part 2

Your next job is to make the list of reservations look a little nicer. Ryan, the designer on our team made some mock-ups for the desktop and mobile UI. Take a look at the TODO in [`ReservationList.js`](src/common/components/ReservationList.js) and try to match Ryan's mock-ups below. Your design should be responsive, using a css breakpoint to switch between the desktop and mobile layouts. 


Desktop:

<img src="public/imgs/mock-up-desktop.png" alt="desktop" />

Mobile:

<img src="public/imgs/mock-up-mobile.png" alt="mobile" width="300"/>

Please don't worry about making it a pixel-perfect match with the designs! As Devs we collaborate closely with Ryan and it's a give and take.

Feel free to use whatever approach to styling you wish. No need to mirror what is already in the project. Some approaches that we consider valid:

- [Styled Components](https://styled-components.com/)
- [React-JSS](https://cssinjs.org/react-jss/?v=v10.6.0)
- [Tailwind](https://tailwindcss.com/)
- SASS/LESS
- CSS Modules
- or just plain CSS

### Explain your approach to Part 2

Explain your approach here

- I chose to use Material UI.  It wasn't in your list of "valid approaches".  But the instructions said "to use whatever approach to styling you wish", Material UI has a large install-base, and I'm already very familiar with it.
- I used my `@toolz/use-material-ui` custom NPM package because I don't like the responsive naming conventions inherent in Material UI.
- I used my `@toolz/use-viewport` custom NPM package to handle responsive breakpoints.

## Part 3

For this last step, we'd like to try and understand how you approach testing. Our product person Jeremy already has a bunch of reservations related User Stories lined up. In the backlog grooming, Rachel pointed out that we should add some good test coverage now, since we'll likely add more complexity to our reservation app in the future.

We've started working on a util called `isScheduleConflict` to check for reservation conflicts. `isScheduleConflict` takes a list of reservations and returns `true` if any reservation in the list conflicts with another in the list (see `utils.js` for more details). Your job is to complete this util and add more test coverage. Look for the TODOs in [`utils.js`](src/utils.js) and [`utils.test.js`](src/utils.test.js) and use `yarn test` to execute the tests.

Assumptions you can make:
- `reservations` will always be an array of valid reservations
- A valid reservation always has a start/end time and the end time will always be after the start time
- Do NOT hook up the util to the user interface

NOTE: Don't worry about the efficiency of your solution:
- If you know an efficient solution, we'd love to see it and hear why you favor it.
- However, we are more focused on readable and maintainable code.

### Explain your approach to Part 3

Explain your approach here

- I finished `isScheduleConflict()`.
- I created `sampleReservations`, which mirrors the values that are currently returned from your endpoint, and ensured that there are no dups.
- I added a new reservation with a conflicting end time and ensured that it detects the dup.
- I added a new reservation with a conflicting start time and ensured that it detects the dup.

## One last thing...

Write up a few notes about your approach to each Part in the README sections above. Finally, search the repo for `TODO:`. If you see no search results, then you are done! š

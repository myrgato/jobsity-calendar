## TOC

- [Configuration](#configuration)

- [Tests](#tests)

## Introduction

Interview Test for Jobsity - Reminder Calendar

**Mandatory Features**

> All of those below are included in the project

- Ability to add a new "reminder" (max 30 chars) for a user entered day and time. Also, include a city.

- Display reminders on the calendar view in the correct time order.

- Allow the user to select color when creating a reminder and display it appropriately.

- Ability to edit reminders – including changing text, city, day, time and color.

- Add a weather service call from a free API such as Open Weather Map, and get the weather forecast (ex. Rain) for the date of the calendar reminder based on the city.

> Note that the Open Weather free API only gives us five days from now of forecasts, so any date before or after won't show weather information

- Unit test the functionality: Ability to add a new "reminder" (max 30 chars) for a user entered day and time. Also, include a city.

> Includes also tests for deleting, deleting all, editing and E2E tests with Cypress.

**Bonus Features**

- Expand the calendar to support more than the current month.

> There's a top area part with buttons to go to previous or next month and jump back to today.

> It features all months and years.

- Properly handle overflow when multiple reminders appear on the same date.

> Reminders are grouped by time.

- Functionality to delete one or ALL the reminders for a specific day

> Both actions are included

The project also features `localstorage` integration via `redux-persist`.

## Configuration

1.  **Install these packages (prefer the listed versions):**

- yarn 1.21.1

- npm 6.13.4

- node 12.16.1

2.  **Create a .env file with the required variables:**

```sh

REACT_APP_WEATHER_API_KEY=

```

3.  **Install all dependencies with yarn**

```sh

yarn

```

4.  **Start the server**

```sh

yarn start

```

5.  **If Cypress (yarn test:e2e) is still not installed after yarn. Install cypress with:**

```sh

npx cypress install

```

7.  **Commands**

```bash

# Installs all dependendies

$ yarn



# Runs the application

$ yarn start



# Runs unit tests with Jest

yarn test



# Runs E2E/Integration tests with Cypress

$ yarn cy:open



```

## Tests

- Unit tests are in src/jest/store.

- Integration tests are in cypress/integration.

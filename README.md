## OUTVIO COVID DATA VIEWER
## Features
_React.js_ - **React >18.2.0**💎
_axios_ - **axios >1.3.3**🤟🏻
reaviz - **reaviz >14.0.2**📊
material UI
## Quick start

1. Clone this repo
2. Run `yarn` or `npm install` to install dependencies.<br />
3. Run `npm start`  or `npm build && npm serve` to see the app at `http://localhost:3000`.

## Documentation

Short description: Small data visualization SPA for COVID-19 dataset.

Requirements
React.js must be used. Other than that any framework or library can be used to implement the task. This includes UI frameworks, like material-ui, charting libraries like reaviz.
The completed task should be available on a GitHub repository or sent as a zip file.
The app should implement the below mockup.
Data source for the app: https://covid.ourworldindata.org/data/owid-covid-data.json from the https://github.com/owid/covid-19-data/tree/master/public/data repository.
The country select should list all of the available countries of the above data source. The select should be searchable. If no country selected, than the below charts should show global statistics (that is available from the above data source)
Below that should be 2 tabs titled “Reported cases” and “Ranked charts”
The first tab (“Reported cases”) should render a line chart. The controls for the line chart should be in the section labeled “chart controls”. In the chart control we should have these options available:
Switch between death count or confirmed cases
Switch between daily new values or cumulative mode
The second tab (“Ranked charts”) should render a bar chart. The controls for the bar chart should be in the section labeled “chart controls”. The chart should render the top X number of countries for the selected settings. If there is a country selected in the top country selector, that country should be highlighted in the bar chart. In the chart control we should have these options available:
Switch between total number of deaths and total number of cases.
Dropdown to select how many countries should be listed in the bar chart. Default should be 10.
The app should also implement a dark mode switch. This can be toggled by the user via an icon placed in the top-right corner of the viewport. This should change between a light and dark themed color palette. (The colors don’t need to comply with WCAG color contrast requirements for the purposes of this task)
In all cases the charts should display the full range of available data.
Style of the app is left to the implementer.
Responsiveness should be taken into account. The app should be usable on mobile devices.

Bonus points
Usage of Typescript
Clean, formatted code (prettier/eslint)
Use general best practices for performance (no unnecessary renders)


### Structure

    ├── public
    ├── src
    ├──── context
    ├────── actions
    ├──────── generalActions.js
    ├──────── index.js
    ├────── states
    ├──────── initialStates.js
    ├────── reducers
    ├──────── generalReducer.js
    ├──────── reducer.js
    ├────── store
    ├──────── storeContext.js
    ├────── elements
    ├──────── api
    ├─────────── api.js
    ├──────── features
    ├─────────── rankedCharts.js
    ├─────────── reportedCases.js
    ├─────────── searchBar.js
    ├──────── tabPanel.js
    ├──── index.js
    ├──── App.js
    ├──── serviceWorker.js
    ├── package.json
    ├── .gitignore
    └── README.md

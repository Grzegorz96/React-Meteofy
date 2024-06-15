<img src="https://github.com/Grzegorz96/React-Meteofy/assets/129303867/9e2ac7d4-7b8c-4aa6-9da2-5c47bf8dc5f8" alt="logo" width="100%" />

# Meteofy

Meteofy is an advanced weather application crafted with React technology, offering users a wide array of features. It boasts full responsiveness, includes both light and dark theme modes, and integrates with multiple APIs. Meteofy provides up-to-date information about the weather and forecasts for the next 15 days, allowing users to stay informed about atmospheric conditions. Users can view current weather data on an interactive map of Poland, with marked provincial capitals, enabling quick understanding of regional weather differences. The application also offers the ability to check weather conditions on a map of Europe, with visible capitals of countries, which is useful for travelers or individuals interested in weather conditions in different countries. Users can explore global weather conditions using an interactive 3D globe, with visible country capitals, providing a global perspective on weather conditions. Meteofy allows the analysis of weather data on a chart, where users can switch between different time ranges, weather types, and cities, facilitating tracking of long-term weather trends. Additionally, application provides information on the current level of air pollution along with forecasts for the next four days, data is presented in graphs, allowing users to explore air pollution levels across the entire Earth's surface.

## Table of Contents

- [Description of folders and modules](#Description-of-folders-and-modules)
- [Features](#Features)
- [Technology used](#Technology-used)
- [Installation](#Installation)
- [Lessons learned](#Lessons-learned)
- [Authors](#Authors)
- [Contact](#Contact)
- [License](#License)
- [Screnshoots](#Screnshoots)


## Description of folders and modules

### Core:
/src/App.jsx:
- App file contains the main component of a React application. It sets up the application's theme mode, provides global styles and routing functionality using React Router.

/src/main.jsx:
- main is responsible for rendering the main React application (App) component inside the main HTML element of the document. It also provides store redux to the application so that the entire application has access to redux data.

### Redux store:
/src/app/store.js:
- The store.js module is the central configuration point for the application's Redux store. It utilizes @reduxjs/toolkit's configureStore to set up the store with two main reducers: cityDataReducer and themeDataReducer.

### Reducers:
/src/state/cityDataSlice.js:
- The cityDataSlice.js file is responsible for managing city data within the Redux store, allowing actions to set or reset city data as needed.

/src/state/themeDataSlice.js:
-  The themeyDataSlice.js file is responsible for managing theme data within the Redux store, allowing actions to toggle the theme mode between light and dark.

### Pages:
/src/pages:
- The pages folder houses view files representing different pages of the application. Components in these files are integrated into the router, enabling the routing functionality to display the appropriate pages for the user.

### Containers:
/src/containers/airPollution.jsx:
- The AirPollution container houses the main logic for the functionality and rendering of the subpage. It encapsulates the logic for data fetching, city selection, and conditional rendering of components.

/src/containers/Europe.jsx:
- The Europe container is responsible for the logic of fetching data and conditionally rendering its child components.

/src/containers/Home.jsx:
- The Home container is responsible for managing the logic and functionality of the user's main homepage.

/src/containers/LongTermWeather.jsx:
- The LongTermWeather container is responsible for managing the logic and functionality of the subpage dedicated to long-term weather. It is responsible for fetching weather forecast data, implementing the logic for data fetching, processing responses from the server, and updating the application state based on the received information.

/src/container/Poland.jsx:
- The Poland container is responsible for fetching data about cities in Poland and rendering the appropriate components accordingly.

/src/containers/World.jsx:
- The World container is responsible for fetching data required to display the 3D globe and conditionally rendering dependent components based on the current state of the application.

### Components:
/src/components/airPollution:
- The airPollution folder contains the components that make up the Air Pollution page of the application, along with their associated styles. This dedicated folder structure helps in organizing and maintaining the code related to the Air Pollution feature.

/src/components/EuropeMap:
- The EuropeMap folder contains the Europe map component along with its associated styles. This organization helps in managing the code related to the Europe map feature efficiently.

/src/components/footer:
- The footer folder contains subfolders that house the footer component of the application along with its styles, as well as the theme toggle component.

/src/components/header:
- The header folder contains subfolders for the header component, navigation bar, and sidebar, along with their respective styles. This structured organization ensures efficient management and maintenance of the header-related features.

/src/components/home:
- The home folder contains subfolders with components necessary for building the application's home page, along with their associated styles.

/src/components/longTermWeather:
- The longTermWeather folder contains subfolders with the main component for the long-term weather subpage, a line chart component, and their associated styles.

/src/components/Main:
- The Main folder contains the main component of the application along with its styling. 

/src/components/NotFound:
- The NotFound folder contains the component responsible for rendering an element on the page when a user enters an incorrect address, along with its associated styling.

/src/components/PolandMap:
- The PolandMap folder contains the component responsible for generating the map of Poland for the application, along with its associated styling.

/src/components/ui:
- The ui folder contains subfolders housing reusable components utilized in various parts of the application, such as Accordion, Loader, Modals, ScrollContainer, and Search Engine, along with their respective styling files.

/src/components/world:
- The world folder contains a subfolder housing the main component, WorldGlobe, which serves as the primary component for building the subpage. Additionally, it includes components Earth and WeatherBoard, along with their respective styling files.

### Hooks:
/src/hooks/useDataWithCitiesHandler.js:
- The useDataWithCitiesHandler hook is a custom React hook designed to handle the fetching of data for a given city and data type. It encapsulates the logic for fetching weather-related data, air pollution data, or long-term weather forecasts based on the provided city and data type.

/src/hooks/useDataWithMapsHandler.js:
- The useDataWithMapsHandler hook is a custom React hook designed to fetch weather data for multiple cities and handle the data using maps.

### Layout:
/src/layouts/MainLayout.jsx:
- The MainLayout component serves as the main layout structure for the application. It includes a header, a main section where nested routes will be rendered, and a footer.

### Routes:
/src/routes/appRoutes.jsx:
- This file defines an array named appRoutes, which contains various routing paths for the application along with their corresponding components. These components are imported from different files within the project's directory structure.

/src/routes/router.jsx:
- This file defines the router configuration for the application, using the react-router-dom library. The function createBrowserRouter creates a router based on the provided configuration.

### Services:
/src/services:
- The services folder contains files containing functions for communication with external weather API services. These functions are responsible for querying the API, receiving responses, processing the data, and delivering it to other parts of the application that require weather information.

### Utils:
/src/utils/charts/chartData.js:
- The file chartData.js contains functions that return appropriately generated data objects for charts based on the parameters they receive.

/src/utils/charts/chartOptions.js:
- The file chartOptionsa.js contains functions that return appropriately generated option objects for charts based on the parameters they receive.

/src/utils/charts/chartPlugins.js:
- The chartPlugin file contains a plugin for drawing a vertical line on a chart depending on the current date.

/src/utils/citiesConfig:
- The citiesConfig folder contains files with object arrays that contain data about cities needed to download and render them.

/src/utils/constans:
- The constants folder contains a subfolder api with constants necessary for fetching weather API data, as well as other constant files required for the program to function properly.

/src/utils/styles/globalStyles.js:
- The file globalStyles contains a component encompassing global styles that apply throughout the entire application, ensuring uniformity and consistency in appearance and layout.

/src/utils/styles/theme.js:
- The theme file contains defined theme objects that are utilized throughout the entire application, ensuring consistent visual elements and styling.

/src/utils/styles/formatting.js:
- The formatting file contains functions for formatting latitude, longitude 2D coordinates into Cartesian 3D coordinates.

/src/utils/styles/helpers.js:
- The helpers file contains helper functions utilized within the application.

### Assets:
/src/assets:
- In the assets folder, there are subfolders containing CSS files used in the application, textures, and application logos. These files are directly imported into the application and managed using JavaScript."

/assets:
- In the assets folder, located within the public directory, there are subfolders containing icons dynamically utilized in the application. These icons are not directly imported into the JavaScript code, but their paths are dynamically referenced within the application.


## Features

### Home Page:
- Current, detailed weather data for cities around the world.
- 15-day weather forecasts for cities around the world.
- Hourly weather tracking in the forecasts.
- Automatic display of data for the user's location.

### Poland Page:
- Interactive map of Poland divided by voivodeships.
- Weather labels for each voivodeship capital.
- On clicking a voivodeship, the ability to display a modal with detailed weather data for that capital.

### Europe Page:
- Map of Europe with a current temperature layer.
- Interactive markers with weather data for each European capital city.
- Ability to display modals with detailed data by clicking on a marker.
- Use of marker clustering to group markers that are close to each other.

### World Page:
- Interactive 3D globe with the ability to rotate, zoom in, and zoom out.
- 3D weather boards with weather data for the capitals of countries around the world.
- Use of four types of globe textures for detailed representation.
- Hovering over a weather board element highlights it in green.
- Ability to click on a weather board to display a modal with detailed weather data.

### Long Term Weather Page:
- Line chart displaying long-term weather data from around the world.
- Available data range: 92 days in the past and 274 days into the future.
- Ability to switch between different types of weather data.
- Automatic display of data for the user's location.

### Air Pollution Page:
- Display of current air pollution data on a bar chart for locations worldwide along with the air quality index (AQI).
- 4-day air pollution forecasts with AQI.
- Hourly line charts for forecasts.
- Ability to switch between different types of pollutants in forecasts.
- Automatic display of data for the user's location.

### Not Found Page:
- Aesthetic 404 page with a quick link to navigate back to the home page.

### Theme:
- Two application modes: light and dark.
- Saving the application theme mode in the browser's local storage.
- Automatically checking the previously set mode when launching the application, if the user launches the application for the first time, it will set the mode based on the theme system settings from your device.

### Error Handling:
- Handling various types of errors through elegant, animated error modals.
- Handling cases where the API returns data without the appropriate keys.

### Loader:
- Every data-fetching operation on the site is handled by a Loader for a better user experience.

### Responsiveness:
- Full application support for all types of devices, from wide desktop monitor screens to narrow smartphone screens.

### Side Bar Menu:
- Elegant side bar menu for devices narrower than 768px.
- Automatic closing side bar menu.

### Search Engine:
- Search engines asynchronously fetching city lists based on user-entered prefixes.

### Routing:
- Each application page has its own routing, allowing for navigation via links within the app and direct address input in the browser.

### Keyboard Application Support:
- The application has full keyboard support.


## Technology used

**Client:** 
- Languages: JavaScript, HTML, CSS
- Frontend Library: React
- Routing: React Router
- UI Components: RSuite, React Icons, React Spinners, SweetAlert2, SweetAlert2 React Content, FontAwesome (React FontAwesome), React Accessible Accordion, React Burger Menu
- Styling: Styled Components, CSS
- SVG Handling: Vite Plugin SVGR
- 3D and Animations: Three.js, @react-three/fiber, @react-three/drei, @react-spring/web
- State Management: Redux Toolkit, React Redux
- Charts and Graphs: Chart.js, React Chartjs 2, Chartjs Adapter Date FNS, Chartjs Plugin Datalabels
- Maps and Geolocation: Leaflet, React Leaflet, React Leaflet Cluster
- Data Fetching: Axios
- Form Handling and Selects: React Select, React Select Async Paginate
- Responsive Design: React Responsive
- Hosting for web application: www.netlify.com

**Server:** 
- Current weather, forecast weather and air pollution data: https://www.visualcrossing.com
- Data about cities from maps and the globe: https://openweathermap.org
- Long term weather data: https://open-meteo.com
- Reversed geocoding: https://www.geoapify.com
- Data about cities in the search engine: https://rapidapi.com/wirefreethought/api/geodb-cities


## Installation

### To quickly launch the Meteofy application:
- Enter the link: https://meteofy-app.netlify.app

### For manually launching the application on the IDE:
#### Requirements:
##### Programs:
- Web browser.
- IDE, for example Visual Studio Code.
- Node.js

#### Instruction:
- Download React-Meteofy repository:
```bash
 git clone https://github.com/Grzegorz96/React-Meteofy.git
```
- Go to the React-Meteofy directory:
```bash
cd React-Meteofy
```
- Open the React-Meteofy on your IDE.
- Install dependencies:
```bash
npm install
```
- Get API keys from:
##### https://www.visualcrossing.com
##### https://rapidapi.com/wirefreethought/api/geodb-cities
##### https://openweathermap.org
##### https://www.geoapify.com
- Create your own .env file in main folder and add API keys:
```bash
VITE_VISUAL_CROSSING_API_KEY=your_api_key
VITE_GEO_DB_API_KEY=your_api_key
VITE_OPEN_WEATHER_API_KEY=your_api_key
VITE_GEO_APIFY_API_KEY=your_api_key
```
- Run the project:
```bash
npm run dev
```
Now the Meteofy should be running on your local server. You can now edit the code in your development environment.


## Lessons learned
Creating the Meteofy application took me about 3 months, and it was an intensive period during which I gained many new skills in working with React and explored various frontend libraries. Throughout the project, I focused on creating a user-friendly environment, paying special attention to both the appearance and functionality of the application. I encountered many challenges along the way, but I managed to overcome them all.

Thanks to this project, I mastered Redux logic and structuring folders in an advanced application. I utilized various solutions in this project for sharing data between child components and different approaches for sharing application logic, including custom hooks.

While working on Meteofy, I developed my skills in working with SVG files and generating custom SVG files. For the first time, I dealt with programming three-dimensional objects and had to delve into raycaster issues to solve related problems.

I developed my own dynamic charts, allowing users to switch between different data sets on a single chart, enabling more advanced data exploration.

Working on Meteofy also taught me to make more effective use of ready-made solutions offered by other libraries, rather than trying to reinvent the wheel. This allowed me to create a more advanced application in a shorter period of time.


## Authors

[@Grzegorz96](https://www.github.com/Grzegorz96)


## Contact

E-mail: grzesstrzeszewski@gmail.com


## License

[AGPL-3.0 license](https://github.com/Grzegorz96/React-Meteofy/blob/master/LICENSE.md)


## Screnshoots
### View for desktop and laptop screens:
##### Screenshot of the home page (dark mode)
![home-page-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/e81f58c9-523b-4afd-b022-9d88646e3c86)
##### Screenshot of the home page (light mode)
![home-page-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/54524de1-095c-4410-baef-c3d0e33b3676)
##### Screenshot of the home page with detailed forecast data (dark mode)
![home-page-with-accordion-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/a1af186d-7624-42c9-9fce-87226a13cd9c)
##### Screenshot of the home page with detailed forecast data (light mode)
![home-page-with-accordion-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/bae1ec71-aa92-4a24-b78e-126d54c38edd)
##### Screenshot of the poland map (dark mode)
![poland-map-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/37327fea-a5d4-4610-bfdb-5cf8d9d2c2a3)
##### Screenshot of the poland map (light mode)
![poland-map-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/6414ee48-bc5f-4b62-bf36-c3ccb4ccc976)
##### Screenshot of the weather modal at poland map (dark mode)
![weather-modal-poland-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/a1f5729b-60ec-43dd-b0c0-cc23250a6e9a)
##### Screenshot of the weather modal at poland map (light mode)
![weather-modal-poland-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/0d3916d5-22d9-4c5b-b75c-d2b966aa5abe)
##### Screenshot of the europe map (dark mode)
![europe-map-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/bbabddf8-ccbe-49c5-95f5-1caf01eb8dcc)
##### Screenshot of the europe map (light mode)
![europe-map-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/b490bb3b-8940-4497-ab52-b88e621a2938)
##### Screenshot of the weather modal at europe map (dark mode)
![weather-modal-europe-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/c78870c5-5a33-4455-9219-8c428a28f4bf)
##### Screenshot of the weather modal at europe map (light mode)
![weather-modal-europe-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/19c56621-5728-43c5-a7f8-b4235699ec66)
##### Screenshot of the world globe (dark mode)
![world-globe-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/8c8143e4-c531-4609-9dd6-c6414cd19c8a)
##### Screenshot of the world globe (light mode)
![world-globe-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/c420f733-8c22-4f92-bc45-5dd0c6724ed8)
##### Screenshot of the weather modal at world globe (dark mode)
![weather-modal-globe-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/38ea7a86-e371-4297-b81f-02389c435222)
##### Screenshot of the weather modal at world globe (light mode)
![weather-modal-globe-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/700d273a-4b5b-4f23-9a6f-c080ab7c78eb)
##### Screenshot of the long term weather chart (dark mode)
![long-term-weather-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/63864692-ba05-458e-8420-80d84392d16d)
##### Screenshot of the long term weather chart (light mode)
![long-term-weather-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/e0074d5e-7ab9-4ac2-a175-79162e0147f6)
##### Screenshot of the date range picker on long term weather chart (dark mode)
![long-term-weather-daterange-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/8561745c-8729-49f3-8d10-a1ecb04ed2e8)
##### Screenshot of the date range picker on long term weather chart (light mode)
![long-term-weather-daterange-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/419a8638-65d8-4cda-bec3-6ae7536cdcf6)
##### Screenshot of the air pollution page (dark mode)
![air-pollution-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/43d4b529-090f-4221-896b-ac9c0e349a68)
##### Screenshot of the air pollution page (light mode)
![air-pollution-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/9f8b1322-eb9b-4206-bd61-2679fccad98d)
##### Screenshot of the air pollution page with detailed forecast data (dark mode)
![air-pollution-accordion-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/365aed4c-f888-4285-b8f7-c0398759f4e4)
##### Screenshot of the air pollution page with detailed forecast data (light mode)
![air-pollution-accordion-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/31246827-9b2f-4f35-b661-9d88d377e710)
##### Screenshot of the search engine (dark mode)
![search-engine-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/2d9198a2-c5cd-4379-8f44-fb4356296679)
##### Screenshot of the search engine (light mode)
![search-engine-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/be00d948-0449-401b-af0e-c28377e9f72d)
##### Screenshot of the error modal (dark mode)
![error-modal-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/09788198-fa8a-4bcc-b7eb-b2acdb4fc842)
##### Screenshot of the error modal (light mode)
![error-modal-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/335b0671-7dbf-47b5-916f-17a3d8ee8209)
##### Screenshot of the not found page (dark mode)
![not-found-page-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/64162666-159b-4971-b80a-81c7f087ab60)
##### Screenshot of the not found page (light mode)
![not-found-page-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/eb537fa0-5809-4a8c-a99f-25e6544e67d8)

### View for mobile devices:
##### Screenshot of the home page (dark mode)
![home-page-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/7ace05c2-1f62-4079-a624-dabe734bba1a)
##### Screenshot of the home page (light mode)
![home-page-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/d29fc5e5-7b59-498f-9213-c671307e892b)
##### Screenshot of the home page with detailed forecast data (dark mode)
![home-page-with-accordion-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/3715959a-0cdb-4473-ae46-371360eb28de)
##### Screenshot of the home page with detailed forecast data (light mode)
![home-page-with-accordion-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/be164b29-7b10-4d35-8beb-fb16b4230f97)
##### Screenshot of the poland map (dark mode)
![poland-map-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/8031a4e0-c421-4c85-97e1-198509fe64aa)
##### Screenshot of the poland map (light mode)
![poland-map-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/af096b08-620c-410f-af7f-99bff16a6f1e)
##### Screenshot of the weather modal at poland map (dark mode)
![weather-modal-poland-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/5e28977b-2b5c-4307-ae9f-32df55597949)
##### Screenshot of the weather modal at poland map (light mode)
![weather-modal-poland-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/8d40cd85-f43e-4516-a474-9a1a2043f525)
##### Screenshot of the europe map (dark mode)
![europe-map-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/4dfdcdc1-1dbb-410d-9abc-1710acebbbc1)
##### Screenshot of the europe map (light mode)
![europe-map-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/e9c6f1f9-3a01-475a-ab41-a2df1bffe074)
##### Screenshot of the weather modal at europe map (dark mode)
![weather-modal-europe-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/fbd94bca-d64b-47e4-9eb4-3df4ea47b1b3)
##### Screenshot of the weather modal at europe map (light mode)
![weather-modal-europe-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/bba15351-5cd1-4deb-b6b6-bffe32db3528)
##### Screenshot of the world globe (dark mode)
![world-globe-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/854e9d2e-1123-4f97-bb03-326915ee70af)
##### Screenshot of the world globe (light mode)
![world-globe-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/045efa99-fca5-40a6-a7b1-53da992f3940)
##### Screenshot of the weather modal at world globe (dark mode)
![weather-modal-world-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/29d04419-3d5f-4d06-847d-059dd9736837)
##### Screenshot of the weather modal at world globe (light mode)
![weather-modal-world-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/ba64f026-c9b0-4cf0-8e52-348fda4b31ba)
##### Screenshot of the long term weather chart (dark mode)
![long-term-weather-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/4552bfdc-dbe4-4ff1-b9d1-69b3e17fe707)
##### Screenshot of the long term weather chart (light mode)
![long-term-weather-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/c4cb1447-8411-4751-9f34-8fb1f23a5a9c)
##### Screenshot of the date range picker on long term weather chart (dark mode)
![long-term-weather-daterange-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/7cbc879b-f295-46fe-aeaa-83f9cd4c3762)
##### Screenshot of the date range picker on long term weather chart (light mode)
![long-term-weather-daterange-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/dd854c05-db40-417b-90bf-6f51b87f39c1)
##### Screenshot of the air pollution page (dark mode)
![air-pollution-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/61598bdc-4e5c-4359-951d-cd3f7c44c7d7)
##### Screenshot of the air pollution page (light mode)
![air-pollution-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/a1389cfb-7c1d-4a13-8bce-e48f65c565ae)
##### Screenshot of the air pollution page with detailed forecast data (dark mode)
![air-pollution-accordion-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/3db92565-c99f-4bde-a9f3-49b06197b9f3)
##### Screenshot of the air pollution page with detailed forecast data (light mode)
![air-pollution-accordion-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/f3773894-897b-4bc6-bec7-eec0efb686d9)
##### Screenshot of the search engine (dark mode)
![search-engine-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/7bbe532d-6859-444b-8140-d5d3db587f3f)
##### Screenshot of the search engine (light mode)
![search-engine-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/be350421-b015-437e-8625-9cf990d5f8ea)
##### Screenshot of the error modal (dark mode)
![error-modal-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/fbf2a0cf-d34a-46c4-9840-7140fe97c913)
##### Screenshot of the error modal (light mode)
![error-modal-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/9da02d3e-322e-43a2-8232-110d13b843b9)
##### Screenshot of the not found page (dark mode)
![not-found-page-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/1aa9921a-9f81-4ae0-8bb4-935e16318a91)
##### Screenshot of the not found page (light mode)
![not-found-page-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/09fbd02e-a9b5-4bdd-ba9d-84a54100ccba)
##### Screenshot of the side bar menu (light mode)
![side-bar-menu-dark](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/7a6f07c4-4e97-42d3-9462-9e67d3e9597b)
##### Screenshot of the side bar menu (light mode)
![side-bar-menu-light](https://github.com/Grzegorz96/React-Meteofy/assets/129303867/ddaf7530-aefe-4993-a270-656e0e33089e)


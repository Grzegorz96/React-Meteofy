<img src="https://github.com/Grzegorz96/React-Meteofy/assets/129303867/9e2ac7d4-7b8c-4aa6-9da2-5c47bf8dc5f8" alt="logo" width="100%" />

# Meteofy

Meteofy is an advanced weather application, crafted with React technology, offering users a wide array of features. It boasts full responsiveness and comes with two theme modes, light and dark. The program also works on multiple APIs.
Main features:
- Current weather data and forecasts: Meteofy provides up-to-date information about the weather and forecasts for the next 15 days, allowing users to stay informed about atmospheric conditions.
- Map of Poland with weather data: Users can view current weather data on an interactive map of Poland, with marked provincial capitals, enabling quick understanding of regional weather differences.
- Map of Europe with weather data: Meteofy also offers the ability to check weather conditions on a map of Europe, with visible capitals of countries, which is useful for travelers or individuals interested in weather conditions in different countries.
- Interactive 3D globe with country capitals: Users can explore global weather conditions using an interactive 3D globe, with visible country capitals, providing a global perspective on weather conditions.
- Long-term weather on a chart: Meteofy allows the analysis of weather data on a chart, where users can switch between different time ranges, weather types, and cities, facilitating tracking of long-term weather trends.
- Air Pollution: Meteofy provides information on the current level of air pollution along with forecasts for the next 4 days. Users have the ability to explore air pollution levels across the entire Earth's surface.


## Table of Contents
- [Description of folders and modules](#Description-of-folders-and-modules)
- [Features](#Features)
- [Technology used](#Technology-used)
- [Installation](#Installation)
- [Lessons learned](#Lessons-learned)
- [Features to be implemented](#Features-to-be-implemented)
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

/src/components/home:
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
- The assets folder houses all the graphical and styling resources used throughout the application. It includes various subfolders that organize these assets for easy access and maintenance. This centralized repository of resources ensures consistency and efficiency in the application's design and functionality.


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
- Automatically checking the previously set mode when launching the application; if the user launches the application for the first time, it will set the mode based on the user's default browser settings.

### Error Handling:
- Handling various types of errors through elegant, animated error modals.
- Handling cases where the API returns data without the appropriate keys.

### Loader:
- Every data-fetching operation on the site is handled by a Loader for a better user experience.

### Responsiveness:
- Full application support for all types of devices, from wide desktop monitor screens to narrow smartphone screens.

### Side Bar Menu:
- Elegant side bar menu for devices narrower than 768px.

### Search Engine:
- Search engines asynchronously fetching city lists based on user-entered prefixes.

### Routing:
- Each application page has its own routing, allowing for navigation via links within the app and direct address input in the browser.

### Keyboard Application Support:
- The application has full keyboard support.












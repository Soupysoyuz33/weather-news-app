# weather-news-app
A weather and news mobile app created with angular and ionic

This is a mobile application created using Angular and Ionic which allows users to check the current weather 
for a selected city and return the top 5 news stories from the country that city is in.
The app makes use of News API (https://newsapi.org/) and Open Weather Map API (https://openweathermap.org/).

When the user opens the application it starts ona home page which will display nothing until the user enters
the settings page to select a location or it will provide information for the last accessed data on the app if
used before.
The user is prompted through the settings page to enter the city the wish to get weather for and to choose what
units they would like numerical data to be displayed in. They then enter the choice and the app will go back to
the home page and display a number of items of data about the weather in the city they have selected, provided by
Open Weather Map API. 
Underneath the weather display there is a a button for news which when pressed will return the top 5 news stories
for the country which the city they have chosen resides. 

This application was created by Darren McCartney for the Mobile Application Development module of the Higher Diploma 
in Science in Software Development at GMIT, Ireland.

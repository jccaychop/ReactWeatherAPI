# WEATHER APP

Clone following repo:
```
https://github.com/JuanCarlosCaychoPaucar/ReactWeatherAPI.git
```
Install dependencies:
```
npm i
```

We must register in the following web pages, to obtain our own API_KEY:

```
www.openweathermap.org
www.ipgeolocation.io
```
Once we have our API_KEY, we must create the .env file in the root directory of the application:

[![creation-env-file.png](https://i.postimg.cc/QdHdTdB8/creation-env-file.png)](https://postimg.cc/TKvx8GqF)

Inside the .env file, we will place the following: 
```
REACT_APP_API_KEY_IPGEOLOCATION = apikey  
REACT_APP_API_KEY_OPENWEATHERMAP = apikey
``` 

example:  

```
REACT_APP_API_KEY_IPGEOLOCATION = 4564chdiejdkfidf  
REACT_APP_API_KEY_OPENWEATHERMAP = 999fh45l3ui5
```

Save the file.

Finally, we run the application:

```
npm start
```
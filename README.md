# Smart Widget Plugin for Cumulocity ![image](https://user-images.githubusercontent.com/89508319/211545879-ef79fd1c-801f-41de-bde9-7fa249d97910.png)


This is the Cumulocity module federation plugin created using c8ycli. This plugin can be used in Application Builder or Cockpit.The Compass Widget displays an animated compass direction based on the measurement data provided.



## Please note that this plugin is in currently under BETA mode.
  
### Please choose Compass Widget release based on Cumulocity/Application builder version:

|APPLICATION BUILDER  | CUMULOCITY  | COMPASS WIDGET   |
|-------------------- |------------ |------------------|
| 2.x.x(coming soon)  | >= 1016.x.x |	1.x.x          |


![compass-widget](https://user-images.githubusercontent.com/99970126/169800960-2ebf6492-a107-47ff-910e-1aaf635559de.PNG)


## Features

**Realtime:** Realtime direction updates from defined measurement

## Prerequisite

   Cumulocity c8ycli >=1016.x.x


## Installation

### Runtime Widget Deployment?

* This widget supports runtime deployment. Download Runtime Binary and install via Administrations(Beta mode) --> Ecosystems --> Applications --> Packages.


## Quickstart
This guide will teach you how to add the widget in your existing or new dashboard.

NOTE: This guide assumes that you have followed the [installation](https://github.com/SoftwareAG/cumulocity-runtime-widget-loader) instructions

1. Open the Application Builder application from the app switcher (Next to your username in the top right)
2. Add a new dashboard or navigate to an existing dashboard
3. Click `Add Widget`
4. Search for `Compass`
5. See below for the configuration options

### Configuration options

1. Select your device in the `Target Assets or Devices` field
2. Select the device measurement and fragment in the `Measurement` dropdown
3. Click `Save`

The compass widget will refresh each time a new measurement value is sent from the device.

### Sending data to the Compass widget
The compass widget will listen for the measurement and fragment which you have specified in the configuration options above

The compass arrow will move to the numeric measurement value which must be between 0 and 360 to represent the arrow rotation in degrees.

In the 'body' of your Cumulocity measurement, you will need to include the following: 
	
	    {  
	      measurementseries: The measurement series which has been selected in the compass widget e.g. "weather_station" 
          {
             measureementfragment: The measurement fragment which has been selected in the compass widget e.g. "wind_direction"  
	         {
	           value: numeric value from 0 to 360 to represent the rotation of the compass arrow e.g. 270
	           unit: the unit label  e.g. "degrees"
             }
	         .
	         .
	    }

   e.g. 

	    {
	        weather_station: { 
	          wind_direction: {
	            value: 270,
	            unit: "degrees"
	          }
	        }  
	        .
	        .
	    }
	    
### Development - to enhance and test this widget in your local environment
1. Clone the repository on your local machine using `git clone https://github.com/SoftwareAG/cumulocity-compass-widget.git`.
2. Run `npm install` to download the module dependencies.
3. Run `c8ycli server -u https://your_tenant_url` to start the server.
4. Go to `http://localhost:9000/apps/cockpit/` in the browser to view and test your changes.
5. (Optional) push the changes back to this repository.

### Build - to create a new build of the compass-animation widget for the Runtime Widget Loader
1. Finish the development and testing on your local machine.
2. Run `gulp` to start the build process.
3. Use the `compass-widget.zip` file in the `dist` folder as your distribution file.

------------------------------

This widget is provided as-is and without warranty or support. They do not constitute part of the Software AG product suite. Users are free to use, fork and modify them, subject to the license agreement. While Software AG welcomes contributions, we cannot guarantee to include every contribution in the master project.
_____________________
For more information you can Ask a Question in the [TECHcommunity Forums](https://tech.forums.softwareag.com/tags/c/forum/1/Cumulocity-IoT).

You can find additional information in the [Software AG TECHcommunity](https://tech.forums.softwareag.com/tag/Cumulocity-IoT).









```
"exports": [
  {
     "name": "Example widget plugin",
     "module": "WidgetPluginModule",
     "path": "./widget/widget-plugin.module.ts",
     "description": "Adds custom widget"
  }
]
```

**How to start**
Run the command below to scaffold a `widget` plugin.

```
c8ycli new <yourPluginName> widget-plugin
```

As the app.module is a typical Cumuloctiy application, any new plugin can be tested via the CLI:

```
npm start -- --shell cockpit
```

In the Module Federation terminology, `widget` plugin is called `remote` and the `cokpit` is called `shell`. Modules provided by this `widget` will be loaded by the `cockpit` application at the runtime. This plugin provides a basic custom widget that can be accessed through the `Add widget` menu.

> Note that the `--shell` flag creates a proxy to the cockpit application and provides` WidgetPluginModule` as an `remote` via URL options.

Also deploying needs no special handling and can be simply done via `npm run deploy`. As soon as the application has exports it will be uploaded as a plugin.

# Deprecation notice

This plugin is not further developed and it might break with upcoming Cumulocity releases. Use it at your own risk.
The repository is archived but feel free to fork & adapt it to your needs in a new repo.

# Compass Widget Plugin for Cumulocity [<img width="35" src="https://user-images.githubusercontent.com/32765455/211497905-561e9197-18b9-43d5-a023-071d3635f4eb.png"/>](https://github.com/Cumulocity-IoT/cumulocity-compass-widget-plugin/releases/download/1.0.3/sag-ps-pkg-compass-widget-1.0.3.zip)


This is the Cumulocity module federation plugin created using c8ycli. This plugin can be used in Application Builder or Cockpit.The Compass Widget displays an animated compass direction based on the measurement data provided.

### Please choose Compass Widget release based on Cumulocity/Application builder version:

|APPLICATION BUILDER&nbsp;  | &nbsp;CUMULOCITY &nbsp; |&nbsp; COMPASS WIDGET &nbsp;  |
|-------------------- |------------ |------------------|
| 2.x.x               | >= 1016.x.x |	1.x.x          |


![compass](images/compass.png)


## Features

**Realtime:** Realtime direction updates from defined measurement.

## Prerequisite

   Cumulocity c8ycli >=1016.x.x


## Installation

### Runtime Widget Deployment?

* This widget supports runtime deployment. Download [Runtime Binary](https://github.com/Cumulocity-IoT/cumulocity-compass-widget-plugin/releases/download/1.0.3/sag-ps-pkg-compass-widget-1.0.3.zip) and install via Administrations --> Ecosystems --> Applications --> Packages.


## Quickstart
This guide will teach you how to add the widget in your existing or new dashboard.

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
	    

------------------------------

This widget is provided as-is and without warranty or support. They do not constitute part of the Cumulocity product suite. Users are free to use, fork and modify them, subject to the license agreement. While Cumulocity GmbH welcomes contributions, we cannot guarantee to include every contribution in the master project.
_____________________
For more information you can ask a question in the [Tech Community Forums](https://techcommunity.cumulocity.com).











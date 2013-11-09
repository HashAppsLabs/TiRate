# TiRate

## Overview
This is a widget for star rating that could be used in Titanium Alloy.

## Screenshot
![Star Rate](https://raw.github.com/HashAppsLabs/TiRate/master/images/screenshot.png)

## Features
* Star rating that works on iOS and Android.
* Can be read only.
* Can view half stars.

## Quick Start
* Download the latest of the widget.
* Unzip the folder and copy the  `com.hashapps.tirate` folder to your application folder `app/widgets/com.hashapps.tirate`.
* Add the widget as a dependency to your `app/config.json` file:

    ```javascript
    "dependencies": {
      "com.hashapps.tirate":"1.0"
    }
    ```
* Add the widget to your view xml file:

    ```xml
      <Alloy>
        <Window class="container" layout="vertical">
          <Widget src="com.hashapps.tirate" rate="1" top="100"/>
          <Widget src="com.hashapps.tirate" rate="3.5" clickable="true" top="50"/>
        </Window>
      </Alloy>
    ```


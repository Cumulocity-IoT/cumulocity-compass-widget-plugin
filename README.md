# Cumulocity Widget Plugin ![image](https://user-images.githubusercontent.com/89508319/211545879-ef79fd1c-801f-41de-bde9-7fa249d97910.png)


This is the Cumulocity module federation plugin created using c8ycli. This plugin can be used in Application Builder or Cockpit.The Compass Widget displays an animated compass direction based on the measurement data provided.



## Please note that this plugin is in currently under BETA mode.
  
### Please choose Compass Widget release based on Cumulocity/Application builder version:

|APPLICATION BUILDER | CUMULOCITY | COMPASS WIDGET |
|--------------------|------------|------------------|
| 1.3.x              | >= 1011.x.x| 2.x.x            |
| 1.2.x              | 1010.x.x   | 1.x.x            |  


![compass-widget](https://user-images.githubusercontent.com/99970126/169800960-2ebf6492-a107-47ff-910e-1aaf635559de.PNG)
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

#jquery-plugins

A collection of jQuery plugins I have created.

Plugin code is found within the plugin folder within each named project folder. At the root of each project folder are html files showing how to use them. Further details on each plugin can be found in the README.md file in each project folder.

Plugins are wrapped in a conditional ```define``` block allowing them to be imported as AMD modules if using require.js. 

##templateLoader
For use with the jquery.tmpl plugin.
This plugin simplifies the compilation of jQuery templates from markup. Templates can be defined as id-labelled script tags and included in the head of index.html. These will be removed from the DOM during compilation. 

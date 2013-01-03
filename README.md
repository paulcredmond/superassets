## Superassets by paulcredmond (https://github.com/paulcredmond/superassets)

Superassets is a collection of JS and LESS assets that may be useful to start a website off with.

I use this collection personally when starting a new site, and have shared it as other people may find it useful. Feel free to branch off or make suggested changes to the master.

## NOTES

### JS

The js folder is designed to be used with CodeKit (http://incident57.com/codekit/). CodeKit will take all the included jQuery libraries and compile them into one file called custom.js. This method is much better then manually attaching all JS files as it reduces http requests.

### LESS

The main LESS file is style.less, all the other less files are imported into this file and compiled as style.css.

normalize.less  /* Resets browser and adds default styles */
mixins.less /* Adds LESS mixins based on LessHat */
grid.less /* Adds semantic grid, fluid by default */
elements.less /* Add common UI elements like fonts, colours and buttons */
plugins.less /* CSS for jQuery plugins */
responsive.less /* Add media queries, delete if site isn't responsive */

### CSS

Empty IE stylesheets ready for you to put styles into and the main style.css.

### Images

The images folder is mostly empty, images used in the design should go into the design folder and images used in the pages content should be put in content - pretty simple. Breadcrumb images exist but Pictos is set up to handle the icons by default.
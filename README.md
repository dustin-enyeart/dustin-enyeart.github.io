# Homepage

## Summary 

This is the code for the homepage of Dustin Enyeart. 
Currently, it is hosted at [`https://dustin-enyeart.github.io`](https://dustin-enyeart.github.io). 

## Running

This project uses the framework Flask. 
Currently, it is hosted GitHub Pages, which only allows static project. 
To create a static build of the project, run `freeze.py`, which implements Flask Freeze.
The static build is in the file `build`, and the `.yml` configuration file for GitHub Pages is configured to point to this directory as the source. 

## File Structure

The file `main.py` deals with addresses and page rendering. 
All HTML files are in `templates`. 
The directory `static` contains the style file `style.css` and the script file `scripts`, which are used for the HTML file. 
The directory `static` also contains all images.

It uses a Google tag with [Google Analytics](https://analytics.google.com/analytics) to track activity. 
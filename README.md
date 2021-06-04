# React front-end application for FDM IRC Pod

<br/>

<div align="center">
  <img src="https://blogs.kent.ac.uk/soc-employability/files/2018/08/fdm-logos.png"/>
</div>

## Paired back-end GitLab Project
https://git.fdmgroup.com/irc-sfrt/trading_data-generator-backend

## Current state (stable - unrefactored)
Able to make http requests to the backend project (linked above)

## Useful resources
* Introduction to React: the tutorials are relatively brief and the general documentation is often helpful when debugging
  - https://reactjs.org/tutorial/tutorial.html
* Introduction to Redux: free video series going through a nicely thought out explanation (recommended to familiarise yourself with React first) 
  - https://egghead.io/courses/getting-started-with-redux
  - N.B. Account creation is required to watch beyond first video


<br/>

## Setup
<b> To get the application running locally: </b>

* Download preferred light or full IDE. Generally this tends to be [VSCode](https://code.visualstudio.com/) for React development, the lighter version of [Visual Studio](https://visualstudio.microsoft.com/) 

* Open preferred Terminal

* Clone down remote repo from gitlab into preferred location, i.e. `Documents/Projects`

* `cd` to project root directory `trading_data_generator_frontend` from the directory you initiated the cloning within

* Install node from browser, follow instructions

* Type `node -v` to verify node is installed

* Type `npm install` in order to download necessary packages/etc.

* Type `npm start` and wait for browser to pop open at `localhost:3000` with the website... mostly

<b> To begin altering/inspecting the code: </b>

* Type `code .` in the terminal at the project root directory and wait for VSCode to open. Or open IDE manually and go from there



## Testing

<b> In the project root directory, type: <b>

* `npm test` to run all tests

* `npm test -- [FileName.spec.js]` to run tests for individual file


## Debugging

<b> When gathering information for error-debugging analysis: </b>

* With the rendered website displayed on the browser:
* Either click `F12` or right click and select `inspect`
* Click the top left arrow square icon to enter inspect element mode. Hover over the desired misbehaving HTML element and click it to have the Elements tab focus in on the related and editable HTML and CSS
* Click on the Network tab before triggering any behaviour which invokes a desired http request. Click on the name of the request which appears on the left panel for more information on the response, or any errors (also look on the console tab in the eventuality of http errors for more information)

console.log();
console.log();console.log();
console.log();console.log();console.log();
console.log();console.log();console.log();console.log();
console.log();console.log();console.log();console.log();console.log();
console.log();console.log();console.log();console.log();console.log();console.log();
console.log();console.log();console.log();console.log();console.log();console.log();console.log();
console.log();console.log();console.log();console.log();console.log();console.log();console.log();console.log();
console.log();console.log();console.log();console.log();console.log();console.log();console.log();console.log();console.log();

<b> When it seems all hope is lost and the bug has won: </b>

* Go onto Google
* Type in <em>`[Every keyword related to your problem such as error messages] Stack Overflow`<em/> or <em>`[Every keyword related to your problem such as error messages] Reddit`<em/>
* Copy/paste the top rated answer or the top rated comment of the top rated answer
 
<br/><br/>

<div align="center">
  <img src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/02/learnt-learned.jpg" width="777px"/>
</div>
// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

const express = require('express');

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

const app = express();

const PORT = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public/assets/css/'));
app.use(express.static(__dirname + '/public/assets/js/'));

// ================================================================================
// ROUTER
// The below points our server to a series of 'route' files.
// These routes give our server a 'map' of how to respond when users visit or request data from various URLs.
// ================================================================================

const apiRoute = require('./routes/apiRoutes');
const htmlRoute = require('./routes/htmlRoutes');

app.use('/', htmlRoute);
app.use('/api', apiRoute);

// =============================================================================
// LISTENER
// The below code effectively 'starts' our server
// =============================================================================

app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});

const express = require( "express" );
const cors = require( "cors" );
const app = express();

const path = require( "path" );
const bodyParser = require( "body-parser" );

const getEngineers = require( "./database/queries/getEngineers.js" );
const getShifts = require( "./database/queries/getShifts.js" );
const updateEngineers = require( "./database/queries/updateEngineers.js" );
const updateShifts = require( "./database/queries/updateShifts.js" );

if ( process.env.NODE_ENV === "test" ) {
  require( "env2" )( "config.env" );
}
app.use( cors() );
app.use( bodyParser.json() );

/**
 * @description Fetch all the engineers
 */
app.get( "/api/engineers", ( req, res ) => {
  getEngineers( ( err, engineers ) => {
    if ( err ) {
      return res.status( 500 ).json( {
        type: 500,
        message: err
      } );
    } else {
      return res.json( {
        engineers: engineers
      } )
    }
  } );
} );

/**
 * @description Fetch information about the shifts
 */
app.get( "/api/shifts", ( req, res ) => {
  getShifts( ( err, shifts ) => {
    if ( err ) {
      return res.status( 500 ).json( {
        type: 500,
        message: err
      } );
    } else {
      
      return res.json( {
        todayShift: shifts.shift_today,
        yesterdayShift: shifts.shift_yesterday
      } )
    }
  } )
} );

/**
 * @description Assign engineers in shifts and update counter
 */
app.post( "/api/engineers/assign", ( req, res ) => {
  const engineers = req.body.engineers;
  const todayShift = req.body.todayShift;
  const yesterdayShift = req.body.yesterdayShift;
  
  updateEngineers( engineers, ( err, updatedEngineers ) => {
    
    if ( err ) {
      return res.status( 500 ).json( {
        type: 500,
        message: err
      } )
    } else {
      
      updateShifts( todayShift, yesterdayShift, ( err, updatedShifts ) => {
        if ( err ) {
          return res.status( 500 ).json( {
            type: 500,
            message: err
          } )
        } else {
          return res.json( {
            todayShift,
            yesterdayShift
          } )
        }
      } )
    }
  } );
} );

app.use( "/andreirat/bau-shifts/", express.static( path.resolve( __dirname, "./build" ) ) );
app.get( "/*", ( req, res ) => {
  res.sendFile( path.resolve( __dirname, "./build", "index.html" ) );
} );

module.exports = app;


var fs = require( 'fs' )

module.exports = function( file, callback ) {

  fs.readFile( file, 'utf8', function( err, data ) {
    if ( err ) throw err
    return callback( data )
  })

}


var fileReader = require ( './FileReader' )

fileReader( 'file_that_does_not_exist.txt', function( data ) {
  console.log( data )
})

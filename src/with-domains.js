
var fileReader = require( './FileReader' )
  , domain = require( 'domain' )
  , domain1 = domain.create( 'fileProblems' )

domain1.name = 'Disk Problems'

// all problems can be handled in one place!
domain1.on( 'error', function( err ) {
  if (err) throw err
})

domain1.run( function() {
  fileReader( 'file_that_does_not_exist', function( data ) {
    console.log( data )
  })
})


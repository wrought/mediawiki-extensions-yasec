jQuery( document ).ready( function( $ ) {
    if ( window.eventCalendarData !== undefined ) {
        for ( var i = 0; i < window.eventCalendarData.length; i++ ) {
            $( "#eventcalendar-" + ( i + 1 )).fullCalendar({
                aspectRatio: window.eventCalendarAspectRatio[i],
                events: window.eventCalendarData[i]
            });

            // FIXME sometimes init is called too early, it seems, so rerender to be sure
            ( function( i ) {
                window.setTimeout( function() { 
                    $( "#eventcalendar-" + ( i + 1 )).fullCalendar( 'render' );
                }, 2500 );
            })( i );
        }
    }
});

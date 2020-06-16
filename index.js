console.log('[ STARTED ]');

// STEP BY STEP APPROACH
// =====================
//
// Event listener to watch for a 'click' on START *** TIMER

    // Draw a full border around a clock *** BORDER
    // Start count down *** TIMER
    // Each time on count down update border *** BORDER
    // Each time on count down update text ** TIMER

    // If times reaches 0 *** TIMER
        // Reset border *** BORDER
        // Reset internal timer for another run *** TIMER

// EVENT-BASED APPROACH
// ====================
//
// FOCUSED ON TIMER:
//
// Event listener to watch for a 'click' on START

    // EMIT event on TIMER START        <---    Watch event. Draw border on event
    // Start count down
    // EMIT evemt on TIMER TICK         <---    Watch event. Update border on event
    // Each time on count down update text

    // If times reaches 0
        // EMIT event on TIMER DONE     <---    Watch event. Reset border on event
        // Reset internal timer for another run

// Class Timer
//
// constructor(durationInput, startButton, pauseButton)
// start()
// pause()
// tick()
// onDurationChange()

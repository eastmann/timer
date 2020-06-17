console.log('[ SCRIPT STARTED ]');

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

class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        this.tick();
        this.interval = setInterval(this.tick, 1000);
    }

    pause = () => {
        clearInterval(this.interval);
    }

    tick = () => {
        this.timeRemaining = this.timeRemaining - 1 ;
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time;
    }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);

// timer.start();

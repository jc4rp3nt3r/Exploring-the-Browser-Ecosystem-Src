const iTimer = 5000;
const Toast = Swal.mixin({                        // use swal to create a notification system
    toast: true                                   // using the 'toast' style
    , position: 'top'                             // top-center position
    , showConfirmButton: false                    // no close buttons
    , timer: iTimer                               // show for iTimer seconds
});


let assert = (expression, message) => {           // create an assert function to test the truth of an expression
    Toast.fire({
        type:   expression ? 'success' : 'error', // provide a success / error icon
        title:  expression ? 'Truthy' : 'Falsey', // show the message to the user
        text:   message
    });
};


$(function() {                                    // on document ready

    $('code').on('click', (e) => { 
        let sCode = $(e.target).text();           // get the code to execute
        console.log(`Running Test: ${sCode}`);    // log the test to the console
        eval($(e.target).text());                 // execute the code

        $('.highlight').removeClass('highlight'); // remove all other highlight classes
        $(e.target).addClass('highlight');        // highlight the code that is running
        setTimeout(() => {                        // and set a timeout to
            $(e.target).removeClass('highlight'); // remove the highlight
        }, iTimer);                               // when the toast disappears
    });

});                                               // close and execute function
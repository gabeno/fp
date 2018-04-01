 // runs first
console.log('Hi there!');

 // runs last once stack is clear since handled by event loop
 // does not matter if time set to 0 because it will still be
 // handled by the event loop eventhough the callback is called
 // immediately.
 // setTimeout -> minimum execution time
setTimeout(()=>{
    console.log('delayed log');
}, 0);

// runs second
console.log('Last log for now :)');


/*
$ node event_loop.js
Hi there!
Last log for now :)
delayed log
*/
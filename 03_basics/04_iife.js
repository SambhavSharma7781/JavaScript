// Immedialtely Invoked Function Expressions (IIFE)

(function iife (){
    // named IIFE
    console.log("DB Connected");
    
}) (); // semicolon to stop it 

(  () => {
    console.log("DB Connected Two");
}) ();
(  (name ) => {
    console.log(`"DB Connected Two" , ${name}`);
}) ("sambhav");

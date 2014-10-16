window.addEventListener("load",function() {
    var Q = Quintus().setup();
    
    Q.Class.extend('DDClass', {
       init: function() 
        { 
            console.log("MyClass instance created"); 
        },
       doIt: function() 
        { 
            alert("Doin it!"); 
        }  
    });

    var myInstance          = new Q.DDClass(); // DDClass instance created
    myInstance.doIt(); //doing it

    console.log(myInstance.className);
    console.log(myInstance instanceof Q.Class);
    console.log(myInstance instanceof Q.DDClass);
});


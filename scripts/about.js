$(function(){ // <-- shorthand for $(document).ready

//    http-server -c-1 to run a server to make these functions work. why exactly?

    // $('a[href="about.html"]').click(function(e){
    //     e.preventDefault();
    //     console.log("default prevented");
    //     $(document.body).load("about.html");
    // });

    // $('a[href="projects.html"]').click(function(e){
    //     e.preventDefault();
    //     console.log("default prevented");
    //     $(document.body).load("projects.html");
    // });
// ^ [Deprecation]? Something to do with synchronous calls. Read up on Async digital crafts lessons.


    // $('a[href="resume.html"]').click(function(e){
    //     e.preventDefault();
    //     console.log("default prevented");
    //     $(document.body).load("resume.html");
    // });

    // $('a[href="skills.html"]').click(function(e){
    //     e.preventDefault();
    //     console.log("default prevented");
    //     $(document.body).load("skills.html");
    // });

    // $('a[href="contact.html"]').click(function(e){
    //     e.preventDefault();
    //     console.log("default prevented");
    //     $(document.body).load("contact.html");
    // });



// About Section content switching 
    
    
//     $(".tldrButton").on("click", function(){
//            $("p").hide();
//            $("section > h2").hide();
//            $("section > h3").hide();
//            $(".tldrbutton").hide();
//            $(".dynamiccontent").html("<h2>TL;DR</h2> <form method='get' action='about.html'><button type='submit'>Reload</button></form> <br> <br> <ul> <li>Graduated from Emory in 2017</li> <li>Worked a non-tech gig immediately afterwards for 3 months</li><li>Quickly became unfulfilled and made a career change</li><li>Re-ignited an ever-present passion for technology</li><li>Stuided at the DigitalCrafts coding Bootcamp to explore that passion</li><li>My fire of passion has become perpetually stoked and I am ready to continue developing my skills as a developer with a reputable organization!</li></ul>");
   
//    });

// yaaaaaaaaay
   $(".tldrButton").click(function(){
       $(".fullEssay, .tldrContent").fadeToggle(300);
   });


});
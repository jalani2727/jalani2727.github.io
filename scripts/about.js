$(function(){ // <-- shorthand for $(document).ready
     $(".tldrButton").on("click", function(){
            $("p").hide();
            $("section > h2").hide();
            $("section > h3").hide();
            $(".tldrbutton").hide();
            $(".dynamiccontent").html("<h2>TL;DR</h2> <form method='get' action='about.html'><button type='submit'>Reload</button></form> <br> <br> <ul> <li>Graduated from Emory in 2017</li> <li>Worked a non-tech gig immediately afterwards for 3 months</li><li>Quickly became unfulfilled and made a career change</li><li>Re-ignited an ever-present passion for technology</li><li>Stuided at the DigitalCrafts coding Bootcamp to explore that passion</li><li>My fire of passion has become perpetually stoked and I am ready to continue developing my skills as a developer with a reputable organization!</li>");
    
    });
    
});
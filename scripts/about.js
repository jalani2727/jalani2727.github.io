$(document).ready(function(){
    $(".tldrButton").on("click", function(){
        $("p").addClass("tldr");
        $("section").html("<h2>tl;dr</h2><ul> <li>Graduated from Emory in 2017</li> <li>Worked a non-tech gig immediately afterwards for 3 months</li><li>Quickly became unfulfilled and made a career change</li><li>Re-ignited an ever-present passion for technology</li><li>Stuided at the DigitalCrafts coding Bootcamp to explore that passion</li><li>My fire of passion has become perpetually stoked and I am ready to continue developing my skills as a developer with a reputable organization!</li>")
    });
});
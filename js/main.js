
var design ="Design";
var designDetails= "Our design practice offers a full range of services including brand strategy, interaction and visual design and user experience testing. Throughout your project, our designers create and implement visual design and workflows, solicit user feedback and work with you to make sure what gets built is what is needed";
var development= "Development";
var developmentDetails="All engineers are fluent in the latest enterprise, mobile and web development technologies. They collaborate with your team to write, and improve code on a daily basis, using proven practices such as test-driven development and pair programming.";
var productManagement= "Product Management";
var productManagementDetails="Planning and development is iterative. Because we are constantly coding and testing, the products we build are always ready to go live.This iterative process allows for changes as business requirements evolve.";
var nameA= "PICTURE";
var nameB= "ONTARIO";
var nameC= "ORANGE";
var nameD= "JIM CARREY";
var nameE= "GOOD DAY";
var nameF= "BUTTON";
var nameG= "BURNED";
var nameH= "GIRAFFE";
var myName;
var email;
var message;
var list;
var count =0;

function submitClicked() {

   let list= $("#form").serializeArray();
   console.log(list);
    let y = list.length;
    for(let i=0; i<y-1;i++){
        if(list[i].value==null || list[i].value.length==0){
            alert("Please fill in all the fields with details");
            return;
        }
    }
    count+=1;
    let output = list[0].value + " We have received your message. Thank you for reaching out to us.";
    alert(output);
    

}

$(document).ready(function (){

    $(".design").click(function (){
        $(".design").addClass('display-none');
        $(".designHeader").removeClass('display-none');
        $("#designHeader").text(design);
        $("#designHeader").css({"font-weight": "bold"});
        $("#designBody").text(designDetails);  
    });
    
    $(".designHeader").click(function (){
        $(".design").removeClass('display-none');
        $(".designHeader").text("");

    });


    $(".development").click(function (){
        $(".development").addClass('display-none');
        $(".developmentHeader").removeClass('display-none');
        $("#developmentHeader").text(development);
        $("#developmentHeader").css({"font-weight": "bold"});
        $("#developmentBody").text(developmentDetails);  
    });
    
    $(".developmentHeader").click(function (){
        $(".development").removeClass('display-none');
        $(".developmentHeader").text("");

    });

    $(".productManagement").click(function (){
        $(".productManagement").addClass('display-none');
        $(".productHeader").removeClass('display-none');
        $("#productHeader").text(productManagement);
        $("#productHeader").css({"font-weight": "bold"});
        $("#productBody").text(productManagementDetails);  
    });

    
    $(".productHeader").click(function (){
        $(".productManagement").removeClass('display-none');
        $(".productHeader").text("");

    });

    $("#parent1").mouseover(function(){
        
        $("#project1").text(nameA);
        $("#project1").css({"opacity": "1"});
        $("#project1img").css({"opacity": "0.3"});
    });

    $("#parent1").mouseout(function(){
        
        $("#project1").text("");
        $("#project1").css({"opacity": "0"});
        $("#project1img").css({"opacity": "1"});
    });
    
    $("#parent2").mouseover(function(){
        
        $("#project2").text(nameB);
        $("#project2").css({"opacity": "1"});
        $("#project2img").css({"opacity": "0.3"});
    });

    $("#parent2").mouseout(function(){
        
        $("#project2").text("");
        $("#project2").css({"opacity": "0"});
        $("#project2img").css({"opacity": "1"});
    });
    $("#parent3").mouseover(function(){
        
        $("#project3").text(nameC);
        $("#project3").css({"opacity": "1"});
        $("#project3img").css({"opacity": "0.3"});
    });

    $("#parent3").mouseout(function(){
        
        $("#project3").text("");
        $("#project3").css({"opacity": "0"});
        $("#project3img").css({"opacity": "1"});
    });

    $("#parent4").mouseover(function(){
        
        $("#project4").text(nameD);
        $("#project4").css({"opacity": "1"});
        $("#project4img").css({"opacity": "0.3"});
    });

    $("#parent4").mouseout(function(){
        
        $("#project4").text("");
        $("#project4").css({"opacity": "0"});
        $("#project4img").css({"opacity": "1"});
    });

    $("#parent5").mouseover(function(){
        
        $("#project5").text(nameE);
        $("#project5").css({"opacity": "1"});
        $("#project5img").css({"opacity": "0.3"});
    });

    $("#parent5").mouseout(function(){
        
        $("#project5").text("");
        $("#project5").css({"opacity": "0"});
        $("#project5img").css({"opacity": "1"});
    });

    $("#parent6").mouseover(function(){
        
        $("#project6").text(nameF);
        $("#project6").css({"opacity": "1"});
        $("#project6img").css({"opacity": "0.3"});
    });

    $("#parent6").mouseout(function(){
        
        $("#project6").text("");
        $("#project6").css({"opacity": "0"});
        $("#project6img").css({"opacity": "1"});
    });

    $("#parent7").mouseover(function(){
        
        $("#project7").text(nameG);
        $("#project7").css({"opacity": "1"});
        $("#project7img").css({"opacity": "0.3"});
    });

    $("#parent7").mouseout(function(){
        
        $("#project7").text("");
        $("#project7").css({"opacity": "0"});
        $("#project7img").css({"opacity": "1"});
    });
    $("#parent8").mouseover(function(){
        
        $("#project8").text(nameH);
        $("#project8").css({"opacity": "1"});
        $("#project8img").css({"opacity": "0.3"});
    });

    $("#parent8").mouseout(function(){
        
        $("#project8").text("");
        $("#project8").css({"opacity": "0"});
        $("#project8img").css({"opacity": "1"});
    });

     $("#form").submit(function (e){
        submitClicked();
        console.log(list);
        // $("#name").val()="";
        if(count>0){
        $('#form')[0].reset();
        }
        e.preventDefault();
    });


});

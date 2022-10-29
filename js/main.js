
var design ="Design";
var designDetails= "Our design practice offers a full range of services including brand strategy, interaction and visual design and user experience testing. Throughout your project, our designers create and implement visual design and workflows, solicit user feedback and work with you to make sure what gets built is what is needed";
var development= "Development";
var developmentDetails="All engineers are fluent in the latest enterprise, mobile and web development technologies. They collaborate with your team to write, and improve code on a daily basis, using proven practices such as test-driven development and pair programming.";
var productManagement= "Product Management";
var productManagementDetails="Planning and development is iterative. Because we are constantly coding and testing, the products we build are always ready to go live.This iterative process allows for changes as business requirements evolve.";


$(document).ready(function (){

    $(".design").click(function (){
        $(".design").addClass('display-none');
        $("#designHeader").text(design);
        $("#designBody").text(designDetails);  
    });
    
    $(".designHeader").click(function (){
        $(".design").removeClass('display-none');
        $(".designHeader").text("");

    });
    

    $(".development").click(function (){
        $(".development").addClass('display-none');
        $("#developmentHeader").text(development);
        $("#developmentBody").text(developmentDetails);  
    });
    
    $(".developmentHeader").click(function (){
        $(".development").removeClass('display-none');
        $(".developmentHeader").text("");

    });

    $(".productManagement").click(function (){
        $(".productManagement").addClass('display-none');
        $("#productHeader").text(productManagement);
        $("#productBody").text(productManagementDetails);  
    });

    
    $(".productHeader").click(function (){
        $(".productManagement").removeClass('display-none');
        $(".productHeader").text("");

    });
    



});
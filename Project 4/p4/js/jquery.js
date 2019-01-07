$(document).ready(function(){
    alert('I am ready');
    //Populates list from local storage
    $(function(){
        if (localStorage.getItem("lsitContents") !== null){
            $("#listContainer").html(localStorage.getItem("listContents"));
            $("#listContainer").children("li").removeAttr("style")
        }
    });
    
    //deletes the local stored data
    $("#clearItems").click(function(){
        localStorage.clear();
    });
    
    
    //add item
    $(".inputTextBox").click(function(){
        if($("#inputTextBox").val() === ""){
            $('#inputTextBox').val("").focus();
        }
        else{
            var item = $("#inputTextBox").val();
            $("#listContainer").find(".unorderedListStart").append("<li class='itemlabel'>"+item+"</li>");
            $("li").first().hide().fadeIn(450);
            localStorage.setItem("listContents", $("#listContainer").html());
            
            $("#inputTextBox").val("").focus();
        }
    });
    
    //clicks the add button when enter is pressed
    $("#inputTextBox").keypress(function(event){
        if(event.keyCode === 13){
            $("#addItem").click();
        }
    });
    
    //Marks the item as complete
    $("#listContainer").on('click', '.itemlabel', function(){
        var complete = $(this).hasClass("complete");
        var edit = $(this).attr("etitable");
        var item = $(this).text();
        
        if(complete && edit !== "true"){
            $(this).parent("li").remove();
            $("#listContainer").prepend("<li class='itemlabel'>" + item + "</li>");
            $("li").first().hide().fadeIn(450);
        }
        else if(edit !== "true"){
            $(this).parent("li").remove();
            $("#listContainer").append("<li class='complete' class='itemlabel'>" + item + "</li>");
            $("li").last().hide().fadeIn(450);
            
            localStorage.setItem("listContents", $("#listContainer").html());
        }
    });
    
    
     //MAKES ITEM UN-EDITABLE WHEN CHECK ICON IS CLICKED
    $("#listContainer").on("dblclick", function () {
        $(this).siblings(".itemlabel").attr("editable", "false");
        $(this).parent("li").append("<div class='editicon glyphicon glyphicon-edit'></div>");
        $(".editicon").mouseleave();
        localStorage.setItem("listContents", $("#listContainer").html());
    });
    
    //DELETE COMPLETED ITEM
    $("#listContainer").on("click", function () {
        $(this).parent("li").remove();
        localStorage.setItem("listContents", $("#listContainer").html());
    });
    
    
    
    
    
    
    
    
    
    
    
    
    $('.unorderedListStart').on('click', 'button', function(){
        $(this).parent().parent().append("<li><button class='listButton' type='button'>add new list item</button></li>");
    });
    
});
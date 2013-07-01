$(function(){

    //if user is already logged in then build account div accordingly
    if(typeof JF.getAPIKey() !== "undefined"){
        JF.getUser(function(r){

            

            JF.getForms(function(r){
                $(".form-list").show();
                console.log(r);
                var formNames = [];
                for(var i=0; i<r.length; i++){
                    formNames.push(r[i].title);
                }
                console.log(formNames);
                $(".form-list .typeahead").typeahead({
                    name: "forms",
                    local: formNames
                });
            });
            $(".login-button").remove();
            $(".account").html('<a class="account-info">'+
                    '<span>' + r.username + '</span>' +
                    '<img src="'+r.avatarUrl+'"/>' +
                '</a>');
        });
    }

    $(".login-button").click(function(){
        // JF.login(function(){
        //     console.log("user logged in");
        //     JF.getUser(function(r){
        //         console.log("user is ", r);
        //     })
        // })
    });
});
$(document).ready(function () {
    	
	// ------------------------------------------------------- //
    // Fetch Facebook Data
    // ------------------------------------------------------ //
	var myFacebookToken = 'EAACEdEose0cBAOqniZCSPhSYhWYZAmP6z7u3ZCyuHeBka6BuXs5OQ589Scsk7zwcQioExg9a1QcDrQJPvJFSh7rz0tJBkJgI5g666l8vLpdrmrpfQjwzZBOgYKBZAr2k63Js9XtVCbn1oWAvo240zOsMEl0eSi7Ozqx6klDjnO1p7vdSqtLno14ajliZCece5UrrwUc7iD8wZDZD';

         $.ajax('https://graph.facebook.com/me?fields=name,gender,cover,picture.type(large),education,email,hometown,location,birthday&access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));

                    $(".cover").attr('src', response.cover.source);

                    $("#profile-pic").attr('src', response.picture.data.url);

                    $("#name").text(response.name);

                    if(response.hasOwnProperty('location'))
                    {
                        $("#location").text("Lives in " + response.location.name);
                    }
                    else
                    {
                        $("#location").hide();
                    }

                    $("#gender").append(response.gender);

                    if(response.hasOwnProperty('birthday'))
                    {
                        var birthdayLongString = new Date(response.birthday);
                        var birthdayArr = birthdayLongString.toString().split(' ');                    
                        $("#birthday").append(birthdayArr[1] + " " + birthdayArr[2] + " " + birthdayArr[3]); 
                    }
                    else
                    {
                        $("#birthday").hide();
                    }
                    
                    if(response.hasOwnProperty('email'))
                    {
                        $("#email").append(response.email);   
                    } 
                    else  
                    {
                        $("#email").hide();
                    }
                    if(response.hasOwnProperty('hometown')) 
                    {
                        $("#hometown").append("From " + response.hometown.name);
                    }  
                    else 
                    {
                        $("#hometown").hide();
                    }               
                    
                },
                error : function(request,errorType,errorMessage){

                    console.log(request);
                    console.log(errorType);
                },

                timeout:5000, // in ms
            }//end argument list 



        );// end ajax call 
	
});

$(document).ready(function () {
  	
	// ------------------------------------------------------- //
    // Fetch Basic Info
    // ------------------------------------------------------ //
	var myFacebookToken = 'EAACEdEose0cBAGqCC2ZBPlfIbS5zzeut3qmyQpdMBBrruN2FZAbG0DJJ8cQXZBCvXHRhlQ6e9fmX64PeIMSQPSlCEsEUJRjtUOu2CGQ03SeWtkL3ehndjuZBVQunYw0v08ZCFcMqgNuw8ZBZBv2DzNLTC3sj8Q2m0ZAUC6FInlZAIKrqcEr78yqb38oeLa8izjrVvCH7wmUnpfQZDZD';

          $.ajax('https://graph.facebook.com/me?fields=name,picture.type(large),location,cover&access_token='+myFacebookToken,{

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
                    
                },
                error : function(request,errorType,errorMessage){

                    console.log(request);
                    console.log(errorType);
                },

                timeout:5000, // in ms

            }//end argument list 



        );// end ajax call 
	
    // ------------------------------------------------------- //
    // Fetch Latest Posts from Feed
    // ------------------------------------------------------ //   
     $.ajax('https://graph.facebook.com/me/feed?fields=id,link,attachments{media},created_time,story,description&access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    //post1
                    $("#story1").text(response.data[0].story);
                    var createdate1 = new Date(response.data[0].created_time.replace("+0000",".000Z"));
                    var createdateString1 = createdate1.toString();
                    var createDateTime1 =  createdateString1.split(' ');
                    var postDate1 = createDateTime1[1] + " " + createDateTime1[2] + " " + createDateTime1[3];                  
                    var postTime1 = createDateTime1[4].split(':');
                    var displayTime1 = postDate1 + " at " + postTime1[0] + ":" + postTime1[1];
                    $("#created-time1").text(displayTime1);
                    if(response.data[0].hasOwnProperty('attachments')) 
                    {
                        $("#Img1").attr('src', response.data[0].attachments.data[0].media.image.src);
                    }
                    else
                    {
                       $("#Img1").hide(); 
                    }
                    if(response.data[0].hasOwnProperty('description')) 
                    {
                        $("#desc1").text(response.data[0].description);
                    }
                    else
                    {
                      $("#desc1").hide();  
                    }
                    

                    //post2
                    $("#story2").text(response.data[1].story);
                    var createdate2 = new Date(response.data[1].created_time.replace("+0000",".000Z"));
                    var createdateString2 = createdate2.toString();
                    var createDateTime2 =  createdateString2.split(' ');
                    var postDate2 = createDateTime2[1] + " " + createDateTime2[2] + " " + createDateTime2[3];                  
                    var postTime2 = createDateTime2[4].split(':');
                    var displayTime2 = postDate2 + " at " + postTime2[0] + ":" + postTime2[1];
                    $("#created-time2").text(displayTime2);
                    if(response.data[1].hasOwnProperty('attachments')) 
                    {
                        $("#Img2").attr('src', response.data[1].attachments.data[0].media.image.src);
                    }
                    else
                    {
                        $("#Img2").hide();
                    }
                    if(response.data[1].hasOwnProperty('description')) 
                    {
                        $("#desc2").text(response.data[1].description);
                    }
                    else
                    {
                       $("#desc2").hide(); 
                    }
                    


                    //post3
                    $("#story3").text(response.data[2].story);
                    var createdate3 = new Date(response.data[2].created_time.replace("+0000",".000Z"));
                    var createdateString3 = createdate3.toString();
                    var createDateTime3 =  createdateString3.split(' ');
                    var postDate3 = createDateTime3[1] + " " + createDateTime3[2] + " " + createDateTime3[3];                  
                    var postTime3 = createDateTime3[4].split(':');
                    var displayTime3 = postDate3 + " at " + postTime3[0] + ":" + postTime3[1];
                    $("#created-time3").text(displayTime3);
                    if(response.data[2].hasOwnProperty('attachments'))
                    {
                        $("#Img3").attr('src', response.data[2].attachments.data[0].media.image.src);
                    }
                    else
                    {
                      $("#Img3").hide(); 
                    }
                    if(response.data[2].hasOwnProperty('description')) 
                    {
                        $("#desc3").text(response.data[2].description);
                    }
                    else
                    {
                        $("#desc3").hide();
                    }
                    


                    //post4
                    $("#story4").text(response.data[3].story);
                    var createdate4 = new Date(response.data[3].created_time.replace("+0000",".000Z"));
                    var createdateString4 = createdate4.toString();
                    var createDateTime4 =  createdateString4.split(' ');
                    var postDate4 = createDateTime4[1] + " " + createDateTime4[2] + " " + createDateTime4[3];                  
                    var postTime4 = createDateTime4[4].split(':');
                    var displayTime4 = postDate4 + " at " + postTime4[0] + ":" + postTime4[1];
                    $("#created-time4").text(displayTime4);
                    if(response.data[3].hasOwnProperty('attachments')) 
                    {
                        $("#Img4").attr('src', response.data[3].attachments.data[0].media.image.src);
                    }
                    else
                    {
                        $("#Img4").hide();
                    }
                    if(response.data[3].hasOwnProperty('description')) 
                    {
                        $("#desc4").text(response.data[3].description);
                    }
                    else
                    {
                        $("#desc4").hide(); 
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

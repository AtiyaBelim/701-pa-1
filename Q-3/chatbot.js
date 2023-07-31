module.exports .chatbotReply=function(message)
{
message. toLowerCase ();
if (message.indexOf ("hello") >-1 || message.indexOf ("hey") >-1 || message.indexOf  ("hi") >-1)
{
return "hello. welcome user";
}
else if(message.indexOf ("how") >-1 || message.indexOf ("are") >-1 )
{
return "i am fine :"
}
else if (message.indexOf ("where") >-1 || message.indexOf("vnsgu")>-1 )
{
return "it is in surat";
}
else if(message.indexOf ("created" )>-1 || message.indexOf ("chatbot")>-1 )
{
return "this chatbot is created by atiya";
}
else{
return "sorry.. i don't have answer for that :(";
}
}
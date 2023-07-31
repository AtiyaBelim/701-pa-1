var readline =require ("readline");
 var chatbot =require("./chatbot");

var read=readline.createInterface(process.stdin,process.stdout);
read.setPrompt ("YOUR MESSAGE =");
read.prompt();
read.on ("line", (message)=>{
console.log ("chatbot ="+chatbot. chatbotReply (message));
read.prompt();
})
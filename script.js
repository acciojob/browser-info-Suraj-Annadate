let div=document.createElement("div");
div.id='browser-info';
document.body.append(div);
div.innerHTML="You are using "+navigator.appName+" version "+navigator.appVersion;
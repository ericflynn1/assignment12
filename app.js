function getmessages(){
    let request = new XMLHttpRequest();
    request.open('GET', 'http://chat.queencityiron.com/messages');
    request.addEventListener('load', function(){
        let response = JSON.parse(request.responseText);
        console.log(response);
        let message = response[0].message;
        let user = response[0].user;
        let parent = document.getElementById('recievedmessages');


        for(let i = 0; i < response.length; i++){
            // console.log(i);
            let element = document.createElement('p');
            element.classList.add('recievemsg');
            parent.appendChild(element);

            let element2 = document.createElement('span');
            element2.textContent = response[i].user + ":";
            element2.classList.add('underline');
            element.appendChild(element2);
            
            let element3 = document.createElement('span');
            element3.textContent = response[i].message;
            element.appendChild(element3);
        }
        })  
        
    
    request.send();
};

// console.log(getmessages());
function sendmessages(x){
    let request = new XMLHttpRequest();
    request.open('POST', 'http://chat.queencityiron.com/messages');
    request.addEventListener('load', function(){
        
    })
    request.send(JSON.stringify(x));
}











window.addEventListener('load', function (){
getmessages();

    let sendBtn = document.getElementById('sendbtn');
    sendBtn.addEventListener('click', function () {
        sendmessages({
            message: document.getElementById('inputbox').value,
            user: document.getElementById('usernamebox').value,

        });
    });
});
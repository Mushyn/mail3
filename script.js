var messagesCount = document.getElementsByTagName('p').length;
document.getElementById('count').textContent = messagesCount;

for(var i=0; i<document.getElementsByClassName('trash').length; i++){
    document.getElementsByClassName('trash')[i].addEventListener("click",
    function(){
        this.parentNode.remove();
        var messagesCount = document.getElementsByTagName('p').length;
        document.getElementById('count').textContent = messagesCount;
    }
    )

}

let ecouteBouton = document.getElementById('boutonAddMessage');
let messageAEnvoyer = document.getElementById('newMessage');
let maRowCustom='';

ecouteBouton.addEventListener('click',
    function () {
        if (messageAEnvoyer.value !== ''){
        console.log(messageAEnvoyer.value);
        document.getElementById('newMessage').value='';
        }
    }
)

const createMessage = (texte) {

    let expediteurName = 'Olivier Magnin';
    maRowCustom = "<div class='row'><img class='avatar' src='avatar-1.jpg'><div><h6>" + expediteurName + "</h6><p>" + texte + "</p></div><img class='trash' src='trash.png'></div>";

}

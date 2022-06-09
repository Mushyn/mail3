//fonction qui pose la valeur du compteur de message en comptant le nombre parapgraphes
const messageCompteur  = () => {
var messagesCount = document.getElementsByTagName('p').length;
document.getElementById('count').textContent = messagesCount;
}

//maj compteur message
messageCompteur();


//foction qui pose un event listener sur les icones de poubelle en utilisant le class trash
const poseTrashListener = () => {
for(var i=0; i<document.getElementsByClassName('trash').length; i++){
    document.getElementsByClassName('trash')[i].addEventListener("click",
    function(){
        this.parentNode.remove();
        var messagesCount = document.getElementsByTagName('p').length;
        document.getElementById('count').textContent = messagesCount;
    }
    )

}
}

//pose les event listener sur trash
poseTrashListener();


//pose de l'event listener sur le bouton et appel de la fonction create message en envoyant le contenu du champ input. 
let ecouteBouton = document.getElementById('boutonAddMessage');
let messageAEnvoyer = document.getElementById('newMessage');

ecouteBouton.addEventListener('click',
    function () {
        if (messageAEnvoyer.value !== ''){
        createMessage(messageAEnvoyer.value);
        document.getElementById('newMessage').value='';

        }
    }
)

//fonction qu crée le nouveau message en tant que premier element de liste au format html a partir d'un template de html. 
const createMessage = (texte) => {

    let expediteurName = 'Olivier Magnin';
    let expediteurImage = 'avatar-3.jpg'

    let maRowCustomHTML = "<div class='row'><img class='avatar' src="+ expediteurImage + "><div><h6>" + expediteurName + "</h6><p>" + texte + "</p></div><img class='trash' src='trash.png'></div>";
    
    let maListMessages = document.getElementById('listMessage').firstElementChild;
    maListMessages.insertAdjacentHTML("beforebegin", maRowCustomHTML);
    
    messageCompteur();
    poseTrashListener();



}



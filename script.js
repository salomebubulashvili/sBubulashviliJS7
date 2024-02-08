'use strict';


const div = document.getElementById ('users');

function getUsers () {
    const request = new XMLHttpRequest();

    request.open('GET', 'https://reqres.in/api/unknown');

    request.addEventListener('load', function() {
        const textResult = this.responseText;
        const parsedResult = JSON.parse(textResult);
        const ulElement = document.createElement('ul');
        


        parsedResult.data.forEach((item) => {
            
            const li = document.createElement('li');
            li.textContent = `${item.name} ${item.color}`;
            ulElement.appendChild(li);

            div.appendChild(ulElement);
        });
        
    });

    request.send();
}

getUsers();
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere un’immagine presa anch’essa da un data
// Altro possibile Bonus:
// gestire una funzione con un evento nel modo Vue.
var app = new Vue ({
    el:'#root',
    data: {
        messaggio: 'Ciao Vue!!!',
        sorgenteImg: 'https://miro.medium.com/max/1024/1*vMbqi7D_I9ZufeE-Bh7Fiw.png'
        },
    methods: {
        nomeFunzione: function () {
            if (this.messaggio == 'Ciao Vue!!!') {
                this.messaggio = 'Ciao ' + prompt('Come ti chiami?');
            } else {
                this.messaggio = 'Ciao Vue!!!';
            }
        }
    }
});
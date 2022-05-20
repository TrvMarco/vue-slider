const app = new Vue ({
    el: '#root',
    data :{
        currentIndexImg: 0,
        images: [
            {
                src: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                src: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum',
            },
            {
                src: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                src: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                src: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
        ],
    },
    methods:{
        prevImg(){
            if(this.currentIndexImg === 0){
                this.currentIndexImg = this.images.length - 1;
            }else{
                this.currentIndexImg--;
            }
        },
        nextImg(){
            if(this.currentIndexImg === this.images.length - 1){
                console.log(this.images.length)
                this.currentIndexImg = 0;
            }else{
                this.currentIndexImg++;
            }
        },
        changeImg(newindex){
            this.currentIndexImg = newindex;
        }
    }

})


// TO DO:
// - classe active da assegnare a thumb
// Instanciando Vue
var app = new Vue({
  el: '#app',
  data: {
    lists: [],
    titles: [],
    description:''
  },
  methods: {
    addList(){
      const newList = {
        name: '',
        status: 'creating',
      }
      this.lists.push(newList)
    },
    saveList(list){
      list.status = 'saved'
    },
    removeList(index){
      this.lists.splice(index, 1)
    },
    addCard: function(){
      var divCard = document.getElementById('div-card')
      var title = document.getElementById('title-card')
      var cardHide = document.getElementById('title-card-hide')

      divCard.style.display = 'block'
      title.style.display = 'none'
      cardHide.style.display = 'none'
    },
    addTitle: function(){
      this.titles.push({
        content: this.description,
        status: false
      });
      this.description = ''
      var title = document.getElementById('title-card')
      var cardHide = document.getElementById('title-card-hide')
      var divCard = document.getElementById('div-card')

      divCard.style.display = 'none'
      title.style.display = 'none'
      cardHide.style.display = 'block'
    }, 
    cancel(){
      var divCard = document.getElementById('div-card')
      var cardHide = document.getElementById('title-card-hide')

      divCard.style.display = 'none'
      cardHide.style.display = 'block'
    }
  }
})

// var app1 = new Vue({
//   el: '#app1',
//   data: {
//     titles: [],
//     description:''
//   },
//   methods: {
//     addCard: function(){
//       var divCard = document.getElementById('div-card')
//       var title = document.getElementById('title-card')
//       var cardHide = document.getElementById('title-card-hide')

//       divCard.style.display = 'block'
//       title.style.display = 'none'
//       cardHide.style.display = 'none'
//     },
//     addTitle: function(){
//       this.titles.push({
//         content: this.description,
//         status: false
//       });
//       this.description = ''
//       var title = document.getElementById('title-card')
//       var cardHide = document.getElementById('title-card-hide')
//       var divCard = document.getElementById('div-card')

//       divCard.style.display = 'none'
//       title.style.display = 'none'
//       cardHide.style.display = 'block'
//     }, 
//     cancel(){
//       var divCard = document.getElementById('div-card')
//       var cardHide = document.getElementById('title-card-hide')

//       divCard.style.display = 'none'
//       cardHide.style.display = 'block'
//     }
//   }
// })
/* var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!' */
        /* seen: true */
        /* todos:[
            {text: 'Learn Vue1'},
            {text: 'Learn Vue2'},
            {text: 'Learn Vue3'}
        ] */
    //}
    /* ,
    methods: {
        reverseMessage: function(){
            this.message=this.message.split('').reverse().join('');
        }
    } */
//});
/* app.seen=false; */
/* app.todos.push({text: "new Vue"}) */
Vue.component('todo-item',{
    template: '<li>this is a todo</li>'
})
var app = new Vue({
    el: '#app'
});
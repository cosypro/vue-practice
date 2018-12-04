Vue.component('todo-item',{
    props:['todo'],
    template:'<li>{{todo.text}}</li>'
})

var app=new Vue({
    el:'#app',
    data:{
        groceryList:[
            {id:'0',text:'dsdfsd'},
            {id:'1',text:'sdf'},
            {id:'2',text:'sdfwerwe'}
        ]
    }
})
<template>
  <div>
    <div class="modal" id="modal">
      <div class="card">
        <h2>Add task</h2>
        <div>
          <p>Title: </p>
          <input id="title" type="text" placeholder="Type Title">
        </div>
        <div>
          <p>Description: </p>
          <input id="description" type="text" placeholder="Type Description">
        </div>
        <div class="buttons">
          <button class="cancel" v-on:click="logout">Cancel</button>
          <button class="create" v-on:click="add2">Create</button>
        </div>
      </div>
    </div>
    <div class="taskList">
      <div class="list">
        <h3>To Do</h3>
        <hr>
        <ul type="none">
          <draggable :list="list1" group="people">
            <li class="list-group-item" v-for="element in list1" :key="element.name">
              <p class="taskName">{{element.title}}</p>
              <hr>
              <p>{{element.description}}</p>
            </li>
          </draggable>
        </ul>
      </div>
      <div class="list">
        <h3>In Progress</h3>
        <hr>
        <ul type="none">
          <draggable :list="list2" group="people">
            <li class="list-group-item" v-for="element in list2" :key="element.name">
              <p class="taskName">{{element.title}}</p>
              <hr>
              <p>{{element.description}}</p>
            </li>
          </draggable>
        </ul>
      </div>
      <div class="list">
        <h3>Done</h3>
        <hr>
        <ul type="none">
          <draggable :list="list3" group="people">
            <li class="list-group-item" v-for="element in list3" :key="element.name">
              <p class="taskName">{{element.title}}</p>
              <hr>
              <p>{{element.description}}</p>
            </li>
          </draggable>
        </ul>
      </div>
      <div class="list">
        <h3>List Task</h3>
        <button class="btn" v-on:click="add()">Add</button>
        <hr>
        <ul type="none">
          <draggable :list="list4" group="people">
            <li class="list-group-item" v-for="element in list4" :key="element.name">
              <p class="taskName">{{element.title}}</p>
              <hr>
              <p>{{element.description}}</p>
            </li>
          </draggable>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'taskList',
  display: 'Task List',
  order: 1,
  components: {
    draggable
  },
  data () {
    return {
      list1: [
        { title: 'Task D', description: 'Update style' }
      ],
      list2: [
        { title: 'Task E', description: 'Remove Button Y' }
      ],
      list3: [
        { title: 'Task F', description: 'Fix Bug #001' }
      ],
      list4: [
        { title: 'Task A', description: 'Refactor using Kotlin' },
        { title: 'Task B', description: 'Updating using  TypeScript' },
        { title: 'Task C', description: 'There is a bug when user click button X' }
      ]
    }
  },
  methods: {
    logout: function () {
      document.getElementById('modal').style.display = 'none'
      document.getElementById('title').value = ''
      document.getElementById('description').value = ''
    },
    add: function () {
      document.getElementById('modal').style.display = 'block'
    },
    add2: function () {
      let title = document.getElementById('title').value
      let description = document.getElementById('description').value
      if (title === '' || description === '') {
        alert('Iltimos qiymatlarni kiriting')
      } else {
        this.list4.push({ title: title, description: description })
        this.logout()
        document.getElementById('title').value = ''
        document.getElementById('description').value = ''
      }
    }
  }
}
</script>

<style scoped>
  .taskList{
    margin-top: 20px;
  }
  .list{
    border: 1px solid rgba(0,0,0,0.4);
    box-sizing: border-box;
    display: inline-block;
    padding: 15px;
    min-height: 150px;
    max-height: auto;
    margin-left: 5px;
    border-radius: 20px;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
    text-align: left !important;
    width: 23%;
    vertical-align: top;
  }
  .btn{
    border: none;
    background-color: #4CAF50;
    color: white;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    padding: 10px 25px;
    border-radius: 5px;
    margin-left: 50%;
  }
  ul li{
    cursor: pointer;
    border: 1px solid rgba(0,0,0,0.3);
    padding: 10px;
    border-radius: 6px;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
    margin-top: 10px;
  }
  ul{
    padding: 0;
  }
  ul li .taskName{
    color: #49ab84;
    font-weight: bold;
  }
  .list h3 {
    display: inline-block;
    padding-left: 20px;
  }
  draggable {
  }
  .modal{
    background-color: rgba(0,0,0,0.3);
    display: none;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }
  .modal .card{
    position: absolute;
    z-index: 999;
    top: 30%;
    left: 50%;
    border-radius: 5px;
    transform: translate(-50%,-50%);
    padding: 20px 50px 50px 50px;
    background-color: white;
    width: 350px;
    height: auto;
    text-align: center;
  }
  .modal .cancel, .create{
    background-color: white;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 5px;
    padding: 10px 20px;
    margin-right: 5px;
  }
  .modal .create{
    background-color: #409efe;
    color: white;
  }
  .modal .buttons{
    margin-top: 20px !important;
    text-align: center;
  }
  .modal p{
    font-weight: bold;
    display: inline-block;
  }
  .modal input{
    width: 250px;
    float: right;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 3px;
    margin-top: 10px;
    padding: 3px;
    height: 30px;
  }
  @media only screen and (max-width: 800px) {
    .list{
      width: 90% !important;
      margin-top: 10px;
    }
    .modal .card{
      width: 50% !important;
    }
    input{
      width: 150px !important;
    }
    #description{
      margin-bottom: 10px !important;
    }
  }
  @media only screen and (max-width: 1200px) {
    .list {
      width: 30%;
      margin-top: 10px;
    }
  }
</style>

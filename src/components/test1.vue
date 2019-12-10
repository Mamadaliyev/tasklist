<template>
  <div>
    <div class="todo">
      <h3>To Do</h3>
      <hr>
      <draggable class="list-group" :list="list1" group="people" @change="log">
        <div class="list-group-item" v-for="(element) in list1" :key="element.name">
          <ul type="none">
            <li>
              <p>{{element.title}}</p>
              <hr>
              <p>{{element.description}}</p>
            </li>
          </ul>
        </div>
      </draggable>
    </div>
    <div class="inProgress">
      <h3>In Progress</h3>
      <hr>
      <draggable class="list-group" :list="list2" group="people" @change="log">
        <div class="list-group-item" v-for="(element) in list2" :key="element.name">
          <ul type="none">
            <li>
              <p>{{element.title}}</p>
              <hr>
              <p>{{element.description}}</p>
            </li>
          </ul>
        </div>
      </draggable>
    </div>
    <div class="done">
      <h3>Done</h3>
      <hr>
      <draggable class="list-group" :list="list3" group="people" @change="log">
        <div class="list-group-item" v-for="(element) in list3" :key="element.name">
          <ul type="none">
            <li>
              <p>{{element.title}}</p>
              <hr>
              <p>{{element.description}}</p>
            </li>
          </ul>
        </div>
      </draggable>
    </div>
    <div class="listTask">
      <h3>List Task</h3>
      <button class="btn" v-on:click="add()">Add</button>
      <hr>
      <draggable class="list-group" :list="list4" group="people" @change="log">
        <div class="list-group-item" v-for="(element) in list4" :key="element.name">
          <ul type="none">
            <li>
              <p>{{element.title}}</p>
              <hr>
              <p>{{element.description}}</p>
            </li>
          </ul>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'two-lists',
  display: 'Two Lists',
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
    add: function () {
      this.list4.push({ title: 'Task C', description: 'There is a bug when user click button X' })
    }
  }
}
</script>

<style scoped>
  .todo,.inProgress,.done,.listTask{
    border: 1px solid black;
    box-sizing: border-box;
    width: 24%;
    display: inline-block;
    padding: 10px;
  }
  .btn{
  }
  ul li{
    cursor: pointer;
    border: 1px solid black;
    padding: 5px;
  }
  ul li p{
    text-align: left;
  }
  .listTask h3 {
  }
  draggable{
  }
</style>

<template v-on:resize="insertWidth">
  <div style="margin-top: 20px;">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :lg="8" :xl="6">
        <el-card>
          <div slot="header">
            <h3 style="display: inline-block">To Do</h3>
          </div>
        <ul type="none">
          <draggable :list="list1" group="people">
            <li class="list-group-item" v-for="element in list1" :key="element.name">
                <p class="taskName">{{element.title}}</p>
                <hr>
                <p>{{element.description}}</p>
            </li>
          </draggable>
        </ul>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="8" :xl="6">
        <el-card>
          <div slot="header">
            <h3 style="display: inline-block">In Progress</h3>
          </div>
        <ul type="none">
          <draggable :list="list2" group="people">
            <li class="list-group-item" v-for="element in list2" :key="element.name">
              <p class="taskName">{{element.title}}</p>
              <hr>
              <p>{{element.description}}</p>
            </li>
          </draggable>
        </ul>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="8" :xl="6">
        <el-card>
          <div slot="header">
            <h3 style="display: inline-block">Done</h3>
          </div>
        <ul type="none">
          <draggable :list="list3" group="people">
            <li class="list-group-item" v-for="element in list3" :key="element.name">
              <p class="taskName">{{element.title}}</p>
              <hr>
              <p>{{element.description}}</p>
            </li>
          </draggable>
        </ul>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="8" :xl="6">
        <el-card>
          <div slot="header">
            <h3 style="display: inline-block">List Task</h3>
            <el-button type="text" @click="centerDialogVisible = true" v-on:click="insertWidth" style="margin-left: 65%;"> +Add</el-button>
            <el-dialog style=""
              title="Add Task"
              :visible.sync="centerDialogVisible"
              :width="dialogWidth"
              center>
              <h3>Title:</h3>
              <el-input v-model="title"></el-input>
              <h3>Description</h3>
              <el-input v-model="description"></el-input>
              <span slot="footer" class="dialog-footer">
              <el-button @click="cancel">Cancel</el-button>
              <el-button type="primary" @click="add2">Create</el-button>
            </span>
            </el-dialog>
          </div>
        <ul type="none">
          <draggable :list="list4" group="people">
            <li class="list-group-item" v-for="element in list4" :key="element.name">
              <p class="taskName">{{element.title}}</p>
              <hr>
              <p>{{element.description}}</p>
            </li>
          </draggable>
        </ul>
        </el-card>
      </el-col>
    </el-row>
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
      ],
      centerDialogVisible: false,
      title: '',
      description: '',
      dialogWidth: '30%'
    }
  },
  methods: {
    cancel: function () {
      this.$message({
        message: 'Bekor qilindi', type: 'warning' })
      this.centerDialogVisible = false
      this.title = ''
      this.description = ''
    },
    add2: function () {
      let title = this.title
      let description = this.description
      if (title === '' || description === '') {
        this.$message('Qiymatlarni kiriting!')
      } else {
        this.list4.push({ title: title, description: description })
        this.$message({
          message: 'Muvaffaqiyatli qo`shildi', type: 'success' })
        this.centerDialogVisible = false
        this.title = ''
        this.description = ''
      }
    },
    insertWidth: function () {
      if (window.innerWidth < 900) {
        this.dialogWidth = '80%'
      } else {
        this.dialogWidth = '30%'
      }
    }
  }
}
</script>

<style scoped>
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
  @media only screen and (max-width: 600px) {
}
</style>

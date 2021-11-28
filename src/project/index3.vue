<template>
    <div class="container">
      <div class="content-left">
        <div class="title">
          <div class="triangle-down"></div>
          <div>部门员工</div>
        </div>
        <div class="staff-wrapper">
          <div class="staff-item" v-for="(staff,index) in staffList" :key="index">
            <div>{{ staff.name }} </div>
            <div> ( {{ staff.title }} )</div>
          </div>
        </div>
      </div>
      <div class="content-main">
        sssssssss
      </div>
    </div>
</template>

<script>
export default {
    name:'',
    components: {

    },
    data() {
        return {
          staffList: []
        };
    },

    mounted() {
      this.fetchStaffList()
    },
    methods: {
      fetchStaffList() {
        this.staffList = [{
            name:"吕宜虎",
            title:'前端工程师',
          },{
            name:"吕虎",
            title:'前端工程师',
          },{
            name:"吕宜虎",
            title:'前端工程师',
          },{
            name:"吕宜虎",
            title:'前端工程师',
          },]
      }
    },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
}
.content-left {
  height: 100vh;
  width: 300px;
  padding: 10px;
  background: rgb(230,237,248);

}
.title {
  display: flex;
  align-items: center;
  color: #12459E;
  .triangle-down {
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #12459E;
  }
  div:last-child {
    margin-left: 8px;
  }
}
.staff-wrapper {
  .staff-item {
    display: flex;
    background-color: #fff;
    padding: 10px;
    margin-top: 8px;
    color: #12459E;
    font-size: 14px;
    border-radius: 4px;
    div:first-child {
      width: 60px;
    }
  }
}
</style>

<template>
    <div class="container">
      <div class="content-left">
        <div class="title">
          <div class="triangle-down"></div>
          <div>项目列表</div>
        </div>
        <div class="list-wrapper">
          <div class="item" v-for="(project,index) in projectList" :key="index">
            <div>{{ project.name }} </div>
          </div>
        </div>
      </div>
      <div class="content-main">
        <div class="main-item">
          <div class="info-top">
            <div class="line-one">
              <div>项目名称：<span>{{ peojectDetail.name }}</span></div>
              <div>立项时间：<span>{{ peojectDetail.startTime }}</span></div>
              <div>累计任务数（个）：<span>{{ peojectDetail.number }}</span></div>
              <div>累计项目用时（h）：<span>{{ peojectDetail.time }}</span></div>
            </div>
            <div class="line-two">
              <div>项目经理：<span>{{ peojectDetail.manager }}</span></div>
              <div>项目成员：<span>{{ peojectDetail.member }}</span></div>
            </div>
          </div>
          <div class="info-table">
            <el-table
              :data="peojectDetail.list"
              style="width: 100%"
              max-height="250">
              <el-table-column
                prop="name"
                label="参与人"
                width="180">
              </el-table-column>
              <el-table-column
                prop="content"
                label="工作内容"
                width="800">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="120">
                <template slot-scope="scope">
                  分数
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="btn-wrapper">
            <div class="btn submit">提交</div>
            <div class="btn cancel">取消</div>
          </div>
        </div>
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
          projectList: [],
          showList:[],
          peojectDetail: {},
          current:0
        };
    }, 

    mounted() {
      this.fetchProjectList()
      this.peojectDetail = {
        name: 'Icvs2.1服务器',
        startTime: '2021年7月14日',
        number: '191',
        time: '191时56分',
        manager: '张伟',
        member: '张伟，张大，哈哈，嘿嘿嘿',
        list:[{
          name:'吕宜虎',
          title:'前端代码工程师',
          content:[
            {name:"负责**的内容***的工作",time:'0.6h'},
            {name:"负责**的内容***的工作",time:'0.6h'},
            {name:"负责**的内容***的工作",time:'0.6h'},
            {name:"负责**的内容***的工作",time:'0.6h'},
          ],
          score: 98
        }]
      }
    },
    methods: {
      fetchProjectList() {
        this.projectList = [{
            name:"Icvs2.1服务器", 
          },{
            name:"智能识别服务管理平台", 
          },{
            name:"智能识别服务管理平台", 
          },{
            name:"智能识别服务管理平台", 
          },]
      }
    },
};
</script>

<style scoped lang="scss">
::v-deep {
  .el-table {
    border-radius: 10px;
  }
}
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
.list-wrapper {
  .item {
    display: flex;
    background-color: #fff;
    padding: 15px 10px;
    margin-top: 8px;
    color: #12459E;
    font-size: 14px;
    border-radius: 4px;
  }
}
.content-main {
  flex: 1;
  background: rgb(230,237,248);
}
.main-item {
  padding: 20px;
  .info-top {
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    .line-one {
      display: flex;
      div {
        color: #A9BBD7;
        margin-right: 40px;
        span {
          color: #009CFF;
          font-size: 18px;
          font-weight: 600;
        }
      }
    }
    .line-two {
      display: flex;
      margin-top: 20px;
      div {
        color: #A9BBD7;
        margin-right: 40px;
        span {
          color: #12459E;
        }
      }
    }
  }
  .info-table {
    margin-top: 20px;
  }
  .btn-wrapper {
    width: 300px;
    display: flex;
    margin: 0 auto;
    .btn  {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 50px; 
      border: 1px solid #0095FF;
      border-radius: 4px;
      cursor: pointer; 

    }

    .submit {
      color: #fff;
      background-color: #0095FF;
      margin-right: 20px;
    }
    .cancel {
      color: #0095FF;
      background-color: #EEF8FE;
    }
  }
}
</style>

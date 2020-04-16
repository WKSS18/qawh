<template>
    <div class="block">
    <el-date-picker
      v-model="datetimerange"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </div>
</template>
<script>
export default {
    data(){
        return {
            datetimerange:""
        }
    },
    created(){
        console.log(this.datetimerange)
    }
}
</script>
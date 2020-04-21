<template>
    <div class="detailpiao">
        详情页面   
    </div>
</template>

<script>
import {getPiaoData} from '@/api/piao';
export default {
    data(){
        return {
            id:"",
            detailhtm:""
        }
    },
    async created(){
        // console.log();
        this.id = location.search.split('?')[1]
        let piaodetailrs = await getPiaoData({
            id:this.id
        })
        this.detailhtm = piaodetailrs.data;
    }
}
</script>

<style lang="scss" scoped>

</style>
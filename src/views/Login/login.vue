<template>
  <div class="header">
    <div class="padding">


      <el-upload
          class="upload-demo"
          multiple
          :limit="3000"
          :file-list="userForm.imgList"
          :before-upload="beforeAvatarUpload"
          :osubmit="handleAvatarSuccess"
          :show-file-list="true"
          :auto-upload="true"
          action=""
        >
          <el-button size="small" type="primary">上传图片</el-button>
        </el-upload>
       <div class="imgList">
         <div  v-for="(item,index) in userForm.imgData" :key="index">
          <el-image :src="item.imgUrl" alt="" style="width:100px;height: 100px;margin-left: 20px;"
                :preview-src-list="SrcList(item.img)" :preview-teleported="true" :infinite="false"/>
            
         </div>
       </div>
       
       <div class="pagination">
    <el-pagination background layout="total, sizes,prev, pager, next"
                  :page-sizes="[10, 50, 100]" :total="userForm.total"
                  :current-page="userForm.form.pageNum" :page-size="userForm.form.pageSize"
                  @current-change="getPageNum"
                  @size-change="getPageSize" />
  </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import Storage from "../../utils/DeviceStorage";
import Message from '../../utils/Message';
import {reactive} from 'vue'
import { getImgPages } from '../../utils/Api';
import { uploads } from '../../utils/Api';;
import {onMounted} from 'vue'

export default {
  name: "login",
  
 setup () {
   const userForm = reactive ({
    form:{
      pageNum: 1,
      pageSize: 10,
    },
    collectPath:'/Users/zhaoxiangyuan/Downloads',
    total: 0,
    imgList:[],
    imgData:[
      {"fileId": 6,
      "filePath": "/Users/zhaoxiangyuan/Documents/378E28A8-69C8-493C-A1B3-511DC48897BA-1669190063504.jpg",
      "fileName": "378E28A8-69C8-493C-A1B3-511DC48897BA-1669190063504.jpg",
      "fileMd5": "64c123bb7edfa06fe353f0be466604c9",
      "cteTime": null,
      "imgUrl": null,
    },

    ]
   })

   const getPage=()=>{
 
    getImgPages(userForm.form).then((ref)=>{
        userForm.imgData=ref.records;
        userForm.total=ref.total
        userForm.form.pageNum=ref.current
        userForm.form.pageSize=ref.size
    })
   }
   onMounted(()=>{

     getPage()
   
   })
   const getPageNum = (num) => {
    userForm.form.pageNum=num;
     getPage()
   }

   const  getPageSize = (size) => {
     userForm.form.pageSize=size;
     getPage()
   }

   const SrcList = (img) =>{
    return img
   }

   const handleAvatarSuccess = ()=>{
    console.log("onSuccessonSuccess======》")
     userForm.form.pageNum=1;
     
   }
   const beforeAvatarUpload = (file) => {
    const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      // const isLt2M = file.size / 1024 / 1024 < 2;
      // if (!isJPG) {
      //   Message.error("上传图片只能是 JPG、PNG 格式!");
      //   return false;
      // }
      // if (!isLt2M) {
      //   Message.error("上传图片大小不能超过 2MB!");
      //   return false;
      // }
       let formData = new FormData();
       formData.append("file", file);

       uploads(formData);

      console.log("上传完成======》"+file)
   }


   const handleOpenMenu = () => {
	      const file = document.getElementById('file')
	      file.click()
	    }
      const  fileChange= (e) => {
	      try {
	        const fu = document.getElementById('file')
	        if (fu === null) return
	        // 只有electro可以获取到文件夹路径
	        this.form.collectPath = fu.files[0].path.replaceAll('\\', '/')
	      } catch (error) {
	        console.debug('choice file err:', error)
	      }
	    }

   return {
      SrcList,
      userForm,
      getPageSize,
      getPageNum,
      beforeAvatarUpload,
      handleAvatarSuccess,
      handleOpenMenu,fileChange
   }
 },
};
</script>

<style scoped>
.padding{
  padding: 20px;
}
.pagination {
        width: 100%;
        display: flex;
        justify-content: right;
        margin-top: 30px;
    }
.imgList{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>


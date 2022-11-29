<!-- <template>
  <div class="register_wrapper">
    <el-form v-model="formData" :label-width="80">
      <el-form-item label="昵称">
        <el-input v-model="formData.nickname" />
      </el-form-item>
      <el-form-item label="上传图片">
        <el-upload
          v-model:file-list="formData.fileList"
          :before-upload="handleBeforeUpload"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <el-icon>
            <Plus />
          </el-icon>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Plus } from '@element-plus/icons-vue';
const formData = ref({ fileList: [] });
const handlePictureCardPreview = () => {
  console.log(1111);
  console.log('formData :>> ', formData.value);
};
const handleRemove = () => {
  console.log(222);
};
const handleBeforeUpload = options => {
  console.log('options :>> ', options);
  let canvas = document.createElement('CANVAS'),
    ctx = canvas.getContext('2d'),
    img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = function () {
    canvas.height = img.height;
    canvas.width = img.width;
    ctx.drawImage(img, 0, 0);
    let dataURL = canvas.toDataURL(outputFormat || 'image/png');
    callback.call(this, dataURL);
    canvas = null;
  };
  img.src = url;
  return '1231231232';
};
const convertImgToBase64 = (url, callback, outputFormat) => {
  let canvas = document.createElement('CANVAS'),
    ctx = canvas.getContext('2d'),
    img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = function () {
    canvas.height = img.height;
    canvas.width = img.width;
    ctx.drawImage(img, 0, 0);
    let dataURL = canvas.toDataURL(outputFormat || 'image/png');
    callback.call(this, dataURL);
    canvas = null;
  };
  img.src = url;
};

// var url = "static/img/js1.jpg";//这是站内的一张图片资源，采用的相对路径
// const convertImgToBase64 = (url, function (base64Img) {
//   //转化后的base64
//   alert(base64Img);
// });
</script> -->

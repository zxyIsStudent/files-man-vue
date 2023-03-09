import {ElMessage} from 'element-plus';

const Message = {
    success (value) {
        ElMessage({
            message: value,
            type:"success"
        })
    },
    warning (value) {
        ElMessage({
            message:value,
            type:"warning"
        })
    },
    error (value) {
        ElMessage({
            message:value,
            type:"error"
        })
    }
}
export default Message
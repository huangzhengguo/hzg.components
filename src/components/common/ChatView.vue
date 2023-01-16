<template>
    <el-container ref="elContainerRef">
        <el-main>
            <!-- 消息内容 -->
            <MessageList ref="messageListRef" :title="title" :data="data" v-on:load-more-message="handleLoadMoreMessage">
            </MessageList>
        </el-main>
        <el-footer>
            <div style="height: 150px; padding-top: 10px;" v-loading="sendMessageLoading">
                <el-input type="textarea" :rows="5" style="width: 100%;" v-model="textMessage">
                </el-input>
                <div style="height: 10px;"></div>
                <el-button v-on:click="handSendTextMessage" style="margin-right: 10px">发送</el-button>
                <el-upload
                    class="upload-demo"
                    :auto-upload="false"
                    action=""
                    :on-change="handleSendFileMessage"
                    :limit="1"
                    style="display: inline;">
                    <el-button type="primary">发送图片</el-button>
                </el-upload>
            </div>
        </el-footer>
    </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElNotification } from "element-plus"
import MessageList from '@/components/common/MessageList.vue'
import type { IMessage } from '@/data/interface/IMessage'

const textMessage = ref('')
const messageListRef = ref<any>(null)
const elContainerRef = ref<any>(null)

// 属性
const props = defineProps<{
    title: string,
    data: IMessage[], // 消息数据,
    sendMessageLoading: boolean
}>()

// 事件
const emits = defineEmits<{
    (e: 'sendTextMessage', message: string): void,
    (e: 'sendFileMessage', model: any): void
    (e: 'loadMoreMessage'): void
}>()

// 发送文本消息
function handSendTextMessage() {
    // console.log(messageListRef.value)
    if (textMessage.value) {
        emits('sendTextMessage', textMessage.value)

        textMessage.value = ''
    } else {
        ElNotification({
                title: '警告',
                message: '消息不能为空',
                type: 'warning',
                duration: 0
            })
    }
}

// 发送文件消息
function handleSendFileMessage() {

}

// 加载更多消息
function handleLoadMoreMessage() {
    emits('loadMoreMessage')
}

</script>
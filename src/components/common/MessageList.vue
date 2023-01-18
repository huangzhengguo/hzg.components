<template>
    <!-- 自己发送的消息，靠右显示 -->
        <!-- 别人发送给自己的消息，靠右显示 -->
    <el-button type="primary" v-on:click="handleLoadMoreMessage" style="position: absolute; top: 0; left: 10px;">加载更多</el-button>
    <template v-for="item in data">
        <div v-if="item.isFromMe == true" class="right-message-container" style="float: right; text-align: right;">
            <span class="message-time">{{item.sendTime + ' '}}</span>
            <span class="message-time">{{item.name}}</span>
            <br />
            <p v-if="item.type == 0" class="message-content">{{item.content}}</p>
            <img v-else-if="item.type == 1" :src="item.picture" class="message-picture" alt="">
        </div>

        <div v-if="item.isFromMe != true" class="left-message-container">
            <span class="message-time">{{item.name + ' '}}</span>
            <span class="message-time">{{item.sendTime}}</span>
            <br />
            <p v-if="item.type == 0" class="message-content">{{item.content}}</p>
            <img v-else-if="item.type == 1" :src="item.picture" class="message-picture" alt="">
        </div>
    </template>
</template>

<script lang="ts" setup>
import type { IMessage } from '@/data/interface/IMessage'

// 组件属性
const props = defineProps<{
    title: string,
    data: IMessage[], // 消息数据
}>()

// 事件
const emits = defineEmits<{
    (e: 'loadMoreMessage'): void
}>()

// 加载更多消息
function handleLoadMoreMessage() {
    emits('loadMoreMessage')
}

</script>

<style scoped>

.left-message-container {
    float: left; 
    width: 80%; 
    padding: 10px 0 10px 15px; 
    margin: 5px 0; 
    background: #F9F9F9; 
    border-radius: 5px;
    text-align: left;
}

.right-message-container {
    float: right; 
    width: 80%; 
    padding: 10px 15px 10px 0; 
    margin: 5px 0; 
    background: #F9F9F9; 
    border-radius: 5px;
    text-align: right;
}

.message-container p {
    padding: 0;
}

.message-time {
    color: gray;
    font-size: 13px;
}

.message-content {
    margin: 5px;
}

.message-picture {
    width: 100px;
    height: 100px; 
    display: inline-block;
}

</style>
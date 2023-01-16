<template>
    <el-button type="primary" v-on:click="handleLoadMoreMessage" style="position: absolute; top: 0; left: 10px;">加载更多</el-button>
    <div v-for="item in data">
        <!-- 后台回复的消息 -->
        <div v-if="item.isServiceReply == true" class="message-container" style="float: right; text-align: right;">
            <span class="message-time">{{item.createTime}}</span>
            <p v-if="item.type == 0" class="message-content">{{item.content}}</p>
            <img v-if="item.type == 1" :src="item.picture" class="message-picture" alt="">
        </div>

        <div v-if="item.isServiceReply != true" class="message-container">
            <span class="message-time">{{item.createTime}}</span>
            <p v-if="item.type == 0" class="message-content">{{item.content}}</p>
            <img v-else-if="item.type == 1" :src="item.picture" class="message-picture" alt="">
        </div>
    </div>
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

.message-container {
    float: left; 
    width: 100%; 
    margin: 5px -10px; 
    padding: 10px 10px 5px 10px; 
    background: #F9F9F9; 
    border-radius: 10px;
}

.message-time {
    color: gray;
}

.message-content {
    margin: 5px;
}

.message-picture {
    width: 100px;
    height: 100px; 
    display: block;
}

</style>
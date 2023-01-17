/**
 * 消息
 *
 * @export
 * @interface IMessage
 */
export interface IMessage {
    userId: string // 发送消息的用户标识
    receiveUserId?: string // 接收消息的用户标识
    name: string // 用户名
    email?: string // 邮箱
    sendTime: string // 消息发送时间
    isFromMe: boolean // 是否是我发送的消息
    avatar: string // 头像
    content: string // 文本消息内容
    picture: string // 图片消息，图片 URL
    type: number // 消息类型，文本，图片
}
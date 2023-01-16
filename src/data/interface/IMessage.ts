/**
 * 消息
 *
 * @export
 * @interface IMessage
 */
export interface IMessage {
    userId: string
    receiveUserId: string
    email: string
    createTime: string
    isServiceReply: boolean
    avatar: string
    content: string
    picture: string // 图片消息，图片 URL
    type: number // 消息类型，文本，图片
}
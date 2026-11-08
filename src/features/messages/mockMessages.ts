import type { ChatMessage } from './messageTypes'
export const mockPeopleMessages: ChatMessage[] = [
    {
        id: 55,
        name: 'ti',
        to: 'long',
        mes: 'Chào bạn nhé',
        createAt: '2026-11-02 09:30:00',
        type: 0
    },
    {
        id: 56,
        name: 'long',
        to: 'ti',
        mes: 'Chào bạn, có chuyện gì vậy',
        createAt: '2026-11-02 09:31:00',
        type: 0
    },
    {
        id: 57,
        name: 'ti',
        to: 'long',
        mes: 'À lâu không gặp nên hỏi thăm bạn thôi',
        createAt: '2026-11-02 09:32:00',
        type: 0
    },
    {
        id: 58,
        name: 'long',
        to: 'ti',
        mes: 'Mình khoẻ re ấy mà, bạn thì sao',
        createAt: '2026-11-02 09:33:00',
        type: 0
    },
    {
        id: 59,
        name: 'ti',
        to: 'long',
        mes: 'không ổn bạn ơi',
        createAt: '2026-11-02 09:34:00',
        type: 0
    }
]

// Dữ liệu mẫu tin nhắn phòng theo API của thầy
export const mockRoomMessages: ChatMessage[] = [
    {
        id: 101,
        name: 'long',
        to: 'ABC',
        mes: 'Hello room',
        createAt: '2026-11-02 10:00:00',
        type: 1
    },
    {
        id: 102,
        name: 'ti',
        to: 'ABC',
        mes: 'hello',
        createAt: '2026-11-02 10:01:00',
        type: 1
    },
    {
        id: 103,
        name: 'long',
        to: 'ABC',
        mes: 'Hôm nay có gì mới không mọi người',
        createAt: '2026-11-02 10:02:00',
        type: 1
    },
    {
        id: 104,
        name: 'long',
        to: 'ABC',
        mes: 'Mấy nay đi làm không lướt mxh mấy',
        createAt: '2026-11-02 10:03:00',
        type: 1
    },
    {
        id: 105,
        name: 'ti',
        to: 'ABC',
        mes: 'giỏi thế bro',
        createAt: '2026-11-02 10:04:00',
        type: 1
    }
]
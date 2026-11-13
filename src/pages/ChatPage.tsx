// import MessageList from '../features/messages/components/MessageList'
// import { mockPeopleMessages } from '../features/messages/mockMessages'
// import '../features/messages/messages.css'

// function ChatPage() {
//     return (
//         <div className="chat-preview">
//             <header className="chat-preview__header">
//                 <h2>Trò chuyện với Ti</h2>
//             </header>

//             <MessageList
//                 messages={mockPeopleMessages}
//                 currentUserName="long"
//             />
//         </div>
//     )
// }

// export default ChatPage
// import ChatWindow from '../features/messages/components/ChatWindow'
// import { mockPeopleMessages } from '../features/messages/mockMessages'
// import '../features/messages/messages.css'

// function ChatPage() {
//     return (
//         <main className="chat-page">
//             <ChatWindow
//                 messages={mockPeopleMessages}
//                 currentUserName="long"
//                 conversationName="Ti"
//             />
//         </main>
//     )
// }

// export default ChatPage
// import ChatWindow from '../features/messages/components/ChatWindow'
// import { mockPeopleMessages } from '../features/messages/mockMessages'
// import '../features/messages/messages.css'

// function ChatPage() {
//     return (
//         <main className="chat-page">
//             <ChatWindow
//                 messages={mockPeopleMessages}
//                 currentUserName="long"
//                 conversationName="Ti"
//             />
//         </main>
//     )
// }

// export default ChatPage
import ChatWindow from '../features/messages/components/ChatWindow'
import { mockPeopleMessages } from '../features/messages/mockMessages'
import '../features/messages/messages.css'

function ChatPage() {
    return (
        <main className="chat-layout">
            {/* Khu vực để dành cho thành viên khác */}
            <aside className="chat-layout__reserved"></aside>

            {/* Khu vực mình phụ trách */}
            <ChatWindow
                messages={mockPeopleMessages}
                currentUserName="long"
                conversationName="Ti"
            />
        </main>
    )
}

export default ChatPage
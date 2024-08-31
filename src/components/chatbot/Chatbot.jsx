'use client';
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { AiOutlineClose, AiOutlineMessage } from 'react-icons/ai'; // Ensure you have the react-icons package installed

const Chatbot = () => {
    const [input, setInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [isOpen, setIsOpen] = useState(true); // Manage chatbot visibility
    const chatContainerRef = useRef(null);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Add the user input to the chat history
        setChatHistory([...chatHistory, { text: input, sender: 'user' }]);

        // Initialize GoogleGenerativeAI with the provided API key
        const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        try {
            const result = await model.generateContent(input);

            // Add the AI response to the chat history
            setChatHistory([...chatHistory, { text: input, sender: 'user' }, { text: result.response.text(), sender: 'ai' }]);
        } catch (error) {
            console.error('Error generating content:', error);
            setChatHistory([...chatHistory, { text: input, sender: 'user' }, { text: 'Sorry, something went wrong. Please try again.', sender: 'ai' }]);
        }

        // Clear the input field
        setInput('');
    };

    // Scroll to the bottom of the chat container whenever chatHistory changes
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatHistory]);

    return (
        <div style={{ position: 'relative' }}>
            {isOpen ? (
                <div style={{ position: 'fixed', bottom: '20px', right: '20px', width: '400px' }}>
                    <div
                        ref={chatContainerRef}
                        style={{
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            padding: '10px',
                            height: '400px',
                            overflowY: 'scroll',
                            backgroundColor: '#f9f9f9',
                            position: 'relative'
                        }}
                    >
                        <div className='fixed'>

                            <button
                                onClick={() => setIsOpen(false)}
                                style={{
                                    top: '10px',
                                    right: '10px',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '20px'
                                }}
                            >
                                <AiOutlineClose />
                            </button>
                            <h1>Chat with "Aura" AI</h1>
                        </div>
                        {chatHistory.map((message, index) => (
                            <div key={index} style={{ marginBottom: '10px',marginTop:'50px' }}>
                                <strong>{message.sender === 'user' ? 'You:' : 'AI:'}</strong>
                                <p style={{ margin: '5px 0', padding: '5px', borderRadius: '5px', backgroundColor: message.sender === 'user' ? '#d1e7dd' : '#e2e3e5' }}>
                                    {message.text}
                                </p>
                            </div>
                        ))}
                        <form onSubmit={handleSubmit} className='absolute bottom-0 flex bg-red-200 w-full overflow-hidden'>
                            <input
                                type="text"
                                value={input}
                                onChange={handleInputChange}
                                placeholder="Ask something..."
                                style={{
                                    width: '70%',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                    marginBottom: '10px',
                                    marginTop: '50px',

                                }}
                            />
                            <button
                                type="submit"
                                style={{
                                    width: '30%',
                                    borderRadius: '5px',
                                    backgroundColor: '#007bff',
                                    color: 'white',
                                    border: 'none',
                                }}
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        cursor: 'pointer',
                    }}
                >
                    <AiOutlineMessage />
                </button>
            )}
        </div>
    );
};

export default Chatbot;

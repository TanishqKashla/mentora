'use client';
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { AiOutlineClose, AiOutlineMessage } from 'react-icons/ai'; // Ensure you have the react-icons package installed
import { IoSend } from "react-icons/io5";

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
                <div style={{ position: 'fixed', bottom: '20px', right: '20px', width: '400px', backgroundColor: "white", }}>
                    <div
                        ref={chatContainerRef}
                        style={{
                            border: '2px solid #bbb',
                            borderRadius: '5px',
                            height: '500px',
                            overflowY: 'scroll',
                            position: 'relative',
                            width: "400px"

                        }}
                    >

                        <div className='fixed w-[397px] h-10 bg-blue-900 text-white items-center px-4 flex justify-between bg-gradient-to-br from-[rgb(37,43,97)] to-[rgb(54,123,241)]'>
                            <h1 className='font-bold'>Chat with "Aura" AI</h1>
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
                        </div>

                        <div className='mb-20 mt-10 px-3'>

                            {chatHistory.map((message, index) => (
                                <div key={index} style={{ marginBottom: '5px', }}>
                                    <strong>{message.sender === 'user' ? 'You:' : 'AI:'}</strong>
                                    <p
                                        style={{
                                            margin: '5px 0',
                                            padding: '10px',
                                            borderRadius: '10px',
                                            backgroundColor: 'none',
                                            background: message.sender === 'user' ? "linear-gradient(152deg,rgba(37,43,97,1) 0%, rgba(54,123,241,1) 100%)" : 'none',
                                            border: message.sender === 'user' ? 'none' : '2px solid #252b61',
                                            color: message.sender === 'user' ? 'white' : '#252b61',

                                        }}>
                                        {message.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <form onSubmit={handleSubmit} className='fixed bottom-[20px] w-[360px] flex justify-between overflow-hidden mx-3 mb-3'>
                            <input
                                type="text"
                                value={input}
                                onChange={handleInputChange}
                                placeholder="Ask something..."
                                style={{
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                    width: '83%',

                                }}
                            />
                            <button
                                type="submit"
                                style={{
                                    width: '15%',
                                    aspectRatio: '1/1',
                                    borderRadius: '50px',
                                    background: "linear-gradient(152deg,rgba(37,43,97,1) 0%, rgba(54,123,241,1) 100%)",
                                    color: 'white',
                                    border: 'none',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <IoSend size={20} />
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

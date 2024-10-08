'use client'
import React, { useState } from 'react';
import { Box, Stack, TextField, Button, Typography, Paper, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { GoogleGenerativeAI } from "@google/generative-ai";

const ChatPage = () => {
  const [messages, setMessages] = useState<any>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY; // Use your environment variable

  // Initialize the Google Generative AI client
  const genAI = new GoogleGenerativeAI(apiKey as string);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message to the conversation
    const userMessage = { sender: 'user', content: inputMessage };
    setMessages([...messages, userMessage]);
    setInputMessage(''); // Clear input field
    setLoading(true); // Show loading indicator

    // Fetch AI response
    try {
      const aiResponse = await fetchGeminiResponse(inputMessage);
      const aiMessage = { sender: 'ai', content: aiResponse };
      setMessages((prevMessages: any) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchGeminiResponse = async (userInput: string) => {
    try {
      // Use the Google Generative AI client to generate content
      const result = await model.generateContent(userInput);
      const responseText = await result.response.text(); // Parse the response text

      return responseText; // Return the AI's response
    } catch (error) {
      console.error("Error fetching AI response:", error);
      return "Sorry, something went wrong. Please try again."; // Fallback message
    }
  };

  return (
    <Stack
      spacing={2}
      justifyContent="center"
      alignItems="center"
      height="100%"
      width="100%"
      mx="auto"
      maxWidth={{ lg: 'lg' }}
      gap={4}
      py={{ xs: 4, md: 10 }}
    >
      {/* Chat Window */}
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          maxWidth: '600px',
          height: '70vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          p: 2,
          borderRadius: 2,
        }}
      >
        {/* Message Display */}
        <Box
          sx={{
            overflowY: 'auto',
            flexGrow: 1,
            mb: 2,
            padding: '10px',
            backgroundColor: '#f5f5f5',
            borderRadius: '10px',
            maxHeight: '70vh',
          }}
        >
          {messages.map((message: any, index: number) => (
            <Box
              key={index}
              display="flex"
              justifyContent={message.sender === 'user' ? 'flex-end' : 'flex-start'}
              mb={1}
            >
              <Paper
                elevation={2}
                sx={{
                  padding: '10px 15px',
                  backgroundColor: message.sender === 'user' ? '#1976d2' : '#e0e0e0',
                  color: message.sender === 'user' ? '#fff' : '#000',
                  maxWidth: '70%',
                  borderRadius: '15px',
                }}
              >
                <Typography variant="body1">{message.content}</Typography>
              </Paper>
            </Box>
          ))}
          {loading && (
            <Box display="flex" justifyContent="center">
              <CircularProgress size={24} />
            </Box>
          )}
        </Box>

        {/* Input Area */}
        <Stack direction="row" spacing={2} alignItems="center">
          <TextField
            fullWidth
            placeholder="Type your message..."
            variant="outlined"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default ChatPage;
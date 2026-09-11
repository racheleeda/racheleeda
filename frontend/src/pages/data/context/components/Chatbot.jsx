import React, { useState } from 'react';
import { useApp } from '../AppContext.jsx';

const initialMessage = {
  role: 'assistant',
  content: 'Welcome to Aila. I can read the current fleet, sensors, alerts, maintenance queue, and safety zones. What should we inspect?',
};

const quickQuestions = ['Which machine has the highest risk?', 'How many active alerts are there?', 'What is the safest zone?'];

export default function Chatbot() {
  const { machines, selectedMachine } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (event) => {
    event.preventDefault();
    const question = input.trim();
    if (!question || isLoading) return;

    const nextMessages = [...messages, { role: 'user', content: question }];
    setMessages(nextMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: question,
          messages: nextMessages,
          context: { selectedMachine, selectedMachineId: selectedMachine?.id, machines },
        }),
      });
      const responseText = await response.text();
      let result;
      try {
        result = responseText ? JSON.parse(responseText) : {};
      } catch {
        throw new Error(`Server returned ${response.status} ${response.statusText}, not JSON. Start the backend at http://localhost:8000.`);
      }
      if (!response.ok) throw new Error(result.error || `Chat request failed (${response.status})`);
      setMessages(prev => [...prev, { role: 'assistant', content: result.answer }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: `I could not reach the assistant service. ${error.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-shell">
      {isOpen && (
        <section className="chatbot-panel" aria-label="Aila assistant">
          <header className="chatbot-header">
            <div>
              <div className="chatbot-title-row"><span className="chatbot-avatar">A</span><div><p className="chatbot-kicker">AI OPERATIONS ASSISTANT</p><h2>Aila</h2></div></div>
              <p className="chatbot-status"><span /> Connected to live telemetry</p>
            </div>
            <button className="chatbot-close" type="button" onClick={() => setIsOpen(false)} aria-label="Close assistant">×</button>
          </header>
          <div className="chatbot-messages" aria-live="polite">
            {messages.length === 1 && <div className="chatbot-quick-questions">{quickQuestions.map(question => <button key={question} type="button" onClick={() => setInput(question)}>{question}</button>)}</div>}
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`chatbot-message ${message.role}`}>
                {message.content}
              </div>
            ))}
            {isLoading && <div className="chatbot-message assistant chatbot-typing">Aila is checking the dashboard...</div>}
          </div>
          <form className="chatbot-form" onSubmit={sendMessage}>
            <input
              value={input}
              onChange={event => setInput(event.target.value)}
              placeholder="Ask about this dashboard..."
              aria-label="Ask Aila a question"
            />
            <button type="submit" disabled={!input.trim() || isLoading} aria-label="Send question">↗</button>
          </form>
        </section>
      )}
      <button className={`chatbot-launcher ${isOpen ? 'is-open' : ''}`} type="button" onClick={() => setIsOpen(value => !value)} aria-label={isOpen ? 'Close Aila assistant' : 'Open Aila assistant'}>
        <span className="chatbot-launcher-dot" />
        <span>{isOpen ? 'CLOSE' : 'ASK AILA'}</span>
      </button>
    </div>
  );
}
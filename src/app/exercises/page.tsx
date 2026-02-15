'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';

export default function AiExercisesPage() {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([
    { role: 'assistant', content: 'Bonjour ! Je suis Mr. Cissé, ton professeur de Physique-Chimie. Je suis là pour t\'aider à comprendre tes leçons et réussir tes exercices. Sur quoi veux-tu travailler aujourd\'hui ?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: userMessage,
          systemPrompt: "Tu es Mr. Cissé, un professeur de Physique-Chimie expérimenté et bienveillant pour le niveau Seconde S au Sénégal. Ton rôle est d'accompagner l'élève, de lui expliquer les concepts difficiles et de l'aider à résoudre ses exercices par le dialogue. IMPORTANT : Tu ne dois JAMAIS proposer de quiz ou d'évaluation formelle. Si l'élève en demande, ramène la discussion sur la compréhension du cours ou la résolution de problèmes. Sois encourageant, clair et pédagogue."
        }),
      });

      if (!response.body) throw new Error('No response body');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = '';

      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const text = decoder.decode(value);
        const lines = text.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = line.slice(6);
              if (data === '[DONE]') continue;

              const json = JSON.parse(data);
              const content = json.choices[0]?.delta?.content || '';

              if (content) {
                assistantMessage += content;
                setMessages(prev => {
                  const newMessages = [...prev];
                  newMessages[newMessages.length - 1].content = assistantMessage;
                  return newMessages;
                });
              }
            } catch (e) {
              console.error('Error parsing stream:', e);
            }
          }
        }
      }
    } catch (error) {
      console.error('Error calling AI:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Désolé, je ne vous ai pas bien entendu. Pouvez-vous répéter ?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="ai-page">
      <header className="page-header">
        <h1>Discussion avec Mr. Cissé</h1>
        <p>Ton professeur virtuel, disponible 24/7 pour t'aider.</p>
      </header>

      <div className="card chat-container">
        <div className="messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.role}`}>
              <div className="avatar">
                {msg.role === 'assistant' ? <Bot size={20} color="var(--primary)" /> : <User size={20} color="white" />}
              </div>
              <div className="content">
                <p style={{ whiteSpace: 'pre-wrap' }}>{msg.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="message assistant">
              <div className="avatar">
                <Bot size={20} color="var(--primary)" />
              </div>
              <div className="content">
                <Loader2 className="spin" size={20} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pose ta question à Mr. Cissé..."
            disabled={isLoading}
          />
          <button type="submit" className="btn btn-primary" disabled={isLoading || !input.trim()}>
            {isLoading ? <Loader2 className="spin" /> : <Send size={20} />}
          </button>
        </form>
      </div>

      <div className="suggestions-box">
        <h4>Suggestions de discussion :</h4>
        <div className="suggestions">
          {[
            "Je ne comprends pas la différence entre vitesse moyenne et instantanée",
            "Aide-moi à résoudre un exercice sur les forces",
            "Explique-moi la notion de mole en chimie",
            "Comment équilibrer une équation bilan ?"
          ].map((sugg, i) => (
            <button
              key={i}
              className="suggestion btn-outline"
              onClick={() => {
                setInput(sugg);
                // Optional: auto-submit
              }}
            >
              <Sparkles size={14} /> {sugg}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* src/app/ai-assistant/page.tsx */
'use client';
import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';

export default function AIAssistantPage() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Bonjour ! Je suis ton assistant de Physique. Pose-moi une question sur le programme de Seconde S (Mécanique, Électricité, etc.).' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });

      if (!response.ok) throw new Error('Erreur de connexion');

      const reader = response.body?.getReader();
      if (!reader) throw new Error('Pas de flux de données');

      let currentAssistantContent = '';
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const dataStr = line.slice(6).trim();
            if (dataStr === '[DONE]') break;

            try {
              const data = JSON.parse(dataStr);
              const content = data.choices[0]?.delta?.content || '';
              currentAssistantContent += content;

              setMessages(prev => {
                const next = [...prev];
                next[next.length - 1] = { role: 'assistant', content: currentAssistantContent };
                return next;
              });
            } catch (e) {
              // Ignore partial JSON chunks
            }
          }
        }
      }
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Désolé, j'ai rencontré une erreur technique. Vérifie ta connexion." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="ai-page">
      <header className="ai-header">
        <h1>Assistant IA</h1>
        <p>Ton tuteur personnel disponible 24/7</p>
      </header>

      <div className="chat-container card">
        <div className="messages" ref={scrollRef}>
          {messages.map((m, i) => (
            <div key={i} className={`message ${m.role}`}>
              <div className="avatar">
                {m.role === 'assistant' ? <Bot size={20} /> : <User size={20} />}
              </div>
              <div className="content">
                {m.content || (isLoading && i === messages.length - 1 ? '...' : '')}
              </div>
            </div>
          ))}
        </div>

        <div className="input-area">
          <input
            type="text"
            placeholder="Pose ta question ici..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            disabled={isLoading}
          />
          <button className="btn btn-primary" onClick={handleSend} disabled={isLoading}>
            {isLoading ? <Loader2 size={20} className="spin" /> : <Send size={20} />}
          </button>
        </div>
      </div>

      <div className="suggestions">
        <button className="suggestion card" onClick={() => { setInput("Explique-moi la loi d'Ohm"); }}>
          <Sparkles size={16} /> Explique-moi la loi d'Ohm
        </button>
        <button className="suggestion card" onClick={() => { setInput("C'est quoi un mouvement rectiligne ?"); }}>
          <Sparkles size={16} /> C'est quoi un mouvement rectiligne ?
        </button>
      </div>
    </div>
  );
}

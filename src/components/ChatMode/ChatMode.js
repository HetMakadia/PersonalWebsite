import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STARTER_PROMPTS = [
    "What's Het's tech stack?",
    "Tell me about his work experience.",
    "What projects has he built?",
    "How can I get in touch with him?",
];

const CHAT_API_URL = process.env.REACT_APP_CHAT_API_URL;

async function getReply(history) {
    if (!CHAT_API_URL) {
        return "Virgo Mode isn't connected yet — the chat backend hasn't been configured on this deployment.";
    }

    try {
        const res = await fetch(CHAT_API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages: history }),
        });

        if (!res.ok) {
            return "Virgo is having trouble responding right now — please try again in a moment.";
        }

        const data = await res.json();
        return data.reply || "I couldn't come up with a reply to that — could you try rephrasing?";
    } catch {
        return "Couldn't reach Virgo's brain — check your connection and try again.";
    }
}

function TypingDots() {
    return (
        <span className="inline-flex items-center gap-1">
            {[0, 1, 2].map((i) => (
                <motion.span
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-base-content/50"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                />
            ))}
        </span>
    );
}

function Bubble({ role, content }) {
    const isUser = role === "user";
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`flex ${isUser ? "justify-end" : "justify-start"}`}
        >
            <div
                className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed sm:text-base ${
                    isUser
                        ? "rounded-br-sm bg-primary text-base-100"
                        : "rounded-bl-sm border border-base-300 bg-neutral text-base-content"
                }`}
            >
                {content}
            </div>
        </motion.div>
    );
}

function ChatMode() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isThinking, setIsThinking] = useState(false);
    const bottomRef = useRef(null);
    const textareaRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isThinking]);

    const sendMessage = async (text) => {
        const trimmed = text.trim();
        if (!trimmed || isThinking) return;

        const nextHistory = [...messages, { role: "user", content: trimmed }];
        setMessages(nextHistory);
        setInput("");
        setIsThinking(true);

        const reply = await getReply(nextHistory);
        setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
        setIsThinking(false);
        textareaRef.current?.focus();
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage(input);
        }
    };

    return (
        <div className="relative z-10 flex h-full flex-col overflow-hidden pt-20 select-none">
            <div className="mx-auto flex min-h-0 w-full max-w-3xl flex-1 flex-col overflow-hidden px-4">
                <div className="no-scrollbar min-h-0 flex-1 overflow-y-auto py-6">
                    {messages.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="flex h-full flex-col items-center justify-center text-center"
                        >
                            <h1 className="text-3xl font-bold text-base-content sm:text-4xl">Ask Virgo</h1>
                            <p className="mt-3 max-w-md text-base-content/60">
                                Ask anything about Het's background, skills, or projects.
                            </p>
                            <div className="mt-8 grid w-full max-w-lg grid-cols-1 gap-2 sm:grid-cols-2">
                                {STARTER_PROMPTS.map((prompt) => (
                                    <button
                                        key={prompt}
                                        type="button"
                                        onClick={() => sendMessage(prompt)}
                                        className="rounded-xl border border-base-300 bg-neutral px-4 py-3 text-left text-sm text-base-content/70 transition-colors hover:border-base-content/40 hover:text-base-content"
                                    >
                                        {prompt}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <div className="space-y-4">
                            <AnimatePresence initial={false}>
                                {messages.map((m, i) => (
                                    <Bubble key={i} role={m.role} content={m.content} />
                                ))}
                            </AnimatePresence>
                            {isThinking && (
                                <div className="flex justify-start">
                                    <div className="rounded-2xl rounded-bl-sm border border-base-300 bg-neutral px-4 py-3">
                                        <TypingDots />
                                    </div>
                                </div>
                            )}
                            <div ref={bottomRef} />
                        </div>
                    )}
                </div>

                <div className="border-t border-base-300 py-4">
                    <div className="flex items-end gap-2 rounded-2xl border border-base-300 bg-base-100 p-2 focus-within:border-base-content/40">
                        <textarea
                            ref={textareaRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Message Virgo..."
                            rows={1}
                            className="max-h-40 flex-1 resize-none bg-transparent px-2 py-2 text-base text-base-content placeholder:text-base-content/40 focus:outline-none sm:text-sm"
                        />
                        <motion.button
                            type="button"
                            onClick={() => sendMessage(input)}
                            disabled={!input.trim() || isThinking}
                            whileHover={{ scale: input.trim() ? 1.05 : 1 }}
                            whileTap={{ scale: input.trim() ? 0.95 : 1 }}
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-base-100 transition-opacity disabled:opacity-30"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </motion.button>
                    </div>
                    <p className="mt-2 text-center text-xs text-base-content/40">
                        Virgo is AI-generated and can make mistakes. For anything important, reach out to Het directly.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ChatMode;

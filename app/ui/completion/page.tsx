"use client";

import { useState } from "react";
import axios from "axios";
export default function CompletionPage() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [completion, setCompletion] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null); // error message
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    try {
      const response = await axios.post("/api/1_completion", { prompt: input });
      console.dir(response.data);
      console.log(response.data)
      setCompletion(response.data.text);
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while fetching the completion.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {isLoading ? (<div>Loading...</div>) : completion ? (<div className="whitespace-pre-wrap">{completion}</div>) : null} 
      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 w-full max-w-md mx-auto left-0 right-0 p-4 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 shadow-lg"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your prompt"
          className="flex-1 dark:bg-zinc-800 p-2 border border-zinc-300 dark:border-zinc-700 rounded shadow-xl"
        />

        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

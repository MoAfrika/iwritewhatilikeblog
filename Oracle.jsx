import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Loader2, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Oracle() {
  const [oracleTopic, setOracleTopic] = useState("");
  const [oracleResult, setOracleResult] = useState("");
  const [oracleLoading, setOracleLoading] = useState(false);

  const [kasifierText, setKasifierText] = useState("");
  const [kasifierResult, setKasifierResult] = useState("");
  const [kasifierLoading, setKasifierLoading] = useState(false);

  const handleOracleSubmit = async (e) => {
    e.preventDefault();
    if (!oracleTopic.trim()) return;

    setOracleLoading(true);
    setOracleResult("");

    const prompt = `You are MoAfrika Skotch Ntilane, a South African writer, developer, and thinker with a raw, unfiltered, and unapologetic voice. Your style is a mix of "kasi logic," tech insight, and sharp social commentary.

A user wants a blog post idea about the topic: "${oracleTopic}".

Generate a response in two parts:
1. A provocative, on-brand blog post title.
2. A short, edgy, and compelling introductory paragraph (2-3 sentences) that captures your unique style.

Format the response exactly like this, with no extra text:
TITLE: [Your generated title]
PARAGRAPH: [Your generated paragraph]`;

    const response = await base44.integrations.Core.InvokeLLM({ prompt });
    
    const titleMatch = response.match(/TITLE: (.*)/);
    const paragraphMatch = response.match(/PARAGRAPH: ([\s\S]*)/);

    if (titleMatch && paragraphMatch) {
      setOracleResult(`<h3 class="text-2xl font-serif font-bold text-blue-400 mb-4">${titleMatch[1]}</h3><p class="text-gray-300 leading-relaxed">${paragraphMatch[1]}</p>`);
    } else {
      setOracleResult(`<p class="text-gray-300">${response}</p>`);
    }
    
    setOracleLoading(false);
  };

  const handleKasifierSubmit = async (e) => {
    e.preventDefault();
    if (!kasifierText.trim()) return;

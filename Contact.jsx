import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const whatsappMessage = `*New Message from I TYPE, WHAT I LIKE*
\n*Handle:* ${formData.name}
\n*Email:* ${formData.email}
\n*Message:* ${formData.message}`;

    const phoneNumber = '27682337028';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    setStatus("Redirecting to WhatsApp...");
    window.open(whatsappUrl, '_blank');
    
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <div className="min-h-screen py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-[#1a1a1a] border-gray-800/50">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl sm:text-4xl font-serif text-white mb-4">
                Holler At Me
              </CardTitle>
              <p className="text-gray-400 leading-relaxed">
                Got a searing question, a wild collaboration idea, or just want to debate the existential importance of the Oxford comma? The digital void awaits your transmission.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>

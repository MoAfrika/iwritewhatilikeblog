import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, FileText, Home, User, Mail, Sparkles } from "lucide-react";

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: createPageUrl("Home"), icon: Home },
    { name: "About", path: createPageUrl("About"), icon: User },
    { name: "Oracle", path: createPageUrl("Oracle"), icon: Sparkles },
    { name: "Contact", path: createPageUrl("Contact"), icon: Mail },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to={createPageUrl("Home")} 
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-105">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-serif font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent hidden sm:block">
                I TYPE, WHAT I LIKE
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    isActive(item.path)
                      ? "bg-blue-500/10 text-blue-400"
                      : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
                  }`}
 

import React, { useState, useMemo } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import HeroSection from "../components/blog/HeroSection";
import ArticleCard from "../components/blog/ArticleCard";
import ArticleFilters from "../components/blog/ArticleFilters";
import { FileX } from "lucide-react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("all");

  const { data: articles = [], isLoading } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: () => base44.entities.BlogPost.list('-date'),
  });

  const availableDates = useMemo(() => {
    const dates = articles.map(article => article.date);
    return [...new Set(dates)].sort((a, b) => new Date(b) - new Date(a));
  }, [articles]);

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = searchTerm === "" || 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesDate = selectedDate === "all" || article.date === selectedDate;
      
      return matchesSearch && matchesDate;
    });
  }, [articles, searchTerm, selectedDate]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Articles Section */}
      <section id="articles" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Archived Scribbles
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              All my articles, unfiltered and raw
            </p>
          </div>

          {/* Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <ArticleFilters
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedDate={selectedDate}
              onDateChange={setSelectedDate}
              availableDates={availableDates}
            />
          </div>

          {/* Articles Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-[#1a1a1a] rounded-2xl h-96 animate-pulse" />
              ))}
            </div>
          ) : filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <FileX className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                No articles match your filters. The void stares back...
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

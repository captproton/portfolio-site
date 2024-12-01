import React, { useState } from 'react';
import { Menu, X, GitHub, Mail, Linkedin } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Project 1",
      description: "A full-stack web application built with React and Node.js",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Project 2",
      description: "Mobile-first responsive design system",
      tags: ["CSS", "Tailwind", "Design Systems"],
    },
    {
      title: "Project 3",
      description: "AI-powered data analytics dashboard",
      tags: ["Python", "Machine Learning", "Data Viz"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Your portfolio component code here */}
    </div>
  );
};

export default Portfolio;
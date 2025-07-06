import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AEG from '../Components/image/Logo/AEG logo.jpg'
import { Link } from 'react-router-dom';

import { 
  Code2, 
  Zap, 
  Shield, 
  Globe, 
  ChevronRight, 
  Play, 
  Menu, 
  X,
  ArrowRight,
  Check,
  Star,
  Users,
  Clock,
  Database,
  Github,
  Twitter,
  Linkedin,
  LayoutDashboard,
  TerminalSquare,
  Wifi,
  Server,
  Cpu,
  BookOpen,
  HelpCircle,
  Mail,
  ArrowUpRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Settings,
  Lock,
  Activity,
  Code,
  Cloud,
  Rocket
} from 'lucide-react';
import Footer from '../Components/Footer';
import NewFooter from './NewFooter';

const ApiDevelopmentPage = () => {
  const [activeTab, setActiveTab] = useState('rest');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDocsExpanded, setIsDocsExpanded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Development",
      description: "Build and deploy APIs in minutes, not hours. Our intuitive tools accelerate your development workflow.",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Built-in authentication, authorization, and encryption. Your APIs are secure by default.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Infrastructure",
      description: "Deploy across 50+ regions worldwide with automatic scaling and load balancing.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Smart Caching",
      description: "Intelligent caching layers that reduce response times and server load automatically.",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const stats = [
    { number: "99.99%", label: "Uptime SLA", icon: <Activity className="w-6 h-6" /> },
    { number: "50M+", label: "API Calls Daily", icon: <TerminalSquare className="w-6 h-6" /> },
    { number: "150+", label: "Countries Served", icon: <Globe className="w-6 h-6" /> },
    { number: "<100ms", label: "Average Response", icon: <Clock className="w-6 h-6" /> }
  ];

  const codeExamples = {
    rest: {
      title: "REST APIs",
      icon: <LayoutDashboard className="w-5 h-5" />,
      code: `// Express.js REST API
const express = require('express');
const app = express();

// GET endpoint
app.get('/api/v1/users', async (req, res) => {
  try {
    const users = await User.findAll({
      limit: req.query.limit || 10,
      offset: req.query.offset || 0
    });
    
    res.json({
      success: true,
      data: users,
      total: users.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// POST endpoint
app.post('/api/v1/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

app.listen(3000);`
    },
    graphql: {
      title: "GraphQL APIs",
      icon: <Wifi className="w-5 h-5" />,
      code: `// GraphQL Schema & Resolvers
const { gql } = require('apollo-server-express');

const typeDefs = gql\`
  type User {
    id: ID!
    name: String!
    email: String!
    createdAt: String!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
  }

  type Query {
    users(limit: Int, offset: Int): [User!]!
    user(id: ID!): User
    posts: [Post!]!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: ID!, input: UpdateUserInput!): User!
    deleteUser(id: ID!): Boolean!
  }

  input CreateUserInput {
    name: String!
    email: String!
  }
\`;

const resolvers = {
  Query: {
    users: async (_, { limit = 10, offset = 0 }) => {
      return await User.findAll({ limit, offset });
    },
    user: async (_, { id }) => {
      return await User.findByPk(id);
    }
  },
  
  Mutation: {
    createUser: async (_, { input }) => {
      return await User.create(input);
    }
  }
};`
    },
    websocket: {
      title: "WebSocket APIs",
      icon: <Server className="w-5 h-5" />,
      code: `// Real-time WebSocket Server
const WebSocket = require('ws');
const jwt = require('jsonwebtoken');

const wss = new WebSocket.Server({
  port: 8080,
  verifyClient: (info) => {
    const token = info.req.headers.authorization;
    try {
      jwt.verify(token, process.env.JWT_SECRET);
      return true;
    } catch (err) {
      return false;
    }
  }
});

// Connection handling
wss.on('connection', (ws, req) => {
  console.log('New client connected');
  
  // Send welcome message
  ws.send(JSON.stringify({
    type: 'welcome',
    message: 'Connected to real-time API'
  }));

  // Handle incoming messages
  ws.on('message', (data) => {
    try {
      const message = JSON.parse(data);
      
      // Broadcast to all connected clients
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({
            type: 'broadcast',
            data: message,
            timestamp: new Date().toISOString()
          }));
        }
      });
    } catch (error) {
      ws.send(JSON.stringify({
        type: 'error',
        message: 'Invalid message format'
      }));
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});`
    }
  };

  const pricingPlans = [
    {
      name: "Starter",
      price: "$0",
      description: "Perfect for personal projects and experimentation",
      features: [
        "Up to 10 API endpoints",
        "100K requests/month",
        "Basic analytics",
        "Community support"
      ],
      color: "from-blue-100 to-blue-50",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "Pro",
      price: "$49",
      description: "For growing startups and businesses",
      features: [
        "Unlimited endpoints",
        "1M requests/month",
        "Advanced analytics",
        "Priority support",
        "Custom domains"
      ],
      color: "from-purple-100 to-purple-50",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited everything",
        "Dedicated infrastructure",
        "SLA guarantees",
        "24/7 premium support",
        "Custom integrations",
        "Security audits"
      ],
      color: "from-indigo-100 to-indigo-50",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 15, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Header */}
      {/* <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ApiForge</span>
            </motion.div>

            {/* Desktop Menu */}
            {/* <nav className="hidden lg:flex items-center space-x-8">
              <motion.a 
                href="#features" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                whileHover={{ y: -2 }}
              >
                Features
              </motion.a>
              <motion.a 
                href="#docs" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                whileHover={{ y: -2 }}
              >
                Documentation
              </motion.a>
              <motion.a 
                href="#pricing" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                whileHover={{ y: -2 }}
              >
                Pricing
              </motion.a>
              <motion.a 
                href="#support" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                whileHover={{ y: -2 }}
              >
                Support
              </motion.a>
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            {/* <button 
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>  */}

          {/* Mobile Menu */}
          {/* {mobileMenuOpen && (
            <motion.div 
              className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col py-4">
                <a href="#features" className="px-6 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50">Features</a>
                <a href="#docs" className="px-6 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50">Documentation</a>
                <a href="#pricing" className="px-6 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50">Pricing</a>
                <a href="#support" className="px-6 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50">Support</a>
                <div className="px-6 py-3">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all">
                    Get Started
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </div>
      // </header> */} 
       <header className="  text-white bg-white px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="flex items-center space-x-3">
            
             <Link to='/software'> <span className="text-xl font-bold"><img src={AEG} alt="" /></span></Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 h-36 sm:pt-40 sm:pb-28 lg:pt-20 lg:pb-72">
    

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Build APIs that
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-2">
                Actually Scale
              </span>
            </motion.h1>
            
            <motion.p
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              The modern API development platform that helps you build, deploy, and manage 
              high-performance APIs with enterprise-grade security and global infrastructure.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                Start Building Free
              </motion.button>
              
              <motion.button 
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Live Demo
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
        
        {/* Animated floating elements */}
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div 
          className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-amber-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </section>

      {/* Stats Section */}
      {/* <section className="py-12 sm:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 backdrop-blur-sm bg-opacity-80">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm hover:shadow-md transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20 lg:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From development to deployment, we provide all the tools and infrastructure 
              you need to build world-class APIs.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${feature.color} rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-100 rounded-lg flex items-center justify-center text-gray-900 mb-4 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Support for every API type
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you're building REST, GraphQL, or real-time WebSocket APIs, 
              we have you covered with modern tooling and best practices.
            </p>
          </motion.div>

          <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
            <div className="flex flex-wrap border-b border-gray-700">
              {Object.entries(codeExamples).map(([key, example]) => (
                <motion.button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 sm:px-6 py-3 sm:py-4 font-medium transition-all duration-200 flex items-center gap-2 ${
                    activeTab === key
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {example.icon}
                  {example.title}
                </motion.button>
              ))}
            </div>

            <div className="p-6 sm:p-8">
              <pre className="text-green-400 text-xs sm:text-sm overflow-x-auto bg-gray-900/50 p-4 rounded-lg font-mono">
                <code>{codeExamples[activeTab].code}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section id="docs" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Documentation
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Get started quickly with our detailed guides, tutorials, and API references.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Getting Started</h3>
              <p className="text-gray-600 mb-4">Step-by-step guides to help you set up your first API project</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                Read guide <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white mb-4">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">API Reference</h3>
              <p className="text-gray-600 mb-4">Comprehensive documentation for all endpoints and parameters</p>
              <a href="#" className="text-purple-600 hover:text-purple-800 flex items-center gap-1">
                Explore reference <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center text-white mb-4">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tutorials</h3>
              <p className="text-gray-600 mb-4">Practical examples and real-world use cases to learn from</p>
              <a href="#" className="text-amber-600 hover:text-amber-800 flex items-center gap-1">
                Browse tutorials <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="mt-12 bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <button 
              className="w-full flex justify-between items-center text-left"
              onClick={() => setIsDocsExpanded(!isDocsExpanded)}
            >
              <h3 className="text-xl font-semibold text-gray-900">Advanced Topics</h3>
              {isDocsExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            
            {isDocsExpanded && (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <a href="#" className="text-gray-600 hover:text-gray-900 p-3 hover:bg-gray-100 rounded-lg flex items-center gap-2">
                  <Settings className="w-4 h-4" /> Custom Middleware
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 p-3 hover:bg-gray-100 rounded-lg flex items-center gap-2">
                  <Lock className="w-4 h-4" /> Authentication
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 p-3 hover:bg-gray-100 rounded-lg flex items-center gap-2">
                  <Activity className="w-4 h-4" /> Rate Limiting
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 p-3 hover:bg-gray-100 rounded-lg flex items-center gap-2">
                  <Cloud className="w-4 h-4" /> Deployment
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 p-3 hover:bg-gray-100 rounded-lg flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> Performance
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 p-3 hover:bg-gray-100 rounded-lg flex items-center gap-2">
                  <Server className="w-4 h-4" /> WebSockets
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 p-3 hover:bg-gray-100 rounded-lg flex items-center gap-2">
                  <Database className="w-4 h-4" /> Database Integration
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 p-3 hover:bg-gray-100 rounded-lg flex items-center gap-2">
                  <Shield className="w-4 h-4" /> Security
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your needs. No hidden fees.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div 
                key={index}
                className={`bg-gradient-to-b ${plan.color} rounded-2xl p-8 shadow-lg relative overflow-hidden`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-4">{plan.price}</div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full text-white py-3 rounded-lg font-medium transition-all ${plan.buttonColor}`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 lg:p-16 text-center text-white overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 to-purple-700/20"></div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Ready to build the future?
              </h2>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90">
                Join over 10,000 developers who are already building amazing APIs with ApiForge. 
                Start your free trial today - no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                </motion.button>
                <motion.button 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Demo
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer id="support" className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ApiForge</span>
              </div>
              <p className="text-gray-400 mb-6">
                The modern platform for building scalable APIs with enterprise-grade security.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Developers</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ApiForge. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
      <NewFooter/>
    </div>
  );
};

export default ApiDevelopmentPage;
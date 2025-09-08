"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { 
  Palette, 
  Zap, 
  Shield, 
  Rocket, 
  Star, 
  Heart, 
  Eye, 
  EyeOff, 
  Sun, 
  Moon,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Users,
  BarChart3,
  Settings,
  Bell,
  Search,
  Plus,
  Download,
  Share2,
  Bookmark,
  Filter,
  Grid,
  List
} from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [progress, setProgress] = useState(0);
  const [sliderValue, setSliderValue] = useState([50]);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [selectedOption, setSelectedOption] = useState("option1");
  const { toast } = useToast();

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = () => {
    toast({
      title: "Successfully subscribed!",
      description: "You'll receive our newsletter with the latest updates.",
    });
    setEmail("");
  };

  const handleSendMessage = () => {
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setMessage("");
  };

  if (!mounted) return null;

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-background via-background to-primary/5 dark:from-background dark:via-background dark:to-primary/10">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative w-10 h-10">
                <img
                  src="/logo.svg"
                  alt="Z.ai Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Z.ai Studio
              </h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Showcase</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setDarkMode(!darkMode)}
                    >
                      {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Toggle {darkMode ? 'Light' : 'Dark'} Mode</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <Button variant="outline" size="sm">Sign In</Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5 dark:bg-grid-black/5 bg-[length:50px_50px]" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center space-y-8">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                World-Class UI/UX Components
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent leading-tight">
                Build Beautiful
                <br />
                <span className="text-foreground">Experiences</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover the power of premium UI components crafted with precision. 
                Create stunning interfaces that delight users and drive engagement.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="px-8 py-3 text-lg">
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Building
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>10k+ Happy Developers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>Enterprise Grade</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Premium Components</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our comprehensive collection of beautifully designed components
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Component Showcase Cards */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Palette className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary">New</Badge>
                  </div>
                  <CardTitle className="text-xl">Design System</CardTitle>
                  <CardDescription>
                    Comprehensive design tokens and consistent styling across all components
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <div className="w-3 h-3 bg-secondary rounded-full"></div>
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                      <div className="w-3 h-3 bg-destructive rounded-full"></div>
                    </div>
                    <Progress value={progress} className="w-full" />
                    <Button variant="outline" size="sm" className="w-full">
                      Explore Design System
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary">Fast</Badge>
                  </div>
                  <CardTitle className="text-xl">Performance</CardTitle>
                  <CardDescription>
                    Optimized components that load instantly and respond immediately
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span>Bundle Size</span>
                      <span className="font-mono">12.4 KB</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Load Time</span>
                      <span className="font-mono">&lt; 100ms</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      View Benchmarks
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary">Secure</Badge>
                  </div>
                  <CardTitle className="text-xl">Accessibility</CardTitle>
                  <CardDescription>
                    WCAG 2.1 compliant components with proper ARIA labels and keyboard navigation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="a11y-1" />
                      <Label htmlFor="a11y-1" className="text-sm">Screen Reader Support</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="a11y-2" />
                      <Label htmlFor="a11y-2" className="text-sm">Keyboard Navigation</Label>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Accessibility Guide
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Interactive Demo</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Try out our components in real-time. Experience the smooth interactions and beautiful designs.
              </p>
            </div>

            <Tabs defaultValue="forms" className="w-full">
              <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
                <TabsTrigger value="forms">Forms</TabsTrigger>
                <TabsTrigger value="controls">Controls</TabsTrigger>
                <TabsTrigger value="navigation">Navigation</TabsTrigger>
                <TabsTrigger value="feedback">Feedback</TabsTrigger>
              </TabsList>
              
              <TabsContent value="forms" className="mt-12">
                <Card className="max-w-2xl mx-auto">
                  <CardHeader>
                    <CardTitle>Form Components</CardTitle>
                    <CardDescription>
                      Beautiful and accessible form elements with validation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Enter your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Enter your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General</SelectItem>
                          <SelectItem value="support">Support</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Button onClick={handleSendMessage} className="w-full">
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="controls" className="mt-12">
                <Card className="max-w-2xl mx-auto">
                  <CardHeader>
                    <CardTitle>Control Components</CardTitle>
                    <CardDescription>
                      Interactive controls with smooth animations
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="notifications">Enable Notifications</Label>
                        <Switch
                          id="notifications"
                          checked={notifications}
                          onCheckedChange={setNotifications}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Slider Value: {sliderValue[0]}</Label>
                        <Slider
                          value={sliderValue}
                          onValueChange={setSliderValue}
                          max={100}
                          step={1}
                          className="w-full"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Options</Label>
                        <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option1" id="option1" />
                            <Label htmlFor="option1">Option 1</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option2" id="option2" />
                            <Label htmlFor="option2">Option 2</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option3" id="option3" />
                            <Label htmlFor="option3">Option 3</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="navigation" className="mt-12">
                <Card className="max-w-2xl mx-auto">
                  <CardHeader>
                    <CardTitle>Navigation Components</CardTitle>
                    <CardDescription>
                      Intuitive navigation patterns for better UX
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>What makes our components special?</AccordionTrigger>
                        <AccordionContent>
                          Our components are built with accessibility, performance, and design consistency in mind. 
                          They follow the latest design trends and best practices.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>How customizable are the components?</AccordionTrigger>
                        <AccordionContent>
                          Every component is highly customizable with CSS variables, theme support, 
                          and extensive props for maximum flexibility.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    
                    <div className="flex gap-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline">Open Dialog</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Dialog Example</DialogTitle>
                            <DialogDescription>
                              This is a sample dialog component with smooth animations.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="py-4">
                            <p>Dialog content goes here. You can put any content inside.</p>
                          </div>
                        </DialogContent>
                      </Dialog>
                      
                      <Drawer>
                        <DrawerTrigger asChild>
                          <Button variant="outline">Open Drawer</Button>
                        </DrawerTrigger>
                        <DrawerContent>
                          <DrawerHeader>
                            <DrawerTitle>Drawer Example</DrawerTitle>
                            <DrawerDescription>
                              This is a sample drawer component, perfect for mobile navigation.
                            </DrawerDescription>
                          </DrawerHeader>
                          <div className="p-4">
                            <p>Drawer content goes here.</p>
                          </div>
                        </DrawerContent>
                      </Drawer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="feedback" className="mt-12">
                <Card className="max-w-2xl mx-auto">
                  <CardHeader>
                    <CardTitle>Feedback Components</CardTitle>
                    <CardDescription>
                      Clear and informative feedback for user actions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Alert>
                      <AlertDescription>
                        This is an informational alert component. Perfect for showing important messages to users.
                      </AlertDescription>
                    </Alert>
                    
                    <div className="flex flex-wrap gap-2">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                      <Badge variant="outline">Outline</Badge>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button onClick={() => toast({ title: "Success!", description: "Action completed successfully." })}>
                        Show Toast
                      </Button>
                      
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Button variant="outline">Hover Me</Button>
                        </HoverCardTrigger>
                        <HoverCardContent>
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold">Hover Card</h4>
                            <p className="text-sm text-muted-foreground">
                              This content appears when you hover over the trigger.
                            </p>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of developers building beautiful applications with our premium components.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="relative">
                <Input 
                  placeholder="Enter your email" 
                  className="w-full sm:w-80 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button size="lg" onClick={handleSubscribe} className="bg-white text-primary hover:bg-white/90">
                <Mail className="w-5 h-5 mr-2" />
                Subscribe Now
              </Button>
            </div>
            
            <p className="text-sm mt-4 opacity-75">
              No credit card required. 14-day free trial.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-muted/30 py-12 px-4 border-t">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="relative w-8 h-8">
                    <img
                      src="/logo.svg"
                      alt="Z.ai Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-bold text-lg">Z.ai Studio</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Building beautiful UI components for the modern web.
                </p>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Product</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary">Components</a></li>
                  <li><a href="#" className="hover:text-primary">Templates</a></li>
                  <li><a href="#" className="hover:text-primary">Documentation</a></li>
                  <li><a href="#" className="hover:text-primary">Pricing</a></li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Resources</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary">Blog</a></li>
                  <li><a href="#" className="hover:text-primary">Tutorials</a></li>
                  <li><a href="#" className="hover:text-primary">Community</a></li>
                  <li><a href="#" className="hover:text-primary">Support</a></li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Company</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary">About</a></li>
                  <li><a href="#" className="hover:text-primary">Careers</a></li>
                  <li><a href="#" className="hover:text-primary">Contact</a></li>
                  <li><a href="#" className="hover:text-primary">Privacy</a></li>
                </ul>
              </div>
            </div>
            
            <Separator className="my-8" />
            
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
              <p>© 2024 Z.ai Studio. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-primary">Terms</a>
                <a href="#" className="hover:text-primary">Privacy</a>
                <a href="#" className="hover:text-primary">Cookies</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Helper component for sparkles icon
function Sparkles({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

// Helper component for play icon
function Play({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
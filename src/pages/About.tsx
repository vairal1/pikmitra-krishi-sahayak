import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Target, Eye, Heart, Users, Award, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Plant Disease Detection",
      description: "AI-powered image recognition to identify crop diseases instantly"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Market Intelligence",
      description: "Real-time market prices and trend analysis for better decision making"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Weather Monitoring",
      description: "Accurate weather forecasts and alerts to protect your crops"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Support",
      description: "Connect with fellow farmers and agricultural experts"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Farmers Helped" },
    { number: "25+", label: "Crop Diseases Detected" },
    { number: "15", label: "States Covered" },
    { number: "99%", label: "Accuracy Rate" }
  ];

  const team = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Agricultural Expert",
      experience: "15+ years in crop science"
    },
    {
      name: "Priya Sharma",
      role: "AI/ML Engineer", 
      experience: "Expert in computer vision"
    },
    {
      name: "Amit Patel",
      role: "Product Manager",
      experience: "10+ years in AgTech"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Leaf className="h-12 w-12 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Pikmitra</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Empowering farmers with modern technology for better crop management, 
          higher yields, and sustainable farming practices across India.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              To revolutionize Indian agriculture by providing farmers with accessible, 
              technology-driven solutions that increase productivity, reduce losses, 
              and ensure sustainable farming practices for future generations.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              To become India's leading agricultural technology platform, 
              connecting millions of farmers with smart tools, expert knowledge, 
              and market opportunities to build a prosperous farming community.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Key Features */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-center justify-center">
            <Heart className="h-5 w-5 text-primary" />
            Our Core Values
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Continuously developing cutting-edge solutions for modern farming challenges
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Accessibility</h3>
              <p className="text-sm text-muted-foreground">
                Making advanced agricultural technology available to every farmer
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Sustainability</h3>
              <p className="text-sm text-muted-foreground">
                Promoting eco-friendly practices for long-term agricultural success
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Team Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">Our Expert Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <Badge variant="secondary" className="mb-2">{member.role}</Badge>
                <p className="text-sm text-muted-foreground">{member.experience}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Awards & Recognition */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-center justify-center">
            <Award className="h-5 w-5 text-primary" />
            Awards & Recognition
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Best AgTech Innovation 2023</h3>
              <p className="text-sm text-muted-foreground">National Agriculture Technology Awards</p>
            </div>
            <div>
              <h3 className="font-semibold">Digital India Excellence Award</h3>
              <p className="text-sm text-muted-foreground">Ministry of Electronics & IT</p>
            </div>
            <div>
              <h3 className="font-semibold">Farmer's Choice Award</h3>
              <p className="text-sm text-muted-foreground">Indian Agricultural Research Institute</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
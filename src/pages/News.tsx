import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ExternalLink } from 'lucide-react';

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "New Government Subsidy for Organic Farming Announced",
      description: "The Ministry of Agriculture has announced a new subsidy scheme providing up to ₹50,000 per hectare for farmers transitioning to organic farming methods.",
      date: "2024-01-15",
      image: "🌱",
      category: "Government Policy"
    },
    {
      id: 2,
      title: "Weather Alert: Heavy Rainfall Expected This Week",
      description: "Meteorological department warns of heavy rainfall in Maharashtra. Farmers advised to take precautionary measures for standing crops.",
      date: "2024-01-14",
      image: "🌧️",
      category: "Weather Alert"
    },
    {
      id: 3,
      title: "Tomato Prices Surge Due to Unseasonal Rain",
      description: "Wholesale tomato prices have increased by 40% this week due to crop damage from unexpected rainfall in major growing regions.",
      date: "2024-01-13",
      image: "🍅",
      category: "Market Update"
    },
    {
      id: 4,
      title: "Digital Agriculture: New App Helps Farmers Track Crop Health",
      description: "A revolutionary AI-powered application now available to help farmers monitor crop diseases and get real-time recommendations.",
      date: "2024-01-12",
      image: "📱",
      category: "Technology"
    },
    {
      id: 5,
      title: "Success Story: Farmer Doubles Income with Smart Irrigation",
      description: "Meet Ramesh Patil from Pune who increased his farm productivity by 200% using modern drip irrigation techniques.",
      date: "2024-01-11",
      image: "💧",
      category: "Success Story"
    },
    {
      id: 6,
      title: "Upcoming Agriculture Fair in Mumbai",
      description: "The annual Maharashtra Agriculture Fair will showcase latest farming equipment, seeds, and connect farmers with buyers.",
      date: "2024-01-10",
      image: "🏟️",
      category: "Events"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Agriculture News</h1>
        <p className="text-muted-foreground">Stay updated with latest agricultural news and updates</p>
      </div>

      <div className="grid gap-6">
        {newsArticles.map((article) => (
          <Card key={article.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{article.image}</span>
                    <span className="text-sm bg-accent text-accent-foreground px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(article.date).toLocaleDateString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {article.description}
              </p>
              <Button variant="outline" className="w-full sm:w-auto">
                <ExternalLink className="h-4 w-4 mr-2" />
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default News;
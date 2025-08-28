import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar, Users, IndianRupee } from 'lucide-react';

const Schemes = () => {
  const schemes = [
    {
      id: 1,
      name: "PM-KISAN Samman Nidhi",
      description: "Direct income support of ₹6,000 per year to all landholding farmer families in three equal installments.",
      eligibility: "All landholding farmers",
      amount: "₹6,000/year",
      deadline: "Ongoing",
      status: "Active",
      category: "Income Support"
    },
    {
      id: 2,
      name: "Pradhan Mantri Fasal Bima Yojana",
      description: "Crop insurance scheme providing financial support to farmers suffering crop loss/damage arising out of unforeseen events.",
      eligibility: "All farmers growing notified crops",
      amount: "Up to ₹2,00,000",
      deadline: "Before sowing season",
      status: "Active",
      category: "Insurance"
    },
    {
      id: 3,
      name: "Soil Health Card Scheme",
      description: "Provides soil health cards to farmers which carry crop-wise recommendations of nutrients and fertilizers.",
      eligibility: "All farmers",
      amount: "Free service",
      deadline: "Ongoing",
      status: "Active",
      category: "Advisory"
    },
    {
      id: 4,
      name: "Paramparagat Krishi Vikas Yojana",
      description: "Promotes organic farming and provides financial assistance for certification and premium on organic produce.",
      eligibility: "Farmers willing to adopt organic farming",
      amount: "₹50,000/hectare",
      deadline: "31st March 2024",
      status: "Active",
      category: "Organic Farming"
    },
    {
      id: 5,
      name: "Kisan Credit Card (KCC)",
      description: "Provides adequate and timely credit support for comprehensive credit requirements of farmers.",
      eligibility: "All farmers including tenant farmers",
      amount: "Based on farming needs",
      deadline: "Ongoing",
      status: "Active",
      category: "Credit"
    },
    {
      id: 6,
      name: "National Agriculture Market (e-NAM)",
      description: "Online trading platform for agricultural commodities to ensure better price discovery and transparent auctions.",
      eligibility: "All farmers and traders",
      amount: "Market-based pricing",
      deadline: "Ongoing",
      status: "Active",
      category: "Marketing"
    },
    {
      id: 7,
      name: "Micro Irrigation Fund",
      description: "Supports micro irrigation systems to achieve water use efficiency and increase crop productivity.",
      eligibility: "Farmers adopting micro irrigation",
      amount: "Up to ₹4,00,000",
      deadline: "30th June 2024",
      status: "Active",
      category: "Irrigation"
    },
    {
      id: 8,
      name: "Agriculture Infrastructure Fund",
      description: "Financing facility for post-harvest management infrastructure and community farming assets.",
      eligibility: "Farmers, FPOs, Cooperatives",
      amount: "Up to ₹2 crore",
      deadline: "Ongoing",
      status: "Active",
      category: "Infrastructure"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-primary text-primary-foreground';
      case 'closed':
        return 'bg-destructive text-destructive-foreground';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Government Schemes</h1>
        <p className="text-muted-foreground">Explore various government schemes and subsidies available for farmers</p>
      </div>

      <div className="grid gap-6">
        {schemes.map((scheme) => (
          <Card key={scheme.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getStatusColor(scheme.status)}>
                      {scheme.status}
                    </Badge>
                    <Badge variant="outline">
                      {scheme.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{scheme.name}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {scheme.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Eligibility</p>
                    <p className="text-sm text-muted-foreground">{scheme.eligibility}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <IndianRupee className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Amount</p>
                    <p className="text-sm text-muted-foreground">{scheme.amount}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Deadline</p>
                    <p className="text-sm text-muted-foreground">{scheme.deadline}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 pt-4">
                <Button className="flex-1 sm:flex-none">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Apply Now
                </Button>
                <Button variant="outline" className="flex-1 sm:flex-none">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Schemes;
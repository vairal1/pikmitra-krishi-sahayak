import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  TrendingDown, 
  Table as TableIcon,
  BarChart3,
  IndianRupee,
  Calendar,
  MapPin
} from 'lucide-react';

const MarketPrices = () => {
  const [selectedView, setSelectedView] = useState('table');

  const marketData = [
    { 
      id: 1, 
      vegetable: 'Tomato', 
      price: 25, 
      unit: 'kg', 
      change: 15, 
      trend: 'up',
      emoji: '🍅',
      market: 'APMC Mumbai',
      quality: 'Grade A'
    },
    { 
      id: 2, 
      vegetable: 'Onion', 
      price: 18, 
      unit: 'kg', 
      change: -8, 
      trend: 'down',
      emoji: '🧅',
      market: 'APMC Pune',
      quality: 'Grade A'
    },
    { 
      id: 3, 
      vegetable: 'Potato', 
      price: 22, 
      unit: 'kg', 
      change: 5, 
      trend: 'up',
      emoji: '🥔',
      market: 'APMC Nashik',
      quality: 'Grade B'
    },
    { 
      id: 4, 
      vegetable: 'Cauliflower', 
      price: 30, 
      unit: 'kg', 
      change: -12, 
      trend: 'down',
      emoji: '🥬',
      market: 'APMC Mumbai',
      quality: 'Grade A'
    },
    { 
      id: 5, 
      vegetable: 'Cabbage', 
      price: 15, 
      unit: 'kg', 
      change: 20, 
      trend: 'up',
      emoji: '🥬',
      market: 'APMC Pune',
      quality: 'Grade A'
    },
    { 
      id: 6, 
      vegetable: 'Carrot', 
      price: 35, 
      unit: 'kg', 
      change: 3, 
      trend: 'up',
      emoji: '🥕',
      market: 'APMC Nashik',
      quality: 'Grade A'
    },
    { 
      id: 7, 
      vegetable: 'Green Chili', 
      price: 40, 
      unit: 'kg', 
      change: -5, 
      trend: 'down',
      emoji: '🌶️',
      market: 'APMC Mumbai',
      quality: 'Grade B'
    },
    { 
      id: 8, 
      vegetable: 'Brinjal', 
      price: 28, 
      unit: 'kg', 
      change: 18, 
      trend: 'up',
      emoji: '🍆',
      market: 'APMC Pune',
      quality: 'Grade A'
    }
  ];

  const getTrendIcon = (trend: string, change: number) => {
    if (trend === 'up') {
      return <TrendingUp className="h-4 w-4 text-green-600" />;
    }
    return <TrendingDown className="h-4 w-4 text-red-600" />;
  };

  const getTrendBadge = (trend: string, change: number) => {
    const isPositive = change > 0;
    return (
      <Badge 
        variant={isPositive ? 'default' : 'destructive'}
        className={`flex items-center gap-1 ${isPositive ? 'bg-green-100 text-green-800 hover:bg-green-100' : ''}`}
      >
        {getTrendIcon(trend, change)}
        {Math.abs(change)}%
      </Badge>
    );
  };

  const highestPrice = marketData.reduce((max, item) => item.price > max.price ? item : max);
  const lowestPrice = marketData.reduce((min, item) => item.price < min.price ? item : min);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            📈 Market Prices
          </h1>
          <p className="text-lg text-muted-foreground">
            Today's vegetable prices across Maharashtra markets
          </p>
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleString('en-IN')}
          </p>
        </div>

        {/* Price Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-card border-l-4 border-l-green-500">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-green-700">
                <TrendingUp className="h-5 w-5 mr-2" />
                Highest Price Today
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{highestPrice.emoji}</span>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{highestPrice.vegetable}</h3>
                    <p className="text-sm text-muted-foreground">{highestPrice.market}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-foreground">₹{highestPrice.price}/{highestPrice.unit}</p>
                  {getTrendBadge(highestPrice.trend, highestPrice.change)}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-l-4 border-l-blue-500">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-blue-700">
                <TrendingDown className="h-5 w-5 mr-2" />
                Lowest Price Today
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{lowestPrice.emoji}</span>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{lowestPrice.vegetable}</h3>
                    <p className="text-sm text-muted-foreground">{lowestPrice.market}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-foreground">₹{lowestPrice.price}/{lowestPrice.unit}</p>
                  {getTrendBadge(lowestPrice.trend, lowestPrice.change)}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* View Toggle */}
        <Tabs value={selectedView} onValueChange={setSelectedView} className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-6">
            <TabsTrigger value="table" className="flex items-center">
              <TableIcon className="h-4 w-4 mr-2" />
              Table View
            </TabsTrigger>
            <TabsTrigger value="chart" className="flex items-center">
              <BarChart3 className="h-4 w-4 mr-2" />
              Chart View
            </TabsTrigger>
          </TabsList>

          <TabsContent value="table">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <IndianRupee className="h-5 w-5 mr-2 text-primary" />
                  Today's Vegetable Prices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-2 font-semibold text-foreground">Vegetable</th>
                        <th className="text-left py-3 px-2 font-semibold text-foreground">Market</th>
                        <th className="text-left py-3 px-2 font-semibold text-foreground">Quality</th>
                        <th className="text-right py-3 px-2 font-semibold text-foreground">Price</th>
                        <th className="text-right py-3 px-2 font-semibold text-foreground">Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marketData.map((item) => (
                        <tr key={item.id} className="border-b border-border hover:bg-accent/30 transition-smooth">
                          <td className="py-4 px-2">
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{item.emoji}</span>
                              <span className="font-medium text-foreground">{item.vegetable}</span>
                            </div>
                          </td>
                          <td className="py-4 px-2">
                            <div className="flex items-center text-muted-foreground">
                              <MapPin className="h-4 w-4 mr-1" />
                              {item.market}
                            </div>
                          </td>
                          <td className="py-4 px-2">
                            <Badge variant={item.quality === 'Grade A' ? 'default' : 'secondary'}>
                              {item.quality}
                            </Badge>
                          </td>
                          <td className="py-4 px-2 text-right">
                            <span className="text-lg font-bold text-foreground">
                              ₹{item.price}/{item.unit}
                            </span>
                          </td>
                          <td className="py-4 px-2 text-right">
                            {getTrendBadge(item.trend, item.change)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chart">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                  Weekly Price Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96 flex items-center justify-center border-2 border-dashed border-border rounded-lg bg-accent/30">
                  <div className="text-center text-muted-foreground">
                    <BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium mb-2">Price Trend Chart</p>
                    <p className="text-sm">Interactive chart showing weekly price movements</p>
                    <p className="text-sm">for all vegetables across different markets</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Market Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                Market Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Saturday:</span>
                  <span className="font-medium">6:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday:</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                Major Markets
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div>APMC Mumbai</div>
                <div>APMC Pune</div>
                <div>APMC Nashik</div>
                <div>APMC Aurangabad</div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <IndianRupee className="h-5 w-5 mr-2 text-primary" />
                Price Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span>Good buying opportunity</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <span>Moderate prices</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span>High prices</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MarketPrices;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CloudRain, 
  Thermometer, 
  Droplets, 
  TrendingUp, 
  Camera, 
  Newspaper,
  Calendar,
  Coins,
  AlertTriangle,
  FileText
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  const currentDate = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Welcome to Pikmitra! 🌱
        </h1>
        <p className="text-lg text-muted-foreground">Today is {currentDate}</p>
      </div>

      {/* Quick Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Weather Card */}
        <Card className="bg-gradient-card shadow-card hover:shadow-md transition-smooth cursor-pointer">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <CloudRain className="h-5 w-5 mr-2 text-primary" />
              Weather Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Thermometer className="h-4 w-4 mr-1 text-orange-500" />
                  <span className="text-sm">Temperature</span>
                </div>
                <span className="font-semibold">28°C</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Droplets className="h-4 w-4 mr-1 text-blue-500" />
                  <span className="text-sm">Humidity</span>
                </div>
                <span className="font-semibold">65%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CloudRain className="h-4 w-4 mr-1 text-gray-500" />
                  <span className="text-sm">Rain Chance</span>
                </div>
                <span className="font-semibold">30%</span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4" asChild>
              <NavLink to="/weather">View Details</NavLink>
            </Button>
          </CardContent>
        </Card>

        {/* Market Price Card */}
        <Card className="bg-gradient-card shadow-card hover:shadow-md transition-smooth cursor-pointer">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <TrendingUp className="h-5 w-5 mr-2 text-primary" />
              Market Highlights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Today's Best Price</div>
                <div className="text-xl font-bold text-primary">🍅 Tomato</div>
                <div className="text-lg font-semibold">₹25/kg</div>
                <Badge variant="secondary" className="text-xs">+15% from yesterday</Badge>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4" asChild>
              <NavLink to="/market-prices">View All Prices</NavLink>
            </Button>
          </CardContent>
        </Card>

        {/* Plant Disease Detection Card */}
        <Card className="bg-gradient-card shadow-card hover:shadow-md transition-smooth cursor-pointer">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <Camera className="h-5 w-5 mr-2 text-primary" />
              Disease Detection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-3">
              <div className="text-sm text-muted-foreground">
                Upload a leaf photo to detect diseases instantly
              </div>
              <div className="text-4xl">📸</div>
            </div>
            <Button size="sm" className="w-full mt-4" asChild>
              <NavLink to="/plant-info">Upload Photo</NavLink>
            </Button>
          </CardContent>
        </Card>

        {/* Latest News Card */}
        <Card className="bg-gradient-card shadow-card hover:shadow-md transition-smooth cursor-pointer">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <Newspaper className="h-5 w-5 mr-2 text-primary" />
              Latest News
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-sm font-medium">New crop insurance scheme launched</div>
              <div className="text-xs text-muted-foreground">Government announces support for...</div>
              <div className="text-sm font-medium">Weather alert for Maharashtra</div>
              <div className="text-xs text-muted-foreground">Heavy rainfall expected...</div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4" asChild>
              <NavLink to="/news">Read More</NavLink>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Price Trends Chart */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-primary" />
              Weekly Price Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-center justify-center border-2 border-dashed border-border rounded-lg bg-accent/50">
              <div className="text-center text-muted-foreground">
                <Coins className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>Price trend chart will be displayed here</p>
                <p className="text-sm">Showing tomato, onion, potato prices</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weather Graph */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Thermometer className="h-5 w-5 mr-2 text-primary" />
              Today's Weather Pattern
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-center justify-center border-2 border-dashed border-border rounded-lg bg-accent/50">
              <div className="text-center text-muted-foreground">
                <CloudRain className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>Weather graph will be displayed here</p>
                <p className="text-sm">Temperature & rainfall throughout the day</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Smart Reminders */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-primary" />
              Today's Farming Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-accent/30">
                <div className="flex items-center">
                  <Droplets className="h-4 w-4 mr-2 text-blue-500" />
                  <span className="text-sm font-medium">Water tomato plants</span>
                </div>
                <Badge variant="outline">Morning</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-accent/30">
                <div className="flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2 text-warning" />
                  <span className="text-sm font-medium">Check for pests</span>
                </div>
                <Badge variant="outline">Evening</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-accent/30">
                <div className="flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-info" />
                  <span className="text-sm font-medium">Apply fertilizer</span>
                </div>
                <Badge variant="outline">Tomorrow</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Government Scheme Highlight */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2 text-primary" />
              Featured Government Scheme
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">PM-Kisan Samman Nidhi</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Direct income support of ₹6000 per year to all farmer families. 
                  The money is transferred directly to bank accounts in three equal installments.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <Badge className="bg-success text-success-foreground">Active Scheme</Badge>
                <Button size="sm" asChild>
                  <NavLink to="/schemes">Apply Now</NavLink>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
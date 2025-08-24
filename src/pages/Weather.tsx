import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Cloud, 
  Sun, 
  CloudRain, 
  Wind, 
  Droplets, 
  Thermometer,
  Eye,
  Gauge,
  Sunrise,
  Sunset,
  Clock
} from 'lucide-react';

const Weather = () => {
  const currentDate = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Sample hourly data
  const hourlyData = [
    { time: '6 AM', temp: '22°C', rain: '10%', icon: Sunrise },
    { time: '9 AM', temp: '25°C', rain: '15%', icon: Sun },
    { time: '12 PM', temp: '28°C', rain: '20%', icon: Sun },
    { time: '3 PM', temp: '30°C', rain: '35%', icon: Cloud },
    { time: '6 PM', temp: '27°C', rain: '45%', icon: CloudRain },
    { time: '9 PM', temp: '24°C', rain: '30%', icon: Cloud },
    { time: '12 AM', temp: '22°C', rain: '20%', icon: Sunset },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            🌦️ Weather Forecast
          </h1>
          <p className="text-lg text-muted-foreground">
            Today's weather conditions for better farming decisions - {currentDate}
          </p>
        </div>

        {/* Current Weather Card */}
        <Card className="shadow-card mb-8 bg-gradient-card">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Current Weather Conditions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Temperature */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Thermometer className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-foreground mb-2">28°C</h3>
                <p className="text-muted-foreground">Temperature</p>
                <div className="mt-2 text-sm text-muted-foreground">
                  Feels like 31°C
                </div>
              </div>

              {/* Humidity */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-100 rounded-full">
                    <Droplets className="h-12 w-12 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-foreground mb-2">65%</h3>
                <p className="text-muted-foreground">Humidity</p>
                <div className="mt-2">
                  <Badge variant="secondary">Moderate</Badge>
                </div>
              </div>

              {/* Rain Chance */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-green-100 rounded-full">
                    <CloudRain className="h-12 w-12 text-green-600" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-foreground mb-2">30%</h3>
                <p className="text-muted-foreground">Rain Chance</p>
                <div className="mt-2">
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Light showers possible
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Weather Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Wind Speed</p>
                  <p className="text-xl font-semibold">12 km/h</p>
                </div>
                <Wind className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Visibility</p>
                  <p className="text-xl font-semibold">10 km</p>
                </div>
                <Eye className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pressure</p>
                  <p className="text-xl font-semibold">1013 hPa</p>
                </div>
                <Gauge className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">UV Index</p>
                  <p className="text-xl font-semibold">6</p>
                </div>
                <Sun className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hourly Forecast */}
        <Card className="shadow-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-primary" />
              Hourly Forecast
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {hourlyData.map((hour, index) => {
                const IconComponent = hour.icon;
                return (
                  <div key={index} className="text-center p-4 rounded-lg bg-accent/30 hover:bg-accent/50 transition-smooth">
                    <p className="text-sm text-muted-foreground mb-2">{hour.time}</p>
                    <IconComponent className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="font-semibold text-foreground">{hour.temp}</p>
                    <p className="text-xs text-muted-foreground">{hour.rain}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Weather Charts Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Thermometer className="h-5 w-5 mr-2 text-primary" />
                Temperature Throughout the Day
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg bg-accent/30">
                <div className="text-center text-muted-foreground">
                  <Thermometer className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="font-medium">Temperature Chart</p>
                  <p className="text-sm">Hourly temperature variations</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CloudRain className="h-5 w-5 mr-2 text-primary" />
                Rainfall Probability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg bg-accent/30">
                <div className="text-center text-muted-foreground">
                  <CloudRain className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="font-medium">Rainfall Chart</p>
                  <p className="text-sm">Rain probability throughout the day</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Farming Advice Based on Weather */}
        <Card className="shadow-card mt-8 border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle className="text-primary">Today's Farming Advice</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">✅ Recommended Activities:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Perfect weather for land preparation</li>
                  <li>• Good conditions for applying fertilizers</li>
                  <li>• Ideal for harvesting mature crops</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">⚠️ Precautions:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Possible light showers in evening</li>
                  <li>• High humidity may increase disease risk</li>
                  <li>• Monitor plants for fungal infections</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Weather;
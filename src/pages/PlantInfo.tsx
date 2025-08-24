import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Camera, 
  Search, 
  Upload, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Download,
  Globe
} from 'lucide-react';

const PlantInfo = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  const sampleDiseases = [
    {
      id: 1,
      name: 'Tomato Leaf Blight',
      symptoms: 'Brown spots on leaves, yellowing around spots, leaf wilting',
      riskLevel: 'high',
      causes: 'Fungal infection, high humidity, poor air circulation',
      cure: {
        english: 'Apply copper-based fungicide every 7-10 days. Remove affected leaves immediately.',
        hindi: 'कॉपर आधारित फंगिसाइड का हर 7-10 दिन में छिड़काव करें। प्रभावित पत्तियों को तुरंत हटा दें।',
        marathi: 'दर ७-१० दिवसांनी तांबे आधारित बुरशीनाशक फवारणी करा. प्रभावित पाने लगेच काढून टाका.'
      },
      prevention: 'Ensure proper spacing between plants, avoid overhead watering, use drip irrigation'
    },
    {
      id: 2,
      name: 'Wheat Rust',
      symptoms: 'Orange-red pustules on leaves and stems, reduced grain quality',
      riskLevel: 'medium',
      causes: 'Fungal spores spread by wind, moderate temperatures, high humidity',
      cure: {
        english: 'Apply triazole fungicides during early infection stages. Use resistant varieties.',
        hindi: 'संक्रमण के प्रारंभिक चरणों में ट्राइज़ोल फंगिसाइड का उपयोग करें। प्रतिरोधी किस्मों का उपयोग करें।',
        marathi: 'संसर्गाच्या सुरुवातीच्या टप्प्यात ट्रायझोल बुरशीनाशक वापरा. प्रतिरोधी जाती वापरा.'
      },
      prevention: 'Plant rust-resistant varieties, ensure good air circulation, avoid late planting'
    },
    {
      id: 3,
      name: 'Rice Blast',
      symptoms: 'Oval lesions with brown borders on leaves, neck rot in severe cases',
      riskLevel: 'high',
      causes: 'Fungal pathogen, excess nitrogen, continuous flooding',
      cure: {
        english: 'Use systemic fungicides like tricyclazole. Adjust water management.',
        hindi: 'ट्राइसाइक्लाज़ोल जैसे सिस्टमिक फंगिसाइड का उपयोग करें। पानी प्रबंधन को समायोजित करें।',
        marathi: 'ट्रायसायक्लाझोल सारखे सिस्टमिक बुरशीनाशक वापरा. पाणी व्यवस्थापन समायोजित करा.'
      },
      prevention: 'Balanced fertilization, alternate wetting and drying, use resistant varieties'
    }
  ];

  const getRiskBadge = (risk: string) => {
    const configs = {
      low: { variant: 'secondary' as const, icon: CheckCircle, text: 'Low Risk' },
      medium: { variant: 'default' as const, icon: AlertTriangle, text: 'Medium Risk' },
      high: { variant: 'destructive' as const, icon: XCircle, text: 'High Risk' }
    };
    
    const config = configs[risk as keyof typeof configs];
    const Icon = config.icon;
    
    return (
      <Badge variant={config.variant} className="flex items-center gap-1">
        <Icon className="h-3 w-3" />
        {config.text}
      </Badge>
    );
  };

  const filteredDiseases = sampleDiseases.filter(disease =>
    disease.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    disease.symptoms.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            🌱 Plant Disease Detection & Info
          </h1>
          <p className="text-lg text-muted-foreground">
            Upload leaf photos or search for plant diseases and get instant diagnosis with multilingual support
          </p>
        </div>

        {/* Language Toggle */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-2 p-1 bg-muted rounded-lg">
            <Button
              variant={selectedLanguage === 'english' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setSelectedLanguage('english')}
              className="flex items-center"
            >
              <Globe className="h-4 w-4 mr-1" />
              English
            </Button>
            <Button
              variant={selectedLanguage === 'hindi' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setSelectedLanguage('hindi')}
            >
              हिंदी
            </Button>
            <Button
              variant={selectedLanguage === 'marathi' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setSelectedLanguage('marathi')}
            >
              मराठी
            </Button>
          </div>
        </div>

        <Tabs defaultValue="upload" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upload" className="flex items-center">
              <Camera className="h-4 w-4 mr-2" />
              Upload Image
            </TabsTrigger>
            <TabsTrigger value="search" className="flex items-center">
              <Search className="h-4 w-4 mr-2" />
              Search Diseases
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="h-5 w-5 mr-2 text-primary" />
                  Upload Leaf Photo for Instant Diagnosis
                </CardTitle>
                <CardDescription>
                  Take a clear photo of the affected plant leaf for AI-powered disease detection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center bg-accent/30 hover:bg-accent/50 transition-smooth cursor-pointer">
                  <Camera className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-lg font-medium mb-2">Click to upload or drag and drop</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Supported formats: JPG, PNG, HEIC (Max 10MB)
                  </p>
                  <Button className="mx-auto">
                    Choose File
                  </Button>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    💡 Tip: Take photos in good lighting with the affected area clearly visible
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="search" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="h-5 w-5 mr-2 text-primary" />
                  Search Plant Diseases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search by disease name or symptoms..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 text-base"
                  />
                  <Search className="absolute left-3 top-4 h-4 w-4 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            {/* Disease Results */}
            <div className="space-y-4">
              {filteredDiseases.map((disease) => (
                <Card key={disease.id} className="shadow-card hover:shadow-md transition-smooth">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{disease.name}</CardTitle>
                        <CardDescription className="text-base">
                          <strong>Symptoms:</strong> {disease.symptoms}
                        </CardDescription>
                      </div>
                      {getRiskBadge(disease.riskLevel)}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Causes:</h4>
                      <p className="text-muted-foreground">{disease.causes}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Treatment & Cure:</h4>
                      <div className="p-4 bg-accent/30 rounded-lg">
                        <p className="text-foreground">
                          {disease.cure[selectedLanguage as keyof typeof disease.cure]}
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Prevention:</h4>
                      <p className="text-muted-foreground">{disease.prevention}</p>
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex items-center">
                        <Download className="h-4 w-4 mr-1" />
                        Download PDF Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {searchQuery && filteredDiseases.length === 0 && (
              <Card className="shadow-card">
                <CardContent className="text-center py-8">
                  <div className="text-muted-foreground">
                    <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium mb-2">No diseases found</p>
                    <p>Try searching with different keywords or symptoms</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PlantInfo;
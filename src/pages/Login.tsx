import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Leaf, Mail, Phone, Eye, EyeOff } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [loginMethod, setLoginMethod] = useState<'password' | 'otp'>('password');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt', { emailOrPhone, password, otp, loginMethod });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-card px-4 py-8">
      <div className="w-full max-w-md">
        <Card className="shadow-lg border-0">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-4">
              <div className="flex items-center space-x-2 text-primary text-2xl font-bold">
                <Leaf className="h-8 w-8" />
                <span>Pikmitra</span>
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">Welcome Back!</CardTitle>
            <CardDescription className="text-muted-foreground">
              Sign in to access your farming dashboard
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue="password" onValueChange={(value) => setLoginMethod(value as 'password' | 'otp')}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="password" className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Password
                </TabsTrigger>
                <TabsTrigger value="otp" className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  OTP
                </TabsTrigger>
              </TabsList>
              
              <form onSubmit={handleLogin} className="space-y-6 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="emailOrPhone">Email or Mobile Number</Label>
                  <Input
                    id="emailOrPhone"
                    type="text"
                    placeholder="Enter your email or mobile number"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                <TabsContent value="password" className="space-y-4 mt-0">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="h-11 pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-11 w-10 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button variant="link" className="px-0 text-sm text-primary hover:text-primary-light">
                      Forgot Password?
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="otp" className="space-y-4 mt-0">
                  <div className="space-y-2">
                    <Label htmlFor="otp">OTP Code</Label>
                    <Input
                      id="otp"
                      type="text"
                      placeholder="Enter 6-digit OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      maxLength={6}
                      required
                      className="h-11"
                    />
                  </div>
                  
                  <Button type="button" variant="outline" className="w-full">
                    Send OTP
                  </Button>
                </TabsContent>

                <Button type="submit" className="w-full h-11 text-base font-medium">
                  Sign In
                </Button>
              </form>
            </Tabs>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <NavLink to="/signup" className="text-primary font-medium hover:text-primary-light transition-smooth">
                  Sign up here
                </NavLink>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
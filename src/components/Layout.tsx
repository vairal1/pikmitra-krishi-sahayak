import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu, X, Leaf, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Plant Info', path: '/plant-info', icon: '🌱' },
    { name: 'Weather', path: '/weather', icon: '🌦️' },
    { name: 'Market Prices', path: '/market-prices', icon: '📈' },
    { name: 'News', path: '/news', icon: '📰' },
    { name: 'Schemes', path: '/schemes', icon: '🏛️' },
    { name: 'Contact', path: '/contact', icon: '📞' },
    { name: 'About', path: '/about', icon: 'ℹ️' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <NavLink to="/" className="flex items-center space-x-2 text-primary font-bold text-xl">
              <Leaf className="h-8 w-8" />
              <span>Pikmitra</span>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg font-medium transition-smooth hover:bg-accent hover:text-accent-foreground ${
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground'
                    }`
                  }
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="outline" asChild>
                <NavLink to="/login">Login</NavLink>
              </Button>
              <Button asChild>
                <NavLink to="/signup">Sign Up</NavLink>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-border bg-background">
              <nav className="py-4 space-y-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3 rounded-lg font-medium transition-smooth hover:bg-accent hover:text-accent-foreground ${
                        isActive
                          ? 'bg-primary text-primary-foreground'
                          : 'text-foreground'
                      }`
                    }
                  >
                    <span className="mr-3 text-lg">{item.icon}</span>
                    {item.name}
                  </NavLink>
                ))}
                <div className="pt-4 space-y-2">
                  <Button variant="outline" className="w-full" asChild>
                    <NavLink to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      Login
                    </NavLink>
                  </Button>
                  <Button className="w-full" asChild>
                    <NavLink to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                      Sign Up
                    </NavLink>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-muted border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 text-primary font-bold text-xl mb-4">
                <Leaf className="h-6 w-6" />
                <span>Pikmitra</span>
              </div>
              <p className="text-muted-foreground">
                Empowering farmers with modern technology for better crop management and higher yields.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><NavLink to="/plant-info" className="hover:text-primary transition-smooth">Plant Disease Detection</NavLink></li>
                <li><NavLink to="/weather" className="hover:text-primary transition-smooth">Weather Forecast</NavLink></li>
                <li><NavLink to="/market-prices" className="hover:text-primary transition-smooth">Market Prices</NavLink></li>
                <li><NavLink to="/schemes" className="hover:text-primary transition-smooth">Government Schemes</NavLink></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>support@pikmitra.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Pikmitra. All rights reserved. Helping farmers grow better.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
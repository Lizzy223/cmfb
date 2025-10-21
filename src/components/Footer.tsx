import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logoCre-removebg-preview.png"

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            {/* <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-orange-600-foreground font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold">CMFB</span>
            </div> */}
             {/* Logo */}
                      <Link to="/" className="flex items-center space-x-2">
                        <img src={logo} alt="CMFB Logo" className="h-10 w-70 " />
                      </Link>
            <p className="text-primary-foreground/80 text-sm">
              Crescent Microfinance Bank committed to empowering individuals and small businesses in Ilorin and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Services
              </Link>
              <Link to="/contact" className="block text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <div className="space-y-2">
              <p className="text-primary-foreground/80 text-sm">Microloans</p>
              <p className="text-primary-foreground/80 text-sm">Savings Accounts</p>
              <p className="text-primary-foreground/80 text-sm">Business Banking</p>
              <p className="text-primary-foreground/80 text-sm">Financial Advisory</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-600 mt-0.5" />
                <p className="text-primary-foreground/80 text-sm">
                  9 Olatinwo Plaza, Opposite St. Charles Nursery and Primary school offa garage<br />
                  Ilorin, Kwara State<br />
                  Nigeria
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-600" />
                <p className="text-primary-foreground/80 text-sm">08135637313</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-600" />
                <p className="text-primary-foreground/80 text-sm">contact@crescentmfb.ng</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Crescent Microfinance Bank (CMFB). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
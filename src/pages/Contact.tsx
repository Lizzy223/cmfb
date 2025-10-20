import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-8 w-8 text-orange-600" />,
      title: "Visit Our Branch",
      info: "9 Olatinwo Plaza, Opposite St. Charles Nursery and Primary school offa garage\nIlorin, Kwara State\nNigeria",
      description: "Main branch with full banking services"
    },
    {
      icon: <Phone className="h-8 w-8 text-orange-600" />,
      title: "Call Us",
      info: "08135637313",
      description: "Available Monday to Friday, 8AM to 5PM"
    },
    {
      icon: <Mail className="h-8 w-8 text-orange-600" />,
      title: "Email Us",
      info: "info@crescentmfb.ng\nsupport@crescentmfb.ng",
      description: "We respond within 24 hours"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
    { day: "Public Holidays", hours: "Closed" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Get in touch with our team. We're here to help with all your banking needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to reach us for your convenience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-orange-600/10 rounded-full flex items-center justify-center">
                    {contact.icon}
                  </div>
                  <CardTitle className="text-xl">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="whitespace-pre-line text-lg font-semibold text-primary mb-2">
                    {contact.info}
                  </div>
                  <CardDescription>{contact.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Business Hours */}
      <section className="py-20 bg-bank-light-blue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <MessageSquare className="h-6 w-6 text-orange-600" />
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                </div>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is this regarding?" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you..."
                      className="min-h-[120px]"
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-primary">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Business Hours and Additional Info */}
            <div className="space-y-8">
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="h-6 w-6 text-orange-600" />
                    <CardTitle className="text-2xl">Business Hours</CardTitle>
                  </div>
                  <CardDescription>
                    Our branch is open during these hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                        <span className="font-medium text-primary">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Emergency Contact</CardTitle>
                  <CardDescription>
                    For urgent banking matters outside business hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-1">24/7 Hotline</h4>
                      <p className="text-lg font-medium text-orange-600">+234 700 CMFB HELP</p>
                      <p className="text-sm text-muted-foreground">For lost cards, fraud reporting, and urgent assistance</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">WhatsApp Support</h4>
                      <p className="text-lg font-medium text-orange-600">08135637313</p>
                      <p className="text-sm text-muted-foreground">Quick support via WhatsApp</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card bg-gradient-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-2xl">Visit Our Branch</CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    Come see us in person for personalized service
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-primary-foreground/90">
                      <strong>Address:</strong><br />
                      9 Olatinwo Plaza, Opposite St. Charles Nursery and Primary school offa garage<br />
                      Ilorin, Kwara State, Nigeria
                    </p>
                    <p className="text-primary-foreground/90">
                      <strong>Landmarks:</strong><br />
                      Near Central Mosque, opposite Government House
                    </p>
                    <p className="text-primary-foreground/90">
                      <strong>Parking:</strong> Free customer parking available
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Find Us</h2>
            <p className="text-xl text-muted-foreground">
              Located in the heart of Ilorin's Government Reserved Area
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-elegant">
              <CardContent className="p-0">
                <div className="w-full h-96 bg-bank-light-blue rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-primary mb-2">Interactive Map</h3>
                    <p className="text-muted-foreground">
                      9 Olatinwo Plaza, Opposite St. Charles Nursery and Primary school offa garage, Ilorin, Kwara State
                    </p>
                    <Button className="mt-4 bg-gradient-primary">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
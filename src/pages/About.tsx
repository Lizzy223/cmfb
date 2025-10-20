import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Award, Users2 } from "lucide-react";
import teamImage from "@/assets/business-handshake.jpg";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-orange-600" />,
      title: "Mission",
      description: "To provide accessible, innovative microfinance solutions that empower individuals and small businesses to achieve financial independence and contribute to community development."
    },
    {
      icon: <Eye className="h-8 w-8 text-orange-600" />,
      title: "Vision", 
      description: "To be the leading community microfinance institution in Nigeria, recognized for excellence in service delivery and positive impact on local economic development."
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: "Values",
      description: "Integrity, transparency, community focus, innovation, and commitment to excellence in all our financial services and customer relationships."
    }
  ];

  const achievements = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "₦5B+", label: "Loans Disbursed" },
    { number: "15+", label: "Years of Service" },
    { number: "50+", label: "Team Members" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About CMFB</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Crescent Microfinance Bank has been serving Ilorin and surrounding communities since 2009, 
            providing trusted financial solutions that fuel growth and prosperity.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  Founded in 2009, Crescent Microfinance Bank (CMFB) was established with a clear mission: 
                  to bridge the financial inclusion gap in Ilorin, Kwara State, and provide accessible 
                  banking services to underserved communities.
                </p>
                <p>
                  What started as a small initiative to support local entrepreneurs has grown into one of 
                  the most trusted microfinance institutions in the region. We have consistently focused 
                  on understanding the unique financial needs of our community and developing solutions 
                  that truly make a difference.
                </p>
                <p>
                  Today, CMFB stands as a beacon of financial empowerment, having helped thousands of 
                  individuals and small businesses achieve their dreams through responsible lending, 
                  innovative savings products, and comprehensive financial advisory services.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={teamImage} 
                alt="CMFB Team" 
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-bank-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Foundation</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-orange-600/10 rounded-full flex items-center justify-center">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Impact</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Numbers that tell our story of growth and community impact
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-bank-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals committed to serving our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-card">
              <CardHeader>
                <div className="mx-auto mb-4 w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Users2 className="h-10 w-10 text-primary-foreground" />
                </div>
                <CardTitle>Adebayo Okunola</CardTitle>
                <CardDescription>Managing Director/CEO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  15+ years in microfinance and community banking, passionate about financial inclusion.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card">
              <CardHeader>
                <div className="mx-auto mb-4 w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Users2 className="h-10 w-10 text-primary-foreground" />
                </div>
                <CardTitle>Fatima Abdullahi</CardTitle>
                <CardDescription>Head of Operations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Expert in operational excellence and customer service with deep community knowledge.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card">
              <CardHeader>
                <div className="mx-auto mb-4 w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Users2 className="h-10 w-10 text-primary-foreground" />
                </div>
                <CardTitle>Ibrahim Yusuf</CardTitle>
                <CardDescription>Head of Credit</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Specialist in risk assessment and responsible lending practices for sustainable growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  Banknote, 
  Building, 
  PiggyBank, 
  Smartphone, 
  UserCheck,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const Services = () => {
  const mainServices = [
    {
      icon: <CreditCard className="h-12 w-12 text-orange-600" />,
      title: "Microloans",
      description: "Quick access to small business and personal loans with competitive rates",
      features: ["Up to ₦2,000,000", "Flexible repayment terms", "Quick approval process", "Minimal documentation"],
      popular: true
    },
    {
      icon: <Banknote className="h-12 w-12 text-orange-600" />,
      title: "Savings Accounts",
      description: "Secure savings solutions with attractive interest rates",
      features: ["High interest rates", "No minimum balance", "Free account maintenance", "Online access"],
      popular: false
    },
    {
      icon: <Building className="h-12 w-12 text-orange-600" />,
      title: "Business Banking",
      description: "Comprehensive banking solutions for small and medium enterprises",
      features: ["Business accounts", "Working capital loans", "Equipment financing", "Cash management"],
      popular: false
    }
  ];

  const additionalServices = [
    {
      icon: <PiggyBank className="h-6 w-6" />,
      title: "Fixed Deposits",
      description: "Secure investment with guaranteed returns"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Banking",
      description: "Bank anywhere, anytime with our mobile app"
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Financial Advisory",
      description: "Expert guidance for your financial decisions"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Investment Plans",
      description: "Grow your wealth with our investment products"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-orange-600" />,
      title: "NDIC Insured",
      description: "Your deposits are protected up to ₦500,000"
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      title: "Quick Processing",
      description: "Fast approval and disbursement processes"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-orange-600" />,
      title: "No Hidden Fees",
      description: "Transparent pricing with no surprise charges"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="text-3xl sm:text-5xl font-bold mb-6">Our Services</motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="text-sm sm:text-xl max-w-3xl mx-auto opacity-90">
            Comprehensive financial solutions designed to meet your personal and business needs
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }} className="text-2xl sm:text-4xl font-bold text-primary mb-4">Core Services</motion.h2>
            <motion.p className="text-sm sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Our primary offerings designed to support your financial growth
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="relative shadow-card hover:shadow-elegant transition-shadow duration-300">
                {service.popular && (
                  <Badge className="absolute -top-3 left-4 bg-orange-600 text-orange-600-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-20 h-20 bg-orange-600/10 rounded-full flex items-center justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-orange-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-gradient-primary">
                    <Link to="/contact">Apply Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-bank-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }} className="text-2xl sm:text-4xl font-bold text-primary mb-4">Additional Services</motion.h2>
            <motion.p initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }} className="text-sm sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Extended financial services to support your complete banking needs
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }} className="text-2xl sm:text-4xl font-bold text-primary mb-4">Why Bank With Us?</motion.h2>
            <motion.p initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              transition={{ delay: 0.1 }} className="text-sm sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the advantages of community banking
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }} key={index} className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-orange-600/10 rounded-full flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Calculator Section */}
      <section className="py-20 bg-bank-light-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className=" text-2xl sm:text-4xl font-bold text-primary mb-4">Loan Information</h2>
              <p className="text-sm sm:text-xl text-muted-foreground">
                Understanding our loan products and requirements
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-sm sm:text-xl">Loan Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-600" />
                      <span className="text-sm">Valid means of identification</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-600" />
                      <span className="text-sm">Proof of income or business</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-600" />
                      <span className="text-sm">Bank statements (3 months)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-600" />
                      <span className="text-sm">Guarantor information</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-600" />
                      <span className="text-sm">Completed application form</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-sm sm:text-xl">Loan Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Interest Rates</h4>
                      <p className="text-sm text-muted-foreground">Starting from 2.5% per month</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Loan Tenure</h4>
                      <p className="text-sm text-muted-foreground">3 to 12 months</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Processing Time</h4>
                      <p className="text-sm text-muted-foreground">24-48 hours</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Collateral</h4>
                      <p className="text-sm text-muted-foreground">Minimal or no collateral required</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="text-2xl sm:text-4xl font-bold mb-6">Ready to Get Started?</motion.h2>
          <motion.p initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="text-sm sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Take the first step towards achieving your financial goals with CMFB
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-orange-600 hover:bg-orange-600/90 text-orange-600-foreground">
              <Link to="/contact">Apply for a Loan</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">Open Savings Account</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
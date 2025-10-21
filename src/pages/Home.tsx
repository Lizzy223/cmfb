import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Shield, TrendingUp, CreditCard, ChevronRight, Building2, Wallet, Banknote, Building } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/bank-building.jpg";
import servicesImage from "@/assets/financial-services.jpg";
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';

const Home = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Community Focused",
      description: "Serving the financial needs of individuals and small businesses in Ilorin and surrounding communities."
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-600" />,
      title: "Trusted & Secure",
      description: "NDIC insured deposits and robust security measures to protect your financial assets."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
      title: "Growth Oriented",
      description: "Helping you achieve your financial goals with tailored solutions and expert guidance."
    }
  ];

  // const services = [
  //   {
  //     icon: <CreditCard className="h-6 w-6" />,
  //     title: "Microloans",
  //     description: "Quick access to small business and personal loans"
  //   },
  //   {
  //     icon: <Banknote className="h-6 w-6" />,
  //     title: "Savings Accounts", 
  //     description: "Competitive rates with flexible deposit options"
  //   },
  //   {
  //     icon: <Building className="h-6 w-6" />,
  //     title: "Business Banking",
  //     description: "Comprehensive solutions for SMEs"
  //   }
  // ];

  const services = [
    {
      icon: Wallet,
      title: 'Savings Account',
      description: 'Secure savings accounts with competitive interest rates to help you grow your wealth',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: CreditCard,
      title: 'Micro Loans',
      description: 'Quick and affordable loans for your business and personal needs with flexible repayment',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'SME Banking',
      description: 'Tailored financial solutions for small and medium enterprises to boost your business',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: TrendingUp,
      title: 'Investment Plans',
      description: 'Grow your money with our secure and profitable investment opportunities',
      color: 'from-orange-600 to-orange-700'
    },
    // {
    //   icon: Shield,
    //   title: 'Insurance Services',
    //   description: 'Protect what matters most with our comprehensive insurance products',
    //   color: 'from-blue-700 to-blue-800'
    // },
    {
      icon: Building2,
      title: 'Agent Banking',
      description: 'Access banking services at your convenience through our network of agents',
      color: 'from-orange-700 to-orange-800'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }} className=" text-2xl sm:text-4xl font-bold text-primary mb-4">Why Choose CMFB?</motion.h2>
            <motion.p initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }} className="text-sm sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              We're more than a bank - we're your community financial partner
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-orange-600/10 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-bank-light-blue">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-orange-100 px-6 py-2 rounded-full mb-4"
            >
              <span className="text-orange-600  font-semibold">What We Offer</span>
            </motion.div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Our Services
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial solutions designed to meet your unique needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-[Lato] text-blue-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 font-[Lato] mb-4">{service.description}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-orange-600 font-[Lato] font-semibold flex items-center gap-2 group"
                >
                  Learn More
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
              className="sm:text-4xl text-2xl font-bold mb-6">Ready to Start Your Financial Journey?</motion.h2>
          <motion.p initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="text-sm sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust CMFB for their banking needs
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link className="cursor-pointer no-underline" to="https://calendly.com/crescentmfb-info/30min">
            <Button size="lg" variant="secondary" className="bg-orange-600 hover:bg-orange-600/90 text-orange-600-foreground">
              Open Account Today
            </Button>
            </Link>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
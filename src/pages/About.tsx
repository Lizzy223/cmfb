import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Award, Users2 , TrendingUp, Briefcase, Users, Building2, ShoppingCart, Sprout, ArrowRight, CheckCircle2, BarChart3, Wallet, PiggyBank } from 'lucide-react';

import teamImage from "@/assets/business-handshake.jpg";
import { motion } from 'framer-motion';

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
    { number: "500+", label: "Happy Customers" },
    { number: "₦197M+", label: "Loans Disbursed" },
    { number: "8+", label: "Years of Service" },
    { number: "40", label: "Team Members" }
  ];

  const loanProducts = [
    {
      icon: Users,
      title: "Crescent Iyaoloja Credit Scheme",
      description: "Empowering market traders and merchants with accessible credit solutions",
      color: "from-purple-500 to-indigo-600",
      code: "403"
    },
    {
      icon: TrendingUp,
      title: "Crescent Business Booster",
      description: "Accelerate your business growth with flexible financing options",
      color: "from-blue-500 to-cyan-600",
      code: "402"
    },
    {
      icon: Briefcase,
      title: "Abridge Credit for Salary Account Holder",
      description: "Instant credit access for verified salary earners with competitive rates",
      color: "from-emerald-500 to-teal-600",
      code: "401"
    },
    {
      icon: Building2,
      title: "Asset Financing",
      description: "Acquire essential business assets with structured payment plans",
      color: "from-orange-500 to-amber-600",
      code: "405"
    },
    {
      icon: ShoppingCart,
      title: "Consumer Finance",
      description: "Flexible consumer loans for your personal needs and lifestyle",
      color: "from-pink-500 to-rose-600",
      code: "406"
    },
    {
      icon: Sprout,
      title: "Agric Credit Scheme",
      description: "Supporting farmers and agribusinesses with tailored agricultural loans",
      color: "from-green-500 to-lime-600",
      code: "407"
    }
  ];

  const savingsProducts = [
    {
      icon: Users,
      title: "Crescent Contributory Scheme Account",
      description: "Build savings together with a community-based savings scheme",
      color: "from-cyan-500 to-blue-600",
      code: "101"
    },
    {
      icon: Briefcase,
      title: "Crescent Personal Saving Account",
      description: "Your personal savings account with competitive interest rates",
      color: "from-indigo-500 to-purple-600",
      code: "102"
    },
    {
      icon: TrendingUp,
      title: "Crescent Target Account",
      description: "Save towards your financial goals with our target savings plan",
      color: "from-violet-500 to-fuchsia-600",
      code: "103"
    },
    {
      icon: Users,
      title: "Crescent Minor Saving Account",
      description: "Secure your child's future with dedicated minor savings options",
      color: "from-rose-500 to-pink-600",
      code: "104"
    },
    {
      icon: Building2,
      title: "Crescent Corporate Saving Account",
      description: "Corporate savings solutions designed for business growth",
      color: "from-amber-500 to-orange-600",
      code: "201"
    },
    {
      icon: Users,
      title: "Crescent Association Saving Account",
      description: "Tailored savings products for associations and cooperatives",
      color: "from-lime-500 to-green-600",
      code: "202"
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
            transition={{ delay: 0.1 }} className="text-3xl sm:text-5xl font-bold mb-6">About CMFB</motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }} className=" text-sm sm:text-xl max-w-3xl mx-auto opacity-90">
            Crescent Microfinance Bank has been serving Ilorin and surrounding communities, 
            providing trusted financial solutions that fuel growth and prosperity.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }} className="text-2xl sm:text-4xl font-bold text-primary mb-6">Our Story</motion.h2>
              <div className="space-y-4 text-sm sm:text-lg text-muted-foreground">
                <motion.p initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }} className=" text-sm sm:text-lg">
                  Crescent Microfinance Bank (CMFB) was established with a clear mission: 
                  to bridge the financial inclusion gap in Ilorin, Kwara State, and provide accessible 
                  banking services to underserved communities.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}>
                  What started as a small initiative to support local entrepreneurs has grown into one of 
                  the most trusted microfinance institutions in the region. We have consistently focused 
                  on understanding the unique financial needs of our community and developing solutions 
                  that truly make a difference.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}>
                  Today, CMFB stands as a beacon of financial empowerment, having helped thousands of 
                  individuals and small businesses achieve their dreams through responsible lending, 
                  innovative savings products, and comprehensive financial advisory services.
                </motion.p>
              </div>
            </div>
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }} 
                src={teamImage} 
                alt="CMFB Team" 
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

        {/* Loan Products Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              className="text-2xl sm:text-4xl font-bold mb-4 text-primary "
              >
              Our <span className="text-primary ">Loan Products</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              className="text-sm sm:text-xl text-gray-600 max-w-2xl mx-auto"
              >
                Tailored financial solutions designed to meet your unique needs and help you achieve your goals
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {loanProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                >
                  <div className="p-8 text-center">
                    <motion.div
                      className={`mx-auto mb-6 w-16 h-16 rounded-full bg-gradient-to-br ${product.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <product.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                      {product.title}
                    </h3>

                    {/* <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
                        CODE: {product.code}
                      </span>
                    </div> */}

                    <p className="text-gray-600 text-base leading-relaxed">
                      {product.description}
                    </p>

                    {/* <motion.div
                      className="mt-6 flex items-center justify-center text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Learn more
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </motion.div> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Savings Products Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              className=" text-2xl sm:text-4xl text-primary  font-bold mb-4"
              >
              Our <span className="text-primary ">Savings Products</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              className="text-sm sm:text-xl text-gray-600 max-w-2xl mx-auto"
              >
                Build your future with secure savings plans designed to help you achieve your financial aspirations
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {savingsProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                >
                  <div className="p-8 text-center">
                    <motion.div
                      className={`mx-auto mb-6 w-16 h-16 rounded-full bg-gradient-to-br ${product.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <product.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-green-600 transition-colors">
                      {product.title}
                    </h3>

                    {/* <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
                        CODE: {product.code}
                      </span>
                    </div> */}

                    <p className="text-gray-600 text-base leading-relaxed">
                      {product.description}
                    </p>

                    {/* <motion.div
                      className="mt-6 flex items-center justify-center text-green-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Learn more
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </motion.div> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }} className="text-2xl sm:text-4xl font-bold text-primary mb-4">Our Impact</motion.h2>
            <motion.p initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }} className="text-sm sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Numbers that tell our story of growth and community impact
            </motion.p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, i) => (
              <motion.div initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }} key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-bank-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-4xl font-bold text-primary mb-4"
            >
              What Our Customers Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Real stories from members of our community
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Users2 className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Adebayo Okunola</CardTitle>
                    <CardDescription>Small Business Owner</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic mb-4">
                  "The loan process was quick and straightforward. I was able to expand my shop thanks to their support. The staff truly understands the needs of small businesses."
                </p>
                <div className="flex gap-1 text-yellow-500">
                  ⭐⭐⭐⭐⭐
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Users2 className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Fatima Abdullahi</CardTitle>
                    <CardDescription>Market Trader</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic mb-4">
                  "Finally, a bank that speaks my language! The savings plan helped me secure my children's education. I'm grateful for their personalized service."
                </p>
                <div className="flex gap-1 text-yellow-500">
                  ⭐⭐⭐⭐⭐
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Users2 className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Ibrahim Yusuf</CardTitle>
                    <CardDescription>Farmer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic mb-4">
                  "The agricultural loan came at the perfect time for planting season. Their flexible repayment terms match my harvest cycle. Highly recommended!"
                </p>
                <div className="flex gap-1 text-yellow-500">
                  ⭐⭐⭐⭐⭐
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
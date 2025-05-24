import Link from "next/link"
import { Github, ArrowRight, Mail, Linkedin, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import BlogCard from "@/components/blog-card"
import TestimonialCard from "@/components/testimonial-card"
import CaseStudyCard from "@/components/case-study-card"
import PricingCard from "@/components/pricing-card"
import ClientLogos from "@/components/client-logos"
import ProcessSteps from "@/components/process-steps"
import Technologies from "@/components/technologies"
import NewsletterSignup from "@/components/newsletter-signup"
import Certifications from "@/components/certifications"
import CtaDownload from "@/components/cta-download"
import MobileNav from "@/components/mobile-nav"
import GitHubProjects from "@/components/github-projects"
import GitHubStats from "@/components/github-stats"
import { services } from "@/lib/services"
import { blogPosts } from "@/lib/blog-posts"
import { testimonials } from "@/lib/testimonials"
import { caseStudies } from "@/lib/case-studies"
import { pricingPlans } from "@/lib/pricing-plans"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full bg-midnight-3/90 backdrop-blur-sm border-b border-midnight-2/20">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Connor O'Dea Logo" width={40} height={40} className="rounded-full" />
            <span className="text-white font-semibold">Connor O'Dea</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#case-studies" className="text-gray-300 hover:text-white transition-colors">
              Case Studies
            </Link>
            <Link href="#blog" className="text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="#contact" passHref className="hidden sm:block">
              <Button size="sm" className="bg-caribbean hover:bg-midnight text-white">
                Get Started
              </Button>
            </Link>
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-custom text-white">
        <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  AI Solutions for the Modern Enterprise
                </h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  Transforming businesses through cutting-edge AI automation and custom AI services. Expert consulting
                  to help you navigate the AI landscape.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#contact" passHref>
                  <Button size="lg" className="bg-caribbean hover:bg-midnight text-white border border-caribbean">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#services" passHref>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-caribbean to-palatinate opacity-30 blur-xl"></div>
                <img
                  src="/logo.png"
                  alt="Connor O'Dea Logo"
                  width={300}
                  height={300}
                  className="relative z-10 mx-auto"
                />
              </div>
            </div>
          </div>
          <ClientLogos />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-prussian text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AI Services</h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive AI solutions tailored to your business needs
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                colorClass={
                  index % 3 === 0
                    ? "from-caribbean to-midnight-2"
                    : index % 3 === 1
                      ? "from-midnight-3 to-prussian"
                      : "from-space to-purple-2"
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="w-full py-12 md:py-24 lg:py-32 bg-charcoal text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Process</h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A systematic approach to delivering successful AI projects
              </p>
            </div>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-space text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">GitHub Projects</h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore my open-source projects and AI implementations
              </p>
            </div>
          </div>

          {/* GitHub Stats */}
          <GitHubStats />

          {/* Dynamic GitHub Projects */}
          <GitHubProjects />
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="w-full py-12 md:py-24 lg:py-32 bg-purple text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technologies</h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The cutting-edge tools and frameworks I use to build AI solutions
              </p>
            </div>
          </div>
          <Technologies />
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="w-full py-12 md:py-24 lg:py-32 bg-midnight-2 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Case Studies</h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Real-world AI implementations that delivered measurable results
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard
                key={caseStudy.title}
                title={caseStudy.title}
                client={caseStudy.client}
                description={caseStudy.description}
                results={caseStudy.results}
                image={caseStudy.image}
                colorClass={index % 2 === 0 ? "from-caribbean to-midnight-3" : "from-midnight-3 to-charcoal"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Download Section */}
      <section className="w-full py-12 md:py-20 bg-gradient-to-r from-purple-2 to-palatinate text-white">
        <div className="container px-4 md:px-6">
          <CtaDownload />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-charcoal text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Client Testimonials</h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                What clients say about working with me
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                company={testimonial.company}
                colorClass={
                  index % 3 === 0
                    ? "from-midnight-2 to-charcoal"
                    : index % 3 === 1
                      ? "from-charcoal to-prussian"
                      : "from-prussian to-space"
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-prussian text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AI Insights Blog</h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Latest thoughts, research, and insights on AI and machine learning
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {blogPosts.slice(0, 3).map((post, index) => (
              <BlogCard
                key={post.title}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                category={post.category}
                image={post.image}
                slug={post.slug}
                colorClass={
                  index % 3 === 0
                    ? "from-space to-purple"
                    : index % 3 === 1
                      ? "from-purple to-purple-2"
                      : "from-purple-2 to-palatinate"
                }
              />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/blog">
              <Button variant="outline" className="gap-2 border-purple-2 text-white hover:bg-purple-2/20">
                View All Articles
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="mt-16">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-space text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing Plans</h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Flexible options to meet your AI consulting and development needs
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.name}
                name={plan.name}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                colorClass={
                  index === 0
                    ? "from-midnight-2 to-charcoal"
                    : index === 1
                      ? "from-purple to-purple-2"
                      : "from-palatinate to-purple-2"
                }
                popular={index === 1}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-4">Need a custom solution? Let's discuss your specific requirements.</p>
            <Link href="#contact" passHref>
              <Button className="bg-caribbean hover:bg-midnight text-white">Contact for Custom Quote</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-purple text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Common questions about AI consulting and services
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-12">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-purple-2/30">
                <AccordionTrigger className="text-white hover:text-caribbean">
                  What types of businesses can benefit from AI solutions?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Businesses across all industries can benefit from AI solutions. Whether you're in healthcare, finance,
                  retail, manufacturing, or services, AI can help automate processes, gain insights from data, enhance
                  customer experiences, and drive innovation. The key is identifying the right AI applications for your
                  specific business challenges.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-purple-2/30">
                <AccordionTrigger className="text-white hover:text-caribbean">
                  How long does it typically take to implement an AI solution?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Implementation timelines vary based on the complexity of the solution, the availability of data, and
                  the scope of integration required. Simple AI implementations might take 4-8 weeks, while more complex
                  enterprise solutions could take 3-6 months. During our initial consultation, I'll provide a more
                  accurate timeline based on your specific requirements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-purple-2/30">
                <AccordionTrigger className="text-white hover:text-caribbean">
                  Do I need a large dataset to implement AI in my business?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  While having quality data is important for many AI applications, you don't always need massive
                  datasets to get started. Many modern AI approaches can work with smaller datasets, and there are
                  techniques like transfer learning and few-shot learning that can be effective with limited data.
                  Additionally, we can help you identify data collection strategies or leverage pre-trained models that
                  require less data.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-purple-2/30">
                <AccordionTrigger className="text-white hover:text-caribbean">
                  How do you ensure the security and privacy of our data?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Data security and privacy are top priorities in all my AI implementations. I follow industry best
                  practices for data protection, including encryption, secure access controls, and compliance with
                  relevant regulations like GDPR or CCPA. All projects begin with a thorough assessment of data security
                  requirements, and I implement appropriate safeguards throughout the development process.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-purple-2/30">
                <AccordionTrigger className="text-white hover:text-caribbean">
                  What ongoing support do you provide after implementation?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  I offer various support options after implementation, including monitoring, maintenance, and
                  performance optimization. AI systems often require ongoing attention to ensure they continue to
                  perform well as data patterns change. Support packages can be tailored to your needs, from basic
                  technical support to comprehensive managed services that include regular updates and model retraining.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-purple-2 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm an AI consultant specializing in developing custom AI solutions and automation systems for
                  businesses of all sizes.
                </p>
              </div>
              <div className="space-y-4 text-gray-200">
                <p>
                  With extensive experience in machine learning, natural language processing, and AI integration, I help
                  organizations leverage the power of artificial intelligence to solve complex problems and drive
                  innovation.
                </p>
                <p>
                  My approach combines technical expertise with a deep understanding of business needs, ensuring that AI
                  solutions deliver real value and measurable results.
                </p>
                <p>
                  I'm passionate about open-source development and regularly contribute to the AI community through
                  GitHub projects and knowledge sharing.
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Certifications & Credentials</h3>
                <Certifications />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-lg bg-gradient-to-br from-palatinate to-purple p-8 text-white shadow-lg">
                <h3 className="text-xl font-bold mb-4">Expertise</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-caribbean"></div>
                    <span>Machine Learning & Deep Learning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-midnight"></div>
                    <span>Natural Language Processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-midnight-2"></div>
                    <span>Computer Vision</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-midnight-3"></div>
                    <span>AI Automation Systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-charcoal"></div>
                    <span>LLM Integration & Fine-tuning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-prussian"></div>
                    <span>AI Strategy Consulting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-space"></div>
                    <span>Full-stack Development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-palatinate text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to transform your business with AI? Let's discuss your project.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex flex-col space-y-4">
                <input
                  className="flex h-10 w-full rounded-md border border-purple/50 bg-purple-2/30 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-caribbean focus:ring-offset-2 focus:ring-offset-palatinate disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your name"
                  type="text"
                />
                <input
                  className="flex h-10 w-full rounded-md border border-purple/50 bg-purple-2/30 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-caribbean focus:ring-offset-2 focus:ring-offset-palatinate disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your email"
                  type="email"
                />
                <textarea
                  className="flex min-h-[120px] w-full rounded-md border border-purple/50 bg-purple-2/30 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-caribbean focus:ring-offset-2 focus:ring-offset-palatinate disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your message"
                ></textarea>
                <Button className="bg-caribbean hover:bg-midnight text-white">Send Message</Button>
              </form>
            </div>
            <div className="flex gap-4 mt-6">
              <Link
                href="mailto:contact@example.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>Email</span>
              </Link>
              <Link
                href="https://github.com/connorodea"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-midnight-3 text-gray-300">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Connor O'Dea Logo" width={40} height={40} className="rounded-full" />
              <span className="text-white font-semibold">Connor O'Dea</span>
            </div>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Connor O'Dea. All rights reserved.</p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/connorodea"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:contact@example.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

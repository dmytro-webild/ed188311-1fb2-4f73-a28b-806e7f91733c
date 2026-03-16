"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroLogoBillboard from "@/components/sections/hero/HeroLogoBillboard";
import TextAbout from "@/components/sections/about/TextAbout";
import FeatureCardNineteen from "@/components/sections/feature/FeatureCardNineteen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TestimonialCardFive from "@/components/sections/testimonial/TestimonialCardFive";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import ContactText from "@/components/sections/contact/ContactText";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Sparkles, Lightbulb, Zap, Award, Heart, Shield, Brain, Target, Palette, Code, Lock, CheckCircle, Star, Briefcase, Users, TrendingUp, Trophy, Linkedin, Twitter, Instagram, Github } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="aurora"
      cardStyle="layered-gradient"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="CreativeStudio"
          navItems={[
            { name: "Services", id: "services" },
            { name: "Work", id: "work" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Start Project",            href: "#contact"
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="CreativeStudio"
          description="We're a forward-thinking creative web agency specializing in stunning design, powerful development, and strategic branding that drives measurable results for ambitious brands."
          buttons={[
            { text: "Start Your Project", href: "#contact" },
            { text: "View Our Work", href: "#work" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/young-creative-people-working-together-with-laptop-group-cool-guys-working-new-project-while-spending-time-modern-office_574295-5685.jpg"
          imageAlt="Creative agency dashboard showcasing modern design tools and portfolio"
          mediaAnimation="slide-up"
          frameStyle="card"
          background={{ variant: "sparkles-gradient" }}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="About CreativeStudio"
          tagIcon={Lightbulb}
          tagAnimation="slide-up"
          title="We craft digital experiences that inspire, engage, and convert. Combining strategic thinking with creative excellence, we partner with brands to achieve their boldest ambitions."
          buttons={[
            { text: "Learn More About Us", href: "#" }
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardNineteen
          tag="Our Expertise"
          tagIcon={Zap}
          tagAnimation="slide-up"
          title="Comprehensive Digital Solutions"
          description="From concept to launch, we deliver end-to-end creative services tailored to elevate your brand and drive business growth."
          textboxLayout="default"
          useInvertedBackground={true}
          buttonAnimation="slide-up"
          features={[
            {
              id: 1,
              tag: "Design",              title: "Web Design",              subtitle: "Stunning Visual Experiences",              description: "We create beautiful, intuitive websites that captivate users and reflect your brand's unique personality. Every pixel is purposeful.",              imageSrc: "http://img.b2bpic.net/free-vector/flat-design-responsive-website-design_23-2149483806.jpg?_wi=1",              imageAlt: "Web design mockup showing responsive layouts and modern interface",              buttons: [{ text: "Explore Design Services", href: "#" }]
            },
            {
              id: 2,
              tag: "Development",              title: "Web Development",              subtitle: "Powerful Technology Solutions",              description: "Our expert developers build fast, scalable, and secure web applications using cutting-edge technology stacks and best practices.",              imageSrc: "http://img.b2bpic.net/free-photo/desk-with-multiple-computer-monitors-displaying-parsing-code-programming-language-compiling-empty-software-developing-agency-office-servers-cloud-computing-big-data-algorithms_482257-33541.jpg?_wi=1",              imageAlt: "Developer workspace showing modern coding environment and tools",              buttons: [{ text: "Explore Development Services", href: "#" }]
            },
            {
              id: 3,
              tag: "Branding",              title: "Strategic Branding",              subtitle: "Identity That Resonates",              description: "We develop comprehensive brand strategies and identities that tell your story, build trust, and create lasting connections with your audience.",              imageSrc: "http://img.b2bpic.net/free-photo/colleagues-generating-ideas_53876-42869.jpg?_wi=1",              imageAlt: "Branding guide showing color palette, logo concepts, and identity guidelines",              buttons: [{ text: "Explore Branding Services", href: "#" }]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          tag="Our Impact"
          tagIcon={Award}
          tagAnimation="slide-up"
          title="Proven Results That Speak for Themselves"
          description="We measure success by the impact we create for our clients. Our data-driven approach ensures every project delivers tangible business value."
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="bento-grid"
          animationType="scale-rotate"
          metrics={[
            {
              id: "metric-1",              value: "500+",              title: "Projects Delivered",              description: "Successfully completed projects across industries",              icon: CheckCircle
            },
            {
              id: "metric-2",              value: "98%",              title: "Client Satisfaction",              description: "Repeat clients and positive testimonials",              icon: Star
            },
            {
              id: "metric-3",              value: "12+",              title: "Years in Business",              description: "Trusted partner for digital transformation",              icon: Briefcase
            },
            {
              id: "metric-4",              value: "50+",              title: "Team Members",              description: "Diverse experts in design and technology",              icon: Users
            },
            {
              id: "metric-5",              value: "$50M+",              title: "Client Revenue Growth",              description: "Average revenue increase for our partners",              icon: TrendingUp
            },
            {
              id: "metric-6",              value: "25",              title: "Industry Awards",              description: "Recognition for excellence and innovation",              icon: Trophy
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          tag="Client Success Stories"
          tagIcon={Heart}
          tagAnimation="slide-up"
          title="What Our Clients Say About Us"
          description="Real feedback from real clients who've transformed their digital presence with our creative solutions and strategic expertise."
          textboxLayout="default"
          useInvertedBackground={true}
          buttonAnimation="slide-up"
          testimonials={[
            {
              id: "testimonial-1",              name: "Sarah Mitchell",              date: "October 2024",              title: "CEO at TechVenture",              quote: "CreativeStudio completely transformed our digital presence. Their strategic approach and creative excellence delivered results beyond our expectations.",              tag: "Web Development",              avatarSrc: "http://img.b2bpic.net/free-photo/beautiful-corporate-woman-looks-dreamy-smiles-stands-outside-street-leans-her-head-hands_1258-193991.jpg",              avatarAlt: "Sarah Mitchell headshot"
            },
            {
              id: "testimonial-2",              name: "Marcus Thompson",              date: "September 2024",              title: "Marketing Director at InnovateCo",              quote: "The team's dedication to understanding our brand vision was exceptional. The final product exceeded all our expectations and drove significant engagement.",              tag: "Branding",              avatarSrc: "http://img.b2bpic.net/free-photo/portrait-cheerful-teenage-girl-sitting-cafe_1262-3048.jpg",              avatarAlt: "Marcus Thompson headshot"
            },
            {
              id: "testimonial-3",              name: "Jessica Chen",              date: "August 2024",              title: "Founder at GrowthHub",              quote: "Working with CreativeStudio was a game-changer. Their expertise in both design and development created a seamless, stunning platform for our users.",              tag: "Design & Development",              avatarSrc: "http://img.b2bpic.net/free-photo/positive-confident-businessman-posing-outside_74855-1183.jpg",              avatarAlt: "Jessica Chen headshot"
            },
            {
              id: "testimonial-4",              name: "David Kumar",              date: "July 2024",              title: "Product Manager at DigitalFirst",              quote: "From initial strategy to final launch, CreativeStudio demonstrated exceptional professionalism and creative problem-solving throughout the entire project.",              tag: "Strategy & Design",              avatarSrc: "http://img.b2bpic.net/free-photo/image-corporate-woman-working-office-sitting-front-laptop-preparing-business_1258-194628.jpg",              avatarAlt: "David Kumar headshot"
            },
            {
              id: "testimonial-5",              name: "Emily Rodriguez",              date: "June 2024",              title: "VP of Growth at StartupX",              quote: "The team's deep understanding of our market and users resulted in a platform that truly resonates. Highly recommended for any ambitious brand.",              tag: "Full Service",              avatarSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1649.jpg",              avatarAlt: "Emily Rodriguez headshot"
            },
            {
              id: "testimonial-6",              name: "James Wilson",              date: "May 2024",              title: "CEO at BrandForce",              quote: "CreativeStudio combined strategic thinking with exceptional creativity. They didn't just build us a website—they created an experience that converts.",              tag: "Web Design",              avatarSrc: "http://img.b2bpic.net/free-photo/photographer-woman-girl-is-holding-dslr-camera-taking-photographs-smiling-young-woman-using-camera-take-photo-outdoors_1391-387.jpg",              avatarAlt: "James Wilson headshot"
            }
          ]}
        />
      </div>

      <div id="service-details" data-section="service-details">
        <FeatureCardTen
          tag="Why Choose Us"
          tagIcon={Shield}
          tagAnimation="slide-up"
          title="The Creative Advantage"
          description="We combine strategic thinking, creative excellence, and technical expertise to deliver digital solutions that truly make a difference."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="blur-reveal"
          features={[
            {
              id: "feature-1",              title: "Strategic Approach",              description: "Every project starts with deep research and strategic planning to ensure we deliver solutions that drive real business results.",              media: {
                imageSrc: "http://img.b2bpic.net/free-vector/flat-design-responsive-website-design_23-2149483806.jpg?_wi=2",                imageAlt: "Strategic planning and research visualization"
              },
              items: [
                { icon: Brain, text: "Data-driven insights" },
                { icon: Target, text: "Focused objectives" },
                { icon: Zap, text: "Strategic execution" }
              ],
              reverse: false
            },
            {
              id: "feature-2",              title: "Creative Excellence",              description: "Our designers and creatives push boundaries to create work that captivates, inspires, and differentiates your brand in the market.",              media: {
                imageSrc: "http://img.b2bpic.net/free-photo/colleagues-generating-ideas_53876-42869.jpg?_wi=2",                imageAlt: "Creative design process and artistic excellence"
              },
              items: [
                { icon: Palette, text: "Innovative design" },
                { icon: Sparkles, text: "Brand storytelling" },
                { icon: Heart, text: "Emotional connection" }
              ],
              reverse: true
            },
            {
              id: "feature-3",              title: "Technical Mastery",              description: "Our developers leverage cutting-edge technologies and best practices to build robust, scalable, and secure digital solutions.",              media: {
                imageSrc: "http://img.b2bpic.net/free-photo/desk-with-multiple-computer-monitors-displaying-parsing-code-programming-language-compiling-empty-software-developing-agency-office-servers-cloud-computing-big-data-algorithms_482257-33541.jpg?_wi=2",                imageAlt: "Advanced development and technology implementation"
              },
              items: [
                { icon: Code, text: "Modern stack" },
                { icon: Zap, text: "High performance" },
                { icon: Lock, text: "Security first" }
              ],
              reverse: false
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to Transform Your Digital Future?"
          animationType="entrance-slide"
          buttons={[
            { text: "Schedule a Consultation", href: "#" },
            { text: "Get a Free Quote", href: "#" }
          ]}
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="CreativeStudio"
          copyrightText="© 2025 CreativeStudio. All rights reserved."
          socialLinks={[
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "Visit our LinkedIn profile" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Follow us on Twitter" },
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Follow us on Instagram" },
            { icon: Github, href: "https://github.com", ariaLabel: "Visit our GitHub" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
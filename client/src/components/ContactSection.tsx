import { useRef, useState } from "react";
import { MatrixBackground } from "./MatrixBackground";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Globe, Send, Github, Linkedin, Twitter, FileText } from "lucide-react";
import { FaMedium } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { apiRequest } from "@/lib/queryClient";
import { FormValues } from "@/types";
import { contactFormSchema } from "@shared/schema";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const { registerElement } = useScrollAnimation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const form = useForm<FormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-black relative overflow-hidden"
      ref={sectionRef}
    >
      <MatrixBackground opacity={0.1} />
      <div className="container mx-auto px-6">
        <div 
          className="mb-12"
          ref={el => registerElement(el)}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div 
            className="lg:col-span-2"
            ref={el => registerElement(el)}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                    <Mail className="text-primary dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Email</h4>
                    <a 
                      href="mailto:palak.lohade@example.com" 
                      className="text-primary dark:text-blue-400 hover:underline"
                    >
                      palak.lohade@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                    <MapPin className="text-accent dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">Vadodara, Gujarat, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4">
                    <Globe className="text-secondary dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Social Profiles</h4>
                    <div className="flex space-x-4 mt-2">
                      <a 
                        href="https://github.com/palaklohade" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors" 
                        aria-label="GitHub"
                      >
                        <Github />
                      </a>
                      <a 
                        href="https://linkedin.com/in/palaklohade" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors" 
                        aria-label="LinkedIn"
                      >
                        <Linkedin />
                      </a>
                      <a 
                        href="https://twitter.com/palaklohade" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors" 
                        aria-label="Twitter"
                      >
                        <Twitter />
                      </a>
                      <a 
                        href="https://medium.com/@palaklohade" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors" 
                        aria-label="Medium"
                      >
                        <FaMedium />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Let's Connect</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <Button className="inline-flex items-center" asChild>
                  <a 
                    href="/resume.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="mr-2 h-4 w-4" /> Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-3"
            ref={el => registerElement(el)}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send Me a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              {...field} 
                              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your email" 
                              type="email" 
                              {...field}
                              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Subject" 
                            {...field}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            rows={5}
                            {...field}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white resize-none" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full flex items-center justify-center shadow-md hover:shadow-lg"
                    disabled={isSubmitting}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

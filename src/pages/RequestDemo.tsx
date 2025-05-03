
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MainLayout from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { CheckCircle } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  companyName: z.string().min(1, { message: "Company name is required" }),
  jobTitle: z.string().min(1, { message: "Job title is required" }),
  companySize: z.string({
    required_error: "Please select your company size",
  }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const RequestDemo = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      jobTitle: "",
      companySize: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // This would typically connect to your backend API or CRM
    console.log("Form submitted:", data);
    
    // Show success toast
    toast({
      title: "Demo request submitted!",
      description: "We'll contact you within 24 hours to schedule your demo.",
    });
    
    // Show success state
    setIsSubmitted(true);
  };

  return (
    <MainLayout>
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Request a Demo</h1>
            <p className="text-xl text-gray-700">
              See how VaraHR can transform your recruitment process with AI-powered tools and workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="order-2 md:order-1">
                {!isSubmitted ? (
                  <div className="bg-white p-8 rounded-xl shadow-sm">
                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                    
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="John" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Work Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john.doe@company.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="ACME Inc." {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="jobTitle"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Job Title</FormLabel>
                                <FormControl>
                                  <Input placeholder="HR Manager" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="companySize"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Size</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select company size" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="1-10">1-10 employees</SelectItem>
                                  <SelectItem value="11-50">11-50 employees</SelectItem>
                                  <SelectItem value="51-200">51-200 employees</SelectItem>
                                  <SelectItem value="201-500">201-500 employees</SelectItem>
                                  <SelectItem value="501-1000">501-1000 employees</SelectItem>
                                  <SelectItem value="1000+">1000+ employees</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
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
                              <FormLabel>Message (Optional)</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Tell us about your specific hiring challenges or requirements..."
                                  className="min-h-[100px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                Any specific features you're interested in?
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <Button type="submit" size="lg" className="w-full">
                          Request Demo
                        </Button>
                      </form>
                    </Form>
                  </div>
                ) : (
                  <div className="bg-white p-12 rounded-xl shadow-sm text-center">
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                    <p className="text-lg text-gray-700 mb-6">
                      Your demo request has been received. One of our team members will contact you within 24 hours to schedule your personalized demo.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Submit Another Request
                    </Button>
                  </div>
                )}
              </div>
              
              <div className="order-1 md:order-2">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">What to Expect</h2>
                    <ul className="space-y-4">
                      <li className="flex">
                        <div className="mr-4">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                            1
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Quick Response</h3>
                          <p className="text-gray-700">
                            Our team will reach out within 24 hours to schedule your demo.
                          </p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="mr-4">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                            2
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Personalized Demo</h3>
                          <p className="text-gray-700">
                            See VaraHR in action with a custom demonstration tailored to your specific hiring needs.
                          </p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="mr-4">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                            3
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Q&A Session</h3>
                          <p className="text-gray-700">
                            Get all your questions answered by our product specialists.
                          </p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="mr-4">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                            4
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Customized Proposal</h3>
                          <p className="text-gray-700">
                            Receive a tailored solution recommendation and pricing based on your organization's unique needs.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                    <h3 className="font-semibold text-lg mb-3">Why Request a Demo?</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                        <span>See our AI-powered hiring tools in action</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                        <span>Learn how VaraHR can address your specific hiring challenges</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                        <span>Discover how other companies have improved their hiring process</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                        <span>Get expert recommendations on optimizing your recruitment workflow</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="font-semibold text-lg mb-4">What Our Clients Say</h3>
                    <blockquote className="text-gray-700 italic">
                      "The VaraHR demo was eye-opening. Seeing the platform in action showed me exactly how much time and effort we could save in our hiring process. We implemented it the following week."
                    </blockquote>
                    <div className="mt-4">
                      <p className="font-medium">Priya Sharma</p>
                      <p className="text-sm text-gray-600">Head of Talent Acquisition, Mindtree</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default RequestDemo;

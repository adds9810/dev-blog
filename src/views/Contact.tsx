import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Section } from '../components/ui/Section';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';

// Zod Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="max-w-6xl mx-auto py-12">
        <Section className="grid md:grid-cols-2 gap-16">
            {/* Left: Info */}
            <div>
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6">Get in Touch</h1>
                <p className="text-zinc-600 dark:text-zinc-400 mb-12 text-lg">
                    Have a project in mind or want to discuss the latest in frontend tech? 
                    I'm always open to new opportunities and interesting conversations.
                </p>

                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                            <Mail className="text-zinc-900 dark:text-white" size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Email</h3>
                            <a href="mailto:hello@example.com" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 transition-colors">hello@example.com</a>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                            <MapPin className="text-zinc-900 dark:text-white" size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Location</h3>
                            <p className="text-zinc-600 dark:text-zinc-400">Seoul, South Korea</p>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
                        <h3 className="font-semibold text-zinc-900 dark:text-white mb-4">Connect</h3>
                        <div className="flex gap-4">
                            <a href="#" className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-zinc-900 dark:text-white">
                                <Github size={20} />
                            </a>
                            <a href="#" className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-zinc-900 dark:text-white">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: Form */}
            <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Name</label>
                        <input 
                            {...register('name')}
                            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            placeholder="John Doe"
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Email</label>
                        <input 
                            {...register('email')}
                            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            placeholder="john@example.com"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Message</label>
                        <textarea 
                            {...register('message')}
                            rows={5}
                            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                            placeholder="Tell me about your project..."
                        />
                        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>

                    {isSuccess && (
                        <div className="p-4 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-xl text-center font-medium">
                            Message sent successfully!
                        </div>
                    )}
                </form>
            </div>
        </Section>
    </div>
  );
};

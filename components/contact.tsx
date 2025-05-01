"use client"

import type React from "react"
import { useState } from "react"
import Head from 'next/head'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitSuccess(false), 3000)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "ashishbox13@gmail.com",
      link: "mailto:ashishbox13@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+91-8073392045",
      link: "tel:+918073392045",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Karnataka, India",
      link: "https://maps.google.com/?q=Karnataka,+India",
    },
  ]

  return (
    <>
      <Head>
        <title>Contact Ashish - Web Developer | Karnataka, India</title>
        <meta name="description" content="Get in touch with Ashish for web development projects, collaborations, or inquiries. Based in Karnataka, India." />
        <meta name="keywords" content="contact, web developer, Karnataka, India, freelance developer" />
      </Head>

      <section 
        id="contact" 
        className="py-20 bg-muted/30"
        aria-label="Contact section"
        itemScope 
        itemType="https://schema.org/ContactPage"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold" itemProp="name">Get In Touch</h1>
            <div className="mt-2 h-1 w-20 bg-primary mx-auto" role="presentation"></div>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto" itemProp="description">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto" itemScope itemType="https://schema.org/Person">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div 
                    className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4" 
                    aria-hidden="true"
                  >
                    {info.icon}
                  </div>
                  <h2 className="font-medium mb-1">{info.title}</h2>
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    itemProp={info.title.toLowerCase()}
                    aria-label={`${info.title}: ${info.value}`}
                  >
                    {info.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  aria-label="Contact form"
                  itemScope 
                  itemType="https://schema.org/ContactForm"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        aria-required="true"
                        itemProp="name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john.doe@example.com"
                        required
                        aria-required="true"
                        itemProp="email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      aria-required="true"
                      itemProp="subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                      aria-required="true"
                      itemProp="message"
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                  {submitSuccess && (
                    <div 
                      className="p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 rounded-md text-center"
                      role="alert"
                      aria-live="polite"
                    >
                      Your message has been sent successfully!
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

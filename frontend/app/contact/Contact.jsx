"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import DOMPurify from "dompurify";
import { Phone, MapPin, Mail, Send } from "lucide-react";
import API from "../api/api";
import { showCarToast } from "../components/CarToast";


// =========================
// ZOD VALIDATION
// =========================

export const metadata = {
  title: "Contact Alfaz Cab Service | Book a Cab in Goa",
  description:
    "Contact Alfaz Cab Service to book a reliable cab in Goa for airport transfers, local rides, sightseeing, and outstation travel.",
  alternates: {
    canonical: "https://yourdomain.com/contact",
  },
  keywords: [
    "book cab Goa",
    "contact cab service Goa",
    "cab booking Goa contact",
    "taxi booking Goa",
    "Alfaz cab booking",
    "Goa taxi booking",
    "airport taxi booking Goa",
    "local cab booking Goa",
    "Goa sightseeing cab booking",
    "outstation cab booking Goa",
  ],
};


const contactSchema = z.object({
  name: z.string().trim().min(3, "Name must be at least 3 characters").max(30, "Name must be less than 30 characters"),
  email: z.string().trim().email("Enter a valid email address"),
  message: z.string().trim().min(3, "Message must be at least 3 characters").max(100, "Message must be less than 100 characters"),
});


export default function Contact() {

  // REACT HOOK FORM 
  const {  register,handleSubmit,reset,
    formState: {
      errors,
      isSubmitting,
      isSubmitSuccessful,
    },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },

  });
 
  // FORM SUBMIT 
  const handleFormSubmit = async (data) => {

    // DOMPurify
    const cleanData = {
      name: DOMPurify.sanitize(data.name,{ALLOWED_TAGS: [], ALLOWED_ATTR: [],}).trim(),
      email: DOMPurify.sanitize(data.email,{ALLOWED_TAGS: [], ALLOWED_ATTR: [],}).trim(),
      message: DOMPurify.sanitize(data.message,{ALLOWED_TAGS: [],ALLOWED_ATTR: [], }).trim(),
    };


    try {

      await API.post("/api/contact",cleanData);
      showCarToast( "success","Enquiry sent — our team will call you shortly.");
      reset();

    } catch (err) { 
      showCarToast( "error",err.response?.data?.message||"Something went wrong. Please try again later.");
    }

  };


  return (
<div id="contact" className="mb-20 sm:mb-28 lg:mb-40 grid grid-cols-1 lg:grid-cols-[45%_55%] gap-6 md:gap-8 min-h-screen lg:h-screen text-white p-4 sm:p-6 md:p-8" style={{ backgroundColor: "#0C0C0C" }}>

  {/* Left Side */}
  <div className="flex flex-col gap-6 md:gap-8">

    {/* LOCATION */}
    <div className="border border-gray-700 rounded-lg p-5 sm:p-6 md:p-8 hover:border-gray-500 transition-colors duration-300">
      <div className="grid grid-cols-1 sm:grid-cols-[40%_60%] gap-4 sm:gap-3 mb-6">
        {/* ADDRESS */}
        <div>
          <div className="flex flex-row gap-2 mb-4 sm:mb-5">
            <MapPin size={24} className="text-blue-400" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Location</h2>
          </div>

          <p className="text-sm text-gray-400 uppercase tracking-wide mb-1">Address</p>
          <p className="text-base sm:text-lg font-medium">Madgaon, Goa</p>
          <p className="text-sm text-gray-400">India</p>
        </div>

        {/* MAP */}
        <div className="border border-gray-700 h-48 sm:h-full w-full rounded-l hover:border-white transition-colors duration-300">
          <iframe className="w-full h-full p-1 border-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30769.381009294608!2d73.99188062193605!3d15.421231532010417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfbaea8337557f%3A0xa00a91a9e0467fcf!2sSharifa%20Residency%2C%20Electricity%20Dept%20Staff%20Residential%20Colony%2C%20Ponda%2C%20Goa%20403401!5e0!3m2!1sen!2sin!4v1786640265100!5m2!1sen!2sin" title="Location Map" />
        </div>

      </div>

      {/* HOURS */}

      <div className="space-y-4 text-gray-300">

        <div className="pt-4 border-t border-gray-700">

          <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">Hours</p>
          <p className="text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p className="text-sm">Saturday: 10:00 AM - 4:00 PM</p>
          <p className="text-sm">Sunday: Closed</p>

        </div>

      </div>

    </div>

    {/* PHONE */}
    <div className="border border-gray-700 rounded-lg p-5 sm:p-6 md:p-8 hover:border-gray-500 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-5 sm:mb-6">
        <Phone size={24} className="text-green-400" />
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Get in Touch</h2>
      </div>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">
            Phone
            <span className="ml-4 text-base sm:text-lg font-medium text-gray-300 mb-4">+91 (9876) 543-210</span>
          </p>
        </div>

        <button onClick={() => (window.location.href = "tel:+919876543210")} className="w-full bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
          <Phone size={18} />
          Start Call
        </button>
      </div>
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="border border-gray-700 rounded-lg p-5 sm:p-6 md:p-8 hover:border-gray-500 transition-colors duration-300 flex flex-col">
    {/* TITLE */}
    <div className="flex items-center gap-3 mb-6 md:mb-8">
      <Mail size={24} className="text-purple-400" />
      <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Send us a Message</h2>
    </div>


    {/* FORM */}
    <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-5 sm:gap-6 flex-1">
      {/* NAME */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-gray-300 uppercase tracking-wide">Full Name</label>
        <input type="text" id="name" placeholder="Your name" {...register("name")} className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors duration-300" />
        {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
      </div>

      {/* EMAIL */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-300 uppercase tracking-wide">Email Address</label>
        <input type="email" id="email" placeholder="your.email@example.com" {...register("email")} className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors duration-300" />
        {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
      </div>

      {/* MESSAGE */}
      <div className="flex flex-col gap-2 flex-1">
        <label htmlFor="message" className="text-sm font-medium text-gray-300 uppercase tracking-wide">Message</label>
        <textarea id="message" rows="5" placeholder="Tell us what's on your mind..." {...register("message")} className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors duration-300 resize-none flex-1" />
        {errors.message && <p className="text-red-400 text-sm">{errors.message.message}</p>}
      </div>

      {/* SUBMIT BUTTON */}
      <button type="submit" disabled={isSubmitting} className="bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 mt-auto">
        <Send size={18} />
        {isSubmitting ? "Sending..." : isSubmitSuccessful ? "Message Sent!" : "Send Message"}
      </button>
    </form>
  </div>

</div>
  );
}
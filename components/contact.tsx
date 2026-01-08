"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24  px-4 md:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12 text-balance">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className="space-y-6 flex flex-col md:flex-row md:items-start md:justify-center md:gap-8">
          <a
            href="mailto:sreerajkattippallam003@gmail.com"
            style={{ border: "0.1px solid #1c1f24" }}
            className="bg-[#0f1216] py-6 rounded-2xl"
          >
            <CardContent className="p-6 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground">hello@example.com</p>
              </div>
            </CardContent>
          </a>

          <a
            href="tel:+919072238717"
            style={{ border: "0.1px solid #1c1f24" }}
            className="bg-[#0f1216] py-6 rounded-2xl"
          >
            <CardContent className="p-6 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-muted-foreground">+91 9072238717</p>
              </div>
            </CardContent>
          </a>

          <Card
            onClick={() =>
              window.open(
                "https://wa.me/9072238717?text=Hi Sreeraj, Are you available to discuss a project?",
                "_blank"
              )
            }
          >
            <CardContent className="p-6 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <MessageCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">WhatsApp</h3>
                <p className="text-muted-foreground">+91 9072238717</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} MERN Stack Developer</p>
      </footer>
    </section>
  );
}

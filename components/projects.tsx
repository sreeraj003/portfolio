import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Auditing platform",
    description:
      "Full-featured auditing camera captured images and its auditing platfrom for neumerous devices.",
    technologies: ["React", "Node.js", "PostgreSQL", "Redux", "Apexcharts"],
    image: "/auditing.png",
  },
  {
    title: "Association home page",
    description:
      "Well informatory home page for an organization where interested alumnies can view and join the association.",
    technologies: ["React.js", "HTML", "Tailwind"],
    image: "/lbs-home.png",
    live: "https://lbs-home.netlify.app",
  },
  {
    title: "Industry home page",
    description:
      "A visually rich digital platform for a granite business, allowing customers to explore granite collections, compare properties, and request quotations online.",
    technologies: ["React.js", "HTML", "CSS", "Tailwind"],
    image: "/tronetta.png",
    live: "https://tronetta.netlify.app/",
  },
  {
    title: "Consultaion Platform",
    description:
      "A professional online medical consultation system featuring patient onboarding, doctor profiles, appointment scheduling, video consultations, and secure data handling.",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "React.js",
      "Bootstrap",
      "Socket.io",
      "WebRTC",
      "RazorPay",
    ],
    image: "/medcore.png",
    live: "https://medcorenew.netlify.app",
  },
  {
    title: "E Commerce website",
    description:
      "A professional e-commerce website for cricket products, including product listings, cart, checkout, payment integration, and admin management.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "HTML",
      "Pug",
      "Chartjs",
      "Paypal",
    ],
    image: "/stroke.png",
    live: "https://thestroke.onrender.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 md:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    {project?.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    ) : (
                      <a>Unavailable</a>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

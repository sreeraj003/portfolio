import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Web Developer",
    company: "SCITA solutions.",
    period: "2024 - Present",
    description:
      "Lead development of scalable web applications using React, Node.js and postgreSQL. Mentor junior developers and architect solutions for complex business requirements.",
    highlights: [
      "Architected and developed a major web applications increasing client satisfaction by 60%",
      "Led team of 5 developers in building enterprise SaaS platform",
      "Trained 4 juniors to develop efficient code following best practices",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Freelance Projects",
    period: "2022 - 2024",
    description:
      "Developed and maintained multiple client projects using MERN stack. Collaborated with cross-functional teams to deliver high-quality products.",
    highlights: [
      "Built 5+ production applications serving 50K+ users",
      "Optimized database queries reducing load time by 60%",
      "Integrated third-party APIs and payment gateways",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Work Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-semibold flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {exp.title}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                <p className="text-base leading-relaxed mb-4">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

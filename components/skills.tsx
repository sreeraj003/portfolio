import { Card } from "@/components/ui/card";
import { Database, Server, Layout, Code } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Layout,
    technologies: [
      "React",
      "Next.js",
      "Javascript",
      "Redux",
      "React Query",
      "Tailwind CSS",
      "Bootstrap css",
      "Material UI",
      "Apex charts",
      "Chart js",
    ],
  },
  {
    category: "Backend",
    icon: Server,
    technologies: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT Auth",
      "Socket.io",
      "WebSockets",
    ],
  },
  {
    category: "Database",
    icon: Database,
    technologies: ["MongoDB", "Mongoose", "SQL"],
  },
  {
    category: "Tools & Others",
    icon: Code,
    technologies: ["Git", "CI/CD", "Postman"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <Card
              key={skill.category}
              className="p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-secondary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

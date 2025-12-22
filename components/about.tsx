import "./style.css";

export function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-6 lg:px-8 place-items-center grid grid-cols-1 md:grid-cols-2 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About Me
        </h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-center">
            I'm a passionate full-stack developer specializing in the MERN
            stack, dedicated to building robust, scalable web applications. With
            a keen eye for detail and a commitment to writing clean,
            maintainable code, I transform complex problems into elegant
            solutions.
          </p>

          <p className="text-center">
            My journey in web development started with a fascination for how
            things work behind the scenes. Today, I leverage MongoDB's flexible
            data storage, Express's powerful routing, React's component-based
            architecture, and Node.js's efficient runtime to create seamless
            user experiences from database to UI.
          </p>

          <p className="text-center">
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with the
            developer community. I believe in continuous learning and staying
            updated with the latest industry trends and best practices.
          </p>
        </div>
      </div>
      <img
        src="/sreeraj-photo.jpeg"
        alt="Profile"
        className="profile-img w-100 h-100"
      />
    </section>
  );
}

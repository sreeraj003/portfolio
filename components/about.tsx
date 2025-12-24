import "./style.css";
export function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 md:px-6 lg:px-8 place-items-center grid grid-cols-1 md:grid-cols-2 bg-muted/30"
    >
      <div
        style={{
          backgroundImage: "url('/banner-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
        className="profile-wrapper w-80 h-auto mx-auto mb-12 md:mb-0"
      >
        <img
          src="/sreeraj-photo.jpeg"
          alt="Profile"
          className="profile-img w-100 h-100"
          style={{ filter: "drop-shadow(2px 4px 6px black)" }}
        />
      </div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Who am I?
        </h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-center">
            I'm a passionate full-stack developer specializing in the{" "}
            <span className="font-bold text-xl mx-2 text-[#009DA8]"> MERN</span>
            stack, dedicated to building robust, scalable web applications. With
            a keen eye for detail and a commitment to writing clean,
            maintainable code, I transform complex problems into elegant,
            real-world solutions.
          </p>

          <p className="text-center">
            My journey in web development started with a fascination for how
            things work behind the scenes. Today, I leverage{" "}
            <span className="font-bold text-xl mx-2 text-[#009DA8]">
              MongoDB
            </span>
            's flexible data storage, Express's powerful routing,{" "}
            <span className="font-bold text-xl mx-2 text-[#009DA8]">React</span>
            's component-based architecture, and{" "}
            <span className="font-bold text-xl mx-2 text-[#009DA8]">
              Node.js
            </span>
            's efficient runtime to create seamless user experiences using
            <span className="font-bold text-xl mx-2 text-[#009DA8]">
              Express .js
            </span>
            from database to UI.
          </p>

          <p className="text-center">
            Alongside traditional web development, I have a growing passion for
            <span className="font-bold text-xl mx-2 text-[#009DA8]">
              blockchain
            </span>{" "}
            technology and decentralized systems. I actively explore{" "}
            <span className="font-bold text-xl mx-2 text-[#009DA8]">
              smart contracts
            </span>
            ,{" "}
            <span className="font-bold text-xl mx-2 text-[#009DA8]">
              {" "}
              Web3{" "}
            </span>{" "}
            integrations, and decentralized application architectures, aiming to
            bridge modern web experiences with secure, transparent blockchain
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

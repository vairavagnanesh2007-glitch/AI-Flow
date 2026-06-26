const featureData = [
  {
    id: 1,
    icon: "🤖",
    title: "AI Automation",
    description:
      "Automate repetitive workflows using powerful artificial intelligence and improve productivity."
  },
  {
    id: 2,
    icon: "📊",
    title: "Smart Analytics",
    description:
      "Visualize business insights with interactive dashboards and real-time reporting."
  },
  {
    id: 3,
    icon: "⚡",
    title: "Lightning Fast",
    description:
      "Built with high-performance architecture for speed, scalability, and reliability."
  },
  {
    id: 4,
    icon: "🔒",
    title: "Enterprise Security",
    description:
      "Protect your business with modern encryption, authentication, and secure infrastructure."
  },
  {
    id: 5,
    icon: "☁️",
    title: "Cloud Integration",
    description:
      "Connect seamlessly with cloud services and synchronize your business from anywhere."
  },
  {
    id: 6,
    icon: "💡",
    title: "AI Assistant",
    description:
      "Receive intelligent suggestions and automate decision-making with an AI-powered assistant."
  }
];

function Features() {
  return (
    <section className="features" id="features">

      <div className="section-title">
        <span className="sub-title">OUR FEATURES</span>

        <h2>
          Everything You Need
          <br />
          To Grow Faster
        </h2>

        <p>
          Powerful AI tools designed to automate workflows, improve
          collaboration, and help your business scale efficiently.
        </p>
      </div>

      <div className="features-grid">

        {featureData.map((feature) => (

          <div className="feature-card" key={feature.id}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

            <button className="feature-btn">
              Learn More →
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Features;
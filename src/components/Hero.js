function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <span className="hero-badge">
          🚀 Trusted by 1000+ Companies
        </span>

        <h1>
          Build Smarter with
          <span> Artificial Intelligence</span>
        </h1>

        <p>
          Transform your business using next-generation AI solutions.
          Automate workflows, analyze data, and boost productivity with
          our intelligent platform.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Get Started
          </button>

          <button className="secondary-btn">
            Watch Demo
          </button>

        </div>

        <div className="hero-stats">

          <div className="stat-box">
            <h2>120K+</h2>
            <p>Users</p>
          </div>

          <div className="stat-box">
            <h2>98%</h2>
            <p>Accuracy</p>
          </div>

          <div className="stat-box">
            <h2>24/7</h2>
            <p>Support</p>
          </div>

        </div>

      </div>

      <div className="hero-right">

        <div className="dashboard-card">

          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900"
            alt="AI Dashboard"
          />

          <div className="floating-card one">
            ⚡ AI Analysis
          </div>

          <div className="floating-card two">
            📈 +240% Growth
          </div>

          <div className="floating-card three">
            🤖 Smart Automation
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
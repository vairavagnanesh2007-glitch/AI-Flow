function Footer() {

    return (

        <footer className="footer">

            <div className="footer-container">

                <div className="footer-about">

                    <h2>AI Platform</h2>

                    <p>

                        Empowering businesses with AI-powered solutions.

                        Automate, analyze and scale faster with intelligent technology.

                    </p>

                </div>

                <div className="footer-links">

                    <h3>Quick Links</h3>

                    <ul>

                        <li><a href="#home">Home</a></li>

                        <li><a href="#features">Features</a></li>

                        <li><a href="#pricing">Pricing</a></li>

                        <li><a href="#bento">Solutions</a></li>

                        <li><a href="#contact">Contact</a></li>

                    </ul>

                </div>

                <div className="footer-services">

                    <h3>Services</h3>

                    <ul>

                        <li>AI Automation</li>

                        <li>Cloud Platform</li>

                        <li>Analytics</li>

                        <li>API Integration</li>

                        <li>24/7 Support</li>

                    </ul>

                </div>

                <div className="footer-contact">

                    <h3>Contact</h3>

                    <p>📍 Chennai, India</p>

                    <p>📧 support@aiplatform.com</p>

                    <p>📞 +91 98765 43210</p>

                    <div className="social-icons">

                        <a href="/">🌐</a>

                        <a href="/">📘</a>

                        <a href="/">🐦</a>

                        <a href="/">📷</a>

                        <a href="/">💼</a>

                    </div>

                </div>

            </div>

            <hr />

            <div className="footer-bottom">

                <p>

                    © {new Date().getFullYear()} AI Platform.

                    All Rights Reserved.

                </p>

            </div>

        </footer>

    );

}

export default Footer;
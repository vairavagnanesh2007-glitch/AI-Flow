import { useState } from "react";

const pricingData = {
  Starter: {
    monthly: { INR: 499, USD: 9, EUR: 8 },
    yearly: { INR: 4799, USD: 89, EUR: 79 }
  },
  Professional: {
    monthly: { INR: 999, USD: 19, EUR: 17 },
    yearly: { INR: 9599, USD: 179, EUR: 159 }
  },
  Enterprise: {
    monthly: { INR: 2499, USD: 49, EUR: 45 },
    yearly: { INR: 23999, USD: 469, EUR: 429 }
  }
};

const symbols = {
  INR: "₹",
  USD: "$",
  EUR: "€"
};

function Pricing() {

  const [billing, setBilling] = useState("monthly");
  const [currency, setCurrency] = useState("INR");

  return (

    <section className="pricing" id="pricing">

      <div className="section-title">

        <span className="sub-title">
          PRICING
        </span>

        <h2>
          Choose The Perfect Plan
        </h2>

        <p>
          Flexible pricing for startups, businesses and enterprises.
        </p>

      </div>

      <div className="pricing-controls">

        <div className="billing-toggle">

          <button
            className={billing === "monthly" ? "active" : ""}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>

          <button
            className={billing === "yearly" ? "active" : ""}
            onClick={() => setBilling("yearly")}
          >
            Yearly
          </button>

        </div>

        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="INR">INR</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>

      </div>

      <div className="pricing-grid">

        {Object.keys(pricingData).map((plan, index) => (

          <div
            className={index === 1 ? "price-card popular" : "price-card"}
            key={plan}
          >

            {index === 1 &&

              <div className="popular-badge">
                MOST POPULAR
              </div>

            }

            <h3>{plan}</h3>

            <h1>

              {symbols[currency]}

              {pricingData[plan][billing][currency]}

            </h1>

            <p>

              {billing === "monthly"
                ? "Per Month"
                : "Per Year"}

            </p>

            <ul>

              <li>✔ AI Assistant</li>

              <li>✔ Unlimited Projects</li>

              <li>✔ Analytics Dashboard</li>

              <li>✔ API Access</li>

              <li>✔ Premium Support</li>

            </ul>

            <button className="price-btn">

              Get Started

            </button>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Pricing;
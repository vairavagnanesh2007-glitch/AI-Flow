const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "CEO, TechNova",
    review:
      "The AI Platform completely transformed our workflow. It's fast, reliable, and incredibly easy to use.",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: 2,
    name: "Sophia Williams",
    role: "Product Manager",
    review:
      "Beautiful interface, amazing AI features, and excellent customer support. Highly recommended.",
    image: "https://i.pravatar.cc/150?img=32"
  },
  {
    id: 3,
    name: "David Wilson",
    role: "Software Engineer",
    review:
      "The analytics dashboard and automation features helped us save hours every week.",
    image: "https://i.pravatar.cc/150?img=15"
  }
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">

      <div className="section-title">

        <span className="sub-title">
          TESTIMONIALS
        </span>

        <h2>
          Loved By Thousands
        </h2>

        <p>
          See what our customers say about AI Platform.
        </p>

      </div>

      <div className="testimonial-grid">

        {testimonials.map((item) => (

          <div
            className="testimonial-card"
            key={item.id}
          >

            <div className="testimonial-image">

              <img
                src={item.image}
                alt={item.name}
              />

            </div>

            <div className="stars">

              ⭐⭐⭐⭐⭐

            </div>

            <p className="review">

              "{item.review}"

            </p>

            <h3>

              {item.name}

            </h3>

            <span>

              {item.role}

            </span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Testimonials;
import { useState, useEffect } from "react";

const featureData = [
  {
    title: "AI Automation",
    description:
      "Automate repetitive workflows using powerful AI models."
  },
  {
    title: "Smart Analytics",
    description:
      "Track real-time performance with advanced dashboards."
  },
  {
    title: "Cloud Security",
    description:
      "Enterprise-level encryption keeps your data protected."
  },
  {
    title: "Workflow Integration",
    description:
      "Connect with your existing tools without changing your workflow."
  }
];

function Bento() {

  const [mobile, setMobile] = useState(window.innerWidth <= 768);

  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {

    const handleResize = () => {

      setMobile(window.innerWidth <= 768);

    };

    window.addEventListener("resize", handleResize);

    return () => {

      window.removeEventListener("resize", handleResize);

    };

  }, []);

  return (

    <section className="bento" id="bento">

      <div className="section-title">

        <span className="sub-title">

          WHY CHOOSE US

        </span>

        <h2>

          Powerful AI Features

        </h2>

        <p>

          Everything you need to automate and scale your business.

        </p>

      </div>

      {

        !mobile ?

        (

          <div className="bento-grid">

            {

              featureData.map((item,index)=>(

                <div

                  key={index}

                  className={

                    activeCard===index

                    ?

                    "bento-card active"

                    :

                    "bento-card"

                  }

                  onClick={()=>

                    setActiveCard(index)

                  }

                >

                  <div className="bento-icon">

                    🚀

                  </div>

                  <h3>

                    {item.title}

                  </h3>

                  <p>

                    {item.description}

                  </p>

                </div>

              ))

            }

          </div>

        )

        :

        (

          <div className="accordion">

            {

              featureData.map((item,index)=>(

                <div

                  className="accordion-item"

                  key={index}

                >

                  <div

                    className="accordion-header"

                    onClick={()=>

                      setActiveCard(

                        activeCard===index

                        ?

                        -1

                        :

                        index

                      )

                    }

                  >

                    <span>

                      {item.title}

                    </span>

                    <span>

                      {

                        activeCard===index

                        ?

                        "−"

                        :

                        "+"

                      }

                    </span>

                  </div>

                  {

                    activeCard===index &&

                    <div className="accordion-content">

                      <p>

                        {item.description}

                      </p>

                    </div>

                  }

                </div>

              ))

            }

          </div>

        )

      }

    </section>

  );

}

export default Bento;
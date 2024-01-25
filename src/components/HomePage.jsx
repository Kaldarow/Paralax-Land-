import React, { useEffect, useState } from "react";
import treeLeft from "../images/tree-left.png";
import treeRight from "../images/tree-right.png";
import gateLeft from "../images/gate-left.png";
import gateRight from "../images/gate-right.png";
import grass from "../images/grass.png";

const HomePage = () => {
  const [scrollValue, setScrollValue] = useState(0);

  const handleScroll = () => {
    setScrollValue(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <section className="parallax">
        <h2 id="text" style={{ marginTop: scrollValue * 2.5 + "px" }}>
          <span>Hello</span>ween
        </h2>
        <img
          src={treeLeft}
          style={{ marginLeft: scrollValue * -1.5 + "px" }}
          alt=""
          id="tree-left"
        />
        <img
          src={treeRight}
          style={{ marginLeft: scrollValue * 1.5 + "px" }}
          alt=""
          id="tree-right"
        />
        <img
          src={gateLeft}
          style={{ marginLeft: scrollValue * 0.4 + "px" }}
          alt=""
          id="gate-left"
        />
        <img
          src={gateRight}
          style={{ marginLeft: scrollValue * -0.4 + "px" }}
          alt=""
          id="gate-right"
        />
        <img src={grass} alt="" id="grass" />
      </section>

      <section className="sec">
        <h2>
          Share you thougths and ideas with <span>Hello</span>ween
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos et
          voluptate adipisci rerum quae blanditiis odit id a distinctio sint?
          Consequuntur beatae doloribus, vitae quam eveniet deserunt suscipit
          quisquam cupiditate ipsum voluptatem labore earum ea laborum
          praesentium iusto, quibusdam magni amet optio corporis. Consectetur
          facere debitis voluptates similique voluptatem nam iste? Quo, harum
          dolore quibusdam hic sed libero animi doloribus possimus! Perferendis,
          sit. Quasi nemo optio illo quibusdam amet quae, quaerat molestiae
          voluptatibus, aut doloribus nulla quos laudantium autem dicta sit
          facere officiis saepe labore culpa. Ea amet repellendus at enim
          corporis vero repudiandae animi nihil. Sed ea corporis minima tempora
          praesentium, ad iure quia omnis maxime necessitatibus doloremque
          corrupti unde ullam similique, inventore eum perspiciatis natus
          blanditiis fuga nobis quod temporibus. Dolorum corporis accusamus
          quae! Ex sit deleniti delectus eaque, minus cumque, quasi a mollitia
          doloremque consectetur atque magni corporis error tempore rerum
          laborum quam illo expedita alias minima vitae. Magnam minus cupiditate
          qui? Perspiciatis eaque sint, quam ipsam aperiam error nobis cum
          obcaecati porro! Molestias odio numquam itaque? Eos libero dignissimos
          repudiandae earum veritatis. Dolore nostrum odio voluptatem velit
          excepturi impedit sint modi! Eos veniam laborum vero! Dolores
          excepturi labore dignissimos, quaerat ipsum accusantium? Id explicabo
          nihil deserunt?<br></br>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos et
          voluptate adipisci rerum quae blanditiis odit id a distinctio sint?
          Consequuntur beatae doloribus, vitae quam eveniet deserunt suscipit
          quisquam cupiditate ipsum voluptatem labore earum ea laborum
          praesentium iusto, quibusdam magni amet optio corporis. Consectetur
          facere debitis voluptates similique voluptatem nam iste? Quo, harum
          dolore quibusdam hic sed libero animi doloribus possimus! Perferendis,
          sit. Quasi nemo optio illo quibusdam amet quae, quaerat molestiae
          voluptatibus, aut doloribus nulla quos laudantium autem dicta sit
          facere officiis saepe labore culpa. Ea amet repellendus at enim
          corporis vero repudiandae animi nihil. Sed ea corporis minima tempora
          praesentium, ad iure quia omnis maxime necessitatibus doloremque
          corrupti unde ullam similique, inventore eum perspiciatis natus
          blanditiis fuga nobis quod temporibus. Dolorum corporis accusamus
          quae! Ex sit deleniti delectus eaque, minus cumque, quasi a mollitia
          doloremque consectetur atque magni corporis error tempore rerum
          laborum quam illo expedita alias minima vitae. Magnam minus cupiditate
          qui? Perspiciatis eaque sint, quam ipsam aperiam error nobis cum
          obcaecati porro! Molestias odio numquam itaque? Eos libero dignissimos
          repudiandae earum veritatis. Dolore nostrum odio voluptatem velit
          excepturi impedit sint modi! Eos veniam laborum vero! Dolores
          excepturi labore dignissimos, quaerat ipsum accusantium? Id explicabo
          nihil deserunt?
        </p>
      </section>
    </div>
  );
};

export default HomePage;

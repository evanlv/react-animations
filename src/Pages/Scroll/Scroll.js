import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import { useState } from "react";
import { Waypoint } from "react-waypoint";

import "./Scroll.css";

const Scroll = () => {
  const [toggleTxt, setToggleTxt] = useState(false);
  const animation = useSpring({
    opacity: toggleTxt ? 1 : 0,
    transform: toggleTxt ? "translateX(0)" : "translateX(-50%)",
  });

  return (
    <div>
      <p className="scroll-txt">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
        molestiae suscipit facere amet nesciunt veniam maiores? Pariatur,
        cupiditate eius laboriosam incidunt sunt dolore dolor quod harum non
        dolores voluptatem provident, error molestias nisi aperiam. Eius
        corrupti molestiae, qui necessitatibus iste voluptatibus quam quasi,
        fugit omnis repellat nam voluptates cumque repellendus labore error
        cupiditate veniam ab nemo doloribus tempora. Eveniet impedit, deleniti
        quibusdam fuga quod repellendus sapiente doloribus! Fugiat asperiores
        quis laudantium, vero exercitationem possimus tenetur esse consectetur
        perferendis distinctio at id placeat quos animi, rem cupiditate. Earum,
        fugiat dolorem! Praesentium sed placeat culpa adipisci, ad labore
        maiores blanditiis, officiis ducimus ab sint facere doloremque minus
        incidunt obcaecati dolores dolor delectus asperiores vel quisquam quis
        cupiditate in! Veniam commodi a molestias inventore eligendi corrupti,
        temporibus eaque illo perferendis tenetur eum at eos laudantium
        architecto odio, voluptates voluptatibus esse animi? Inventore iure
        ullam ipsam minima deserunt laudantium, dolore numquam dolor? Expedita
        inventore eaque molestiae corrupti maxime ut quo modi earum esse ab
        animi quam doloremque voluptatem vitae, consequatur repellat tempore
        laboriosam possimus. Voluptate possimus amet maiores eum officiis quidem
        illo unde recusandae doloremque? Sint necessitatibus enim nihil ratione
        expedita, voluptate sequi repellendus corrupti beatae. Totam asperiores
        pariatur cum debitis animi expedita doloremque.
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
        molestiae suscipit facere amet nesciunt veniam maiores? Pariatur,
        cupiditate eius laboriosam incidunt sunt dolore dolor quod harum non
        dolores voluptatem provident, error molestias nisi aperiam. Eius
        corrupti molestiae, qui necessitatibus iste voluptatibus quam quasi,
        fugit omnis repellat nam voluptates cumque repellendus labore error
        cupiditate veniam ab nemo doloribus tempora. Eveniet impedit, deleniti
        quibusdam fuga quod repellendus sapiente doloribus! Fugiat asperiores
        quis laudantium, vero exercitationem possimus tenetur esse consectetur
        perferendis distinctio at id placeat quos animi, rem cupiditate. Earum,
        fugiat dolorem! Praesentium sed placeat culpa adipisci, ad labore
        maiores blanditiis, officiis ducimus ab sint facere doloremque minus
        incidunt obcaecati dolores dolor delectus asperiores vel quisquam quis
        cupiditate in! Veniam commodi a molestias inventore eligendi corrupti,
        temporibus eaque illo perferendis tenetur eum at eos laudantium
        architecto odio, voluptates voluptatibus esse animi? Inventore iure
        ullam ipsam minima deserunt laudantium, dolore numquam dolor? Expedita
        inventore eaque molestiae corrupti maxime ut quo modi earum esse ab
        animi quam doloremque voluptatem vitae, consequatur repellat tempore
        laboriosam possimus. Voluptate possimus amet maiores eum officiis quidem
        illo unde recusandae doloremque? Sint necessitatibus enim nihil ratione
        expedita, voluptate sequi repellendus corrupti beatae. Totam asperiores
        pariatur cum debitis animi expedita doloremque.
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
        molestiae suscipit facere amet nesciunt veniam maiores? Pariatur,
        cupiditate eius laboriosam incidunt sunt dolore dolor quod harum non
        dolores voluptatem provident, error molestias nisi aperiam. Eius
        corrupti molestiae, qui necessitatibus iste voluptatibus quam quasi,
        fugit omnis repellat nam voluptates cumque repellendus labore error
        cupiditate veniam ab nemo doloribus tempora. Eveniet impedit, deleniti
        quibusdam fuga quod repellendus sapiente doloribus! Fugiat asperiores
        quis laudantium, vero exercitationem possimus tenetur esse consectetur
        perferendis distinctio at id placeat quos animi, rem cupiditate. Earum,
        fugiat dolorem! Praesentium sed placeat culpa adipisci, ad labore
        maiores blanditiis, officiis ducimus ab sint facere doloremque minus
        incidunt obcaecati dolores dolor delectus asperiores vel quisquam quis
        cupiditate in! Veniam commodi a molestias inventore eligendi corrupti,
        temporibus eaque illo perferendis tenetur eum at eos laudantium
        architecto odio, voluptates voluptatibus esse animi? Inventore iure
        ullam ipsam minima deserunt laudantium, dolore numquam dolor? Expedita
        inventore eaque molestiae corrupti maxime ut quo modi earum esse ab
        animi quam doloremque voluptatem vitae, consequatur repellat tempore
        laboriosam possimus. Voluptate possimus amet maiores eum officiis quidem
        illo unde recusandae doloremque? Sint necessitatibus enim nihil ratione
        expedita, voluptate sequi repellendus corrupti beatae. Totam asperiores
        pariatur cum debitis animi expedita doloremque.
      </p>
      <Waypoint
        bottomOffset="30%"
        onEnter={() => {
          if (!toggleTxt) {
            setToggleTxt(true);
          }
        }}
      />
      <animated.div style={animation} className="cta-section">
        <h2>Don't miss a thing!</h2>
        <form>
          <label htmlFor="email">Subscribe to the newsletter</label>
          <input type="email" id="email" />
        </form>
      </animated.div>
      <p className="scroll-txt">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
        molestiae suscipit facere amet nesciunt veniam maiores? Pariatur,
        cupiditate eius laboriosam incidunt sunt dolore dolor quod harum non
        dolores voluptatem provident, error molestias nisi aperiam. Eius
        corrupti molestiae, qui necessitatibus iste voluptatibus quam quasi,
        fugit omnis repellat nam voluptates cumque repellendus labore error
        cupiditate veniam ab nemo doloribus tempora. Eveniet impedit, deleniti
        quibusdam fuga quod repellendus sapiente doloribus! Fugiat asperiores
        quis laudantium, vero exercitationem possimus tenetur esse consectetur
        perferendis distinctio at id placeat quos animi, rem cupiditate. Earum,
        fugiat dolorem! Praesentium sed placeat culpa adipisci, ad labore
        maiores blanditiis, officiis ducimus ab sint facere doloremque minus
        incidunt obcaecati dolores dolor delectus asperiores vel quisquam quis
        cupiditate in! Veniam commodi a molestias inventore eligendi corrupti,
        temporibus eaque illo perferendis tenetur eum at eos laudantium
        architecto odio, voluptates voluptatibus esse animi? Inventore iure
        ullam ipsam minima deserunt laudantium, dolore numquam dolor? Expedita
        inventore eaque molestiae corrupti maxime ut quo modi earum esse ab
        animi quam doloremque voluptatem vitae, consequatur repellat tempore
        laboriosam possimus. Voluptate possimus amet maiores eum officiis quidem
        illo unde recusandae doloremque? Sint necessitatibus enim nihil ratione
        expedita, voluptate sequi repellendus corrupti beatae. Totam asperiores
        pariatur cum debitis animi expedita doloremque.
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
        molestiae suscipit facere amet nesciunt veniam maiores? Pariatur,
        cupiditate eius laboriosam incidunt sunt dolore dolor quod harum non
        dolores voluptatem provident, error molestias nisi aperiam. Eius
        corrupti molestiae, qui necessitatibus iste voluptatibus quam quasi,
        fugit omnis repellat nam voluptates cumque repellendus labore error
        cupiditate veniam ab nemo doloribus tempora. Eveniet impedit, deleniti
        quibusdam fuga quod repellendus sapiente doloribus! Fugiat asperiores
        quis laudantium, vero exercitationem possimus tenetur esse consectetur
        perferendis distinctio at id placeat quos animi, rem cupiditate. Earum,
        fugiat dolorem! Praesentium sed placeat culpa adipisci, ad labore
        maiores blanditiis, officiis ducimus ab sint facere doloremque minus
        incidunt obcaecati dolores dolor delectus asperiores vel quisquam quis
        cupiditate in! Veniam commodi a molestias inventore eligendi corrupti,
        temporibus eaque illo perferendis tenetur eum at eos laudantium
        architecto odio, voluptates voluptatibus esse animi? Inventore iure
        ullam ipsam minima deserunt laudantium, dolore numquam dolor? Expedita
        inventore eaque molestiae corrupti maxime ut quo modi earum esse ab
        animi quam doloremque voluptatem vitae, consequatur repellat tempore
        laboriosam possimus. Voluptate possimus amet maiores eum officiis quidem
        illo unde recusandae doloremque? Sint necessitatibus enim nihil ratione
        expedita, voluptate sequi repellendus corrupti beatae. Totam asperiores
        pariatur cum debitis animi expedita doloremque.
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
        molestiae suscipit facere amet nesciunt veniam maiores? Pariatur,
        cupiditate eius laboriosam incidunt sunt dolore dolor quod harum non
        dolores voluptatem provident, error molestias nisi aperiam. Eius
        corrupti molestiae, qui necessitatibus iste voluptatibus quam quasi,
        fugit omnis repellat nam voluptates cumque repellendus labore error
        cupiditate veniam ab nemo doloribus tempora. Eveniet impedit, deleniti
        quibusdam fuga quod repellendus sapiente doloribus! Fugiat asperiores
        quis laudantium, vero exercitationem possimus tenetur esse consectetur
        perferendis distinctio at id placeat quos animi, rem cupiditate. Earum,
        fugiat dolorem! Praesentium sed placeat culpa adipisci, ad labore
        maiores blanditiis, officiis ducimus ab sint facere doloremque minus
        incidunt obcaecati dolores dolor delectus asperiores vel quisquam quis
        cupiditate in! Veniam commodi a molestias inventore eligendi corrupti,
        temporibus eaque illo perferendis tenetur eum at eos laudantium
        architecto odio, voluptates voluptatibus esse animi? Inventore iure
        ullam ipsam minima deserunt laudantium, dolore numquam dolor? Expedita
        inventore eaque molestiae corrupti maxime ut quo modi earum esse ab
        animi quam doloremque voluptatem vitae, consequatur repellat tempore
        laboriosam possimus. Voluptate possimus amet maiores eum officiis quidem
        illo unde recusandae doloremque? Sint necessitatibus enim nihil ratione
        expedita, voluptate sequi repellendus corrupti beatae. Totam asperiores
        pariatur cum debitis animi expedita doloremque.
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
        molestiae suscipit facere amet nesciunt veniam maiores? Pariatur,
        cupiditate eius laboriosam incidunt sunt dolore dolor quod harum non
        dolores voluptatem provident, error molestias nisi aperiam. Eius
        corrupti molestiae, qui necessitatibus iste voluptatibus quam quasi,
        fugit omnis repellat nam voluptates cumque repellendus labore error
        cupiditate veniam ab nemo doloribus tempora. Eveniet impedit, deleniti
        quibusdam fuga quod repellendus sapiente doloribus! Fugiat asperiores
        quis laudantium, vero exercitationem possimus tenetur esse consectetur
        perferendis distinctio at id placeat quos animi, rem cupiditate. Earum,
        fugiat dolorem! Praesentium sed placeat culpa adipisci, ad labore
        maiores blanditiis, officiis ducimus ab sint facere doloremque minus
        incidunt obcaecati dolores dolor delectus asperiores vel quisquam quis
        cupiditate in! Veniam commodi a molestias inventore eligendi corrupti,
        temporibus eaque illo perferendis tenetur eum at eos laudantium
        architecto odio, voluptates voluptatibus esse animi? Inventore iure
        ullam ipsam minima deserunt laudantium, dolore numquam dolor? Expedita
        inventore eaque molestiae corrupti maxime ut quo modi earum esse ab
        animi quam doloremque voluptatem vitae, consequatur repellat tempore
        laboriosam possimus. Voluptate possimus amet maiores eum officiis quidem
        illo unde recusandae doloremque? Sint necessitatibus enim nihil ratione
        expedita, voluptate sequi repellendus corrupti beatae. Totam asperiores
        pariatur cum debitis animi expedita doloremque.
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
        molestiae suscipit facere amet nesciunt veniam maiores? Pariatur,
        cupiditate eius laboriosam incidunt sunt dolore dolor quod harum non
        dolores voluptatem provident, error molestias nisi aperiam. Eius
        corrupti molestiae, qui necessitatibus iste voluptatibus quam quasi,
        fugit omnis repellat nam voluptates cumque repellendus labore error
        cupiditate veniam ab nemo doloribus tempora. Eveniet impedit, deleniti
        quibusdam fuga quod repellendus sapiente doloribus! Fugiat asperiores
        quis laudantium, vero exercitationem possimus tenetur esse consectetur
        perferendis distinctio at id placeat quos animi, rem cupiditate. Earum,
        fugiat dolorem! Praesentium sed placeat culpa adipisci, ad labore
        maiores blanditiis, officiis ducimus ab sint facere doloremque minus
        incidunt obcaecati dolores dolor delectus asperiores vel quisquam quis
        cupiditate in! Veniam commodi a molestias inventore eligendi corrupti,
        temporibus eaque illo perferendis tenetur eum at eos laudantium
        architecto odio, voluptates voluptatibus esse animi? Inventore iure
        ullam ipsam minima deserunt laudantium, dolore numquam dolor? Expedita
        inventore eaque molestiae corrupti maxime ut quo modi earum esse ab
        animi quam doloremque voluptatem vitae, consequatur repellat tempore
        laboriosam possimus. Voluptate possimus amet maiores eum officiis quidem
        illo unde recusandae doloremque? Sint necessitatibus enim nihil ratione
        expedita, voluptate sequi repellendus corrupti beatae. Totam asperiores
        pariatur cum debitis animi expedita doloremque.
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
        molestiae suscipit facere amet nesciunt veniam maiores? Pariatur,
        cupiditate eius laboriosam incidunt sunt dolore dolor quod harum non
        dolores voluptatem provident, error molestias nisi aperiam. Eius
        corrupti molestiae, qui necessitatibus iste voluptatibus quam quasi,
        fugit omnis repellat nam voluptates cumque repellendus labore error
        cupiditate veniam ab nemo doloribus tempora. Eveniet impedit, deleniti
        quibusdam fuga quod repellendus sapiente doloribus! Fugiat asperiores
        quis laudantium, vero exercitationem possimus tenetur esse consectetur
        perferendis distinctio at id placeat quos animi, rem cupiditate. Earum,
        fugiat dolorem! Praesentium sed placeat culpa adipisci, ad labore
        maiores blanditiis, officiis ducimus ab sint facere doloremque minus
        incidunt obcaecati dolores dolor delectus asperiores vel quisquam quis
        cupiditate in! Veniam commodi a molestias inventore eligendi corrupti,
        temporibus eaque illo perferendis tenetur eum at eos laudantium
        architecto odio, voluptates voluptatibus esse animi? Inventore iure
        ullam ipsam minima deserunt laudantium, dolore numquam dolor? Expedita
        inventore eaque molestiae corrupti maxime ut quo modi earum esse ab
        animi quam doloremque voluptatem vitae, consequatur repellat tempore
        laboriosam possimus. Voluptate possimus amet maiores eum officiis quidem
        illo unde recusandae doloremque? Sint necessitatibus enim nihil ratione
        expedita, voluptate sequi repellendus corrupti beatae. Totam asperiores
        pariatur cum debitis animi expedita doloremque.
      </p>
    </div>
  );
};

export default Scroll;

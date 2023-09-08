import { useState } from 'react';
import './App.css';
import Menu from './Menu/Menu';

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const items = [{value: "Главная", href: '/main', icon: 'settings'}, {value: "Услуги", href: '/service', icon: 'api'}, {value: "Магазин", href: '/shop', icon: 'android'},]
  return (
    <div className="App">
      <nav>
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <span/>
        </div>
      </nav><Menu active={menuActive} setActive={setMenuActive} header={"Бургер меню"} items={items}/>
      <main>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero magnam voluptate praesentium sequi esse modi numquam, vero sint placeat possimus velit, dolore consectetur quam mollitia iste inventore. Sunt, accusamus architecto?
        Illum rem ratione blanditiis deleniti nam voluptates atque in tempore asperiores impedit deserunt fugit ullam, libero aperiam vel sit laudantium dignissimos dolores omnis. Autem sequi, earum nisi unde officia repellendus!
        Minus culpa voluptatem optio reiciendis soluta enim laborum dicta magni nam non. Quisquam a aliquid fugit saepe alias! Facere distinctio dignissimos, earum placeat magnam modi. Ipsa atque culpa iusto nam!
        Modi voluptas voluptates, architecto iste consequatur sed repellendus, adipisci porro laboriosam id voluptatum dolorem facilis sint ducimus error dolore tempora. Autem eaque aut perspiciatis rem recusandae consequatur soluta ratione quis.
        Veniam quam dolores maiores error ullam voluptates asperiores facere est? Fuga corrupti cum, numquam accusamus quam nemo laudantium quas doloremque ex veritatis ducimus ut rerum molestias explicabo consequuntur vitae maiores!
        Dolor maiores deleniti cumque facilis reprehenderit delectus exercitationem sunt! Odit, sed. Aliquam numquam similique nemo sapiente quos neque saepe tempore repudiandae cum explicabo, consequuntur, eius unde, minus sequi repellat impedit!
        Corrupti perspiciatis nesciunt odit! Ipsa repudiandae necessitatibus debitis dicta distinctio amet quae facere optio cupiditate ea? Impedit laudantium tempore perspiciatis aliquid sit saepe inventore sequi, voluptatum eligendi omnis, asperiores explicabo.
        Ea voluptatem reiciendis explicabo exercitationem nostrum consequatur incidunt fuga assumenda temporibus vero. Facere amet neque aut, consectetur reiciendis mollitia? Aliquid vel debitis repudiandae perferendis sit ad eos quas sunt ullam.
        Reprehenderit voluptatum harum distinctio tempora veniam, dignissimos facere iure repellat corrupti doloribus aliquam laudantium. Deleniti, assumenda repellat, voluptate placeat omnis maiores laudantium, perspiciatis a impedit quibusdam tempore atque. Corrupti, illum?
        Inventore cumque quidem commodi beatae repellat illo eius quaerat reprehenderit. Aut amet accusantium nulla nostrum explicabo? Vel explicabo rerum ea blanditiis reprehenderit perspiciatis ab quidem quaerat, facere nisi veritatis fuga.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero magnam voluptate praesentium sequi esse modi numquam, vero sint placeat possimus velit, dolore consectetur quam mollitia iste inventore. Sunt, accusamus architecto?
        Illum rem ratione blanditiis deleniti nam voluptates atque in tempore asperiores impedit deserunt fugit ullam, libero aperiam vel sit laudantium dignissimos dolores omnis. Autem sequi, earum nisi unde officia repellendus!
        Minus culpa voluptatem optio reiciendis soluta enim laborum dicta magni nam non. Quisquam a aliquid fugit saepe alias! Facere distinctio dignissimos, earum placeat magnam modi. Ipsa atque culpa iusto nam!
        Modi voluptas voluptates, architecto iste consequatur sed repellendus, adipisci porro laboriosam id voluptatum dolorem facilis sint ducimus error dolore tempora. Autem eaque aut perspiciatis rem recusandae consequatur soluta ratione quis.
        Veniam quam dolores maiores error ullam voluptates asperiores facere est? Fuga corrupti cum, numquam accusamus quam nemo laudantium quas doloremque ex veritatis ducimus ut rerum molestias explicabo consequuntur vitae maiores!
        Dolor maiores deleniti cumque facilis reprehenderit delectus exercitationem sunt! Odit, sed. Aliquam numquam similique nemo sapiente quos neque saepe tempore repudiandae cum explicabo, consequuntur, eius unde, minus sequi repellat impedit!
        Corrupti perspiciatis nesciunt odit! Ipsa repudiandae necessitatibus debitis dicta distinctio amet quae facere optio cupiditate ea? Impedit laudantium tempore perspiciatis aliquid sit saepe inventore sequi, voluptatum eligendi omnis, asperiores explicabo.
        Ea voluptatem reiciendis explicabo exercitationem nostrum consequatur incidunt fuga assumenda temporibus vero. Facere amet neque aut, consectetur reiciendis mollitia? Aliquid vel debitis repudiandae perferendis sit ad eos quas sunt ullam.
        Reprehenderit voluptatum harum distinctio tempora veniam, dignissimos facere iure repellat corrupti doloribus aliquam laudantium. Deleniti, assumenda repellat, voluptate placeat omnis maiores laudantium, perspiciatis a impedit quibusdam tempore atque. Corrupti, illum?
        Inventore cumque quidem commodi beatae repellat illo eius quaerat reprehenderit. Aut amet accusantium nulla nostrum explicabo? Vel explicabo rerum ea blanditiis reprehenderit perspiciatis ab quidem quaerat, facere nisi veritatis fuga.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero magnam voluptate praesentium sequi esse modi numquam, vero sint placeat possimus velit, dolore consectetur quam mollitia iste inventore. Sunt, accusamus architecto?
        Illum rem ratione blanditiis deleniti nam voluptates atque in tempore asperiores impedit deserunt fugit ullam, libero aperiam vel sit laudantium dignissimos dolores omnis. Autem sequi, earum nisi unde officia repellendus!
        Minus culpa voluptatem optio reiciendis soluta enim laborum dicta magni nam non. Quisquam a aliquid fugit saepe alias! Facere distinctio dignissimos, earum placeat magnam modi. Ipsa atque culpa iusto nam!
        Modi voluptas voluptates, architecto iste consequatur sed repellendus, adipisci porro laboriosam id voluptatum dolorem facilis sint ducimus error dolore tempora. Autem eaque aut perspiciatis rem recusandae consequatur soluta ratione quis.
        Veniam quam dolores maiores error ullam voluptates asperiores facere est? Fuga corrupti cum, numquam accusamus quam nemo laudantium quas doloremque ex veritatis ducimus ut rerum molestias explicabo consequuntur vitae maiores!
        Dolor maiores deleniti cumque facilis reprehenderit delectus exercitationem sunt! Odit, sed. Aliquam numquam similique nemo sapiente quos neque saepe tempore repudiandae cum explicabo, consequuntur, eius unde, minus sequi repellat impedit!
        Corrupti perspiciatis nesciunt odit! Ipsa repudiandae necessitatibus debitis dicta distinctio amet quae facere optio cupiditate ea? Impedit laudantium tempore perspiciatis aliquid sit saepe inventore sequi, voluptatum eligendi omnis, asperiores explicabo.
        Ea voluptatem reiciendis explicabo exercitationem nostrum consequatur incidunt fuga assumenda temporibus vero. Facere amet neque aut, consectetur reiciendis mollitia? Aliquid vel debitis repudiandae perferendis sit ad eos quas sunt ullam.
        Reprehenderit voluptatum harum distinctio tempora veniam, dignissimos facere iure repellat corrupti doloribus aliquam laudantium. Deleniti, assumenda repellat, voluptate placeat omnis maiores laudantium, perspiciatis a impedit quibusdam tempore atque. Corrupti, illum?
        Inventore cumque quidem commodi beatae repellat illo eius quaerat reprehenderit. Aut amet accusantium nulla nostrum explicabo? Vel explicabo rerum ea blanditiis reprehenderit perspiciatis ab quidem quaerat, facere nisi veritatis fuga.</p>
       
      </main>
      
    </div>
  );
}

export default App;

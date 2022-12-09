import React from "react";
import Highlight from "react-highlight";
import Block from "../impress/block/Block";
import Step from "../impress/step";

const delta = 1000;

const VueAdvantages = ({ startX = 4000, startY = 4000 }) => (
  <Block id="vue">
    <Step
      id="vue-advantages"
      x={startX + delta * 6.4}
      y={startY + delta * 1.5}
      scale={1}
      rotate={120}
    >
      <h1 style={{ textAlign: "center" }}>
        Чуток передохнем и посмотрим приколюхи в Vue
      </h1>
    </Step>
    <Step
      id="vue-events-example"
      className="code-slide"
      x={startX + delta * 7.8}
      y={startY + delta * 1.8}
      scale={0.5}
      rotate={150}
    >
      >
      <Highlight language="javascript">
        {`// vue
<!-- the click event's propagation will be stopped -->
<a @click.stop="doThis"></a>

<!-- the submit event will no longer reload the page -->
<form @submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<a @click.stop.prevent="doThat"></a>

<!-- just the modifier -->
<form @submit.prevent></form>

<!-- only trigger handler if event.target is the element itself -->
<!-- i.e. not from a child element -->
<div @click.self="doThat">...</div>

<a @click.once="doThis"></a>
<input @keyup.enter="submit" />`}
      </Highlight>
      <div className="notes">
        просто крутейшая идея от vue. она никак не связана с реактивностью но
      </div>
    </Step>
    <Step
      id="vue-custom-events-example"
      className="code-slide"
      x={startX + delta * 7}
      y={startY + delta * 1.8}
      scale={0.3}
      rotate={180}
    >
      <Highlight language="javascript">
        {`// vue
<button @click="$emit('increaseBy', 1)">
  Increase by 1
</button>

// usage
<MyButton @increase-by="(n) => count += n" />`}
      </Highlight>

      <div className="notes">
        вот тоже прикольно. мы так избавились от необходимости передавать
        хэндлеры через 1000 компонентов
      </div>
    </Step>
    <Step
      id="vue-slots-example"
      className="code-slide"
      x={startX + delta * 7}
      y={startY + delta * 2}
      scale={0.1}
      rotate={210}
    >
      >
      <Highlight language="javascript">
        {`// vue
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>

//usage
<BaseLayout>
  <template #header>
    <h1>Here might be a page title</h1>
  </template>

  <template #default>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>

  <template #footer>
    <p>Here's some contact info</p>
  </template>
</BaseLayout>
`}
      </Highlight>
      <div className="notes">слоты, быть или не быть?</div>
    </Step>
    <Step
      id="vue-slots-gifs-example"
      x={startX + delta * 6.9}
      y={startY + delta * 2.1}
      scale={0.1}
      rotate={210}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src="./img/lightforce.webp" />
        <img src="./img/darkforce.gif" />
      </div>

      <div className="notes">слоты, быть или не быть?</div>
    </Step>
    <Step
      id="vue-computed-example"
      className="code-slide"
      x={startX + delta * 6.8}
      y={startY + delta * 2.2}
      scale={0.1}
      rotate={240}
    >
      <Highlight>
        {`export default {
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    }
  },
  computed: {
    // a computed getter
    publishedBooksMessage() {
      // \`this\` points to the component instance
      return this.author.books.length > 0 ? 'Yes' : 'No'
    }
  }
}

//usage
<p>Has published books:</p>
<span>{{ publishedBooksMessage }}</span>`}
      </Highlight>

      <div className="notes">
        есть специальное место для операций, не надо тернарные операция мешать
        вместе с темплейтом
      </div>
    </Step>
  </Block>
);

export default VueAdvantages;

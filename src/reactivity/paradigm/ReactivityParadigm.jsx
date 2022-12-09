import React, { useState } from "react";
import Highlight from "react-highlight";
import Expandable from "../components/expandable/Expandable";
import List from "../components/list/List";
import MaxHeight from "../components/max-height/MaxHeight";
import SlideHeader from "../components/slide-header/SlideHeader";
import Block from "../impress/block/Block";
import Step from "../impress/step";
import ScopeHeader from "../components/scope-header/ScopeHeader";

const delta = 1000;

const ReactivityParadigm = ({ startX = 4000, startY = 4000 }) => (
  <Block id="reactivity-paradigm">
    <Step id="patterns-reactivity" x={startX} y={startY} scale={4} rotate={90}>
      <ScopeHeader
        title={["Что такое", " реактивное", " программирование"]}
        stepId="patterns-reactivity"
      />
    </Step>
    <Step
      id="patterns-reactivity-def"
      x={startX + delta * 3}
      y={startY + delta * 2}
      scale={4}
      rotate={-90}
    >
      <MaxHeight>
        <SlideHeader title="Основные положения" />
        <List
          items={[
            { key: "1", name: "неблокирующие потоки из сигналов" },
            { key: "2", name: "Observer + Handler" },
            { key: "3", name: "изменение потоков" },
          ]}
        />
        <div
          style={{
            display: "flex",
            height: "300px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Expandable>
            <img height="70px" src="./img/pubsub.png" />
          </Expandable>
          <Expandable>
            <img height="70px" src="./img/watcher.jpeg" />
          </Expandable>
          <Expandable>
            <img height="70px" src="./img/jdun.jpeg" />
          </Expandable>
          <Expandable>
            <img height="70px" src="./img/func-workflow.png" />
          </Expandable>
          <Expandable>
            <img height="70px" src="./img/reactive-workflow.png" />
          </Expandable>
        </div>
      </MaxHeight>

      <div className="notes">
        Реактивное программирование — это асинхронные потоки данных, состоящие
        из сигналов. Асинхронность подразумевает неблокирующий поток, а
        реактивность добавляет в это понятие способность обработки данных
        потоком. Observer, Observable = Publisher Subscriber если react это
        наблюдатель, то reactive это ждун
      </div>
    </Step>
    <Step
      id="patterns-reactivity-example"
      x={startX + delta * 3}
      y={startY - delta}
      scale={1}
      rotate={0}
    >
      >
      <MaxHeight>
        <div
          style={{
            display: "flex",
            height: "900px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Expandable>
            <img height="200px" src="./img/husky.png" />
          </Expandable>
          <Expandable>
            <img height="200px" src="./img/alert.png" />
          </Expandable>
          <Expandable>
            <img height="200px" src="./img/cheese.png" />
          </Expandable>
        </div>
      </MaxHeight>
      <div className="notes">
        собачка становится голодной или просто видит холодильник собачка
        начинает геукать когда количество геуков достигает 3х Настя идет кормить
        собачку
      </div>
    </Step>
    <Step
      id="patterns-reactivity-signal-example"
      className="code-slide"
      x={startX + delta * 5}
      y={startY - delta * 0.9}
      scale={1}
      rotate={30}
    >
      >
      <Highlight language="javascript">
        {`import { createSignal } from "solid-js";

function Counter() {
  const [count, setCount] = createSignal(0);
  const doubleCount = () => count() * 2;

  setInterval(() => setCount(count() + 1), 1000);

  return <div>Count: {doubleCount()}</div>;
} `}
      </Highlight>
      <Highlight>
        {`import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const doubleCount = () => count * 2;

  useEffect(() => {
    setInterval(() => setCount((c) => c + 1), 1000);
  }, []);

  return <div>Count: {doubleCount()}</div>;
};`}
      </Highlight>
      <div className="notes">
        начнем с очень простого примера на SolidJs. это относительно новая
        либка, однако она засветилась в этом году на OSAwards. это очередное
        переосмысление и вдохновление уже существующими крутыми тулзами а еще
        она очень похожа на реакт как вы видите. основные отличия - тут у нас
        ре-рендер не случается, поэтом не надо оборачивать таймаут в useEffect.
        тут в обоих примерах нет очищения таймера, это сделано нарочно.
        реактивный код не хранит никогда никаких переменных. виртуального дома
        тоже нет
      </div>
    </Step>
    <Step
      id="patterns-reactivity-loop-example"
      className="code-slide big"
      x={startX + delta * 6.3}
      y={startY + delta * 0.2}
      scale={1}
      rotate={60}
    >
      <div
        style={{
          width: "70%",
          height: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5px",
          marginTop: "-20px",
          marginLeft: "100px",
        }}
      >
        <Highlight language="javascript">
          {`// vue
<script>
export default {
  data() {
    return {
      list: ["cucumber", "tomato"]
    }
  }
}
</script>

<template>
  <ul v-if="list.length">
    <li v-for="item of list">{{ item }}</li>
  </ul>
</template>`}
        </Highlight>
        <Highlight>
          {`// react
const Salad = () => {
    const vegetables = ["cucumber", "tomato"];

    return (
        <ul>
            {vegetables.map(( name ) => 
                <li key={name}>{name}</li>)
            }
        </ul>
    );
};`}
        </Highlight>
        <Highlight>
          {`// solid
function Salad() {
  const [vegetables] = createSignal(["cucumber", "tomato"]);
  
  return (
    <ul>
      <For each={vegetables()}>{(name, i) =>
        <li>{i() + 1}: {name}</li>
      }</For>
    </ul>
  );
}`}
        </Highlight>
      </div>

      <div className="notes">
        следующий пример показателен в различиях функционального и реактивного
        подходов. смотришь на react и видишь свой родной и любимый java script.
        и посмотрите теперь на код написанный на vue. кто любит директивы? я не
        люблю. но без них никак и никуда. как уже было сказано, не система
        следит за нами а мы за системой.
      </div>
    </Step>
  </Block>
);

export default ReactivityParadigm;

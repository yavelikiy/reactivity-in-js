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

const Patterns = ({ startX = 0, startY = 0 }) => {
  const [disabled, setDisabled] = useState(false);

  return (
    <Block id="patterns">
      <Step id="patrerns-title" x={startX - delta} y={startY + delta} scale={4}>
        <ScopeHeader
          title={["Существующие", "парадигмы ", "и паттерны"]}
          stepId="patrerns-title"
        />
      </Step>
      <Step
        id="patterns-tasks"
        className="slide"
        x={startX - delta * 2}
        y={startY + 3 * delta}
      >
        <SlideHeader title="Какие задачи перед нами стоят?" />
        <List
          items={[
            { key: "1", name: "рендерить html" },
            { key: "2", name: "знать состояние страницы" },
            { key: "3", name: "знать когда юзер взаимодействет со страницей" },
            { key: "4", name: "обновлять состояние страницы" },
            { key: "5", name: "иногда выполнять асинхронные запросы" },
          ]}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            cursor: "pointer",
          }}
        >
          <div onClick={() => setDisabled((v) => !v)}>
            {disabled ? "Включить кнопку" : "Выключить кнопку"}
          </div>
          <input
            type="button"
            style={{ height: "70px" }}
            disabled={disabled}
            value={disabled ? "Я не нажмусь!" : "Нажми меня"}
          />
        </div>
      </Step>
      <Step
        id="patterns-history"
        className="slide"
        x={startX - delta * 1.25}
        y={startY + 2.5 * delta}
        scale={0.5}
      >
        <SlideHeader title="Немного истории для не-кодеров" />
        <List
          items={[
            { key: "1", name: "вручную пишем html" },
            { key: "2", name: "заменяем на весь html" },
          ]}
        />
        />
        <div>
          <img width="40%" src={"./img/hyperlink_hand.jpg"} />
          <img src={"./img/browser.jpeg"} />
        </div>
      </Step>
      <Step
        id="patterns-js-1"
        className="slide"
        x={startX - delta * 1.25}
        y={startY + 3 * delta}
        scale={0.5}
      >
        <SlideHeader title="Как это было с JavaScript #1" />
        <List
          items={[
            { key: "1", name: "вручную пишем весь html" },
            { key: "2", name: "находим на странице элементы" },
            { key: "3", name: "следим за ними" },
            {
              key: "4",
              name: "обновляем их (заменяем на новые, обновляем текст, добавляем классы)",
            },
          ]}
        />
      </Step>
      <Step
        id="patterns-js-1-html"
        x={startX - delta * 0.9}
        y={startY + 2.9 * delta}
        scale={0.1}
      >
        <img src="./img/html.png" />
      </Step>
      <Step
        id="patterns-js-1-js"
        className="code-slide"
        x={startX - delta * 0.9}
        y={startY + 3 * delta}
        scale={0.1}
      >
        <Highlight language="javascript">
          {`const button = document.querySelector("#button");
const toggleButton = document.querySelector("#toggleButton");

button.addEventListener("click", () => {
    console.log("do some important job");
});

toggleButton.addEventListener("click", () => {
   const disabled = toggleButton.getAttribute("data-disable") === "disable";

   if (disabled) {
       toggleButton.setAttribute("data-disable", "enabled");
       toggleButton.textContent = "Выключить кнопку";
       button.value = "Не нажмусь!";
       button.setAttribute("disabled", "");
       return;
   }

    toggleButton.setAttribute("data-disable", "enabled");
    toggleButton.textContent = "Выключить кнопку";
    button.value = "Не нажмусь!";
    button.removeAttribute("disabled");
});`}
        </Highlight>
      </Step>
      <Step
        id="patterns-js-2"
        className="slide"
        x={startX - delta * 2}
        y={startY + 4 * delta}
      >
        <SlideHeader title="Как это было с JavaScript #2" />
        <List
          items={[
            { key: "1", name: "так а зачем нам html???" },
            { key: "2", name: "создаем элементы" },
            { key: "3", name: "начинаем за ними следить если нужно" },
            { key: "4", name: "обновляем их по событию" },
          ]}
        />
      </Step>
      <Step
        id="patterns-js-2-js"
        className="code-slide"
        x={startX - delta * 2.7}
        y={startY + 3.7 * delta}
        scale={0.1}
      >
        <Highlight language="javascript">
          {`function createButton(parent) {
    const button = Object.assign( document.createElement( "input" ), {
        type: "button",
        value: "Нажми меня",
        className: "primary-button"
    } );

    button.addEventListener("click", () => { /* ... */});
    parent.appendChild(button);
    return button;
}

function createToggle(parent, button) {
    const toggle = Object.assign( document.createElement( "div" ), {
        type: "button",
        textContent: "Включить кнопку",
        className: "toggle"
    } );

    toggle.addEventListener("click", () => { /* ... */});
    parent.appendChild(button);
    return toggle;
}

const button = createButton(document.body);
const button = createToggle(document.body, button);`}
        </Highlight>
      </Step>
      <Step
        id="patterns-react"
        className="slide"
        x={startX - delta * 1.25}
        y={startY + 3.8 * delta}
        scale={0.3}
      >
        <SlideHeader title="Ну где же сахар? А вот и React" />
        <List
          items={[
            { key: "1", name: "реакт сам следит за state и props" },
            { key: "2", name: "обновляет сам части завимые от состояния" },
          ]}
        />
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img height="50%" src="./img/sugar.gif" />
        </div>
      </Step>
      <Step
        id="patterns-react-code"
        className="code-slide"
        x={startX - delta * 1.5}
        y={startY + 3.8 * delta}
        scale={0.1}
        rotate={-70}
      >
        <Highlight language="javascript">
          {`
import React, { useState } from "react";

const App = () => {
    const [disabled, setDisabled] = useState(false);
    
    return (
        <div>
            <div  className="toggle" onClick={() => setDisabled(v => !v)}>
                {disabled ? "Включить кнопку" : "Выключить кнопку"}
            </div>
            <input 
                type="button" 
                disabled={disabled} 
                value={ disabled ? "Я не нажмусь!" : "Нажми меня"}
            />
        </div>
    );
}`}
        </Highlight>
      </Step>
      <Step
        id="patterns-redux"
        className="slide"
        x={startX - delta * 1.25}
        y={startY + 4.1 * delta}
        scale={0.3}
      >
        <MaxHeight>
          <SlideHeader title="Спасибо за redux" />
          <List
            items={[
              { key: "1", name: "храним все в одном месте" },
              { key: "2", name: "обновляем через action" },
              { key: "3", name: "получаем в одном месте" },
              { key: "4", name: "следим за обновлением" },
            ]}
          />
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Expandable>
              <img height="50%" src="./img/redux-pattern-diagram.png" />
            </Expandable>
          </div>
        </MaxHeight>
      </Step>
      <Step
        id="patterns-redux-code"
        className="code-slide"
        x={startX - delta * 1.25}
        y={startY + 4.5 * delta}
        scale={0.2}
        rotate={30}
      >
        <Highlight language="javascript">
          {`
import React from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNum, decNum } from './actions/index';
  
function App() {
    
  const mystate = useSelector((state) => state.change);
  const dispatch = useDispatch();
  
  return (
    <>
      <h2>Increment/Decrement the number using Redux.</h2>
      <div className="app">
        <h1>{mystate}</h1>
        <button onClick={() => dispatch(incNum())}>+</button>
        <button onClick={() => dispatch(decNum())}>-</button>
      </div>
    </>
  );
}
  
export default App;`}
        </Highlight>
      </Step>
      <Step
        id="patterns-use-context"
        x={startX - delta * 1.5}
        y={startY + 4.4 * delta}
        scale={0.2}
        rotate={-30}
      >
        А что там с useContext() и useReducer()?
      </Step>
      <Step
        id="patterns-use-context-code"
        className="code-slide"
        x={startX - delta * 1.25}
        y={startY + 4.7 * delta}
        scale={0.1}
        rotate={-60}
      >
        <Highlight language="javascript">
          {`
import React, {createContext, useReducer} from 'react';

const initialState = {};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'action description':
        const newState = // do something with the action
        return newState;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};`}
        </Highlight>
      </Step>
    </Block>
  );
};

export default Patterns;

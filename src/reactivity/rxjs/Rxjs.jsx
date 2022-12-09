import React, { useState } from "react";
import Highlight from "react-highlight";
import Expandable from "../components/expandable/Expandable";
import LettersWave from "../components/letters-wave/LettersWave";
import List from "../components/list/List";
import MaxHeight from "../components/max-height/MaxHeight";
import SlideHeader from "../components/slide-header/SlideHeader";
import Block from "../impress/block/Block";
import Step from "../impress/step";

const delta = 1000;

const Rxjs = ({ startX = -4000, startY = -4000 }) => (
  <Block id="rxjs">
    <Step id="try-rxjs" x={startX} y={startY} scale={4} rotate={90}>
      <LettersWave text="попробуем RxJs" stepId="try-rxjs" />
    </Step>
    <Step
      id="rxjs-screamer"
      className="code-slide"
      x={startX + delta * 3}
      y={startY}
      scale={2}
      rotate={-90}
    >
      <Highlight>
        {`type Todo = { id: number; text: string; done: boolean };
const [todosMap, keys$] = partitionByKey(
  todoActions$,
  event => event.payload.id,
  (event$, id) =>
    event$.pipe(
      takeWhile((event) => event.type !== "delete"),
      scan(
        (state, action) => {
          switch (action.type) {
            case "add":
            case "edit":
              return { ...state, text: action.payload.text };
            case "toggle":
              return { ...state, done: !state.done };
            default:
              return state;
          }
        },
        { id, text: "", done: false } as Todo
      )
    )
)`}
      </Highlight>
    </Step>
    <Step
      id="rxjs-subscriber"
      className="code-slide"
      x={startX + delta * 4.5}
      y={startY - delta}
      scale={1}
      rotate={-120}
    >
      <Highlight language="javascript">
        {`const breeds = ["husky", "corgi", "poodle"];

breeds.forEach(breed => console.log(breed));`}
      </Highlight>
      <Highlight language="javascript">
        {`import { from, of } from 'rxjs';

const breeds = ["husky", "corgi", "poodle"];

from(breeds).subscribe((breed) => console.log(breed));
of("husky", "corgi", "poodle").subscribe(breed => console.log(breed));

from(breeds).subscribe(
                    (breed) => console.log(breed),
                    (err) => console.error(err),
                    () => console.log("completed")
            );`}
      </Highlight>

      <div className="notes">
        главное понимать что все поток, и ты един с потоком
      </div>
    </Step>
    <Step
      id="rxjs-observable-and-observer"
      className="code-slide"
      x={startX + delta * 4.5}
      y={startY + delta}
      scale={0.3}
      rotate={-150}
    >
      <Highlight language="javascript">
        {`
import { Observable } from 'rxjs';
import { PartialObserver } from "rxjs/src/internal/types";

const observable$ = new Observable<string>(subscriber => {
   subscriber.next('One');
   subscriber.next('Two');
   subscriber.next('Three');
   setTimeout(() => {
      subscriber.next('Four');
      subscriber.complete();
   }, 1000);
   setTimeout(() => {
      subscriber.error('🆘 Some error');
   }, 2000);
});

const observer = {
   next: (val) => console.log(val),
   error: (error) => console.log("Error to console:", error),
   complete: () => console.log('✅ Completed'),
} as PartialObserver<string>

observable$.subscribe(observer)`}
      </Highlight>

      <div className="notes">
        пока мы в поток не отправим complete или error он будет бесконечен
      </div>
    </Step>
    <Step
      id="rxjs-observable-and-observer-result"
      className="code-slide"
      x={startX + delta * 6}
      y={startY + delta}
      scale={1}
      rotate={-200}
    >
      <img width={"1200px"} src="./img/rxjs-observer.gif" />

      <div className="notes">
        пока мы в поток не отправим он будет бесконечен
      </div>
    </Step>
    <Step
      id="rxjs-pipe"
      className="code-slide"
      x={startX + delta * 7}
      y={startY + delta}
      scale={0.3}
      rotate={-150}
    >
      <Highlight language="javascript">
        {`import { of } from "rxjs";
import { filter, map } from "rxjs/operators";

of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    .pipe(
        map(value => value * 10),
        filter(value => value > 40 && value < 90),
    )
    .subscribe(
        val => console.log(val),
        error => console.log(error),
        () => console.log('✅ Completed!')
    );`}
      </Highlight>

      <div className="notes">pipe позволяет добавлять операторы к потоку</div>
    </Step>
    <Step
      id="rxjs-scan"
      className="code-slide"
      x={startX + delta * 7}
      y={startY + delta * 1.5}
      scale={0.3}
      rotate={-120}
    >
      <Highlight language="javascript">
        {`import { of } from "rxjs";
import { filter, map } from "rxjs/operators";

of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    .pipe(
        scan((acc, currentValue) => acc + currentValue, 'seed ')
    )
    .subscribe(
        val => console.log(val),
        error => console.log(error),
        () => console.log('✅ Completed!')
    );`}
      </Highlight>

      <div className="notes">это как reduce только потоковое</div>
    </Step>
    <Step
      id="rxjs-merge"
      className="code-slide"
      x={startX + delta * 7}
      y={startY + delta * 1.8}
      scale={0.3}
      rotate={-150}
    >
      <Highlight language="javascript">
        {`import { merge, Observable } from 'rxjs';

const observable_1$ = new Observable(subscribe => {
    setTimeout(() => { subscribe.next('🟢 One') }, 100)
    setTimeout(() => { subscribe.next('🟢 One_1') }, 500)
    setTimeout(() => { subscribe.next('🟢 One_2') }, 1000)
});

const observable_2$ = new Observable(subscribe => {
    setTimeout(() => { subscribe.next('🔴 Two') }, 200)
    setTimeout(() => { subscribe.next('🔴 Two_1') }, 800)
    setTimeout(() => { subscribe.next('🔴 Two_2') }, 1200)
});

const mergedObservables$ = merge(observable_1$, observable_2$);

mergedObservables$.subscribe(value => console.log(value));`}
      </Highlight>

      <div className="notes">это как reduce только потоковое</div>
    </Step>
    <Step
      id="rxjs-merge-example"
      className="code-slide"
      x={startX + delta * 7}
      y={startY + delta * 2.2}
      scale={0.3}
      rotate={-180}
    >
      <img width={"1200px"} src="./img/rxjs-merge.gif" />

      <div className="notes">это как reduce только потоковое</div>
    </Step>
    <Step
      id="rxjs-todo-link"
      className="code-slide"
      x={startX + delta * 8}
      y={startY + delta}
      scale={0.3}
      rotate={-150}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2em",
          height: "600px",
          lineHeight: "3em",
        }}
      >
        <a href="">RxJs + React Todo App</a>
      </div>
    </Step>
  </Block>
);

export default Rxjs;

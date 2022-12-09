import React from "react";
import Highlight from "react-highlight";
import Block from "../impress/block/Block";
import Step from "../impress/step";
import ScopeHeader from "../components/scope-header/ScopeHeader";

const delta = 1000;

const ReduxSaga = ({ startX = -5000, startY = 5000 }) => (
  <Block id="redux-saga">
    <Step id="redux-saga-overview" x={startX} y={startY} scale={4} rotate={90}>
      <ScopeHeader
        title={["ReduxSaga", ": можно с React"]}
        stepId="redux-saga-overview"
      />
    </Step>
    <Step
      id="redux-saga-dispatch"
      className="code-slide"
      x={startX - delta * 3}
      y={startY - delta}
      scale={1}
      rotate={90}
    >
      <Highlight language="javascript">
        {`class UserComponent extends React.Component {
  ...
  onSomeButtonClicked() {
    const { userId, dispatch } = this.props
    dispatch({type: 'USER_FETCH_REQUESTED', payload: {userId}})
  }
  ...
} `}
      </Highlight>

      <div className="notes">
        тут пока что как обычно - обычный редаксовский диспатч
      </div>
    </Step>
    <Step
      id="redux-saga-code"
      className="code-slide"
      x={startX - delta * 3}
      y={startY + delta}
      scale={1}
      rotate={90}
    >
      >
      <Highlight>
        {`import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from '...'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
   try {
      const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;`}
      </Highlight>
      <div className="notes">
        благодаря генераторам сага может остановиться и не диспатчить предыдущие
        значения, так можно избежать ситуации когда раньше вернулся запрос,
        которой отправился позже
      </div>
    </Step>
    <Step
      id="redux-saga-throttle"
      className="code-slide"
      x={startX - delta * 4}
      y={startY + delta}
      scale={1}
      rotate={120}
    >
      <Highlight>
        {`import { throttle } from 'redux-saga/effects'

function* handleInput(input) {
  // ...
}

function* watchInput() {
  yield throttle(500, 'INPUT_CHANGED', handleInput)
}`}
      </Highlight>

      <div className="notes">
        новый handleInput не будет стартован в промежутке 500ms также будет
        задиспатчен только самый последний экшн все что было в промежутке будет
        пропущено
      </div>
    </Step>
    <Step
      id="redux-saga-debounce"
      className="code-slide"
      x={startX - delta * 5}
      y={startY + delta}
      scale={1}
      rotate={-240}
    >
      <Highlight>
        {`import { call, cancel, fork, take, delay } from 'redux-saga/effects'

function* handleInput(input) {
  // debounce by 500ms
  yield delay(500)
  ...
}

function* watchInput() {
  let task
  while (true) {
    const { input } = yield take('INPUT_CHANGED')
    if (task) {
      yield cancel(task)
    }
    task = yield fork(handleInput, input)
  }
}`}
      </Highlight>

      <div className="notes">takeLatest возможен благодаря реактивности</div>
    </Step>
  </Block>
);

export default ReduxSaga;

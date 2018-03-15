import * as React from 'react';

type HelloWorldProps = {
  message: string,
  sayHello: () => void
}

export const HelloWorld: React.SFC<HelloWorldProps> = function(props) {
  return (
    <div>
      <h1> { props.message } </h1>
      <button onClick={() => props.sayHello()}> Say Hello </button>
    </div>
  )
}
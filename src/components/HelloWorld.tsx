import * as React from 'react';

type HelloProps = {
  message: string,
  sayHello: (message: string) => void
}

export const HelloWorld: React.SFC<HelloProps> = function(props) {
  return (
    <div>
      <h1> { props.message } </h1>
      <button onClick={() => props.sayHello('Hello World')}> Say Hello </button>
    </div>
  )
}
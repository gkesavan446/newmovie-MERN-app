import { Counter } from './Counter';

export function User({ name, url }) {
  return (
    <div className='card'>
      <img src={url} alt="profile pic" />
      <h1>Hello <span className='name'>{name}</span>, How are you!!!</h1>
      <Counter />
    </div>
  );
}

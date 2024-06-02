import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        username="midudev"
      >
        Diego Balderrama
      </TwitterFollowCard>
      <TwitterFollowCard
        username="pheralb"
      >
        Samuel Quino
      </TwitterFollowCard>
    </section>
  );
}

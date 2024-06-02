import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        isFollowing
        username="midudev"
      >
        Diego Balderrama
      </TwitterFollowCard>
      <TwitterFollowCard
        isFollowing={false}
        username="pheralb"
      >
        Samuel Quino
      </TwitterFollowCard>
      <TwitterFollowCard
        isFollowing
        username="midudev"
        name="Miguel Angel"
      />
      <TwitterFollowCard
        isFollowing={true}
        name="Miguel Angel"
      />
    </section>
  );
}

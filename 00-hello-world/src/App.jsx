import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        isFollowing
        username="midudev"
        name="Miguel Angel"
      />
      <TwitterFollowCard
        isFollowing={false}
        username="midudev"
        name="Miguel Angel"
      />
      <TwitterFollowCard
        isFollowing
        username="midudev"
        name="Miguel Angel"
      />
      <TwitterFollowCard
        isFollowing={true}
        username="midudev"
        name="Miguel Angel"
      />
    </section>
  );
}

import { useState } from 'react';
import './App.css';

export function TwitterFollowCard({
  // eslint-disable-next-line react/prop-types
  username = 'unknown',
  // eslint-disable-next-line react/prop-types
  initialIsFollowing,
  // eslint-disable-next-line react/prop-types
  children,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const imageSrc = `https://unavatar.io/${username}`;
  const text = isFollowing ? 'Following' : 'Follow';
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={imageSrc}
          alt="Spyed avatar"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{username}</span>
        </div>
      </header>
      <aside>
        <button
          onClick={handleClick}
          className={buttonClassName}
        >
          {text}
          <span className='tw-followCard-stopFollow'>Unfollow</span>
        </button>
      </aside>
    </article>
  );
}

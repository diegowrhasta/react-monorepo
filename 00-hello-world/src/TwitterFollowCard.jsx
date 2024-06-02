import './App.css';

export function TwitterFollowCard({
  // eslint-disable-next-line react/prop-types
  username = 'unknown',
  // eslint-disable-next-line react/prop-types
  isFollowing,
  // eslint-disable-next-line react/prop-types
  children,
}) {
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
        <button className={buttonClassName}>{text}</button>
      </aside>
    </article>
  );
}

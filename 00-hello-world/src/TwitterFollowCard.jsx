import './App.css';

export function TwitterFollowCard({
  // eslint-disable-next-line react/prop-types
  username,
  // eslint-disable-next-line react/prop-types
  name,
  // eslint-disable-next-line react/prop-types
  isFollowing,
}) {
  const imageSrc = `https://unavatar.io/${username}`;

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={imageSrc}
          alt="Spyed avatar"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">@{username}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followcard-button">{isFollowing}</button>
      </aside>
    </article>
  );
}

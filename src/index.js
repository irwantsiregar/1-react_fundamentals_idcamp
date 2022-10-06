import React from 'react';
import { createRoot } from 'react-dom/client';

async function getGitHubProfile(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  return response.json();
}

function GitHubProfile({ username }) {
  const [profile, setProfile] = React.useState(null);

  React.useEffect(() => {
    getGitHubProfile(username).then(setProfile);
  }, [username]);

  if (profile === null) {
    return <p>loading ...</p>;
  }

  const { login, bio } = profile;

  return (
    <>
      <h1>{login} </h1>
      <p>{bio}</p>
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<GitHubProfile username="irwantsiregar" />);

import GitHubSingle from "./githubSingle";
import GitHubMultiple from "./githubMultiple";

export default function GitHubButton({ repos }) {
  if (repos.length > 1) {
    return <GitHubMultiple repos={repos} />;
  }
  return <GitHubSingle repo={repos[0]} />;
}

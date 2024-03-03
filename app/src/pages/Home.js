import { Link } from "react-router-dom";

const welcome = {emoji: "🧿"}

export default function Home() {
  return (
    <>
      <div className="nazar-eye">
        {welcome.emoji}
      </div>
      <Link to="/play" className="play-button">
        Play
        <div className="play-button__horizontal"></div>
        <div className="play-button__vertical"></div>
      </Link>
    </>
  )
};

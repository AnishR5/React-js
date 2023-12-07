import "./styles.css";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="01.jpf" alt="Anish Rachcha" />;
}

function Intro() {
  return (
    <div>
      <h2>Anish Rachcha</h2>
      <p>
        Im a full stack Software developer working as FrontEnd developer ata The
        Digital Group{" "}
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" color="blue" />
      <Skill skill="Html" color="red" />
      <Skill skill="Node js" color="orange" />
      <Skill skill="Java" color="aqua" />
    </div>
  );
}

function Skill(props) {
  const { skill, color } = props;
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      {skill}{" "}
    </div>
  );
}

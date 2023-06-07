import "./Phase.styles.css";

const Phase = ({ title, items }) => (
  <div className="phase">
    <div className="phase-border">
      <div className="phase-content">
        <h2 className="phase-title">{title}</h2>
        <ul className="phase-list">
          {items.map((item) => (
            <li className="phase-list-item" key={`${title + item}`}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Phase;

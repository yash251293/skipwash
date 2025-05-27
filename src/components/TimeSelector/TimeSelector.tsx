import Calendar from "react-calendar";
import "./TimeSelector.scss";
import { Value } from "react-calendar/src/shared/types.js";

interface TimeSelectorProps {
  onChange: (value: Value, event: React.MouseEvent<HTMLButtonElement>) => void;
}

const TimeSelector = ({ onChange }: TimeSelectorProps) => {
  const currentTime = Date.now();

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <Calendar
          onChange={onChange}
          tileDisabled={({ date }) => {
            return date.getTime() < currentTime;
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column",
          alignSelf: "flex-start",
          flex: 1,
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            // justifyContent: "flex-start", // Or "space-around" if preferred
            // The parent of this div is:
            // <div style={{ display: "flex", justifyContent: "center", alignContent: "center", 
            // flexDirection: "column", alignSelf: "flex-start", flex: 1, flexWrap: "wrap" }}>
            // The flexDirection: "column" on the parent might conflict.
            // Let's simplify the parent or ensure this div is the primary flex container for the slots.
            // For now, let's assume this div will correctly lay out its children.
            // We might need to adjust its parent if layout issues occur.
            // Add some padding to this container if needed, e.g., padding: "0 0.5rem"
          }}
        >
          <div className="time-selector time-selector--selected"> {/* Added time-selector--selected here */}
            <p>10:00-10:30</p>
          </div>
          <div className="time-selector">
            <p>10:00-10:30</p>
          </div>
          <div className="time-selector">
            <p>10:00-10:30</p>
          </div>
          <div className="time-selector">
            <p>10:00-10:30</p>
          </div>
          <div className="time-selector">
            <p>10:00-10:30</p>
          </div>
          <div className="time-selector">
            <p>10:00-10:30</p>
          </div>
          <div className="time-selector">
            <p>10:00-10:30</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSelector;

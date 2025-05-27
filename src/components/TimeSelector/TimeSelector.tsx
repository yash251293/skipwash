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
        <div style={{ display: "flex" }}>
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
          <div className="time-selector">
            <p>10:00-10:30</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSelector;

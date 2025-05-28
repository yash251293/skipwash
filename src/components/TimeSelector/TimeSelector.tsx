import Calendar from "react-calendar";
import "./TimeSelector.scss";
import { Value } from "react-calendar/src/shared/types.js";

interface TimeSelectorProps {
  onChange: (value: Value, event: React.MouseEvent<HTMLButtonElement>) => void;
}

const TimeSelector = ({ onChange }: TimeSelectorProps) => {
  const currentTime = Date.now();

  return (
    // Add className="time-selector-main-container"
    <div className="time-selector-main-container" style={{ display: "flex" }}> {/* Keep existing style for now, SCSS will override display for responsiveness */}
      {/* Add className="time-selector-calendar-area" */}
      <div className="time-selector-calendar-area" style={{ flex: 1 }}> {/* Keep existing style */}
        <Calendar
          onChange={onChange}
          tileDisabled={({ date }) => {
            return date.getTime() < currentTime;
          }}
        />
      </div>

      {/* Add className="time-selector-slots-area" */}
      <div
        className="time-selector-slots-area"
        style={{ // Keep existing styles for now
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column",
          alignSelf: "flex-start",
          flex: 1,
          flexWrap: "wrap", // This flexWrap here might be for the content *within* slots-area if it had multiple children, not for the slots-row itself
        }}
      >
        {/* Add className="time-selector-slots-row" */}
        <div className="time-selector-slots-row" style={{ display: "flex" }}> {/* Keep existing style */}
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

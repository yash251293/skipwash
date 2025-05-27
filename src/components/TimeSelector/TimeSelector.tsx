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

      <div className="time-display-area"> {/* Assign class, remove inline style */}
        {/* Use a fragment or a single root div if preferred */}
        <h3 > {/* Remove inline style, will be handled by SCSS via parent */}
          Times Available: {/* Date will be dynamic later */}
        </h3>
        
        <div className="time-slots-group"> {/* Assign class, remove inline style */}
          <h4 >Morning</h4> {/* Remove inline style */}
          <div className="time-slot-text time-slot-text--no-dot">8:00 AM</div>
          <div className="time-slot-text time-slot-text--selected">10:00 AM</div>
          <div className="time-slot-text">11:00 AM</div>
        </div>

        <div className="time-slots-group"> {/* Assign class */}
          <h4 >Afternoon</h4> {/* Remove inline style */}
          <div className="time-slot-text">1:00 PM</div>
          <div className="time-slot-text">2:00 PM</div>
          <div className="time-slot-text">3:00 PM</div>
          <div className="time-slot-text time-slot-text--no-dot">4:00 PM</div>
        </div>
      </div>
    </div>
  );
};

export default TimeSelector;

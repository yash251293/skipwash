import { useEffect, useRef } from "react";
import HomePageCard from "../../components/HomePageCard/HomepageCard";
import SubHomePageCard from "../../components/SubHomePageCard/SubHomePageCard";
import {
  HOW_DO_I_PREPARE,
  HOW_DO_I_PREPARE_DESC,
  HOW_DO_I_PREPARE_STEPS,
  HOW_DOES_IT_WORK,
  HOW_DOES_IT_WORK_DESC,
  HOW_DOES_IT_WORK_STEPS,
} from "../../constants/localization";
import { useParams } from "react-router-dom";
import WhiteLogo from "../../assets/white-logo.png";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import LocalLaundryServiceRoundedIcon from "@mui/icons-material/LocalLaundryServiceRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import AccessAlarmsRoundedIcon from "@mui/icons-material/AccessAlarmsRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import "./Homepage.scss";

const HomePage = ({}) => {
  const { scrollTo = "" } = useParams();

  useEffect(() => {
    if (scrollTo === "services") {
      servicesRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (scrollTo === "prices") {
      pricelistRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollTo]);

  const servicesRef = useRef<HTMLDivElement>(null);
  const pricelistRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // refs[1].
  return (
    <>
      <div className="primary-content" ref={servicesRef}>
        <div className="logo-card">
          <img src={WhiteLogo} />
        </div>
        <HomePageCard
          title={HOW_DOES_IT_WORK}
          description={HOW_DOES_IT_WORK_DESC}
          backgroundColor={"#FFF"}
        >
          <SubHomePageCard
            title={"STEP 1"}
            desc={HOW_DOES_IT_WORK_STEPS[1]}
            icon={<CalendarMonthRoundedIcon sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5rem' } }} />}
          />
          <SubHomePageCard
            title={"STEP 2"}
            desc={HOW_DOES_IT_WORK_STEPS[2]}
            icon={<LocalLaundryServiceRoundedIcon sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5rem' } }} />}
          />
          <SubHomePageCard
            title={"STEP 3"}
            desc={HOW_DOES_IT_WORK_STEPS[3]}
            icon={<LocalShippingRoundedIcon sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5rem' } }} />}
          />
        </HomePageCard>
      </div>
      <div className="primary-content" ref={pricelistRef}>
        <HomePageCard
          title={HOW_DO_I_PREPARE}
          description={HOW_DO_I_PREPARE_DESC}
          backgroundColor="#01545047"
        >
          <SubHomePageCard
            title={"STEP 1"}
            desc={HOW_DO_I_PREPARE_STEPS[1]}
            icon={<ShoppingBagRoundedIcon sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5rem' } }} />}
          />
          <SubHomePageCard
            title={"STEP 2"}
            desc={HOW_DO_I_PREPARE_STEPS[2]}
            icon={<AccessAlarmsRoundedIcon sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5rem' } }} />}
          />
          <SubHomePageCard
            title={"STEP 3"}
            desc={HOW_DO_I_PREPARE_STEPS[3]}
            icon={<NotificationsActiveRoundedIcon sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5rem' } }} />}
          />
        </HomePageCard>
      </div>
    </>
  );
};

export default HomePage;

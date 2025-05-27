import "./BookPage.scss";
import TimeSelector from "../../components/TimeSelector/TimeSelector";
import { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  CircularProgress,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  TextField,
  Paper, // Added Paper
} from "@mui/material";
import {
  useGetLaundromats,
  useGetLaundromatServices,
  useGetCitySuggestions,
  CitySuggestion, // Import the interface
} from "../../api/vendor";

const BookPage = () => {
  const [selected, setSelected] = useState<number>();
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const [searchCityQuery, setSearchCityQuery] = useState<string>("");
  const [suggestedCities, setSuggestedCities] = useState<CitySuggestion[]>([]); // Changed to CitySuggestion[]
  const [selectedCity, setSelectedCity] = useState<CitySuggestion | null>(null);

  const { data: laundromats, isLoading: laundromatsLoading } =
    useGetLaundromats(10, 10);

  const { data: citySuggestionsData, isLoading: isCitySuggestionsLoading } =
    useGetCitySuggestions(searchCityQuery);

  useEffect(() => {
    if (citySuggestionsData) {
      setSuggestedCities(citySuggestionsData);
    } else {
      setSuggestedCities([]); // Clear suggestions if no data
    }
  }, [citySuggestionsData]); // Removed setSuggestedCities from dependency array as it's a setter from useState

  useEffect(() => {
    if (!selected && laundromats) {
      setSelected(laundromats[0].id || undefined);
    }
  }, [laundromatsLoading]);

  const selectedLaundromat =
    laundromats?.find((item) => item.id === selected) || undefined;
  const { data: services, isLoading: servicesLoading } =
    useGetLaundromatServices(selectedLaundromat?.id);
  console.log(services);

  const [readLaundromat, setReadLaundromat] = useState(false);
  const [selectedPickup, setSelectedPickup] = useState();
  const [selectedDropoff, setSelectedDropoff] = useState();

  const handleSuggestionClick = (suggestion: CitySuggestion) => {
    setSearchCityQuery(suggestion.description);
    setSelectedCity(suggestion);
    setSuggestedCities([]); // Clear suggestions after selection
  };

  // Optional console.log for debugging
  console.log("Suggested Cities:", suggestedCities);
  console.log("City Suggestions Loading:", isCitySuggestionsLoading);
  console.log('Selected City:', selectedCity);


  return (
    <>
      <div className="steps">
        <h2>1. Select a Laundromat</h2>
      </div>
      <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextField
          className="select-city"
          label="Enter City or Area"
          variant="outlined"
          value={searchCityQuery}
          onChange={(e) => setSearchCityQuery(e.target.value)}
          style={{ marginBottom: "1rem", width: '50%' }} // Example width, adjust as needed
        />
        {/* Suggestions List */}
        {suggestedCities.length > 0 && (
          <Paper 
            elevation={3} 
            sx={{ 
              position: 'absolute', 
              zIndex: 1000, 
              width: '50%', // Match TextField width
              maxHeight: '200px',
              overflowY: 'auto',
              marginTop: '56px', // Approximate height of TextField + margin
              top: 0, // Align with top of TextField container
            }}
          >
            <List component="nav" aria-label="city suggestions">
              {suggestedCities.map((suggestion) => (
                <ListItemButton
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <ListItemText primary={suggestion.description} />
                </ListItemButton>
              ))}
            </List>
          </Paper>
        )}
      </div>
      <TextField
        className="select-address"
        label="Pickup and Dropoff Address"
        variant="outlined"
      />
      {laundromatsLoading ? (
        <CircularProgress sx={{ alignSelf: "center", padding: "2rem" }} />
      ) : (
        <div className="laundromat-container">
          <div className="laundromat-list">
            <List>
              {laundromats?.map(
                ({
                  name,
                  website,
                  address,
                  city,
                  postalCode,
                  id,
                  basePrice,
                }) => {
                  return (
                    <>
                      <ListItemButton
                        selected={selected === id}
                        onClick={() => {
                          setSelected(id);
                          setSelectedServices([]);
                        }}
                      >
                        <ListItemAvatar key={id}>
                          <div className="laundromat-list__item-info">
                            <div>
                              <ListItemText
                                slotProps={{ primary: { fontWeight: 800 } }}
                              >
                                {name}
                              </ListItemText>
                              <ListItemText>{website}</ListItemText>
                              <ListItemText>
                                {address}, {city}, {postalCode}
                              </ListItemText>
                            </div>
                            <p className="laundromat-list__item-info__price">
                              ${basePrice}/bag
                            </p>
                          </div>
                        </ListItemAvatar>
                      </ListItemButton>
                      <Divider variant="inset" component="li" />
                    </>
                  );
                }
              )}
            </List>
          </div>
          <Divider orientation="vertical" flexItem />
          <div className="laundromat-info">
            <h2>{selectedLaundromat?.name}</h2>
            {selectedLaundromat?.disallowedItems?.length ? (
              <>
                <h4>The following items are NOT supported</h4>
                <div className="laundromat-info__disallowed">
                  <ul>
                    {selectedLaundromat?.disallowedItems.map((item) => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                </div>
              </>
            ) : (
              <h4>No specific notes from laundromat</h4>
            )}
          </div>
        </div>
      )}

      <FormControl component="fieldset" className="notes-form">
        <FormControlLabel
          value="end"
          control={
            <Checkbox
              value={readLaundromat}
              onClick={() => setReadLaundromat(!readLaundromat)}
            />
          }
          label="I have read and understand the contents of the notes provided by the laundromat."
          labelPlacement="end"
          required
          style={{ alignSelf: "center" }}
        />
      </FormControl>
      <div
        className={`additional-services ${!readLaundromat ? "disabled" : null}`}
      >
        <div className="steps">
          <h2>2. Select additional services</h2>
        </div>
        <FormGroup className="additional-services-list">
          {servicesLoading ? (
            <CircularProgress sx={{ alignSelf: "center", padding: "2rem" }} />
          ) : (
            services?.map(({ id, title, price }) => {
              return (
                <FormControlLabel
                  key={id}
                  disabled={!readLaundromat}
                  control={
                    <Checkbox
                      onChange={(e) => {
                        setSelectedServices((prev: number[]) => {
                          if (prev.includes(id)) {
                            return prev.filter((item) => item != id);
                          } else {
                            return [...prev, id];
                          }
                        });
                      }}
                      checked={selectedServices.includes(id)}
                    />
                  }
                  label={`$${price} - ${title}`}
                  className="additional-services-list__item"
                />
              );
            })
          )}
        </FormGroup>
      </div>
      <div className={`pickup-time ${!readLaundromat ? "disabled" : null}`}>
        <div className="steps">
          <h2>3. Select a Pickup Time</h2>
        </div>
        <TimeSelector onChange={() => {}} />
      </div>
      <Divider />
      <div className={`dropoff-time ${!readLaundromat ? "disabled" : null}`}>
        <div className="steps">
          <h2>4. Select a Dropoff Time</h2>
        </div>
        <TimeSelector onChange={() => {}} />
      </div>
      <Divider />
      <Button
        style={{
          padding: "1rem",
          margin: "1rem",
          width: "30vw",
          alignSelf: "center",
          color: "015450",
        }}
        variant="contained"
        className="checkout-button"
        disabled={!readLaundromat}
      >
        Checkout
      </Button>
    </>
  );
};

export default BookPage;

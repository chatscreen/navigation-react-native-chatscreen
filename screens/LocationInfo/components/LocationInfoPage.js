import LocationAbout from "./LocationInfoAbout";
import Rewards from "./LocationInfoRewards";
import HighScores from "./LocationInfoHighScores";
import ImageGallery from "./LocationInfoImgesGallery";
import Events from "./LocationInfoEvents";
import Polls from "./LocationInfoPolls";
import { View } from "react-native";

const LocationInfoPage = ({ address, selectedOption, about, price }) => {
  return (
    <View>
      {selectedOption == "info-circle" && (
        <LocationAbout address={address} price={price} about={about} />
      )}
      {selectedOption == "award" && <Rewards />}
      {selectedOption == "trophy" && <HighScores />}
      {selectedOption == "images" && <ImageGallery />}
      {selectedOption == "calendar-alt" && <Events />}
      {selectedOption == "poll" && <Polls />}
    </View>
  );
};
export default LocationInfoPage;

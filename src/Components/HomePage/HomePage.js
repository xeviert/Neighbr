import ListOfFavors from './ListOfFavors/ListOfFavors';
import FavorSubmission from './FavorSubmission/FavorSubmission';

export default function HomePage() {
  return (
    <>
      <FavorSubmission />
      <ListOfFavors />
    </>
  );
}

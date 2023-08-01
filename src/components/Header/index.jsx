import Logo from "../../assets/Logo.svg";
import { MdFavoriteBorder } from "react-icons/md";

export const Header = ({ setVisible }) => {
   return (
      <header>
         <div className="container">
            <img src={Logo} alt="lexgram logo" />
            <button onClick={() => setVisible(true)}>
               <MdFavoriteBorder size={21} />
               favoritos
            </button>
         </div>
      </header>
   );
};

import Logo from "../../assets/Logo.svg";
import { MdFavoriteBorder } from "react-icons/md";
import styles from "./style.module.scss";

export const Header = ({ setVisible }) => {
   return (
      <header>
         <div className="container">
            <div className={styles.flexBox}>
               <img src={Logo} alt="lexgram logo" />
               <button className="btn" onClick={() => setVisible(true)}>
                  <MdFavoriteBorder size={21} />
                  favoritos
               </button>
            </div>
         </div>
      </header>
   );
};

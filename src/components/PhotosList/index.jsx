import { PhotoCard } from "./PhotoCard";

export const PhotosList = ({ photoList }) => {
   return (
      <section>
         <div className="container">
            <ul>
               {photoList.map((photo) => (
                  <PhotoCard key={photo.id} img={photo.img} bio={photo.bio} />
               ))}
            </ul>
         </div>
      </section>
   );
};

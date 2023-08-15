
const name = 'Lev Rosenberg';
export const siteTitle = 'Next.js Sample Website';

export default function Image(props) {
  return (
    <div className = "img-container">
      <img src = {props.src}></img>
    </div>
  );
}

interface Props {
  image: string;
  login: string;
  profile: string;

}

const Card = ({ image, login, profile }: Props) => {
  return (
    <>
      <article className="profile-container">
        <figure className="image-container">
          <img src={image} className="profile-image" />
        </figure>
        <div className="description-container">
          <strong>{login}</strong>
          <small><a href={profile}>Go to profile</a></small>
        </div>
      </article>
    </>
  )
}

export default Card
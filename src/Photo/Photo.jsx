import { FaThumbsUp } from "react-icons/fa";

const Photo = ({
    urls: { regular },
    alt_description,
    likes,
    user: {
        name,
        portfolio_url,
        profile_image: { medium }
    }
}) => {
    return (
        <article className="photo">
            <img src={regular} alt={alt_description}/>
            <div className="photo-info">
                <a href={portfolio_url}>
                    <img src={medium} className="user-img" alt="" />
                </a>
                <div>
                    <h4>{name}</h4>
                    <p><FaThumbsUp /> {likes}</p>
                </div>
            </div>
        </article>
    )
}

export default Photo;
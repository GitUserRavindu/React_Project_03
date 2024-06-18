import mountFuji from '/assets/mount-fuji.png'
import locationIcon from '/assets/location-icon.png'

export default function Card(props) {
    // const img = props.item.imageUrl
    const img = `/assets/${props.item.imageUrlAssets}`
    // console.log(img)
    
    return (
        <section>
            <div className="card">
                <div className="card-image-section">
                    <img src={img} alt="Mount Fuji" className="card-image" />
                </div>
                <div className="card-details-section">
                    <span><img src={locationIcon} alt="Location Icon" className="card-location-icon" /></span>
                    <span className="card-country">{props.item.location.toUpperCase()}</span>
                    <span className="card-gMaps"><a href={props.item.googleMapsUrl}>View on Google Maps</a></span>
                    <h2 className="card-location">{props.item.title}</h2>
                    <p className="card-date">{props.item.startDate} - {props.item.endDate}</p>
                    <p className="card-description">{props.item.description}</p>
                </div>
            </div>
            <hr className="hr-el"/>
        </section>
    )
}
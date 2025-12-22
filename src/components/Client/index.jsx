import './style.css'

export const Client = ({clientsList}) => {
    return(
        <section className="client">
            <h3 className="client-title">Client testimonials</h3>
            <div className="clients">
                {
                    clientsList.map((client) => (
                        <div key={client.comment} className="client-ino">
                            <img src={client.photo} className="client-info__photo"/>
                            <p className="client-info__comment">{client.comment}</p>
                            <h4 className="client-info__name">{client.name}</h4>
                            <p className="client-info__position">{client.position}</p>
                        </div>

                    ))
                }
            </div>
        </section>
    )
}
import data from "../data.json";
import PropTypes from 'prop-types'; 
import { Head } from "./Head";

export const CreateCards = () => {
  return (
    <div>
      {data.map(({ url, title, id }) => {
    return <div className="card mx-auto my-2" key={id} style={{ width: "18rem" }}>
      <img src={url} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">Card Title: {title}</h5>

        {/* Два ідентичні записи */}
        {/* {Head({ class: "card-title", id: "id-123" })} */}
        {<Head clas="card-title" id="id-123" />}

        <a href="http" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  })}
    </div>)
};

CreateCards.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number
}

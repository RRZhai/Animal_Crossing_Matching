import { useState } from "react";
import { Link } from "react-router-dom";
// import Card from "./Card"
function NewForm({ handleSubmitNew, newCard }) {
  const [selectType, setSelectType] = useState([]);
  const [submitForm, setSubmitForm] = useState({ stat: false });
  const [authorize, setAuthorize] = useState(null);
  const [enterPassword, setEnterPassword] = useState(null);
  const password = "animal1234";

  const handleAuthorize = (e) => {
    e.preventDefault();
    enterPassword === password ? setAuthorize(true) : setAuthorize(false);
  };

  const handleAdd = (e) => {
    console.log(submitForm);
    setSubmitForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="form">
      <h3 className="title">Add New</h3>
      {!authorize ? (
        <>
          <h3 className="notification">
            Please enter the password to add a new card ~
          </h3>
          <form onSubmit={(e) => handleAuthorize(e, enterPassword)}>
            <div className="form-group">
              <input
                onChange={(e) => setEnterPassword(e.target.value)}
                name="name"
                className="input"
                required
              ></input>
              <label className="label">*</label>
            </div>
            <button>Authorize</button>
          </form>
        </>
      ) : (
        <>
          <h3 className="notification">
            Please Select Category First Before You Fill the Form ~
          </h3>
          <div className="category">
            <button
              name="villager"
              onClick={(e) => setSelectType(e.target.name)}
            >
              Villager
            </button>
            <button name="fish" onClick={(e) => setSelectType(e.target.name)}>
              Fish
            </button>
            <button name="fossil" onClick={(e) => setSelectType(e.target.name)}>
              Fossil
            </button>
            <button name="sea" onClick={(e) => setSelectType(e.target.name)}>
              Sea Creature
            </button>
          </div>
          <form onSubmit={(e) => handleSubmitNew(e, submitForm)} id="form">
            <div className="form-group">
              <label className="label">Name</label>
              <input
                onChange={handleAdd}
                name="name"
                className="input"
                required
              ></input>
              <label className="label">*</label>
            </div>
            <div className="form-group">
              <label className="label" placeholder="Add Name">
                Image
              </label>
              <input
                onChange={handleAdd}
                name="image_uri"
                className="input"
                placeholder="Add Image"
                required
              ></input>
              <label className="label">*</label>
            </div>
            {selectType === "villager" ? (
              <div>
                <div className="form-group">
                  <label className="label">Personality</label>
                  <input
                    onChange={handleAdd}
                    name="personality"
                    className="input"
                  ></input>
                </div>
                <div className="form-group">
                  <label className="label">Birthday</label>
                  <input
                    onChange={handleAdd}
                    name="birthday"
                    className="input"
                  ></input>
                </div>
                <div className="form-group">
                  <label className="label">Saying</label>
                  <input
                    onChange={handleAdd}
                    name="saying"
                    className="input"
                  ></input>
                </div>
              </div>
            ) : null}
            {selectType === "fish" ? (
              <div>
                <div className="form-group">
                  <label className="label">Location</label>
                  <input
                    onChange={handleAdd}
                    name="location"
                    className="input"
                  ></input>
                </div>
                <div className="form-group">
                  <label className="label">Rarity</label>
                  <input
                    onChange={handleAdd}
                    name="rarity"
                    className="input"
                  ></input>
                </div>
                <div className="form-group">
                  <label className="label">Saying</label>
                  <input
                    onChange={handleAdd}
                    name="catch-phrase"
                    className="input"
                  ></input>
                </div>
                <div className="form-group">
                  <label className="label">Price</label>
                  <input
                    onChange={handleAdd}
                    name="price"
                    className="input"
                  ></input>
                </div>
              </div>
            ) : null}
            {selectType === "fossil" ? (
              <div>
                <div className="form-group">
                  <label className="label">Location</label>
                  <input
                    onChange={handleAdd}
                    name="location"
                    className="input"
                  ></input>
                </div>
                <div className="form-group">
                  <label className="label">Saying</label>
                  <input
                    onChange={handleAdd}
                    name="catch-phrase"
                    className="input"
                  ></input>
                </div>
                <div className="form-group">
                  <label className="label">Price</label>
                  <input
                    onChange={handleAdd}
                    name="price"
                    className="input"
                  ></input>
                </div>
              </div>
            ) : null}
            {selectType === "sea" ? (
              <div>
                <div className="form-group">
                  <label className="label">Speed</label>
                  <input
                    onChange={handleAdd}
                    name="speed"
                    className="input"
                  ></input>
                </div>
                <div className="form-group">
                  <label className="label">Part Of</label>
                  <input
                    onChange={handleAdd}
                    name="part-of"
                    className="input"
                  ></input>
                </div>
                <div className="form-group">
                  <label className="label">Price</label>
                  <input
                    onChange={handleAdd}
                    name="price"
                    className="input"
                  ></input>
                </div>
              </div>
            ) : null}
            <div className="form-group">
              <button onClick={(e) => setEnterPassword(null)}>Submit</button>
            </div>
          </form>

          {newCard ? (
            <Link to={`/Animal_Crossing_Matching/cards/${newCard.id}`}>
              <button className="btn">Check New</button>
            </Link>
          ) : (
            <button
              onClick={() => alert("You need to add before check!")}
              className="btn"
            >
              Check New
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default NewForm;

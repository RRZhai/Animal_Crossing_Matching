import { useState } from "react"

function MyCollection() {
    const [selectType, setSelectType] = useState([])
    const [submitForm, setSubmitForm] = useState([])
    const handleVillager = () => {
        setSelectType(
            <div>
            <div className="form-group">
                <label className="label">Personality</label>
                <input name="personality" className="input" ></input>
            </div>
            <div className="form-group">
                <label className="label">Birthday</label>
                <input name="birthday" className="input" ></input>
            </div>
            <div className="form-group">
                <label className="label">Saying</label>
                <input name="saying" className="input" ></input>
            </div>
            </div>
        )
    }

    const handleFish = () => {
        setSelectType(
            <div>
                <div className="form-group">
                    <label className="label">Location</label>
                    <input name="location" className="input" ></input>
                </div>
                <div className="form-group">
                    <label className="label">Rarity</label>
                    <input name="rarity" className="input" ></input>
                </div>
                <div className="form-group">
                    <label className="label">Saying</label>
                    <input name="catch-phrase" className="input" ></input>
                </div>
                <div className="form-group">
                    <label className="label">Price</label>
                    <input name="price" className="input" ></input>
                </div>
            </div>
        )
    }

    const handleFossil = () => {
        setSelectType(
            <div>
                <div className="form-group">
                    <label className="label">Location</label>
                    <input name="location" className="input" ></input>
                </div>
                <div className="form-group">
                    <label className="label">Saying</label>
                    <input name="catch-phrase" className="input" ></input>
                </div>
                <div className="form-group">
                    <label className="label">Price</label>
                    <input name="price" className="input" ></input>
                </div>
            </div>
        )
    }

    const handleSea = () => {
        setSelectType(
            <div>
                <div className="form-group">
                    <label className="label">Speed</label>
                    <input name="speed" className="input" ></input>
                </div>
                <div className="form-group">
                    <label className="label">Part Of</label>
                    <input name="part-of" className="input" ></input>
                </div>
                <div className="form-group">
                    <label className="label">Price</label>
                    <input name="price" className="input" ></input>
                </div>
            </div>
        )

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitForm([...submitForm, [e.target.name]=e.target.value])
    }

    // fetch('http://localhost:3001/all', {
    //     method: "POST",
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify(submitForm)
    // })

    return(
        <form onSubmit={(e) => handleSubmit(e)}id='form'>
            <button onClick={handleVillager}>Villager</button>
            <button onClick={handleFish}>Fish</button>
            <button onClick={handleFossil}>Fossil</button>
            <button onClick={handleSea}>Sea Creature</button>
            <h3>Add New</h3>
            <div className="form-group">
                <label className="label">Name</label>
                <input name="name" className="input" placeholder="Add Name"></input>
                <label className="label">*</label>
            </div>
            <div className="form-group">
                <label className="label">Image</label>
                <input name="image_uri" className="input" placeholder="Add Image"></input>
                <label className="label">*</label>
            </div>
            {selectType}
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default MyCollection
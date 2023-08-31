import { useState } from "react"
import { Link } from "react-router-dom"
// import Card from "./Card"
function NewForm({handleSubmitNew, newCard}) {
    const [selectType, setSelectType] = useState([])
    const [submitForm, setSubmitForm] = useState({stat:false})

    const handleVillager = () => {
        setSelectType(
            <div>
            <div className="form-group">
                <label className="label">Personality</label>
                <input onChange={handleAdd} name="personality" className="input" ></input>
            </div>
            <div className="form-group">
                <label className="label">Birthday</label>
                <input onChange={handleAdd} name="birthday" className="input" ></input>
            </div>
            <div className="form-group">
                <label className="label">Saying</label>
                <input onChange={handleAdd} name="saying" className="input" ></input>
            </div>
            </div>
        )
    }

    const handleFish = () => {
        setSelectType(
            <div>
                <div className="form-group">
                    <label className="label">Location</label>
                    <input onChange={handleAdd} name="location" className="input" ></input>
                </div>
                <div className="form-group">
                    <label className="label">Rarity</label>
                    <input onChange={handleAdd} name="rarity" className="input" ></input>
                </div>
                <div className="form-group">
                    <label className="label">Saying</label>
                    <input onChange={handleAdd} name="catch-phrase" className="input" ></input>
                </div>
                <div className="form-group">
                    <label className="label">Price</label>
                    <input onChange={handleAdd} name="price" className="input" ></input>
                </div>
            </div>
        )
    }

    const handleFossil = () => {
        setSelectType(
            <div>
                <div className="form-group">
                    <label className="label">Location</label>
                    <input onChange={handleAdd} name="location" className="input" ></input>
                </div>
                <div className="form-group">
                    <label className="label">Saying</label>
                    <input onChange={handleAdd} name="catch-phrase" className="input" ></input>
                </div>
                <div className="form-group">
                    <label className="label">Price</label>
                    <input onChange={handleAdd} name="price" className="input" ></input>
                </div>
            </div>
        )
    }

    const handleSea = () => {
        setSelectType(
            <div>
                <div className="form-group">
                    <label className="label">Speed</label>
                    <input onChange={handleAdd} name="speed" className="input" ></input>
                </div>
                <div className="form-group">
                    <label className="label">Part Of</label>
                    <input onChange={handleAdd} name="part-of" className="input" ></input>
                </div>
                <div className="form-group">
                    <label className="label">Price</label>
                    <input onChange={handleAdd} name="price" className="input" ></input>
                </div>
            </div>
        )

    }

    const handleAdd = (e) => {
        setSubmitForm({...submitForm, [e.target.name]:e.target.value})
    }
    
    return(
        <div className="form">
            <h3 className="title">Add New</h3>
            <form onSubmit={(e) => handleSubmitNew(e, submitForm)}id='form'>
            <h3> Please Select Category First Before You Fill the Form ~</h3>
            <div className="category">
                <button onClick={handleVillager}>Villager</button>
                <button onClick={handleFish}>Fish</button>
                <button onClick={handleFossil}>Fossil</button>
                <button onClick={handleSea}>Sea Creature</button>
            </div>
            <div className="form-group">
                <label className="label">Name</label>
                <input onChange={handleAdd} name="name" className="input" required></input>
                <label className="label">*</label>
            </div>
            <div className="form-group">
                <label className="label">Image</label>
                <input onChange={handleAdd} name="image_uri" className="input" placeholder="Add Image" required></input>
                <label className="label">*</label>
            </div>
            {selectType}
            <button className='btn'>Submit</button>
            </form>
            {newCard ? 
            <Link to={`/cards/${newCard.id}`} >
            <button className='btn'>Check New</button>
            </Link> : <button onClick={() => alert('You need to add before check!')} className='btn'>Check New</button>}  
        </div>
    )
}

export default NewForm

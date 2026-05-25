import React, { useEffect, useState } from 'react'
//import './index.css'
//import './taskTracker.css'
import './task-app.css';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import { FiShoppingCart, FiShoppingBag } from 'react-icons/fi';
import { FaBookBookmark, FaBookOpenReader, FaBookAtlas } from 'react-icons/fa6';
import { FaSearch, FaSearchDollar, FaSearchMinus, FaSearchPlus, FaSearchLocation } from 'react-icons/fa';
console.log("lading....")
let a = 10;
localStorage.setItem('number', a);

function Note_book() {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem("Items")) || []);
    const [input, setInput] = useState("");
    const [search, setSearch] = useState('');

    //add item hundler
    function addtItem() {
        if (input.trim() === "") return
        const newItem = {
            txt: input,
            id: Date.now(),
            complited: false

        };
        setItems(prev => [...prev, newItem]);
        setInput("");

    };
    function removeItem(id) {
        setItems(prev => prev.filter((item) => {
            return item.id !== id;
        }));
    };
    function toggle(id) {
        setItems(prev => prev.map((item) => {
            if (item.id === id) {
                return { ...item, complited: !item.complited }
            }
            return item;
        }));
    };
    //local storage pasrt
    useEffect(() => {
        localStorage.setItem("Items", JSON.stringify(items));
    }, [items]);
    function hundleKeyDown(e) {
        if (e.key === "Enter") {
            addtItem();
        };
    };


    const filtredNotes = items.filter((item) => {
        return item.txt.toLowerCase().includes(search.toLowerCase())
    });
    return (

        <div className='task-tracker-container'>
            <section className='header-sect'>
                <h2>Note book App</h2>
                < FaBookAtlas className='shop-cart-icon' />
                {/*  < FaBookOpenReader className='shop-cart-icon' />
                < FaBookBookmark className='shop-cart-icon' /> */}
                {/*  <FiShoppingBag /> */}
            </section>
            <div className='search-con'>
                <input type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='search-nput' 
                    placeholder='search note....'/>
                    <FaSearch className='search-icon'/>

            </div>

            <br />

            <div className='input-group'>
                <input type="text"
                    placeholder='enter note'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={hundleKeyDown}
                    className='input-item' />
                <FaPlus onClick={addtItem} className='add-icon' title='add item'></FaPlus>

            </div>




            <div className='items-group'>
                <ul>
                    {/*  {items.map((item) => {
                        return <li key={item.id} className={item.complited ? "complited" : ""}>
                            <input type="checkbox" onChange={() => toggle(item.id)}
                                title={item.complited ? "undo" : "mark as read"} />
                            <span>{item.txt}</span>
                            <button className='delete-btn' onClick={() => removeItem(item.id)}><FaTrashAlt title='delete this item' /></button>
                        </li>
                    })} */}

                    {filtredNotes.map((item) => {
                        return <li key={item.id} className={item.complited ? "complited" : ""}>
                            <input type="checkbox" onChange={() => toggle(item.id)}
                                title={item.complited ? "undo" : "mark as read"} />
                            <span>{item.txt}</span>
                            <button className='delete-btn' onClick={() => removeItem(item.id)}><FaTrashAlt title='delete this item' /></button>
                        </li>
                    })}
                </ul>
            </div>
            <p className='note'>{items.length < 1 ? "No Notes YET" : items.length + " Notes remaining"}</p>



        </div>
    )
}

export default Note_book
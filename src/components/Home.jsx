import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { db } from './firebase'
import Modal from 'react-bootstrap/Modal';

const Home = () => {
    const navigate = useNavigate()
    const [refresh, setRefresh] = useState(false)
    const [fetchData, setFetchData] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')

    const [editPost, setEditPost] = useState([])


    const userCollection = collection(db, 'users')

    // getting data from database

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollection)
            setFetchData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getUsers()
    }, [refresh])

    // creating post and saving in database
    const createUser = async () => {
        if (!name || !email || !role) {

            alert("Please enter")
            return false
        }
        await addDoc(userCollection, { name: name, email: email, role: role })
        setName('')
        setEmail('')
        setRole('')
        setRefresh(!refresh)
    }
    // delete user
    const deleteUser = async (id) => {
        const postDoc = doc(db, "users", id)
        await deleteDoc(postDoc)
        setRefresh(!refresh)
    }
    // update user
    const updateUser = async (item) => {
        setEditPost(item)
        setName(item.name)
        setEmail(item.email)
        setRole(item.role)
        setShow(true)

    }
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        setName('')
        setEmail('')
        setRole('')

    };
    const handleShow = async () => {
        setShow(false)
        setName(editPost.name)
        setEmail(editPost.email)
        setRole(editPost.role)
        const upDoc = doc(db, "users", editPost.id)
        await updateDoc(upDoc, { name: name, email: email, role: role })
        setName('')
        setEmail('')
        setRole('')
        setRefresh(!refresh)
    };

    const logout = () => {
        localStorage.removeItem("emailFirebase")
        navigate("/login")
    }
    useEffect(() => {
        if (!localStorage.getItem("emailFirebase")) {
            navigate("/login")
        }
    }, [refresh])
    return (
        <div className="home-page">
            <div className="home-heading">
                <NavLink to="/assignment2" className="button1">go to Assignment 2</NavLink>
                <button onClick={logout}>logout</button>
            </div>
            <div className="home-input-container">
                <h4>Create User</h4>
                <input type="text" name="name" placeholder="name" value={name} onChange={e => setName(e.target.value)}
                    className="form-input"
                />
                <input type="email" name="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}
                    className="form-input"
                />
                <input type="text" name="role" placeholder="role" value={role} onChange={e => setRole(e.target.value)}
                    className="form-input"
                />
                <button onClick={createUser} className="home-create-button">create</button>
            </div>

            <div className="users-container">
                <table>
                    <thead>
                        <tr className="head-tr">
                            <th className="head-td">User Name</th>
                            <th className="head-td">User Email</th>
                            <th className="head-td">User Role</th>
                            <th className="head-td">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fetchData.map((item) => {
                            return (
                                <tr key={item.id} className="sub-tr ">
                                    <td className="head-td">{item.name}</td>
                                    <td className="head-td">{item.email}</td>
                                    <td className="head-td">{item.role}</td>
                                    <td className="head-td buttons">
                                        <button className="btn-up" onClick={() => updateUser(item)}>update</button>
                                        <button className="btn-del" onClick={() => deleteUser(item.id)}>delete</button>
                                    </td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            {/* code for update post */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title >Update Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-home-input-container">
                        <h4>Create User</h4>
                        <input type="text" name="name" placeholder="name" value={name} onChange={e => setName(e.target.value)}
                            className="form-input"
                        />
                        <input type="email" name="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}
                            className="form-input"
                        />
                        <input type="text" name="role" placeholder="role" value={role} onChange={e => setRole(e.target.value)}
                            className="form-input"
                        />
                        <button onClick={handleShow} className="home-create-button">update</button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Home

import { FiSearch } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";

import { useEffect, useState } from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from './config/firebase';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import './App.css'
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import NotFoundContact from "./components/NotFoundContact";

function App() {

  const [contacts, setContacts] = useState([]);
  const {isOpen, onClose, onOpen } = useDisclouse(false);

  useEffect(() => {

    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactsList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactsList);  
          return contactsList;
        })      
      } catch (error) {
        console.log(error);
      }
    }

    getContacts();

  }, []);

  const filterContacts = (e) => {
    const searchValue = e.target.value;
    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactsList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContact = contactsList.filter(contact => contact.name.toLowerCase().includes(searchValue.toLowerCase()) || contact.email.toLowerCase().includes(searchValue.toLowerCase()));

      setContacts(filteredContact);  
      return filteredContact;
    })
  }

  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <Navbar />
        <div className='flex gap-2'>
          <div className="flex relative items-center flex-grow">
            <FiSearch className='text-white ml-2 text-3xl absolute'/>
            <input onChange={(e) => filterContacts(e)} type="text" 
              className="bg-transparent border border-white rounded-md h-10 flex-grow text-white pl-10 outline-none" 
            />
          </div>
          <div>
            <FaCirclePlus onClick={onOpen} className='text-5xl cursor-pointer text-white'/>
          </div>
        </div>
        {contacts.length > 0 
        ? <div className="mt-4 flex flex-col gap-4">
          {contacts.map(contact => 
            <ContactCard key={contact.id} contact={contact}/>
          )}
        </div> 
        : <NotFoundContact />
        }
      </div>
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
      <ToastContainer position="bottom-center"/>
    </>
  );
}

export default App
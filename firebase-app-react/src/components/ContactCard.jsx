import { HiOutlineUserCircle } from "react-icons/hi2";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclouse from "../hooks/useDisclouse";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {

  const {isOpen, onClose, onOpen } = useDisclouse(false);

  const deleteCard = async(id) => {
    try {
      await deleteDoc(doc(db,"contacts",id));
      toast.success("Contact deleted successfully!")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="flex items-center justify-between rounded-lg bg-yellow p-2">
        <div className="flex gap-1">
          <HiOutlineUserCircle className="text-orange text-5xl"/>
          <div className="">
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-3xl gap-1">
          <RiEditCircleLine className="cursor-pointer" onClick={onOpen}/>
          <IoMdTrash className="cursor-pointer text-orange" onClick={() => deleteCard(contact.id)}/>
        </div>
      </div>
      <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
    </>
  )
}

export default ContactCard
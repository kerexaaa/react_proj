import { ErrorMessage, Field, Form, Formik } from "formik"
import Modal from "./Modal"
import { addDoc, collection, doc, updateDoc } from "firebase/firestore"
import { db } from "../config/firebase"
import { toast } from 'react-toastify'
import * as Yup from 'yup'

const validation = Yup.object().shape({
  name: Yup.string().required("Enter your name"),
  email: Yup.string().email("Invalid email").required("Enter your email"),
})

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {

  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef,contact);
      onClose();
      toast.success("Contact added succesfully!");
    } catch (error) {
      console.log(error);
    }
  }
  
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef,contact);
      onClose();
      toast.success("Contact updated succesfully!");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} >
        <Formik validationSchema={validation} initialValues={isUpdate
        ?{
          name: contact.name,
          email: contact.email,
        }
        :{
          name: "",
          email: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          isUpdate ? 
          updateContact(values, contact.id) :
          addContact(values);
        }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="pl-2 border h-10 outline-none"/>
              <div className="text-red-500 text-xs">
                <ErrorMessage name="name"/>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" className="pl-2 border h-10 outline-none"/>
              <div className="text-red-500 text-xs">
                <ErrorMessage name="email"/>
              </div>
            </div>
            <button className="bg-orange px-3 py-1.5 border self-end capitalize">
              {isUpdate ? "update" : "add"} contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  )
}

export default AddAndUpdateContact
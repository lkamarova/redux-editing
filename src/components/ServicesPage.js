import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddEditForm from "./AddEditForm";
import ListServices from "./ListServices";
import { addService, deleteService, editService } from "./servicesSlice";

const ServicesPage = () => {
  const [mutableObj, setMutableObj] = useState(null);
  const allServices = useSelector((state) => state.services.list);

  const dispatch = useDispatch();

  const onAddNewService = (obj) => {
    dispatch(addService(obj));
  };

  const onDeleteService = (id) => {
    dispatch(deleteService(id));
  };

  const onEditService = (newObj) => {
    dispatch(editService(newObj));
  };

  return (
    <div className="listServicesWrap">
      <AddEditForm
        handleAdd={onAddNewService}
        handleEdit={onEditService}
        defaultValue={mutableObj}
      />
      <ListServices
        list={allServices}
        handleDelete={onDeleteService}
        handleEdit={setMutableObj}
      />
    </div>
  );
};

export default ServicesPage;

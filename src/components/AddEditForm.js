import { useEffect, useState } from "react";
import { v4 } from 'uuid';

const AddEditForm = ({ handleAdd, handleEdit, defaultValue }) => {
  const [nameService, setName] = useState(defaultValue?.nameService || "");
  const [price, setPrice] = useState(defaultValue?.price || "");

  useEffect(() => {
    if(defaultValue){
      setName(defaultValue.nameService);
      setPrice(defaultValue.price);
    }

  }, [defaultValue])

  const onSubmit = () => {
    const obj = {
      id: defaultValue?.id || v4(),
      nameService,
      price,
    }
    if(defaultValue) {
      handleEdit(obj);
    } else {
      handleAdd(obj);
    }    

    setName("");
    setPrice("");
  }

  return (
    <>
      <h3>Список услуг</h3>

      <div className="formWrap">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Наименование услуги.."
          value={nameService}
          onChange={(ev) => setName(ev.target.value)}
        />

        <input
          type="text"
          id="price"
          name="price"
          value={price}
          placeholder="Стоимость.."
          onChange={(ev) => setPrice(ev.target.value)}
        />

        <button type="submit" onClick={onSubmit}>{defaultValue ? "Изменить" : "Добавить"}</button>
      </div>
    </>
  );
};

export default AddEditForm;

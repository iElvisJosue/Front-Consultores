// LIBRERÍAS A USAR
import { useState } from "react";

export default function useModalDelete() {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [typeElementDelete, setTypeElementDelete] = useState(null);

  const classModalDelete = showModalDelete
    ? "Main__ModalDelete Show"
    : "Main__ModalDelete";

  return {
    classModalDelete,
    setShowModalDelete,
    typeElementDelete,
    setTypeElementDelete,
  };
}

export const dateLastUpdate = (date) => {
  const updatedAtDate = new Date(date);

  const day = updatedAtDate.getDate();
  const month = updatedAtDate.getMonth();
  const year = updatedAtDate.getFullYear();
  const hour = updatedAtDate.getHours();
  const minutes = updatedAtDate.getMinutes();
  const seconds = updatedAtDate.getSeconds();

  const formatDate = `${day}/${month}/${year} a las ${hour}:${minutes}:${seconds}`;

  return formatDate;
};
export const inputsShowDataUserProfile = [
  [
    {
      name: "userName",
      icon: "person-outline",
      title: "Usuario:",
      type: "text",
    },
    {
      name: "email",
      icon: "mail-outline",
      title: "Correo:",
      type: "email",
    },
  ],
];
export const inputsEditDataProfile = [
  [
    {
      name: "name",
      icon: "person-circle-outline",
      title: "Nombre(s):",
      type: "text",
      validator: {
        required: "¡Este campo es obligatorio! ⚠️",
        maxLength: {
          value: 100,
          message: "¡Este campo no puede tener más de 100 caracteres! 🔠",
        },
      },
    },
    {
      name: "lastName",
      icon: "person-circle-outline",
      title: "Apellido paterno:",
      type: "text",
      validator: {
        required: "¡Este campo es obligatorio! ⚠️",
        maxLength: {
          value: 100,
          message: "¡Este campo no puede tener más de 100 caracteres! 🔠",
        },
      },
    },
  ],
  [
    {
      name: "motherLastName",
      icon: "person-circle-outline",
      title: "Apellido materno:",
      type: "text",
      validator: {
        required: "¡Este campo es obligatorio! ⚠️",
        maxLength: {
          value: 100,
          message: "Este campo no puede tener más de 100 caracteres. 🔠",
        },
      },
    },
    {
      name: "number",
      icon: "call-outline",
      title: "Número de teléfono:",
      type: "text",
      validator: {
        required: "¡Este campo es obligatorio! ⚠️",
        pattern: {
          value: /^\d+$/,
          message: "Este campo solo acepta números. 🔢",
        },
        maxLength: {
          value: 20,
          message: "Este campo no puede tener más de 20 caracteres. 🔠",
        },
      },
    },
  ],
  [
    {
      name: "LinkedIn",
      icon: "logo-linkedin",
      title: "LinkedIn:",
      type: "text",
    },
  ],
];

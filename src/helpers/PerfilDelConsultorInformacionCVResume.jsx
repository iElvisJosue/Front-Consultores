export const cvInformationResume = (consultantResume) => {
  return [
    {
      title: "👨‍⚖️ PROFESIÓN:",
      text: consultantResume.profession,
    },
    {
      title: "📝 RESUMEN BREVE:",
      text: consultantResume.description,
    },
  ];
};

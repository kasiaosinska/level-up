const dateConverter = date => {
  const launchDate = new Date(date);
  const year = launchDate.getFullYear();
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const month = monthNames[launchDate.getMonth()];
  const day = launchDate.getDate();

  return `${day} ${month} ${year}`;
};

export default dateConverter;
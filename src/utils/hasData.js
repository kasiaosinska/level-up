const hasData = obj => {
  for (let key in obj) {
    if(obj.hasOwnProperty(key))
      return true
  }
  return false
};

export default hasData;
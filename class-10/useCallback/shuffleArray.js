const shuffleArray = (array) => {
  return array.sort(() => {
    const randomTrueOrFalse = Math.random() > 0.5;
    return randomTrueOrFalse ? 1 : -1;
  });
};

export default shuffleArray;

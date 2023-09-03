export const onSortCards = (value, data, setData) => {
  let sortedCards = [...data];

  switch (value) {
    case "drawTime":
      sortedCards = sortedCards.sort((a, b) => {
        const timeA = a.drawTime.split(":").map(Number);
        const timeB = b.drawTime.split(":").map(Number);
        if (timeA[0] !== timeB[0]) {
          return timeA[0] - timeB[0];
        } else {
          return timeA[1] - timeB[1];
        }
      });
      break;
    case "jackpotText":
      sortedCards = sortedCards.sort((a, b) => {
        const jackpotValueA = Number(a.jackpotText.replace(/[^0-9.-]+/g, ""));
        const jackpotValueB = Number(b.jackpotText.replace(/[^0-9.-]+/g, ""));
        return jackpotValueA - jackpotValueB;
      });
      break;
    case "lotteryName":
      sortedCards = sortedCards?.sort((a, b) => {
        return a[value].localeCompare(b[value]);
      });
      break;
  }

  setData(sortedCards);
};

export const formatNumber = (number) => {
    const formated = String(number).split("");
    formated.splice(-3, 0, ",");
    return formated.join("");
  };
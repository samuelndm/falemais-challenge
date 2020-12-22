export const handleOrigins = (codes) => {
  if (codes && codes.length) {
    return codes.map(({ origin }) => origin);
  }

  return [];
};

export const handleDestinations = (codes, currentOriginCode) => {
  if (codes && codes.length && currentOriginCode) {
    return codes.find(({ origin }) => `${origin}` === `${currentOriginCode}`)
      .destinations;
  } else {
    return [];
  }
};

export const handlePlanCalc = (destination, time, plan) => {
  let price = 0;
  const remainingTime = time - plan.freeTime;

  if (remainingTime > 0) {
    const destinationPrice = remainingTime * destination.value;
    const taxAfterFreeTime = plan.taxAfterFreeTime
      ? plan.taxAfterFreeTime / 100 + 1
      : 1;

    price += destinationPrice * taxAfterFreeTime;
  }

  return `${price}`;
};

export const handleNoPlanCalc = (destination, time) => {
  return `${destination.value * time}`;
};

export const validateData = (destination, time, plan) => {};

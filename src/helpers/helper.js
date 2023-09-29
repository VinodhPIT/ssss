export const prepareRequest = (parameters) => {
  const request = {
    sort: parameters.sort,
    page_no: "0",
    paginator_count: parameters.paginator_count,
    search_key: "",
  };

  return request;
};

export const searchParam = (parameters) => {
  const request = {
    sort: "newest",
    page_no: parameters.page_no,
    paginator_count: parameters.category === "all" ? 10 : 24,
    search_key: parameters.search_key,
  };

  if (parameters.latitude && parameters.category == "artist") {
    request.longitude = parameters.longitude;
    request.latitude = parameters.latitude;
  }
  request.style = parameters.style ? [parameters.style] : [];

  return request;
};

// export const addAdsToResults = async (results) => {

//   const totalCount = results.length;

//   if (totalCount < 15) {

//     return results;

//   }

//   // Calculate the number of ads to add (2 ads for every 19 products)

//   const adsCount = Math.floor(totalCount / 19) * 3;

//   for (let i = 0; i < adsCount; i++) {

//     const randomizedIndex = Math.floor(Math.random() * 19);

//     const adItem = { _index: "ad", colspan: 2, add: i + 1 };

//     results.splice((i + 1) * 19 - randomizedIndex, 0, adItem);

//   }
//   results.forEach((item) => {

//     if (item._index !== "ad") {

//       item.colspan = 1;

//     }

//   });

//   return results;

// };

export const addAdsToResults = async (results, isMobile) => {
  const totalCount = results.length;

  if (totalCount < 15) {
    return results;
  }

  if (isMobile === "iPad") {
    results.splice(6, 0, { _index: "ad", colspan: 2, add: 1 });
    results.splice(17, 0, { _index: "ad", colspan: 2, add: 2 });
    results.splice(28, 0, { _index: "ad", colspan: 2, add: 3 });
  } else if (isMobile === "UnknownTablet") {
    results.splice(6, 0, { _index: "ad", colspan: 2, add: 1 });
    results.splice(18, 0, { _index: "ad", colspan: 2, add: 2 });
    results.splice(28, 0, { _index: "ad", colspan: 2, add: 3 });
  } else if (isMobile === null) {
    results.splice(6, 0, { _index: "ad", colspan: 2, add: 1 });
    results.splice(21, 0, { _index: "ad", colspan: 2, add: 2 });
    results.splice(28, 0, { _index: "ad", colspan: 2, add: 3 });
  } else {
    results.splice(6, 0, { _index: "ad", colspan: 2, add: 1 });
    results.splice(19, 0, { _index: "ad", colspan: 2, add: 2 });
    results.splice(28, 0, { _index: "ad", colspan: 2, add: 3 });
  }
  results.forEach((item) => {
    if (item._index !== "ad") {
      item.colspan = 1;
    }
  });

  return results;
};

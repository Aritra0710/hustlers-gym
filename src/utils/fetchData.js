export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0082179ee0mshe51b743711b1f14p162548jsna2bc81b9621e',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0082179ee0mshe51b743711b1f14p162548jsna2bc81b9621e',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  },
};


export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
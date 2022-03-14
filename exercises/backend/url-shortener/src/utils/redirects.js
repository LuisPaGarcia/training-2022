const redirects = [];
/*
[
  {
    hash: ${UUID}, 
    url: ${url}
  },
  {
    hash: ${UUID}, 
    url: ${url}
  },
]


*/

/**
 *
 * @param {Object} redirect An object with hash as UUID and a URL to include to available redirects
 * @returns All the redirects available
 */
const addRedirect = (redirect) => {
  redirects.push(redirect);
  return redirect;
};

/**
 * Function to get a redirect in memory
 * @param {string} hash Hash to get, UUID format
 * @returns {Object} Object with hash, and url, null if doesn't matches
 */
const getRedirectByHash = (hash) => {
  if (hash) {
    const match = redirects.find((redirect) => redirect.hash === hash);
    if (match) return match;
  }

  return null;
};

const getAllRedirects = () => {
  return redirects;
};

module.exports = {
  addRedirect,
  getRedirectByHash,
  getAllRedirects,
};

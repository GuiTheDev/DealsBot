exports.extractDomain = async (url) => {
  let domain = new URL(url);
  domain = domain.hostname;
  return domain.replace(/www./g, '');
};

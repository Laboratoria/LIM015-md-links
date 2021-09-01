const unique = (links) => {
  const totalLinks = links.length;
  const myLinks = links.map((element) => element.href);
  const uniqueLinks = new Set(myLinks);
  const stats = `│ Total: ${totalLinks} │ Unique: ${uniqueLinks.size}`; // size devuelve el número de elementos que hay en el objeto Set.
  return stats;
};
  
  
const broke = (links) => {
  const brokenLinks = Array.from(links).filter((element) => element.status >= 400);
  const stats =`│ Broken: ${brokenLinks.length}`;
  return stats;
};
  
  const resumeInfo = (info, number) => {
    let total = info.length;
    let uniqueLinks = unique(info).length;
    let brokenLinks = broke(info).length;
    if (number == 2) {
      return [["Total paths: " + total, "Unique paths: " + uniqueLinks]];
    } else {
      return [
        ["Total paths: " + total, "Unique paths: " + uniqueLinks, "Broken paths: " + brokenLinks],
      ];
    }
  };
  
  module.exports = {
    unique,
    broke,
    resumeInfo,
  };
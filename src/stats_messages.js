/* ********* Stats functions ********** */
const statsLinks = (links) => {
  const linksTotal = links.map((item) => item.href);
  const uniqueLink = new Set(linksTotal);
  return `Total  : ${linksTotal.length} \nUnique : ${uniqueLink.size}`;
};

const errorStatus = 'Fail request to https://www.nmjs.com/ failed, reason: getaddrinfo ENOTFOUND www.nmjs.com';
const broken = (links) => {
  const brokenLinks = Array.from(links).filter((element) => element.message === errorStatus);
  const stats = `Broken: ${brokenLinks.length}`;
  return stats;
};

/* ********* Messages ********** */

const help = `
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█ Do you need help?
█  ╦ ╦╔╗╦ ╔╗╔╗╔╦╗╔╗  █
█  ║║║╠ ║ ║ ║║║║║╠   █ This are the commands options:
█  ╚╩╝╚╝╚╝╚╝╚╝╩ ╩╚╝  █  --validate (to get href,title, status and message for each link)
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█  --stats (to get total links and unique links)
█                    █  --validate --stats (to get Total, Unique and Broken links)
`;

const errorNoLinks = `
██████
██    ████  ██████ ██         █ ▄▀█  █▀▄ █
██   ██  ██   ██   ██        ▐▌          ▐▌
████ ██  ██   ██   ██        █▌▀▄  ▄▄  ▄▀▐█     █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
██   ██████   ██   ██       ▐██  ▀▀  ▀▀  ██▌    █  Apparently there are no links here  █
██   ██  ██   ██   ██      ▄████▄  ▐▌  ▄████▄   █  **********************************  █
██   ██  ██ ██████ ██████  ██████████████████   █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
`;

const errorPath = `
  ▄    ▄▄▄▄▄▄▄    ▄
 ▀▀▄ ▄█████████▄ ▄▀▀    █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
     ██─▀███▀─██        █  Apparently this path does not exists  █
   ▄ ▀████▀████▀ ▄      █  ************************************  █
▀█     ██▀█▀██    █▀    █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
`;

module.exports = {
  statsLinks,
  broken,
  help,
  errorNoLinks,
  errorPath,
};

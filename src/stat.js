

const  {extractLink, linkValidate}= require('./links.js');


const totalUniquelinks=(pathAbs)=>{
    const objectData=extractLink(pathAbs);
        const totalLinks=objectData.length;    
    const arrayLinks= objectData.map(links=>links.href);
    const uniqueLinks = ([...new Set(arrayLinks)]).length;
    const statsObject= {
        Total: totalLinks,
        Unique: uniqueLinks
    };
    return statsObject;
};



const brokenlinks=(pathAbs)=>{

const objectData=extractLink(pathAbs);
return new Promise ((resolve,reject)=>{
    linkValidate(objectData).then(
        array=> {
            const linkBroken=(array.filter(link=>link.mymessage==='Fail')).length;
            //console.log(linkBroken);
            return (linkBroken);
        }
    ).then(broken=>{
            const arraybroken=totalUniquelinks(pathAbs);
            const brokenlinks={
                ...arraybroken,
                broken:broken
            };
            //console.log(brokenlinks);
            resolve(brokenlinks);
    });
});
};



//brokenlinks("D:\\PROGRAMACION\\LIM015-md-links\\pruebas").then(re=>console.log(re));



module.exports = {brokenlinks,totalUniquelinks};


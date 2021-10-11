const api = require('../index.js');

  describe('existPath() : function that detects if file/directory exists, returns a boolean', () => {
    it('should be a function', () => {
      expect(typeof(api.existPath)).toBe('function');
    });
    it('should return true if the path exists', () => {
      expect(api.existPath('prueba')).toBe(true);
    });
    it('should return false if the path does not exist', () => {
      expect(api.existPath('gitignore')).toBe(false);
    });
  });  

  describe('isPathAbsolute() : function that detects if path is Absolute ', () => {
    it('should be a function', () => {
      expect(typeof(api.isPathAbsolute)).toBe('function');
    });
    it('should return true if the path is absolute', () => {
      expect(api.isPathAbsolute ('C:\\Users\\LORD\\Desktop\\mdlinks-prueba\\LIM015-md-links\\README.md')).toBe(true);
    });
    it('should return false if the path is not absolute', () => {
      expect(api.isPathAbsolute ('README.md')).toBe(false);
    });
  }); //works ok!!!

  describe('validatePath() : function that converts a relative path to an absolute path', () => {
    it('should be a function', () => {
      expect(typeof(api.validatePath)).toBe('function');
    });
    it('should convert relative path to absolute path', () => {
      expect(api.validatePath('README.md')).toBe('C:\\Users\\LORD\\Desktop\\mdlinks-prueba\\LIM015-md-links\\README.md');
    });
  });

  describe('readDirectory() : function that reads a directory', () => {
    it('should be a function', () => {
      expect(typeof(api.readDirectory)).toBe('function');
    });
    it('should return the files and directories from a directory', () => {
      expect(api.readDirectory('prueba')).toEqual([ 'empty', 'newFolder', 'test.md','test3.md']);
    });
    it('should return the files from a directory', () => {
      expect(api.readDirectory('prueba\\newFolder')).toEqual(['test2.md','test4.md' ]);
    });
    it('should return the files from a directory', () => {
      expect(api.readDirectory('prueba\\empty')).toEqual([]);
    });
  });
  
  describe('isExtensionMD() : function that asks if a file ends with the extension ".md"', () => {
    it('should be a function', () => {
      expect(typeof(api.isExtensionMD)).toBe('function');
    });
    it('should return true if the file has a ".md" extension', () => {
      expect(api.isExtensionMD('test2.md')).toBe(true);
    });
    it('should return false if the file has a ".md" extension', () => {
      expect(api.isExtensionMD('index.js')).toBe(false);
    });
  });

  describe('joinPaths() : function that join 2 routes together', () => {
    it('should be a function', () => {
       expect(typeof(api.joinPaths)).toBe('function');
     });
    it('should return both routes together', () => {
      const result1 =  '\\prueba\\test3.md';
      expect(api.joinPaths('/prueba/', 'test3.md')).toBe(result1);
    });
    it('should return both routes together', () => {
       const result2 =  '\\prueba\\newFolder\\test2.md';
       expect(api.joinPaths('/prueba/newFolder/', 'test2.md')).toBe(result2);
     });
   });
   
   describe('fileContent() : function that returns all the links from the file ', () => {
    it('should be a function', () => {
      expect(typeof(api.fileContent)).toBe('function');
    });
   it('should return all the links from the file', () => {
      expect(api.fileContent('prueba/newFolder/test4.md')).toEqual(`[ENTIRE Phantom Blood but ONLY Speedwagon💛 ](https://youtu.be/XBepfdg_FvY)`);
    });
  });

  describe('checkPath() : Recursive function : opens a directory and reads all paths ".md"', () => {
    it('should be a function', () => {
      expect(typeof(api.checkPath)).toBe('function');
    });
    it('should return an array with files .md', () => {
      const pathDir = 'C:\\Users\\LORD\\Desktop\\mdlinks-prueba\\LIM015-md-links\\prueba';
      const result = [
        'C:\\Users\\LORD\\Desktop\\mdlinks-prueba\\LIM015-md-links\\prueba\\newFolder\\test2.md',
        'C:\\Users\\LORD\\Desktop\\mdlinks-prueba\\LIM015-md-links\\prueba\\newFolder\\test4.md',
        'C:\\Users\\LORD\\Desktop\\mdlinks-prueba\\LIM015-md-links\\prueba\\test.md',
        'C:\\Users\\LORD\\Desktop\\mdlinks-prueba\\LIM015-md-links\\prueba\\test3.md',
      ];
      expect(api.checkPath(pathDir)).toEqual(result);
    });
  });


  describe('getAllLinks() : function that gets links from a file', () => {
    it('getAllLinks should be a function', () => {
      expect(typeof(api.getAllLinks)).toBe('function');
    });
    it('should return an array of objects with three properties: file, href and text', () => {
      const pathFile = 'C:\\Users\\LORD\\Desktop\\mdlinks-prueba\\LIM015-md-links\\prueba\\test.md';
      const result = [
        {
          "file": "C:\\Users\\LORD\\Desktop\\mdlinks-prueba\\LIM015-md-links\\prueba\\test.md",
          "href": "https://www.uxlibrary.org",
          "text": "UX library",
        },
        {
          "file": "C:\\Users\\LORD\\Desktop\\mdlinks-prueba\\LIM015-md-links\\prueba\\test.md",
          "href": "https://yoshiscraftedworld.nintendo.com",
          "text": "Yoshi web page",
        },
        {
          "file": "C:\\Users\\LORD\\Desktop\\mdlinks-prueba\\LIM015-md-links\\prueba\\test.md",
          "href": "https://youtu.be/vqCHdVOzetc",
          "text": "Steamed Hams but it is Basket Case by Green Day🎵 ",
        },
        {
          "file": "C:\\Users\\LORD\\Desktop\\mdlinks-prueba\\LIM015-md-links\\prueba\\test.md",
          "href": "https://youtu.be/XBepfdg_FvY",
          "text": "ENTIRE Phantom Blood but ONLY Speedwagon💛 ",
        },
        {
          "file": "C:\\Users\\LORD\\Desktop\\mdlinks-prueba\\LIM015-md-links\\prueba\\test.md",
          "href": "https://youtu.be/qWVc-xVZxho",
          "text": "Vitas - The 7th Element 2001🎵 ",
        },
      ];
      expect(api.getAllLinks(pathFile)).toEqual(result);
    });
  });


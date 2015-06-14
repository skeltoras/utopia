Images = new FS.Collection('images', {
  stores: [
    new FS.Store.GridFS('originalImage'),
    new FS.Store.GridFS('avatarFull', {
      beforeWrite: function(fileObj) {
        return {
          extension: 'png',
          type: 'image/png'
        };
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream).resize(150, 150).stream('PNG').pipe(writeStream);
      }
    }),
    new FS.Store.GridFS('avatarThumb', {
      beforeWrite: function(fileObj) {
        return {
          extension: 'png',
          type: 'image/png'
        };
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream).resize(90, 90).stream('PNG').pipe(writeStream);
      }
    })
    /*
    new FS.Store.GridFS('globalImgOGS', {
      beforeWrite: function(fileObj) {
        return {
          extension: 'jpg',
          type: 'image/jpeg'
        };
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream).resize(600, 315).stream('JPG').pipe(writeStream);
      }
    }),
    new FS.Store.GridFS('globalImgDefaultImage', {
      beforeWrite: function(fileObj) {
        return {
          extension: 'jpg',
          type: 'image/jpeg'
        };
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream).resize(240, 126).stream('JPG').pipe(writeStream);
      }
    }),
    new FS.Store.GridFS('globalImgDefaultImageThumb', {
      beforeWrite: function(fileObj) {
        return {
          extension: 'png',
          type: 'image/png'
        };
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream).resize(120, 63).stream('PNG').pipe(writeStream);
      }
    }),
    new FS.Store.GridFS('globalImgHeaderL', {
      beforeWrite: function(fileObj) {
        return {
          extension: 'png',
          type: 'image/png'
        };
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream).resize(1200, 350).stream('PNG').pipe(writeStream);
      }
    }),
    new FS.Store.GridFS('globalImgHeaderS', {
      beforeWrite: function(fileObj) {
        return {
          extension: 'png',
          type: 'image/png'
        };
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream).resize(980, 286).stream('PNG').pipe(writeStream);
      }
    }),
    new FS.Store.GridFS('globalImgHeaderThumb', {
      beforeWrite: function(fileObj) {
        return {
          extension: 'png',
          type: 'image/png'
        };
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream).resize(300, 88).stream('PNG').pipe(writeStream);
      }
    })
    */
  ],      
  filter: {
    allow: {
      contentTypes: ['image/*'] //allow only images in this FS.Collection
    }
  }
});

Images.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  },
  download: function(){
    return true;
  }
});
const express = require("express");
const router = express.Router();

const data = require("../data")
const albums = data.albums;
const bands = data.bands

router.get("/:id", async (req, res) => {
    try{
        const getAlbums = await albums.getAlbum(req.params.id)
        const getBands = await bands.getBand(getAlbums['author'])
        
        getAlbums.author = {
            _id: getBands._id,
            bandName: getBands.bandName           
        }

        res.json(getAlbums)
    } catch(e){
        res.status(404).json({message: "cannot find the album"});
    }
});

router.get('/', async (req, res) => {
    try{
        const albumList = await albums.getAllAlbums();
        for(let i = 0; i<albumList.length; i++){
            const getBands = await bands.getBand(albumList[i].author)
            albumList[i].author = {
                _id: getBands._id,
                bandName: getBands.bandName
            }

        }
        res.json(albumList);
    } catch(e){
        res.status(500).send();
    }
});

router.post('/', async (req, res) => {
    const albumData = req.body;
    try {
      const {title, author, songs} = albumData;
      const newAlbum = await albums.createAlbum(title, author, songs);
      const getBand = await bands.getBand(newAlbum['author'])
        
        newAlbum.author = {
            _id: getBand._id,
            bandName: getBand.bandName           
        }
      res.json(newAlbum);
    } catch (e) {
        res.status(400).json({error: 'error'});
    }
  });
  router.patch('/:id', async (req, res) =>{
      const albumData = req.body;
      let oldData = {};
      try{
          oldData = await albums.getAlbum(req.params.id);
          if(albumData.newTitle){
              oldData.title = albumData.newTitle
            
          }
          if(albumData.newSongs){
              oldData.songs.push(albumData.newSongs)
          }
      } catch(e) {
          res.status(404).json({error: 'not found'})
          return;
      }
      try{
          const {title, author,songs} = oldData
          const updatedAlbum = await albums.updateAlbum(req.params.id, title, author,songs);
          const getBand = await bands.getBand(updatedAlbum['author'])
        
          updatedAlbum.author = {
              _id: getBand._id,
              bandName: getBand.bandName           
          }
          res.json(updatedAlbum);
      } catch(e){
          res.status(500).json({error: e})
      }
  } );

  router.delete('/:id', async (req, res) =>{
      try{
          await albums.getAlbum(req.params.id);
      } catch(e){
          res.status(404).json({error:'Album not found'});
        return;
      }
      try {
          const deletedAlbum = await albums.deleteAlbum(req.params.id);
          const getBand = await bands.getBand(deletedAlbum.data.author)
        
          deletedAlbum.data.author = {
              _id: getBand._id,
              name: getBand.bandName           
          }
          
          res.status(200).json(deletedAlbum);
      } catch(e) {
          res.status(500).json({error:e})
      }
  })


  

module.exports = router;
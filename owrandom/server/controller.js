const axios = require('axios')

const characters = [
    {name: 'Ana'},
    {name: 'Brigitte'},
    {name: 'Lucio'},
    {name: 'Mercy'},
    {name: 'Moira'},
    {name: 'Zenyatta'},
    {name: 'Bastion'},
    {name: 'Hanzo'},
    {name: 'Junkrat'},
    {name: 'Mei'},
    {name: 'Symmetra'},
    {name: 'Torbjorn'},
    {name: 'Widowmaker'},
    {name: 'Doomfist'},
    {name: 'Genji'},
    {name: 'McCree'},
    {name: 'Pharah'},
    {name: 'Reaper'},
    {name: 'Soldier: 76'},
    {name: 'Sombra'},
    {name: 'Tracer'},
    {name: 'D.Va'},
    {name: 'Orisa'},
    {name: 'Reinhardt'},
    {name: 'Roadhog'},
    {name: 'Winston'},
    {name: 'Zarya'}
];

const listOfResults = [];
let id = 0;


module.exports = { 

    postOne: ( req,response ) => {
        let name = characters[+req.params.id].name
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${name}&api_key=oTNrbdAf6KOx9IXCGSb2w5EORVSzBVEI&limit=1`)
        .then(res => {
         id++;   
        let gif = res.data.data[0].images.downsized.url 
        let result = { name: name, gif: gif, user: req.query.user, id: id }
        listOfResults.push(result)
        response.status(200).send(listOfResults)
        }) 
    },

    getAll: ( req,res ) => {
        res.status(200).send(listOfResults)
    },

    updateOne: ( req,res ) => {
        console.log(req.body)
        for(let i = 0; i < listOfResults.length; i++){
            if(listOfResults[i].id === +req.params.id){
                listOfResults[i].user =  req.body.userName
            }   
            res.status(200).send(listOfResults);
        }
    },

    deleteOne: ( req,res ) => {
        const num = +req.params.id
        res.status(200).send(listOfResults.splice(num, 1))
    }
}
        
    


import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const twitters = [

    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o patrique"
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o lucas"
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o pedro"
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o esdrinhas"
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o joao"
    },
    {
        username: "Esdrinhas",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "Eu amo minha Masmorra"
    },

];

let users = [];

app.post( "/sign-up", ( req, res ) => {
    
    const { username, avatar } = req.body;

    if( !username || !avatar ){
        res.status(400).send("Todos os campos sõa obrigatórios!");
        return;
    }

    const newUser = {
        username,
        avatar
    }

    users.push(newUser);

    res.status(201).send("OK");

})


app.get( "/tweets", (req, res ) => {
    res.send(twitters)
})


app.post( "/tweets", (req, res) => {

    const { tweet } = req.body;
    const username = req.headers.user;

    if( !username || !tweet ){
        console.log(username);
        console.log(tweet);
        res.status(400).send("Todos os campos sõa obrigatórios!");
        return;
    }

    const imgUser = users.find(obj => obj.username === username);

    const newTweet = {
        username,
        avatar: imgUser.avatar,
        tweet,
    }

    twitters.push(newTweet)

    res.status(201).send("OK")

} )


app.get( "/tweets/:userName", ( req, res ) => {

    const user = req.params.userName;
    const tweetUser = twitters.filter( obj => obj.username === user);

    res.status(201).send(tweetUser);

})


app.listen(5000, () => {
    console.log("Server running in port: 5000")
});
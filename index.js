import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const twitters = [

    {
        username: "bobesponja",
        avatar: "https://instagram.fbpg1-1.fna.fbcdn.net/v/t51.2885-15/273707134_131718819356215_6274916939465063795_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fbpg1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=IA7a3zHFoTsAX-47K_s&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjc3MDc3NzgwODg1MTgxNDgzMQ%3D%3D.2-ccb7-5&oh=00_AfAjkjP2wr2fL4rneexx-88He_PKuEGq2zs0kB6rdDqMJQ&oe=6366996E&_nc_sid=30a2ef",
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

app.get( "/tweets", (req, res ) => {
    res.send(twitters)
})

app.listen(5000, () => {
    console.log("Server running in port: 5000")
});
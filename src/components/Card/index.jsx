    import { Container } from "./syles";


    

    export function Card({ product }){ 
         if (!product) {
            return null; 
          }
        const { image, name, value } = product;

        console.log(product.image)

        return(
            <Container>
                <img src={image} alt=""/>
                <h1> {name} </h1>
                <p>{value.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
        })}</p>
                <button>Encomendar</button>
            </Container>
        )
    }
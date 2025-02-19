
import React, { useEffect, useState } from 'react';
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import {Content, Description,Title, Info, Container, More,CardContainer,ImageStyle,TitleContainer} from "./styles";
import {Card} from "../../components/Card";
import {Items} from "../../pages/Home/styles";
import {Item} from "../../components/Item"
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { CiApple } from 'react-icons/ci';
import FruitsImage from "../../assets/fruits.png";
import { useNavigate } from "react-router-dom";


export function Products() {
    const navigate = useNavigate();
    function handleDetails(id) {
        navigate(`/details/${id}`);
      }
  const [fruits, setFruits] = useState([]);
  const params = useParams();


  useEffect(() => {
    async function fetchFilteredFruits() {
      try {
        const response = await api.get("/product");
        const filteredFruits = response.data.filter((i) => i.category == "Fruta");
        setFruits(filteredFruits);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }
    fetchFilteredFruits();
  }, []);

  return (
    <Container>
    <Header />
    <div style={TitleContainer}>
        <Title>Todas as Frutas</Title>
        <img src={FruitsImage} alt="Logo da Quitanda Frescor" style={ImageStyle}/>
    </div>
      <CardContainer>
        {fruits.map((fruit, key) => (
          <Card
            key={String(fruit.id)}
            product={fruit}
            onCardClick={() => handleDetails(fruit.id)}
          />
        ))}
      </CardContainer>
      <Footer />
    </Container>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from '@/styles/Home.module.css'
import { Card, Grid, Text, Button } from "@nextui-org/react";

const Home = () => {
  const [allDataList, setAllDataList] = useState([])
  useEffect(() => {
    const loadData = async () => {
      axios.get("https://api.github.com/users/iman-akbar/repos")
        .then((response) => {
          console.log(response);
          setAllDataList(response.data)
        })
    }
    loadData();
  }, [])


  return (
    <div>

      <Grid.Container gap={3}>
        {allDataList.map((item, index) => (
          <Grid xs={6} sm={3} key={index}>
            <Card
            >
              <Card.Header>
                <Text css={{ textAlign: 'center', fontWeight: "$bold", fontSize: "$xl" }}>{item.name}</Text>
              </Card.Header>
              <Card.Body css={{}}>
                <Text css={{ fontWeight: "$semibold", fontSize: "$sm", textAlign: 'center' }}>
                  {item.html_url}
                </Text>
              </Card.Body>
              <Card.Divider />
              <Card.Footer css={{ justifyContent: "center" }}>
                <Button size="sm" color="gradient" onClick={() => {
                  window.open(item.html_url)
                }}>
                  Go To Link
                </Button>                
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
}


export default Home

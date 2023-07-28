import "./App.css";
import {Header , Hero , Container , Title , Section , Box , Footer} from "./components/import"

const App = () => {
  return (
    <>
        <Header
        logo = "starter"
        />
        <Hero 
        header1 = "the way to achieve your dreams"
        header2 = "hardworking"
        para = "cause hardworking pays off"
        anchor = "Dose of Motivation"
        color = "#d5f8e7"
        />
        <Container>
          <Title title = "your title here"para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quia quae harum?"/>
          <Section/>
          <Section bool = "true"/>
          <Section/>
          <Section bool = "true"/>
          <Box/>
        </Container>
        <Footer/>
    </>
  )
}

export default App
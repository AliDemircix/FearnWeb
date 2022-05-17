import { HeadProvider, Title, Link, Meta } from 'react-head';
import { Footer } from './components/Footer';

import Header from './components/Header';
import { HeroMiddle } from './components/HeroMiddle';
import { HeroTop } from './components/HeroTop';
import { Partnership } from './components/Partnership';
import { Tokenomics } from './components/Tokenomics';

function App() {
  return (
    <>
      <HeadProvider>
        <Title>Fearn Coin</Title>
        <Meta charset="UTF-8" />
        <Meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <Meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <Link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
        <Link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <Link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </HeadProvider>
      <Header></Header>
      <HeroTop></HeroTop>
      <HeroMiddle></HeroMiddle>
      <Partnership></Partnership>
      <Tokenomics></Tokenomics>
      <Footer></Footer>
    </>
  );
}

export default App;

import { Box, Container, Typography } from '@mui/material';
import Background_video from '../../assets/video_home_page_ic.mp4'
import { NewNavBar } from '../../components/NewNavBar';
import "./index.css";
import { NewCardColab } from '../../components/NewCardColab';
import { Footer } from '../../components/Footer';
import styled, { keyframes } from 'styled-components';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function NewHome(){
    return <div>
            <div className='top_content'>
                <NewNavBar className='navbar'/>
                <video src={Background_video} autoPlay loop muted> </video>
                <div className='text_video'>
                    <Wrapper><Typography sx={{color: 'white', fontFamily: 'karantina', fontSize: '50px'}}>Evasão Escolar</Typography></Wrapper>
                    
                </div>   
                <Wrapper><Typography sx={{color: 'white', fontFamily: 'Fira Code', fontSize: '20px', display: 'flex', justifyContent: 'center', textAlign: 'center'}}>Site desenvolvido para a apresentar os resultados<br/> do projeto de iniciação científica desenvolvido na realidade <br/> do CEFET-MG campus Leopoldina</Typography></Wrapper>
                
            </div>
            <section id='equipe'>
            <Container sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', marginBottom: '5.5rem'}}>
                <Typography sx={{
                    fontSize: '60px', display: 'flex', justifyContent: 'center', fontFamily: 'karantina', marginTop: '3rem', marginBottom: '2rem' 
                }}>Equipe</Typography>
                <Box sx={{display: 'flex', flexDirection: "row", justifyContent: 'center'}}>
                <NewCardColab image="https://sig-arquivos.cefetmg.br//arquivos/20230561435263481740920f1652152e5/fotodeperfilsiga.jpg"
              cargo="DISCENTE"
              name="Humberto"/>
              <NewCardColab image="https://sig-arquivos.cefetmg.br//arquivos/2021031174140733306276c0288029669/foto.jpg"
              cargo="DISCENTE"
              name="Rafaela"/>
              <NewCardColab image="https://sig-arquivos.cefetmg.br//arquivos/20210421204c6032566250aa79cdc877a/Foto.gif"
              cargo="ORIENTADORA"
              name="Gabriella"/>
              <NewCardColab image="https://kerokolaborar.projetoscomputacao.com.br/img/Team/7.jpg"
              cargo="COORIENTADOR"
              name="Luis"/>
              <NewCardColab image="https://sig-arquivos.cefetmg.br//arquivos/202011621566dc29025519396e58332c9/Foto_Fundo.png"
              cargo="ORIENTADOR"
              name="Luan"/>
                </Box>
            </Container>
            </section>
            <Footer></Footer>
            
    </div> 
}

const animation = keyframes`
    0% { opacity: 0; transform: translateY(-100px)}
    100% { opacity: 1 ; transform: translateY(0px)}
`

const Wrapper = styled.span`
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
`
    
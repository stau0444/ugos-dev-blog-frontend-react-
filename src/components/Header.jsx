import MenuBar from './MenuBar';
import Links from './Links';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBtn = styled(Button)`
    color: black;
    font-weight: bold;
    border: 1px solid black;
`

export default function Header() {
    return(
    <>  
        <div style={{textAlign:"center" , backgroundColor:'white'}}>
            <Link to="/"><StyledBtn>/</StyledBtn></Link> 
            <Link to="/content"><StyledBtn>/content</StyledBtn></Link>
            <Link to="/content"><StyledBtn>/content/(id)</StyledBtn></Link>
            <Link to="/contents/{keyowrd}" ><StyledBtn>/contents/(category)</StyledBtn></Link>
            <Link to="/add-content" ><StyledBtn>/add-content</StyledBtn></Link>
            <Link to="/test" ><StyledBtn>/test</StyledBtn></Link>
        </div>
        <MenuBar/>
        <img className="logo" src="/logo_transparent.png" alt="logo"  />
        <Links/>
    </>
    );
}
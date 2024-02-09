import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

function BackButton() {

  const navigate = useNavigate();

  function handleBackClick() {
    navigate(-1);
  }

  return (
    <div>
      <Button variant='outlined' onClick={handleBackClick}>Back</Button>
     
    </div>
  ) 
}
export default BackButton;
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Logo } from 'assets';

export default function Navigtion() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static' color='inherit' elevation={0}>
				<Toolbar variant='dense'>
					<img src={Logo} width='128px' height='60px' alt='Vahak Logo' />
				</Toolbar>
			</AppBar>
		</Box>
	);
}

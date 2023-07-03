
import { Typography, Link } from "@mui/material";


export default function Copyright(props) {
    return (
        <div style={{ background: 'violet' }}>
            <Typography variant="body2" color="text.secondary" align="center" {...props} style={{ marginBottom: 0, padding: '30px', color: '#fff' }}>
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                    Design Limited
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </div>
    );
}


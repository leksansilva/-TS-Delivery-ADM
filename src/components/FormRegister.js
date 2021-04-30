import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Cadastro
      </Typography>
      <Grid container spacing={3}>
            <Grid item sm={12}>
                <Paper >
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="ProductName"
                                name="ProductName"
                                label="Nome do Produto"
                                fullWidth
                                autoComplete="given-name"
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                fullWidth
                                autoComplete="family-name"
                                />
                            </Grid>            
                    </Grid>
                </Paper>
            </Grid>
            <Grid item sm={12}>
                <Paper >
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="given-name"
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                fullWidth
                                autoComplete="family-name"
                                />
                            </Grid>            
                    </Grid>
                </Paper>
            </Grid> <Grid item sm={12}>
                <Paper >
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="given-name"
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                fullWidth
                                autoComplete="family-name"
                                />
                            </Grid>            
                    </Grid>
                </Paper>
            </Grid> <Grid item sm={12}>
                <Paper >
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="given-name"
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                fullWidth
                                autoComplete="family-name"
                                />
                            </Grid>            
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    </React.Fragment>
  );
}